export const MuiDialogTitle = {
    styleOverrides: {
        root: ({ theme }: any) => ({
            ...theme.typography.subtitle1,
            padding: 0,
        }),
    },
};

export const MuiDialogContent = {
    styleOverrides: {
        root: ({ theme }: any) => ({
            'padding': '2rem',
            '&.MuiDialogContent-dividers': {
                borderColor: theme.palette.surface.light,
            },
        }),
    },
};
export const MuiDialogActions = {
    styleOverrides: {
        root: {
            padding: '1rem 2rem',
        },
    },
};
