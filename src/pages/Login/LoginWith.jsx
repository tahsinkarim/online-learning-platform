import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const LoginWith = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className='flex -mx-3'>
        <div className='w-full px-3 mb-2'>
          <button
            onClick={handleGoogleLogin}
            className='flex gap-7 w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-2 font-semibold'
          >
            Continue With Google
          </button>
        </div>
      </div>
      <div className='flex -mx-3'>
        <div className='w-full px-3 mb-2'>
          <button
            onClick={handleGithubLogin}
            className='flex gap-7 w-full max-w-xs mx-auto bg-gray-800 hover:bg-black focus:bg-black text-white rounded-lg px-3 py-2 font-semibold'
          >
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWith;
