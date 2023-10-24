export const useShouldBeNumber = () => {
    return {
        pattern: {
            value: /^\d+$/,
            message: 'Value must be a number!',
        },
    };
};
