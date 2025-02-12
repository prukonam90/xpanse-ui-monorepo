import Radio, { RadioProps } from '@mui/material/Radio';
import React from 'react';

type RadioBaseProps = RadioProps;
const RadioBase = ({ ...rest }: RadioBaseProps) => {
  return (
    <Radio
      sx={{
        color: 'surface.main',
      }}
      {...rest}
    />
  );
};

export { RadioBase };
export type { RadioBaseProps };
