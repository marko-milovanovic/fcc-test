import React from 'react';
import PairPairInputValues from './PairInputValues';

export default function PairEditorRadioInput({
	accessor,
	value,
	onBlur,
}: PairPairInputValues<boolean>) {
	const [v, setV] = React.useState(value);

	React.useEffect(() => setV(value), [value]);

	return (
		<input
			type="radio"
			checked={v}
			onClick={() => setV(!v)}
			onChange={() => setV(!v)}
			onBlur={() => onBlur(accessor, v)}
		/>
	);
}
