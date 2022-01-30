import { AppThunk } from './index';
import * as types from './types';
import ValueType, { validateType } from '../__utilities/ValueTypes';
import downloadObjectAsJson from '../__utilities/downloadObjectAsJson';

export const inputState = (name: string, json: any[]): AppThunk => async dispatch => {
	const data = json.map(item => Object.entries(item)
		.map(([key, value]) => [key, value, validateType(key, value)]));

	dispatch({
		type: types.INPUT_STATE,
		name,
		data,
	});
}

export const downloadState = (): AppThunk => async (_, getState) => {
	const state = getState();
	const data = state.data.map(item => Object.fromEntries(item.map(([key, value]) => [key, value])));
	downloadObjectAsJson(data, state.name ?? 'data');
}

export const updateObject = (entries: [string, unknown, ValueType][], index: number): AppThunk => async dispatch => dispatch({
	type: types.UPDATE_OBJECT,
	entries,
	index,
});