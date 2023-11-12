import { useForm } from '@/Hooks';
import { useCallback } from 'react';
import { useRequired } from '@/Hooks/Validation/useRequired';
import { useShouldBeEmail } from '@/Hooks/Validation/useShouldBeEmail';
import { useShouldBePassword } from '@/Hooks/Validation/useShouldBePassword';
import { useAppDispatch } from '@/Redux/ConfigureStore';
import { userAsyncActions } from '@/Redux/User/asyncActions';

export type FormData = {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;
   agreeWithTerms: boolean;
};

export function useRegisterForm() {
   const dispatch = useAppDispatch();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<FormData>();

   const onSubmit = useCallback((formData: FormData) => {
      dispatch(
         userAsyncActions.register({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
         }),
      );
   }, []);

   // Rules
   const required = useRequired();
   const valueMustBeEmail = useShouldBeEmail();
   const valueMustBePassword = useShouldBePassword();

   return {
      methods: {
         register,
         watch,
      },
      errors,
      onSubmit: handleSubmit(onSubmit),
      rules: {
         required,
         valueMustBeEmail,
         valueMustBePassword,
      },
   };
}
