import { useMemo } from 'react';
import { stringUtils } from '@/Utils/StringUtils';

export const useShouldBeMoreThan = (
    value: number,
    step: 0.1 | 1 | 0.01 = 1,
) => {
    const message = useMemo(() => {
        return stringUtils.insertParamsToString('Value must be more than {0}', [
            value,
        ]);
    }, [value]);

    return {
        min: {
            value: value + step,
            message,
        },
    };
};
