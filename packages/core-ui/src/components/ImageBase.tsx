// Image component
import { SxProps } from '@mui/material';
import * as React from 'react';

export type ImageBaseProps = {
    imageUrl: string;
    height?: number | string;
    width?: number | string;
    sx?: SxProps | any;
};
const ImageBase = ({
                                                imageUrl,
                                                height,
                                                width,
                                                sx,
                                            }: ImageBaseProps) => {
    return (
        <img
            src={imageUrl}
            height={height}
            width={width}
            //@ts-ignore
            style={{ ...sx }}
        />
    );
};
export { ImageBase };
