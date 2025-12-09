import React, { use, useState } from 'react';
import { AuthModal } from '../Context/AuthModal';
import { ArrowLeft, X } from 'lucide-react';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ModalProvider = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const { user, signInWithGoogle, setLoading } = use(AuthContext);
  const axios = useAxiosSecure();

  const onboardingModal = (modalType = '') => {
    if (modalType === 'login') {
      setIsAuthModalOpen(true);
      setLoginModal(true);
    } else {
      setIsAuthModalOpen(true);
      setLoginModal(false);
    }
  };

  const modalContextValue = {
    onboardingModal,
  };

  // Firebase Provider
  const googleSignIn = async () => {
    try {
      const currentUser = await signInWithGoogle();
      const { displayName, email, photoURL } = currentUser.user;
      const credential = {
        name: displayName,
        email: email,
        photoURL: photoURL,
        location: 'N/A',
        age: false,
        signInWith: 'google',
        createdAt: new Date().toISOString(),
      };
      await axios.post('/users', credential);
      toast.success('Successfully sign in with google!');
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const gitHubSignIn = () => {
    toast.info('GitHub sign in coming soon...');
  };

  return (
    <AuthModal value={modalContextValue}>
      {/* Main Content */}
      {children}

      {/* All Modals */}
      {isAuthModalOpen && (
        <dialog open className="modal backdrop-blur-xs">
          <div className="modal-box w-11/12 max-w-[500px] max-h-[calc(100vh-10vh)] p-0 rounded-3xl scrollbar-hide overflow-y-auto">
            <div
              className={`flex items-center p-4 sticky top-0 z-50 bg-white ${
                signUpModal ? 'justify-between' : 'justify-end'
              }`}
            >
              {signUpModal && (
                <button
                  onClick={() => setSignUpModal(false)}
                  className="cursor-pointer rounded-full hover:bg-gray-50 p-1.5"
                >
                  <ArrowLeft size={20} color="#69696c" />
                </button>
              )}
              <button
                onClick={() => {
                  setIsAuthModalOpen(false);
                  setSignUpModal(false);
                }}
                className="cursor-pointer rounded-full hover:bg-gray-50 p-1.5"
              >
                <X size={20} color="#69696c" />
              </button>
            </div>

            {/* Modal Content */}
            <section className="px-7 pb-7">
              <h3 className="text-3xl font-bold text-[#232326] text-center pb-10">
                {loginModal ? 'Login' : 'Sign up'}
              </h3>

              {!signUpModal && (
                <div className="flex flex-col gap-3">
                  <button
                    onClick={googleSignIn}
                    className="btn bg-transparent text-black border-[#e5e5e5] py-6 px-6 rounded-full text-lg font-semibold"
                  >
                    <svg
                      aria-label="Google logo"
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    {loginModal ? 'Login' : 'Continue'} with Google
                  </button>

                  <button
                    onClick={gitHubSignIn}
                    className="btn bg-transparent text-black border-[#e5e5e5] py-6 px-6 rounded-full text-lg font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="18"
                      height="18"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                    {loginModal ? 'Login' : 'Continue'} with GitHub
                  </button>
                </div>
              )}

              {!signUpModal && (
                <div className="divider divide-[#d0d0d4] text-sm text-[#69696c]">
                  or
                </div>
              )}

              {/* For Email Sign Up */}
              {!loginModal && !signUpModal && (
                <div>
                  <button
                    onClick={() => setSignUpModal(true)}
                    className="btn w-full bg-transparent hover:bg-[#1212150c] text-black border-0 shadow-none py-6 px-6 rounded-full text-lg font-semibold"
                  >
                    Sign up with email
                  </button>

                  <p className="text-[#232326] mt-5 text-center">
                    Already have an account?{' '}
                    <button
                      onClick={() => setLoginModal(!loginModal)}
                      className="text-[#3659e3] font-semibold cursor-pointer"
                    >
                      Log in
                    </button>
                  </p>
                </div>
              )}

              {/* login form */}
              {loginModal && (
                <Login
                  setLoginModal={setLoginModal}
                  setSignUpModal={setSignUpModal}
                ></Login>
              )}

              {/* login form */}
              {signUpModal && (
                <SignUp
                  setLoginModal={setLoginModal}
                  setSignUpModal={setSignUpModal}
                ></SignUp>
              )}
            </section>
          </div>
        </dialog>
      )}
    </AuthModal>
  );
};

export default ModalProvider;
