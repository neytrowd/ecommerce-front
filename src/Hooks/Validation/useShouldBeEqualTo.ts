import { ValidateResult } from 'react-hook-form';

export const useShouldBeEqualTo = (inputValue: string) => {
    return {
        validate: (value: string): ValidateResult => {
            if (value !== inputValue) {
                return 'Values must be equal';
            }

            return true;
        },
    };
};
