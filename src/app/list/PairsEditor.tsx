import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../_store/hooks';
import { updateObject } from '../../_store/actions';
import { PairsProps } from './PairsView';
import ValueType from '../../__utilities/ValueTypes';
import PairEditorInput from '../inputs/PairEditorInput';

export default function PairsEditor({
	pairs,
	index,
}: PairsProps) {
	const dispatch = useAppDispatch();
	const [edit, setEdit] = useState(pairs);

	const onBlur = (key: string, value: unknown) =>
		setEdit(edit.map(pair => (pair[0] === key ? [key, value, pair[2]] : pair)));

	useEffect(() => setEdit(pairs), [pairs]);

	return (
		<dl>
			{pairs.flatMap(([key, value, type], pairIndex) => {
				if (type === ValueType.id || type === ValueType.none) return [];
				return (
					<React.Fragment key={`edit:${key}:${index}:${pairIndex}`}>
						<dt>
							{key}
							:
						</dt>
						<dd>
							<PairEditorInput
								accessor={key}
								value={value}
								type={type}
								onBlur={onBlur}
							/>
						</dd>
					</React.Fragment>
				);
			})}
			<button
				type="button"
				onClick={() => dispatch(updateObject(edit, index))}
			>
				Save object changes
			</button>
		</dl>
	);
}
