export type ATextButtonProps = {
	text: string
	clickHandler?: () => void
	buttonStyle?: string
	backgroundStyle?: string
}


export type AIconButtonProps = {
	text?: string
	clickHandler?: () => void
	buttonStyle?: string
	backgroundStyle?: string
	icon: string
	iconStyle?: string
	textStyle?: string
	iconSize?: number
}