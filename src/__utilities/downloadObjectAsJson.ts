export default function downloadObjectAsJson(object: any, fileName: string) {
	const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(object))}`;
	const downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute('href', dataStr);
	downloadAnchorNode.setAttribute('download', `${fileName}.json`);
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}
