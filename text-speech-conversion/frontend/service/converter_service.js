export class ConverterService {
	constructor() { }
}

export class TextToSpeechClient {
	constructor() {
		this.synth = window.speechSynthesis;
		this.currentUtterance = null;
		this.isPaused = false;
		this.start = 0;
		this.text = '';
	}

	// Method to start synthesis with the text and voice configuration
	synthesizeSpeech(request) {
		const { input, voice } = request;
		this.text = input.text || "";
		const { languageCode } = voice;
		const chunkSize = 100; // Size of each chunk in characters

		const speakChunk = () => {
			if (this.start >= this.text.length) {
				return Promise.resolve(); // All chunks processed
			}

			const end = Math.min(this.start + chunkSize, this.text.length);
			const chunk = this.text.slice(this.start, end);
			const utterance = new SpeechSynthesisUtterance(chunk);
			utterance.lang = languageCode;
			utterance.voice = this.synth.getVoices().find(v => v.name === 'Google US English');

			return new Promise((resolve, reject) => {
				utterance.onend = () => {
					this.start = end;
					resolve();
				};
				utterance.onerror = (event) => {
					reject(event.error);
				};

				this.synth.speak(utterance);
			}).then(speakChunk); // Continue with next chunk
		};

		return speakChunk();
	}

	stop() {
		this.synth.cancel();
		this.start = 0; // Reset start position
	}

	pause() {
		if (this.synth.speaking) {
			this.synth.pause();
			this.isPaused = true;
		}
	}

	resume() {
		if (this.isPaused) {
			this.synth.resume();
			this.isPaused = false;
		} else {
			// If not paused, start synthesis from the current start position
			this.synthesizeSpeech({
				input: { text: this.text.slice(this.start) },
				voice: {
					languageCode: 'en-US',
					ssmlGender: 'female'
				},
				audioConfig: { audioEncoding: 'MP3' }
			});
		}
	}
}


export class SpeechToTextClient {
	constructor() {
		this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
		this.isListening = false;
		this.transcript = '';

		this.recognition.lang = 'en-US';
		this.recognition.interimResults = false;
		this.recognition.maxAlternatives = 1;

		this.recognition.onresult = (event) => {
			this.transcript = event.results[0][0].transcript;
			console.log('Speech recognized: ', this.transcript);
			this.onResult(this.transcript);
		};

		this.recognition.onerror = (event) => {
			console.error('Speech recognition error: ', event.error);
		};
	}

	startListening(onResult) {
		console.log("onresult:", onResult);
		this.onResult = onResult;
		this.recognition.start();
		this.isListening = true;
	}

	stopListening() {
		this.recognition.stop();
		this.isListening = false;
	}

	getTranscript() {
		return this.transcript;
	}
}
