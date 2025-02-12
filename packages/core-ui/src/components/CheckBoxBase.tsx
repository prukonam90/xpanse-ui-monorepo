import { Checkbox, CheckboxProps } from '@mui/material';
import React from 'react';

type CheckboxBaseProps = CheckboxProps;
const CheckboxBase = ({ size = 'small', ...rest }: CheckboxBaseProps) => {
    return (
        <Checkbox
            sx={{
                color: 'surface.main',
            }}
            size={size}
            {...rest}
        />
    );
};

export { CheckboxBase };
export type { CheckboxBaseProps };
