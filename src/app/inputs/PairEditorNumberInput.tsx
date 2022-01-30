import React from 'react';
import PairPairInputValues from './PairInputValues';

export default function PairEditorNumberInput({
	accessor,
	value,
	onBlur,
}: PairPairInputValues<number>) {
	const [v, setV] = React.useState(value);

	React.useEffect(() => setV(value), [value]);

	return (
		<input
			type="number"
			value={v}
			onChange={e => setV(JSON.parse(e.target.value))}
			onBlur={() => onBlur(accessor, v)}
		/>
	);
}
