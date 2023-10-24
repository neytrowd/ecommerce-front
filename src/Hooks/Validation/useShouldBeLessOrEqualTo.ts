import { useMemo } from 'react';
import { stringUtils } from '@/Utils/StringUtils';

export const useShouldBeLessOrEqualTo = (value: number) => {
    const message = useMemo(() => {
        return stringUtils.insertParamsToString(
            'Value must be less or equal to {0}',
            [value],
        );
    }, [value]);

    return {
        max: {
            value,
            message,
        },
    };
};
