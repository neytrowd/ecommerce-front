import { Link } from '@/Components/Controls/Link/Link';
import { PagesRouting } from '@/Routing';
import { FormInput } from '@/Components/Controls/Input/FormInput';
import { FormData, useRegisterForm } from './hooks/useRegisterForm';
import { FormCheckbox } from '@/Components/Controls/Checkbox/FormCheckbox';
import { Button } from '@/Components/Controls/Button/Button';

const SignUpPage = () => {
   const {
      methods: { register, watch },
      onSubmit,
      errors,
      rules: { required, valueMustBePassword, valueMustBeEmail },
   } = useRegisterForm();

   return (
      <section className="vh-100">
         <div className="container h-100 w-50">
            <div className="row h-100 d-flex flex-column justify-content-center align-items-center">
               <div className="w-50">
                  <form className="mt-4" onSubmit={onSubmit}>
                     <div className="text-center mb-3">
                        <p>Sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i className="fab fa-github"></i>
                        </button>
                     </div>

                     <p className="text-center">or:</p>

                     <div className="form-outline mb-4">
                        <label className="form-label">Firstname</label>
                        <FormInput<FormData> name={'firstName'} register={register} rules={required} error={errors} />
                     </div>
                     <div className="form-outline mb-4">
                        <label className="form-label">Lastname</label>
                        <FormInput<FormData> name={'lastName'} register={register} rules={required} error={errors} />
                     </div>

                     <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <FormInput<FormData>
                           name={'email'}
                           register={register}
                           rules={{
                              ...required,
                              ...valueMustBeEmail,
                           }}
                           error={errors}
                        />
                     </div>

                     <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <FormInput<FormData>
                           type="password"
                           name={'password'}
                           register={register}
                           rules={{
                              ...required,
                              ...valueMustBePassword,
                              validate: (val) => {
                                 if (watch('password') != val) {
                                    return 'Your passwords do no match';
                                 }
                              },
                           }}
                           error={errors}
                        />
                     </div>

                     <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="registerRepeatPassword">
                           Repeat password
                        </label>
                        <FormInput<FormData>
                           type="password"
                           name={'confirmPassword'}
                           register={register}
                           rules={{
                              validate: (val) => {
                                 if (watch('password') != val) {
                                    return 'Your passwords do no match';
                                 }
                              },
                           }}
                           error={errors}
                        />
                     </div>

                     <div className="form-outline mb-4">
                        <FormCheckbox<FormData>
                           name={'agreeWithTerms'}
                           register={register}
                           label="I have read and agree to the terms"
                        />
                     </div>

                     <Button type="submit" fullWith className="mb-3">
                        Sign up
                     </Button>

                     <div className="d-flex align-items-center justify-content-center">
                        <span>Already have an account?</span>
                        <Link to={PagesRouting.AuthorizationPages.LoginPage} className="nav-link" text={'Login'} />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignUpPage;
