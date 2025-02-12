import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';

type TypographyBaseProps = TypographyProps;
const TypographyBase = ({ children, ...rest }: TypographyBaseProps) => {
    return (
        <Typography color="textPrimary" {...rest}>
            {children}
        </Typography>
    );
};

export { TypographyBase };
export type { TypographyBaseProps };
