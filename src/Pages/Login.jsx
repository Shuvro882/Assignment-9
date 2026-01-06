import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';



const Login = () => {
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    setLoading,
    setUser,
    user
  } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/" ;
  const navigate = useNavigate();

  if(user){
     navigate("/");
     return;
  }
  
  console.log(location)
  
  const handleSignin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({email,password});
    

    signInWithEmailAndPasswordFunc(email, password)
    .then((res) => {
      console.log(res);
      setLoading(false);
      setUser(res.user);
      toast.success("Signin successful");
      navigate(from);
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.message)
    });
  }
console.log();
  
  const handleGoogleLogin =()=>{
    signInWithEmailFunc()
    .then((res) => {
      console.log(res);
      setLoading(false);
      setUser(res.user);
      toast.success("Signin successful");
      navigate(from);
      
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.message)
    });
  };

  
  


  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-500 to-green-800 flex items-center font-sans text-base">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold mb-6">Login now!</h1>
            <p className="text-lg leading-relaxed">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="card w-full max-w-sm bg-green-50/90 backdrop-blur shadow-2xl border border-green-300">
              <div className="card-body">
                 <form onSubmit={handleSignin} className="space-y-3">

                  <div>
                    <label className="label font-semibold text-green-800">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full border-green-300 focus:border-green-500"
                  />
                  </div>

                  <div className='relative'>
                    <label className="label font-semibold text-green-800">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full border-green-300 focus:border-green-500"
                  />
                  <span onClick={()=> setShow(!show)} className='absolute right-2 top-8 z-50'>
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                  </div>

                  
                    <Link
                    to="/forget-password"
                    className="text-sm text-green-700 hover:underline text-left"
                    >
                     Forgot password?
                    </Link>



                  <button className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-base">
                    
                    Login
                  </button>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-2 my-2">
                    <div className="h-px w-16 bg-gray-400"></div>
                    <span className="text-sm text-gray-500">or</span>
                    <div className="h-px w-16 bg-gray-400"></div>
                  </div>

                  {/* Google */}
                  <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 w-full bg-white border text-gray-800 py-2 font-semibold hover:bg-gray-100">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-5 h-5"
                    />
                    Continue with Google
                  </button>

                  <p className="text-center font-semibold text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-green-700 hover:underline">
                      Register
                    </Link>
                  </p>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
