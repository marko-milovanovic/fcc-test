import React from 'react';
import { useAppDispatch, useAppSelector } from '../_store/hooks';
import { inputState } from '../_store/actions';

export default function FileInput() {
	const dispatch = useAppDispatch();
	const name = useAppSelector(state => state.name);
	const [_name, _setName] = React.useState<string | null>(null);

	const onFileChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file == null) { return alert('No file'); }
		const reader = new FileReader();
		reader.onload = (e) => {
			if (typeof e.target?.result !== 'string') { return alert('Bad data'); }
			const json = JSON.parse(e.target?.result);
			if (!Array.isArray(json)) { return alert('Bad json'); }
			const name = file.name.split('.')[0];
			_setName(name);
			setTimeout(() => dispatch(inputState(name, json)), 50);
			return null;
		};
		reader.readAsText(file);
		return null;
	}, []);

	const isLoading = name != _name;
	const value = name ? `${name}.json` : 'No file selected';

	return (
		<label
			className="file_input"
			htmlFor="file_input"
		>
			<input
				id="file_input"
				type="file"
				accept=".json"
				onChange={onFileChange}
				disabled={isLoading}
			/>
			{isLoading ? 'Loading...' : value}
		</label>
	);
}
