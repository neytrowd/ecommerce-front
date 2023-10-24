export const useShouldBeCurrency = () => {
    return {
        pattern: {
            value: /^([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9]{1,2})?$/,
            message: 'Value must be a number!',
        },
    };
};
