import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import type { ReactNode } from 'react';
import * as React from 'react';

export type DialogBaseProps = {
    handleClose: () => void;
    open: boolean;
    renderDialogContent: () => ReactNode;
    renderDialogActions?: () => ReactNode;
    title?: string;
    topDivider?: boolean;
    bottomDivider?: boolean;
    iconProps?: any;
} & DialogProps;
export const DialogBase = ({
                               open,
                               handleClose,
                               renderDialogActions,
                               renderDialogContent,
                               title,
                               topDivider = true,
                               bottomDivider = true,
                               iconProps,
                               ...rest
                           }: DialogBaseProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={open}
            fullScreen={!fullScreen}
            PaperProps={{
                sx: {
                    borderRadius: '2rem',
                    [theme.breakpoints.down('md')]: { borderRadius: '0' },
                },
            }}
            {...rest}
        >
            {!title ? null : (
                <Stack
                    direction="row"
                    sx={{
                        padding: { xs: '1rem', lg: '2rem' },
                        alignItems: 'center',
                        gap: '0.5rem',
                        alignSelf: 'stretch',
                        justifyContent: 'space-between',
                    }}
                >
                    <DialogTitle width={'90%'}>{title}</DialogTitle>
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon
                            id="close-icon"
                            sx={{ fontSize: '1.25rem', ...iconProps }}
                        />
                    </IconButton>
                </Stack>
            )}
            {!topDivider ? null : <Divider sx={{ borderColor: 'surface.light' }} />}
            <DialogContent
                sx={{
                    padding: { xs: '1rem', lg: '2rem' },
                }}
            >
                {renderDialogContent()}
            </DialogContent>
            {!bottomDivider ? null : (
                <Divider sx={{ borderColor: 'surface.light' }} />
            )}
            <DialogActions>
                {renderDialogActions ? (
                    renderDialogActions()
                ) : (
                    <Button variant="contained" autoFocus onClick={handleClose}>
                        Close
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};
