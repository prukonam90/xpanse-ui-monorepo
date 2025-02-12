export const MuiFormLabel = {
    styleOverrides: {
        root: ({ theme }: any) => ({
            ...theme.typography['caption-bold'],
            'marginLeft': '1rem',
            'marginBottom': '0.25rem',
            'color': theme.palette.primary.main,
            '&.Mui-error': {
                color: theme.palette.error.dark,
            },
        }),
    },
};

export const MuiFormHelperText = {
    styleOverrides: {
        root: ({ theme }: any) => ({
            ...theme.typography.caption,
            'marginLeft': '1rem',
            'color': theme.palette.primary.main,
            '&.Mui-error': {
                color: theme.palette.error.dark,
            },
        }),
    },
};
