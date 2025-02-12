import get from 'lodash/get';

export const MuiButton = {
    defaultProps: {
        disableRipple: true,
        disableElevation: true,
    },
    styleOverrides: {
        root: ({ ownerState, theme }: any) => {
            return {
                'borderRadius': '6.25rem',
                '&:hover': {
                    ...(ownerState.color === 'success' || ownerState.color === 'secondary'
                        ? {
                            backgroundColor: get(
                                theme,
                                ['palette', get(ownerState, ['color'], undefined), 'light'],
                                '#E6EDF0'
                            ),
                            ...(ownerState.color === 'success'
                                ? { color: theme.palette.success.main }
                                : {}),
                        }
                        : { backgroundColor: theme.palette[ownerState.color].dark }),
                },
                '&.MuiButton-sizeLarge': {
                    height: '3.875rem',
                    display: 'inline-flex',
                    padding: '1rem 2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    ...theme.typography['btn-label'],
                },
                '&.MuiButton-sizeMedium': {
                    height: '2.4375rem',
                    display: 'inline-flex',
                    padding: '0.5rem 1.5rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.25rem',
                    ...theme.typography['btn-label'],
                },
                '&.MuiButton-sizeSmall': {
                    height: '2rem',
                    padding: '0.375rem 1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.125rem',
                    ...theme.typography['btn-label-small'],
                },
                '&.MuiButton-iconSizeLarge': {
                    fontSize: '1.5rem',
                },
                '&.MuiButton-iconSizeMedium': {
                    fontSize: '1.25rem',
                },
                '&.MuiButton-iconSizeSmall': {
                    fontSize: '1rem',
                },
                '&.MuiButton-outlined': {
                    'border': `1px solid ${theme.palette[ownerState.color].main}`,
                    'color': theme.palette[ownerState.color].main,
                    '&:hover': {
                        borderWidth: 1,
                        backgroundColor: theme.palette[ownerState.color].lighter,
                    },
                },
                '&.MuiButton-text': {
                    'color': theme.palette[ownerState.color].main,
                    '&:hover': {
                        backgroundColor: theme.palette[ownerState.color].lighter,
                    },
                },
                '.MuiButton-endIcon': {
                    margin: '0px',
                },
                '.MuiButton-startIcon': {
                    margin: '0px',
                },
                '&.Mui-disabled': {
                    ...getDisabledButton(ownerState.variant),
                },
            };
        },
    },
};

const getDisabledButton = (variant: string) => {
    if (variant === 'contained') {
        return {
            backgroundColor: '#A0AFC0',
            color: '#E6EDF0',
        };
    } else if (variant === 'outlined') {
        return {
            backgroundColor: 'transparent',
            border: '1px solid #A0AFC0',
            color: '#A0AFC0',
        };
    }
    return { color: '#A0AFC0' };
};
