export const useShouldBeDecimal = () => {
    return {
        pattern: {
            value: /^[-]?\d+(\.\d{1,5})?$/,
            message: 'Value must be a number!',
        },
    };
};
