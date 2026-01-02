import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Register = () => {
    const [show, setShow] = useState(false);

    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

      console.log('sign up entered',{email, password});
    //   console.log(password.length);
    //   if(password.length < 6){
    //     toast.error("Password should be at least 6 digit");
    //     return;
    //   }

      const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
      if(!regExp.test(password)){
        toast.error(
    "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
      }

      createUserWithEmailAndPassword(auth, email, password)
      .then(res=> {
          console.log(res);
          toast.success("Registration Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      })
    };
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-500 to-green-800 flex items-center font-sans text-base">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold mb-6">Register now!</h1>
            <p className="text-lg leading-relaxed">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="card w-full max-w-sm bg-green-50/90 backdrop-blur shadow-2xl border border-green-300">
              <div className="card-body">
                <form onSubmit={handleRegister} className="space-y-3">

                  <div>
                    <label className="label font-semibold text-green-800">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full border-green-300 focus:border-green-500"
                  />
                  </div>

                  <div>
                    <label className="label font-semibold text-green-800">Photo URL</label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered w-full border-green-300 focus:border-green-500"
                  />
                  </div>

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

                  <button className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-base mt-2">
                    Register
                  </button>

                  <p className="text-center font-semibold text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-700 hover:underline">
                      Login
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

export default Register;
