export type AInputProps = {
	inputType: inputEnumTypes
	inputStyle?: string
	backgroundStyle?: string
	placeholder?: string
	errorMessage?: string
	value?: string
	handleOnchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
	trailingIcon?: string,
	trailingIconClickHandler?: () => void
	leadingIcon?: string,
	leadingIconStyle?: string,
	trailinggIconStyle?: string,
	leadingIconClickHandler?: () => void
}


export enum inputEnumTypes {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	NUMBER = 'number',
	DATE = 'date',
}