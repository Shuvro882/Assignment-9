import React from 'react';
import { Link } from 'react-router';

const Login = () => {
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
                <fieldset className="space-y-3">

                  <label className="label font-semibold text-green-800">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full border-green-300 focus:border-green-500"
                  />

                  <label className="label font-semibold text-green-800">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full border-green-300 focus:border-green-500"
                  />

                  <div className="text-left">
                    <a className="text-sm text-green-700 hover:underline">
                      Forgot password?
                    </a>
                  </div>

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
                  <button className="flex items-center justify-center gap-2 w-full bg-white border text-gray-800 py-2 font-semibold hover:bg-gray-100">
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

                </fieldset>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
