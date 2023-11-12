import { Link } from '@/Components/Controls/Link/Link';
import { PagesRouting } from '@/Routing';
import { useLoginForm, FormData } from './hooks/useLoginForm';
import { FormInput } from '@/Components/Controls/Input/FormInput';
import { FormCheckbox } from '@/Components/Controls/Checkbox/FormCheckbox';
import { Button } from '@/Components/Controls/Button/Button';

const SignInPage = () => {
   const {
      methods: { register },
      onSubmit,
      errors,
      rules: { required, valueMustBePassword, valueMustBeEmail },
   } = useLoginForm();

   return (
      <section className="vh-100">
         <div className="container h-100 w-50">
            <div className="row h-100 d-flex flex-column justify-content-center align-items-center">
               <div className="w-50">
                  <form className="mt-4" onSubmit={onSubmit}>
                     <div className="text-center mb-3">
                        <p>Sign in with:</p>
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
                        <label className="form-label">Email</label>
                        <FormInput<FormData>
                           name={'login'}
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
                           }}
                           error={errors}
                        />
                     </div>

                     <div className="row mb-4">
                        <div className="col-md-6 d-flex justify-content-center">
                           <FormCheckbox<FormData> name={'rememberMe'} register={register} label="Remember me" />
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                           <a href="#">Forgot password?</a>
                        </div>
                     </div>

                     <Button type="submit" fullWith className="mb-3">
                        Sign in
                     </Button>

                     <div className="d-flex align-items-center justify-content-center">
                        <span>Not a member?</span>
                        <Link
                           text={'Register'}
                           className="nav-link"
                           to={PagesRouting.AuthorizationPages.RegistrationPage}
                        />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignInPage;
