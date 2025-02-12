export const MuiInputBase = {
    styleOverrides: {
        root: ({ theme }: any) => {
            return {
                'borderRadius': '1rem !important',
                'background': theme.palette.surface.contrastText,
                'padding': '0.75rem 1rem',
                'border': `1px solid ${theme.palette.surface.light}`,
                'height': '3rem',
                '&:hover': {
                    border: `1px solid ${theme.palette.primary.main}`,
                },
                '&:focus': {
                    border: `1px solid ${theme.palette.primary.main}`,
                },
                '&.MuiInputBase-root': {
                    '&.Mui-error': {
                        border: `1px solid ${theme.palette.error.dark}`,
                    },
                },
                '&.Mui-error': {
                    background: theme.palette.error.light,
                    borderWidth: 0,
                    input: {
                        '&::placeholder': {
                            color: theme.palette.error.dark,
                            opacity: 100,
                        },
                    },
                },
                'input': {
                    '&::placeholder': {
                        color: theme.palette.surface.main,
                        ...theme.typography.paragraph,
                        opacity: 100,
                    },
                },
            };
        },
    },
};

export const MuiInputLabel = {
    styleOverrides: {
        root: ({ theme }: any) => {
            return {
                'top': '-0.80rem',
                ...theme.typography['caption-bold'],
                'background': 'transparent',
                'color': theme.palette.primary.main,
                '&.Mui-error': {
                    color: theme.palette.error.dark,
                    top: '-0.5rem',
                },
            };
        },
    },
};
