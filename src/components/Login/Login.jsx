import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ setLoginModal }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = data => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-base">
            Email
          </legend>
          <input
            type="text"
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
            className="input input-lg rounded-xl w-full outline-0 text-sm"
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Email is required</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="text-red-500">Enter valid email</p>
          )}
        </fieldset>

        <fieldset className="fieldset relative">
          <legend className="fieldset-legend font-semibold text-base">
            Password
          </legend>
          <input
            type={isPasswordShow ? 'text' : 'password'}
            {...register('password', {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="input input-lg rounded-xl w-full outline-0 text-sm pr-12"
          />
          <button
            type="button"
            className="absolute top-4 right-4 cursor-pointer z-50"
            onClick={() => setIsPasswordShow(!isPasswordShow)}
          >
            {isPasswordShow ? <EyeOff /> : <Eye />}
          </button>

          {errors.password?.type === 'required' && (
            <p className="text-red-500">Password is required</p>
          )}

          {errors.password?.type === 'pattern' && (
            <p className="text-red-500">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
              <br />
              At least one spacial character
            </p>
          )}
        </fieldset>

        <div className="flex items-center gap-2 pb-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-sm checkbox-neutral"
          />
          <p className="font-semibold">Keep me logged in</p>
        </div>

        <button className="btn w-full bg-black text-white border-[#e5e5e5] py-6 px-6 rounded-full text-lg font-semibold">
          Log in
        </button>
      </form>

      <section>
        <ul className="text-center mt-5 space-y-2 text-[#232326]">
          <li className="text-[#3659e3] font-semibold">Forgot password?</li>
          <li>
            <p className="text-[#232326]text-center">
              Issues with login?{' '}
              <button className="text-[#3659e3] font-semibold cursor-pointer">
                Get help
              </button>
            </p>
          </li>
          <li>
            <p className="text-[#232326]text-center">
              Do not have an account yet?{' '}
              <button
                onClick={() => setLoginModal(false)}
                className="text-[#3659e3] font-semibold cursor-pointer"
              >
                Sign up
              </button>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Login;
