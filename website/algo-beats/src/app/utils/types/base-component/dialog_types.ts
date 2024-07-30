export type AAlertDialogTypes = {
	alertMessage: string,
	alertIcon?: string
	alertType: AAlertEnums
}


export enum AAlertEnums {
	ERROR = "error",
	SUCCESS = "success",
	WARNING = "warning",
}


export type AInfoDialogTypes = {
	children?: React.ReactNode,
	onDismiss?: () => void
}