import { TypographyBase } from './TypographyBase';
import { CheckCircle, East } from '@mui/icons-material';
import type { StepContextType, StepperContextType, Theme } from '@mui/material';
import {
    Box,
    Stack,
    Step,
    StepContext,
    StepIcon,
    StepLabel,
    Stepper,
    StepperContext,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React, { useCallback, useContext, useMemo } from 'react';

type StepperBaseProps = {
    steps: Array<string>;
    activeStep: number;
    override?: boolean;
    isAllComplete?: boolean;
};

const MobileStep = ({
                        activeStep,
                        isAllComplete,
                    }: Omit<StepperBaseProps, 'steps'>) => {
    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '3rem',
                height: '3rem',
                border: `1px solid ${
                    isAllComplete
                        ? theme.palette.success.main
                        : theme.palette.primary.main
                }`,
                borderRadius: '100%',
                background: theme.palette.primary.contrastText,
            })}
        >
            <Box
                sx={(theme: Theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '2.4rem',
                    height: '2.4rem',
                    borderRadius: '100%',
                    background: `${
                        isAllComplete
                            ? theme.palette.success.main
                            : theme.palette.primary.main
                    }`,
                })}
            >
                <TypographyBase variant="paragraph" color="white">
                    {activeStep + 1}
                </TypographyBase>
            </Box>
        </Box>
    );
};

const MobileStepperBase = ({
                               steps,
                               activeStep,
                               isAllComplete,
                           }: StepperBaseProps) => {
    return (
        <Stack spacing="0.5rem" direction="row" alignItems="center">
            <MobileStep activeStep={activeStep} isAllComplete={isAllComplete} />
            <Stack spacing={0.25}>
                <TypographyBase
                    variant="caption"
                    color="surface.dark"
                    data-testid={`step_${activeStep + 1}_of_${steps.length}`}
                    // testID={`step_${activeStep + 1}_of_${steps.length}`}
                    // accessibilityLabel={`step ${activeStep + 1} of ${steps.length}`}
                >
                    {`Step ${activeStep + 1} of ${steps.length}`}
                </TypographyBase>
                <TypographyBase
                    variant="alt-subtitle2"
                    color={isAllComplete ? 'success.main' : 'primary.main'}
                    data-testid={steps[activeStep]}
                    // accessibilityLabel={steps[activeStep]}
                >
                    {steps[activeStep]}
                </TypographyBase>
            </Stack>
        </Stack>
    );
};

function SvgComponent(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={31}
            viewBox="0 0 16 31"
            fill="none"
            {...props}
        >
            <path
                d="M.673 29.465c7.732 0 14-6.268 14-14s-6.268-14-14-14"
                stroke="#00476A"
                strokeWidth={2}
            />
        </svg>
    );
}
const ArrowIcon = () => {
    //@ts-ignore
    const { activeStep }: StepperContextType = useContext(StepperContext);
    //@ts-ignore
    const { disabled, icon }: StepContextType = useContext(StepContext);
    const getColor = useCallback(
        (theme: any) => {
            if (activeStep + 2 === icon && disabled)
                return theme.palette.primary.main;
            else if (disabled) return '#A0AFC0';
            return theme.palette.success.main;
        },
        [activeStep, disabled, icon]
    );
    return (
        <StepLabel icon={<span />}>
            <East
                sx={(theme: Theme) => ({
                    fill: getColor(theme),
                })}
            />
        </StepLabel>
    );
};
const StepIconComponent = (props: any) => {
    const { completed, active, icon } = props;

    if (active)
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fill: 'primary.main',
                }}
            >
                <TypographyBase
                    //@ts-ignore
                    variant="paragraph-bold"
                    color="primary"
                    //@ts-ignore
                    sx={{ position: 'relative', left: '0.2rem' }}
                >
                    {icon}
                </TypographyBase>
                <SvgComponent />
            </Box>
        );
    else if (completed)
        return <CheckCircle color="success" sx={{ fontSize: '1.75rem' }} />;
    return (
        <StepIcon
            icon={icon}
            sx={{
                width: '1.75rem',
                height: '1.75rem',
                color: '#A0AFC0',
            }}
        />
    );
};

const StepperBase = ({
                         steps,
                         activeStep,
                         override = false,
                         isAllComplete = false,
                     }: StepperBaseProps) => {
    const betweenXSSM = useMediaQuery(useTheme().breakpoints.between('xs', 'sm'));

    const isMobile = useMemo(() => {
        if (!override) return betweenXSSM;
        return override;
    }, [betweenXSSM, override]);

    if (isMobile) {
        return (
            <MobileStepperBase
                steps={steps}
                activeStep={activeStep}
                isAllComplete={isAllComplete}
            />
        );
    }
    return (
        <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<ArrowIcon />}
            sx={{ justifyContent: 'space-between' }}
            data-testid="stepper-container"
        >
            {steps.map((label: string) => (
                <Step
                    key={label}
                    sx={{
                        padding: 0,
                        display: 'flex',
                        flex: 0,
                        gap: '1rem',
                        flexDirection: 'row',
                    }}
                    data-testid={`step_${label}`}
                >
                    <StepLabel
                        StepIconComponent={StepIconComponent}
                        sx={(theme) => ({
                            '& .MuiStepLabel-label': {
                                'fontSize': '0.8125rem',
                                'fontWeight': 500,
                                'lineHeight': 'normal',

                                '&.MuiStepLabel-alternativeLabel': {
                                    marginTop: '0.5rem',
                                },

                                '&.Mui-completed': {
                                    '&.MuiStepLabel-alternativeLabel': {
                                        color: theme.palette.success.main,
                                    },
                                },

                                '&.Mui-active': {
                                    'color': '#FFF',
                                    '&.MuiStepLabel-alternativeLabel': {
                                        color: theme.palette.primary.main,
                                    },
                                    '& .MuiSvgIcon-root': {
                                        fill: theme.palette.success.main,
                                    },
                                },
                                '&.Mui-disabled': {
                                    'color': '#FFF',
                                    '&.MuiStepLabel-alternativeLabel': {
                                        color: '#A0AFC0',
                                    },
                                },
                            },
                        })}
                        data-testid={`step_label_${label}`}
                    >
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export { StepperBase };
export type { StepperBaseProps };
