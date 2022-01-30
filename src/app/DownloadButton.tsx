import React from 'react';
import { useAppDispatch } from '../_store/hooks';
import { downloadState } from '../_store/actions';

export default function DownloadButton() {
	const dispatch = useAppDispatch();

	return (
		<button
			id="download_button"
			type="button"
			onClick={() => dispatch(downloadState())}
		>
			Download
		</button>
	);
}
