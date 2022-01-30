import React from 'react';
import PairPairInputValues from './PairInputValues';

const generateInputDate = (value: string) => (new Date(value)).toISOString().substring(0, 10);

export default function PairEditorDateInput({
	accessor,
	value,
	onBlur,
}: PairPairInputValues<string>) {
	const [_value, setV] = React.useState(generateInputDate(value));

	React.useEffect(() => setV(generateInputDate(value)), [value]);

	return (
		<input
			type="date"
			value={_value}
			onChange={e => setV(e.target.value)}
			onBlur={() => onBlur(accessor, _value)}
		/>
	);
}
