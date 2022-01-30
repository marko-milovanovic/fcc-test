import React from 'react';
import ValueType from '../../__utilities/ValueTypes';
import PairEditorDateInput from './PairEditorDateInput';
import PairEditorNumberInput from './PairEditorNumberInput';
import PairEditorRadioInput from './PairEditorRadioInput';
import PairEditorTextArea from './PairEditorTextArea';
import PairEditorTextInput from './PairEditorTextInput';
import PairEditorEmailInput from './PairEditorEmailInput';

export default function PairEditorInput({
	accessor,
	value,
	type,
	onBlur,
}: {
	accessor: string,
	value: any,
	type: ValueType
	onBlur: (accessor: string, value: unknown) => void
}) {
	switch (type) {
	case ValueType.string: return <PairEditorTextInput accessor={accessor} value={value} onBlur={onBlur} />;
	case ValueType.number: return <PairEditorNumberInput accessor={accessor} value={value} onBlur={onBlur} />;
	case ValueType.boolean: return <PairEditorRadioInput accessor={accessor} value={value} onBlur={onBlur} />;
	case ValueType.longString: return <PairEditorTextArea accessor={accessor} value={value} onBlur={onBlur} />;
	case ValueType.date: return <PairEditorDateInput accessor={accessor} value={value} onBlur={onBlur} />;
	case ValueType.email: return <PairEditorEmailInput accessor={accessor} value={value} onBlur={onBlur} />;
	default: return <></>;
	}
}
