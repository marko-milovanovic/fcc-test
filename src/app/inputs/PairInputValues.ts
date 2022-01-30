export default interface PairInputValues<Value> {
	accessor: string,
	value: Value,
	onBlur: (key: string, value: unknown) => void,
}