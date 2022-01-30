import React from 'react';
import PairPairInputValues from './PairInputValues';

export default function PairEditorTextInput({
	accessor,
	value,
	onBlur,
}: PairPairInputValues<string>) {
	const [v, setV] = React.useState(value);

	React.useEffect(() => setV(value), [value]);

	return (
		<input
			type="email"
			value={v}
			onChange={e => setV(e.target.value)}
			onBlur={() => onBlur(accessor, v)}
		/>
	);
}
