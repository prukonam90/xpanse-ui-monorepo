import Box from '@mui/material/Box';
import React from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export const DropDownIconComponent = ({
  open,
  onIconClick,
  sx = {},
  openIcon = <KeyboardArrowUp />,
  closeIcon = <KeyboardArrowDown />,
  color,
}: {
  open: boolean;
  onIconClick: (isOpen: boolean) => void;
  sx?: Record<any, any>;
  openIcon?: any;
  closeIcon?: any;
  color?:
    | 'error'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
}) => {
  return (
    <Box
      onClick={() => onIconClick(!open)}
      sx={(theme) => ({
        'display': 'flex',
        'position': 'absolute',
        'right': '0.2px',
        'width': '3rem',
        'height': '2.85rem',
        'borderRadius': '0rem 0.95rem 0.95rem 0rem',
        'justifyContent': 'center',
        'alignItems': 'center',
        'background': theme.palette[color ? color : 'primary'].lighter,
        '&.Mui-error': {
          background: 'transparent',
        },
        ...sx,
      })}
    >
      {open ? openIcon : closeIcon}
    </Box>
  );
};
