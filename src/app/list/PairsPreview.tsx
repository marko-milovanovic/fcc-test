import React from 'react';
import { PairsProps } from './PairsView';

export default function PairsPreview({
	pairs,
	index
}: PairsProps) {
	return (
		<dl>
			{pairs.map(([key, value], pairIndex) => {
				if (typeof value === 'object') return [];
				return (
					<React.Fragment key={`preview:${key}:${index}:${pairIndex}`}>
						<dt>{key}: </dt>
						<dd>{(value as any).toString()}</dd>
					</React.Fragment>
				);
			})}
		</dl>
	);
}
