import { useMemo } from 'react';
import { stringUtils } from '@/Utils/StringUtils';

export const useShouldBeMoreOrEqualTo = (value: number) => {
    const message = useMemo(() => {
        return stringUtils.insertParamsToString(
            'Value must be more or equal to {0}',
            [value],
        );
    }, [value]);

    return {
        min: {
            value,
            message,
        },
    };
};
