import '@mui/material/Button';
import '@mui/material/styles';
import '@mui/material/Typography';

import { Components, Theme } from '@mui/material';
// import { createTheme } from '@mui/material/styles';
import {
    MuiAlert,
    MuiButton,
    MuiDialogActions,
    MuiDialogContent,
    MuiDialogTitle,
    MuiFormControlLabel,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputBase,
    MuiInputLabel,
} from '../theme-components';
import { palette } from '../theme-components/ColorPalette';
import { typography } from '../theme-components/Typography';

const MuiTypography: Components<Theme>['MuiTypography'] = {
    defaultProps: {
        variant: 'paragraph',
    },
};
const components = {
    MuiButton,
    MuiInputBase,
    MuiInputLabel,
    MuiFormLabel,
    MuiFormControlLabel,
    MuiAlert,
    MuiDialogTitle,
    MuiDialogContent,
    MuiDialogActions,
    MuiFormHelperText,
    MuiTypography,
};
export const MuiTheme: any = { palette, typography, components };

export function generateTheme(optional = {}) {
    console.log('optional ', optional);
    // return createTheme(MuiTheme);
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        'secondary-light': true;
        'surface': true;
        'text': true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        'secondary-light': true;
        'surface': true;
        'surfaceDark': true;
    }
}

declare module '@mui/material/styles' {
    interface PaletteColor {
        lighter?: string;
        darker?: string;
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
    }

    interface SimplePaletteColorOptions {
        lighter?: string;
        darker?: string;
    }
    interface Palette {
        'secondary-light': Palette['primary'];
        'surface': Palette['primary'];
        'surfaceDark': Palette['primary'];
        'teal': Palette['primary'];
        'neutrals': Palette['primary'];
    }

    interface PaletteOptions {
        'secondary-light'?: PaletteOptions['primary'];
        'surface'?: PaletteOptions['primary'];
        'surfaceDark'?: Palette['primary'];
        'teal'?: Palette['primary'];
        'neutrals'?: Palette['primary'];
    }

    interface TypographyVariants {
        'display1': React.CSSProperties;
        'display2': React.CSSProperties;
        'title1': React.CSSProperties;
        'title2': React.CSSProperties;
        'subtitle1': React.CSSProperties;
        'subtitle2': React.CSSProperties;
        'subtitle2bold': React.CSSProperties;
        'paragraph': React.CSSProperties;
        'paragraph-bold': React.CSSProperties;
        'caption': React.CSSProperties;
        'caption-bold': React.CSSProperties;
        'caption-small': React.CSSProperties;
        'caption-bold-small': React.CSSProperties;
        'alt-display1': React.CSSProperties;
        'alt-display2': React.CSSProperties;
        'alt-title1': React.CSSProperties;
        'alt-title2': React.CSSProperties;
        'alt-subtitle1': React.CSSProperties;
        'alt-subtitle2': React.CSSProperties;
        'btn-label': React.CSSProperties;
        'btn-label-small': React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        'display1'?: React.CSSProperties;
        'display2'?: React.CSSProperties;
        'title1'?: React.CSSProperties;
        'title2'?: React.CSSProperties;
        'subtitle1'?: React.CSSProperties;
        'subtitle2'?: React.CSSProperties;
        'subtitle2bold'?: React.CSSProperties;
        'paragraph'?: React.CSSProperties;
        'paragraph-bold'?: React.CSSProperties;
        'caption'?: React.CSSProperties;
        'caption-bold'?: React.CSSProperties;
        'caption-small'?: React.CSSProperties;
        'caption-bold-small'?: React.CSSProperties;
        'alt-display1': React.CSSProperties;
        'alt-display2': React.CSSProperties;
        'alt-title1': React.CSSProperties;
        'alt-title2': React.CSSProperties;
        'alt-subtitle1': React.CSSProperties;
        'alt-subtitle2': React.CSSProperties;
        'btn-label': React.CSSProperties;
        'btn-label-small': React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        'display1': true;
        'display2': true;
        'title1': true;
        'title2': true;
        'subtitle1': true;
        'subtitle2': true;
        'subtitle2bold': true;
        'paragraph': true;
        'paragraph-bold': true;
        'caption': true;
        'caption-bold': true;
        'caption-dark': true;
        'caption-small': true;
        'caption-bold-small': true;
        'alt-display1': true;
        'alt-display2': true;
        'alt-title1': true;
        'alt-title2': true;
        'alt-subtitle1': true;
        'alt-subtitle2': true;
        'btn-label': true;
        'btn-label-small': true;
    }
}
