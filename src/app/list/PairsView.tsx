import React from 'react';
import { useAppSelector } from '../../_store/hooks';
import ValueType from '../../__utilities/ValueTypes';
import PairsPreview from './PairsPreview';
import PairsEditor from './PairsEditor';

export interface PairsProps {
	pairs: [string, unknown, ValueType][],
	index: number,
}

export default function PairsView({
	index,
}: {
	index: number,
}) {
	const pairs = useAppSelector(state => state.data[index]);

	return (
		<>
			<PairsPreview pairs={pairs} index={index} />
			<PairsEditor pairs={pairs} index={index} />
		</>
	);
}
