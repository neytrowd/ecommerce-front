import { useForm as useReactForm, useFormContext as useReactFormContext, UseFormProps } from 'react-hook-form';

export { FormProvider, useFieldArray } from 'react-hook-form';

export const useForm = <TFormData>(props?: UseFormProps<TFormData>) => {
  const methods = useReactForm<TFormData>(props);
  return methods;
};

export const useFormContext = <TFormData>() => {
  const methods = useReactFormContext<TFormData>();
  return methods;
};
