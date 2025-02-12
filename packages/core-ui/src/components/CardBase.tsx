import { Paper, PaperProps, useTheme } from '@mui/material';
import React from 'react';

type CardBaseProps = PaperProps;
const CardBase = ({ children, sx, ...rest }: CardBaseProps) => {
    const theme = useTheme();
    return (
        <Paper
            sx={{
                boxShadow: '4px 4px 30px 0px rgba(29, 49, 70, 0.10)',
                background: '#FEFEFE',
                borderRadius: '2rem',
                padding: '2rem',
                [theme.breakpoints.down('md')]: {
                    padding: '1rem',
                    borderRadius: '1rem',
                },
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Paper>
    );
};

export { CardBase };
export type { CardBaseProps };
