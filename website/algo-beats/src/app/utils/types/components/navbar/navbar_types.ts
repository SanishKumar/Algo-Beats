export type DropDownListProps = {
	heading: string;
	listItems: listItem[];
}


export type listItem = {
	text: string;
	link: string;
	index?: number;
}