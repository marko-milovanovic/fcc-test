enum ValueType {
	id,
	number,
	boolean,
	date,
	longString,
	string,
	email,
	none,
}
export default ValueType;

function validateEmail(email: string): boolean {
	return /\S+@\S+\.\S+/.test(email);
}

export const validateType = (accessor: string, value: unknown): ValueType => {
	if (accessor === 'id') { return ValueType.id; }
	switch (typeof value) {
	case 'number': return ValueType.number;
	case 'boolean': return ValueType.boolean;
	case 'string':
		if (value.length > 60) { return ValueType.longString; }
		if (Date.parse(value)) { return ValueType.date; }
		if (accessor === 'email' || validateEmail(value)) { return ValueType.email; }
		return ValueType.string;
	default: return ValueType.none;
	};
} 