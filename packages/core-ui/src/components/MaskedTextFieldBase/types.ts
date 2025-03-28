import { TextFieldBaseProps } from '../TextFieldBase';

export interface MaskedTextFieldProps
  extends Omit<TextFieldBaseProps, 'onChangeText'> {
  /**
   * Mask
   */
  mask?: Mask;

  /**
   * Callback that is called when the text input's text changes.
   * @param masked Masked text
   * @param unmasked Unmasked text
   * @param obfuscated Obfuscated text
   */
  onChangeText?(masked: string, unmasked: string, obfuscated: string): void;

  /**
   * Whether or not to display the obfuscated value on the `TextInput`. Defaults to false
   */
  showObfuscatedValue?: boolean;

  /**
   * Character to be used as the "fill character" on the default placeholder
   */
  placeholderFillCharacter?: string;

  /**
   * Character to be used on the obfuscated characteres. Defaults to "*"
   */
  obfuscationCharacter?: string;

  /** Add next mask characters at the end of the value. Defaults to `false`.
   *
   * Example: In a date mask, a input value of `"15/10"` will result:
   * - When set to false: `"15/10"`
   * - When set to true: `"15/10/"`
   */
  maskAutoComplete?: boolean;
}

export type MaskItem = string | RegExp | [RegExp];

export type MaskArray = Array<MaskItem>;

export type Mask = MaskArray | ((value?: string) => MaskArray);

export type FormatWithMaskProps = {
  /**
   * Text to be formatted with the mask.
   */
  text?: string;

  /**
   * Mask
   */
  mask?: Mask;

  /**
   * Character to be used on the obfuscated characters. Defaults to `"*"`
   */
  obfuscationCharacter?: string;

  /** Add next mask characters at the end of the value. Defaults to `false`.
   *
   * Example: In a date mask, a input value of `"15/10"` will result:
   * - When set to false: `"15/10"`
   * - When set to true: `"15/10/"`
   */
  maskAutoComplete?: boolean;
};

export type FormatWithMaskResult = {
  masked: string;
  unmasked: string;
  obfuscated: string;
};

export type CreateNumberMaskProps = {
  /** Character for thousands delimiter. Defaults to `"."` */
  delimiter?: string;
  /** Decimal precision. Defaults to `2` */
  precision?: number;
  /** Decimal separator character. Defaults to `","`  */
  separator?: string;
  /** Mask to be prefixed on the mask result */
  prefix?: MaskArray;
};

export type UseMaskedInputProps = {
  value?: string;

  /** Mask */
  mask?: Mask;

  /**
   * Callback that is called when the text input's text changes.
   * @param masked Masked text
   * @param unmasked Unmasked text
   * @param obfuscated Obfuscated text
   */
  onChangeText?(masked: string, unmasked: string, obfuscated: string): void;

  /** Whether or not to display the obfuscated value on the `TextInput`. Defaults to false */
  showObfuscatedValue?: boolean;

  /** Character to be used as the "fill character" on the default placeholder */
  placeholderFillCharacter?: string;

  /** Character to be used on the obfuscated characteres. Defaults to "*" */
  obfuscationCharacter?: string;

  /** Add next mask characters at the end of the value. Defaults to `false`.
   *
   * Example: In a date mask, a input value of `"15/10"` will result:
   * - When set to false: `"15/10"`
   * - When set to true: `"15/10/"`
   */
  maskAutoComplete?: boolean;
};
