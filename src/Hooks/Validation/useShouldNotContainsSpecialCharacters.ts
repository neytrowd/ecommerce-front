import { stringUtils } from '@/Utils/StringUtils';

export const useShouldNotContainsSpecialCharacters = (
    symbolsArray: string[],
) => {
    return {
        pattern: {
            value: new RegExp(`^[^${symbolsArray?.join('')}]+$`),
            message: stringUtils.insertParamsToString(
                'String should not contains special characters, such a [0]',
                [symbolsArray.join(', ')],
            ),
        },
    };
};
