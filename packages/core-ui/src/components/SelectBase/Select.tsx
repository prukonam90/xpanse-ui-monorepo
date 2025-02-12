import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectProps } from '@mui/material/Select';
import React, { useState } from 'react';
import { TextFieldBase } from '../TextFieldBase';
import { DropDownIconComponent } from './Icon';

export type SelectBaseProps = SelectProps & {
  options: Array<Selectitems>;
  renderIconComponent?: (
    open: boolean,
    onClick: (open: boolean) => void,
    sx?: any
  ) => JSX.Element;
  color?: string;
};

interface Selectitems {
  value: any;
  label: string;
  id?: string;
}

export const SelectBase = ({
  options,
  renderIconComponent = undefined,
  color,
  disabled,
  sx,
  ...rest
}: SelectBaseProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Select
      sx={sx ? sx : { minWidth: '18.75rem' }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      input={
        <TextFieldBase
          color={color}
          // @ts-ignore
          sx={{
            '&.MuiInputBase-root': {
              '&.Mui-error': {
                border: 0,
              },
            },
          }}
        />
      }
      MenuProps={{ PaperProps: { sx: { borderRadius: 0 } } }}
      // eslint-disable-next-line react/no-unstable-nested-components
      IconComponent={() =>
        renderIconComponent ? (
          renderIconComponent(open, setOpen)
        ) : (
          <DropDownIconComponent
            open={open}
            onIconClick={() => {
              if (disabled) return;
              setOpen((prev) => !prev);
            }}
            color={color}
          />
        )
      }
      {...rest}
    >
      {options.map(({ value, label }: Selectitems) => (
        <MenuItem value={value} key={label}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};
