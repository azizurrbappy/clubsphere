import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { AuthModal } from '../../Context/AuthModal';

const SignUp = ({ setLoginModal, setSignUpModal }) => {
  const { resetModal, onboardingModal } = use(AuthModal);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const axios = useAxiosSecure();
  const { signUpWithEmail, updateUserProfile, setLoading, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignUp = async data => {
    try {
      // Check user
      const res = await axios(`/user?email=${data.userEmail}`);
      if (res.data.email === data.userEmail) {
        reset();
        onboardingModal('login');
        setLoading(false);
        return toast.error(
          'Sorry! This email address is already in use. Please login.'
        );
      }

      const { user } = await signUpWithEmail(data.userEmail, data.userPassword);
      await updateUserProfile(user, data.userName, data.userPhoto);

      const { displayName, photoURL, email, emailVerified, metadata, uid } =
        user;
      const { creationTime, lastSignInTime } = metadata;

      const credential = {
        name: displayName,
        email: email,
        emailVerified: emailVerified,
        photoURL: photoURL,
        location: data.location || 'N/A',
        age: data.age,
        role: 'member',
        providerId: 'password',
        userID: uid,
        metadata: {
          creationTime: creationTime,
          lastSignInTime: lastSignInTime,
        },
      };
      await axios.post('/users?providerId=password', credential).then(res => {
        if (res.data.insertedId) {
          toast.success('Signup successful!');
          resetModal();
          reset();

          setLoading(false);
        }
      });
    } catch (error) {
      if (error.response.data.error) {
        toast.error(error.response.data.error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-2">
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-base">
            Your name
          </legend>
          <input
            type="text"
            {...register('userName', {
              required: true,
              minLength: 2,
            })}
            className="input input-lg rounded-xl w-full outline-0 text-sm"
            placeholder="Your full name here"
          />
          {!errors.userName && (
            <p className="text-[#7d7d82] mt-1">
              Your name will be public on your ClubSphere profile
            </p>
          )}
          {errors.userName?.type === 'required' && (
            <p className="text-red-500">Name is required</p>
          )}
          {errors.userName?.type === 'minLength' && (
            <p className="text-red-500">Name has to be at least 2 characters</p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-base">
            Your photo
          </legend>
          <input
            type="text"
            {...register('userPhoto', {
              minLength: 2,
            })}
            className="input input-lg rounded-xl w-full outline-0 text-sm"
            placeholder="Your photo url here"
          />
          {!errors.userPhoto && (
            <p className="text-[#7d7d82] mt-1">
              Your photo will be public on your ClubSphere profile
            </p>
          )}
          {errors.userPhoto?.type === 'minLength' && (
            <p className="text-red-500">
              Photo url has to be at least 2 characters
            </p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-base">
            Email
          </legend>
          <input
            type="text"
            {...register('userEmail', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
            className="input input-lg rounded-xl w-full outline-0 text-sm"
            placeholder="example@email.com"
          />
          {!errors.userEmail && (
            <p className="text-[#7d7d82] mt-1">
              We’ll use your email address to send you updates and to verify
              your account
            </p>
          )}
          {errors.userEmail?.type === 'required' && (
            <p className="text-red-500">Email is required</p>
          )}
          {errors.userEmail?.type === 'pattern' && (
            <p className="text-red-500">Enter valid email</p>
          )}
        </fieldset>

        <fieldset className="fieldset relative">
          <legend className="fieldset-legend font-semibold text-base">
            Password
          </legend>
          <input
            type={isPasswordShow ? 'text' : 'password'}
            {...register('userPassword', {
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

          {errors.userPassword?.type === 'required' && (
            <p className="text-red-500">Password is required</p>
          )}

          {errors.userPassword?.type === 'pattern' && (
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

        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-base">
            Location
          </legend>
          <input
            type="text"
            {...register('location')}
            className="input input-lg rounded-xl w-full outline-0 text-sm"
            placeholder="Neighborhood, city or zip"
          />
          <p className="text-[#7d7d82] mt-1">
            We’ll use your location to show ClubSphere events near you.
          </p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-base">
            Age
          </legend>
          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              {...register('age', { required: true })}
              className="checkbox checkbox-sm checkbox-neutral"
            />
            <p className="font-semibold text-sm">
              I am 18 years of age or older.
            </p>
          </div>
          {errors.age?.type === 'required' && (
            <p className="text-red-500">
              ClubSphere members and organizers must be at least 18 years of
              age.{' '}
            </p>
          )}
        </fieldset>

        <button className="btn w-full bg-black text-white border-[#e5e5e5] py-6 px-6 rounded-full text-lg font-semibold">
          Sign up
        </button>
      </form>

      <section>
        <ul className="text-center mt-5 space-y-2 text-[#232326]">
          <li>
            <p className="text-[#232326]text-center">
              Already have an account?{' '}
              <button
                onClick={() => {
                  setSignUpModal(false);
                  reset();
                  setLoginModal(true);
                }}
                className="text-[#3659e3] font-semibold cursor-pointer"
              >
                Login
              </button>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SignUp;
