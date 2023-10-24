export const useShouldBePassword = () => {
    return {
        pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            message:
                'The password must contain at least one number, one lowercase, one uppercase, 6 characters.',
        },
    };
};
