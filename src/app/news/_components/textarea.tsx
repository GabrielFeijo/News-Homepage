import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface ITextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
	name: string;
}

export default function TextArea({ name, ...rest }: ITextAreaProps) {
	const inputRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef,
			getValue: (ref) => {
				return ref.current.value;
			},
			setValue: (ref, value) => {
				ref.current.value = value;
			},
			clearValue: (ref) => {
				ref.current.value = '';
			},
		});
	}, [fieldName, registerField]);

	return (
		<textarea
			ref={inputRef}
			defaultValue={defaultValue}
			{...rest}
		></textarea>
	);
}
