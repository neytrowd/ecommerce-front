export const useRequired = (isRequired = true) => {
    return { required: { value: isRequired, message: 'Field is required!' } };
};
