import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import get from 'lodash/get';
import React from 'react';

export const MuiAlert = {
  defaultProps: {
    iconMapping: {
      success: <CheckCircleIcon />,
      error: <ErrorIcon />,
      warning: <WarningIcon />,
      info: <InfoIcon />,
    },
  },
  styleOverrides: {
    root: ({ ownerState, theme }: any) => {
      return {
        'borderRadius': '1rem',
        'boxShadow': 'none',
        '& .MuiAlert-message': {
          fontFamily: 'Poppins',
          fontSize: '0.8125rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        },
        '&.MuiAlert-outlined': {
          border: `1px solid ${theme.palette[ownerState.severity].main}`,
          color: theme.palette[ownerState.severity].main,
        },
        '&.MuiAlert-filled': {
          color: '#FFFFFF',
        },
        '&.MuiAlert-standard': {
          'background': get(
            theme,
            ['palette', get(ownerState, ['severity'], undefined), 'light'],
            '#E6EDF0'
          ),
          'color': theme.palette[ownerState.severity].dark,
          '& .MuiAlert-icon': {
            color: theme.palette[ownerState.severity].dark,
            alignItems: 'center',
          },
        },
      };
    },
  },
};
