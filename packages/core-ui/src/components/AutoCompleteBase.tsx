import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete, {
  type AutocompleteProps,
} from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import React, { useRef, useState } from 'react';

const StyledAutocomplete = styled(Autocomplete)({
  'width': '100%',
  '& .MuiOutlinedInput-root': {
    '& .MuiAutocomplete-endAdornment': {
      right: '3px',
      height: '28px',
    },
    'paddingRight': '0rem',
    '& fieldset': {
      border: 'none',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiAutocomplete-input': {
      padding: '0.125rem',
    },
    '&:hover fieldset': { border: 'none' },
    '&.Mui-focused fieldset': { border: 'none' },
  },
  '& .MuiAutocomplete-popupIndicator': {
    'position': 'absolute',
    'height': '100%',
    'alignItems': 'center',
    'PointerEvent': 'none',
    'top': '50%',
    'transform': 'translateY(-50%)',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

//@ts-ignore
export type AutocompleteBaseProps = AutocompleteProps & {
  options: Array<SelectOptions>;
  onChange: any;
  error?: any;
  placeholder?: string;
  value: any;
};

interface SelectOptions {
  value: any;
  label: string;
  id?: string;
}

export const AutocompleteBase = ({
  options,
  onChange,
  error,
  placeholder = 'Select',
  value,
  ...props
}: AutocompleteBaseProps) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleArrowClick = () => {
    setOpen((prev) => !prev);
    if (inputRef.current) {
      //@ts-ignore
      inputRef.current.focus();
    }
  };
  // filter the user input
  const filterOptions = (options: any, { inputValue }: any) =>
    options.filter((option: any) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  return (
      <StyledAutocomplete
        value={value}
        options={options}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        filterOptions={filterOptions}
        getOptionLabel={(option: any) => option?.label || ''}
        isOptionEqualToValue={(option: any, value: any) =>
          option?.id === value?.id
        }
        //@ts-ignore
        onChange={(event, newValue: any) => {
          onChange(newValue);
        }}
        popupIcon={
          <Box
            onClick={handleArrowClick}
            sx={(theme) => ({
              'display': 'flex',
              'position': 'absolute',
              'right': '0.063rem',
              'width': '3rem',
              'height': '3rem',
              'borderRadius': '0rem 0.95rem 0.95rem 0rem',
              'justifyContent': 'center',
              'alignItems': 'center',
              'background': theme.palette.primary.lighter,
              '&.Mui-error': {
                background: 'transparent',
              },
            })}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </Box>
        }
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(_event) => {
              onChange(_event.target.value);
            }}
            inputRef={inputRef}
            placeholder={placeholder}
            error={!!error}
            InputProps={{
              ...params.InputProps,
              sx: {
                display: 'flex',
                alignItems: 'center',
                paddingY: 1,
                height: '50px',
              },
            }}
          />
        )}
        noOptionsText="No options"
        {...props}
      />
  );
};
