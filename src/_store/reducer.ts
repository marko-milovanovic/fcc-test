import ValueType from '../__utilities/ValueTypes';
import * as types from './types';

interface Store {
	name: string | null,
	data: [string, unknown, ValueType][][],
}

export default function sectionsReducer(
	state: Store = {
		name: null,
		data: [],
	},
	action: any,
) {
	switch (action.type) {
	case types.INPUT_STATE: return {
		name: action.name,
		data: action.data,
	};
	case types.UPDATE_OBJECT:
		return {
			name: state.name,
			data: state.data.map((entries, index) => index === action.index ? action.entries : entries),
		};
	default:
		return state;
	}
}