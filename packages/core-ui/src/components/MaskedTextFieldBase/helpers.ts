import type {
  CreateNumberMaskProps,
  FormatWithMaskProps,
  FormatWithMaskResult,
  Mask,
  MaskArray,
} from './types';

export const ssnMask = [
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  [/\d/],
  [/\d/],
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
] as MaskArray;
export const mobileMask = [
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const zipCodeMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const accountNumberMask = [
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
] as MaskArray;

export const MobileLabelMask = [
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' - ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const USD_CURRENCY = createNumberMask({
  prefix: ['$'],
  separator: '.',
  delimiter: ',',
  precision: 2,
});
export function createNumberMask(props?: CreateNumberMaskProps): Mask {
  const {
    delimiter = '.',
    precision = 2,
    prefix = [],
    separator = ',',
  } = props || {};

  return (value?: string) => {
    const numericValue = value?.replace(/\D+/g, '') ?? '';

    let mask: MaskArray = numericValue.split('').map(() => /\d/);

    const shouldAddSeparatorOnMask = precision > 0 && !!separator;

    if (mask.length > precision && shouldAddSeparatorOnMask) {
      mask.splice(-precision, 0, separator);
    }

    const amountOfDelimiters =
      Math.ceil((numericValue.length - precision) / 3) - 1;

    if (delimiter) {
      for (let i = 0; i < amountOfDelimiters; i++) {
        const precisionOffset = precision;
        const separatorOffset = shouldAddSeparatorOnMask ? 1 : 0;
        const thousandOffset = 3 + (delimiter ? 1 : 0);
        const delimiterPosition =
          -precisionOffset - separatorOffset - i * thousandOffset - 3;

        mask.splice(delimiterPosition, 0, delimiter);
      }
    }

    return [...prefix, ...mask];
  };
}

export function formatWithMask(
  props: FormatWithMaskProps
): FormatWithMaskResult {
  const {
    text,
    mask,
    obfuscationCharacter = '*',
    maskAutoComplete = false,
  } = props;

  // make sure it'll not break with null or undefined inputs
  if (!text) return { masked: '', unmasked: '', obfuscated: '' };
  if (!mask)
    return {
      masked: text || '',
      unmasked: text || '',
      obfuscated: text || '',
    };

  let maskArray = typeof mask === 'function' ? mask(text) : mask;

  let masked = '';
  let obfuscated = '';
  let unmasked = '';

  let maskCharIndex = 0;
  let valueCharIndex = 0;

  while (true) {
    // if mask is ended, break.
    if (maskCharIndex === maskArray.length) {
      break;
    }

    let maskChar = maskArray[maskCharIndex];
    let valueChar = text[valueCharIndex];

    // if value is ended, break.
    if (valueCharIndex === text.length) {
      if (typeof maskChar === 'string' && maskAutoComplete) {
        masked += maskChar;
        obfuscated += maskChar;

        maskCharIndex += 1;
        continue;
      }
      break;
    }

    // value equals mask: add to masked result and advance on both mask and value indexes
    if (maskChar === valueChar) {
      masked += maskChar;
      obfuscated += maskChar;

      valueCharIndex += 1;
      maskCharIndex += 1;
      continue;
    }

    let unmaskedValueChar = text[valueCharIndex];

    // it's a regex maskChar: let's advance on value index and validate the value within the regex
    if (typeof maskChar === 'object') {
      // advance on value index
      valueCharIndex += 1;

      const shouldObsfucateChar = Array.isArray(maskChar);

      const maskCharRegex = Array.isArray(maskChar) ? maskChar[0] : maskChar;

      const matchRegex = RegExp(maskCharRegex).test(valueChar ?? '');

      // value match regex: add to masked and unmasked result and advance on mask index too
      if (matchRegex) {
        masked += valueChar;
        obfuscated += shouldObsfucateChar ? obfuscationCharacter : valueChar;
        unmasked += unmaskedValueChar;

        maskCharIndex += 1;
      }

      continue;
    } else {
      // it's a fixed maskChar: add to maskedResult and advance on mask index
      masked += maskChar;
      obfuscated += maskChar;

      maskCharIndex += 1;
      continue;
    }
  }

  return { masked, unmasked, obfuscated };
}
