//@ts-nocheck
import React, { ChangeEvent, forwardRef, memo } from 'react';
import { TextFieldBase } from '../TextFieldBase';
import useMaskedInputProps from './useMaskedInputProps';
import { MaskedTextFieldProps } from './types';

export default memo(
  forwardRef((props: MaskedTextFieldProps, ref: any) => {
    const {
      mask,
      value,
      onChangeText,
      placeholderFillCharacter = '_',
      obfuscationCharacter,
      showObfuscatedValue,
      selection,
      maskAutoComplete,
      ...rest
    } = props;

    const maskedInputProps = useMaskedInputProps({
      value,
      mask,
      maskAutoComplete,
      obfuscationCharacter,
      onChangeText,
      placeholderFillCharacter,
      showObfuscatedValue,
    });

    return (
      <TextFieldBase
        {...rest}
        selection={maskedInputProps.selection || selection}
        value={maskedInputProps.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          maskedInputProps.onChangeText(e.target.value)
        }
        ref={ref}
      />
    );
  })
);
