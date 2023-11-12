import { useForm } from '@/Hooks';
import { useCallback } from 'react';
import { useRequired } from '@/Hooks/Validation/useRequired';
import { useShouldBeEmail } from '@/Hooks/Validation/useShouldBeEmail';
import { useShouldBePassword } from '@/Hooks/Validation/useShouldBePassword';
import { useAppDispatch } from '@/Redux/ConfigureStore';
import { userAsyncActions } from '@/Redux/User/asyncActions';

export type FormData = {
   login: string;
   password: string;
   rememberMe: boolean;
};

export function useLoginForm() {
   const dispatch = useAppDispatch();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>();

   const onSubmit = useCallback((formData: FormData) => {
      dispatch(
         userAsyncActions.login({
            email: formData.login,
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
