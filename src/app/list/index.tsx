import React from 'react';
import { useAppSelector } from '../../_store/hooks';
import PairsView from './PairsView';

export default function App() {
	const length = useAppSelector(state => state.data.length);

	return (
		<main>
			{Array.from(Array(length).keys()).map(index => (
				<PairsView
					key={`app:${index}`}
					index={index}
				/>
			))}
		</main>
	);
}
