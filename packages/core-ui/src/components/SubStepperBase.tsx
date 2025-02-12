import { TypographyBase } from './TypographyBase';
import { Check } from '@mui/icons-material';
import type { Theme } from '@mui/material';
import {
  Box,
  Stack,
  Step,
  StepContext,
  Stepper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useCallback, useContext } from 'react';
import type { StepperBaseProps } from './StepperBase';

export type SubStepperBaseProps = StepperBaseProps;

const SubStepComponent = ({ label }: { label: string }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  //@ts-ignore
  const { completed, active, disabled } = useContext(StepContext);

  const getStepColor = useCallback(
    (t: Theme) => {
      if (completed) return t.palette.success.main;
      else if (active) return t.palette.primary.main;
      return '#A0AFC0';
    },
    [active, completed]
  );

  const activeClass = isMobile ? 'caption-bold-small' : 'caption-bold';
  const disabledClass = isMobile ? 'caption-small' : 'caption';

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: '0.25rem',
        flex: 1,
      }}
      key={`step_label_container_${label}`}
      data-testid={`step_label_container_${label}`}
    >
      <Box
        sx={(bTheme) => ({
          height: '0.25rem',
          borderRadius: '2rem',
          background: getStepColor(bTheme),
          alignSelf: 'stretch',
        })}
        data-testid={`${label}_divider`}
      />
      <Stack direction="row" spacing="0.5rem">
        {!completed || isMobile ? null : (
          <Check color="success" sx={{ fontSize: '1.125rem' }} />
        )}
        <TypographyBase
          variant={!disabled ? activeClass : disabledClass}
          color={getStepColor(theme)}
          key={`step_label_${label}`}
          data-testid={`step_label_${label}`}
        >
          {label}
        </TypographyBase>
      </Stack>
    </Stack>
  );
};
export const SubStepperBase = ({ steps, activeStep }: SubStepperBaseProps) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      connector={null}
      sx={{ gap: '0.5rem' }}
    >
      {steps.map((label: string) => (
        <Step key={label} sx={{ padding: '0px' }}>
          <SubStepComponent label={label} />
        </Step>
      ))}
    </Stepper>
  );
};
