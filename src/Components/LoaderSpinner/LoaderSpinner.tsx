import React from 'react';
import Loader from 'react-loader-spinner';
import cn from 'classnames';

// Types import
import { ClassNameProps } from '@/Types';

// Styles import
import styles from './LoaderSpinner.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

type Props = {
    type:
        | 'Audio'
        | 'BallTriangle'
        | 'Bars'
        | 'Circles'
        | 'Grid'
        | 'Hearts'
        | 'Oval'
        | 'Puff'
        | 'Rings'
        | 'TailSpin'
        | 'ThreeDots'
        | 'Watch'
        | 'RevolvingDot'
        | 'Triangle'
        | 'Plane'
        | 'MutatingDots'
        | 'CradleLoader';
    color?: string;
    visible: boolean;
    width?: number;
    height?: number;
    isInRoot?: boolean;
    text?: string;
} & ClassNameProps;

export function LoaderSpinner({
    type,
    color = '#000',
    visible,
    width = 50,
    height = 50,
    isInRoot = true,
    text,
    className,
}: Props): React.ReactElement {
    return (
        <div
            className={cn(
                styles.loader,
                { [styles.root]: isInRoot },
                className,
            )}
        >
            <Loader
                type={type}
                width={width}
                height={height}
                color={color}
                visible={visible}
            />

            {text && <span className={styles.loaderMessage}>{text}</span>}
        </div>
    );
}
