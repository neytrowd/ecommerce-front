import { useMemo } from 'react';
import { stringUtils } from '@/Utils/StringUtils';

export const useShouldBeLessThan = (value: number) => {
    const message = useMemo(() => {
        return stringUtils.insertParamsToString('Value must be less than {0}', [
            value,
        ]);
    }, [value]);

    return {
        max: {
            value: value - 1,
            message,
        },
    };
};
