import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-500 to-green-800 flex items-center">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left text-white">
        <h1 className="text-5xl font-bold mb-6">Login now!</h1>
        <p className="text-lg leading-relaxed">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>

      {/* Right Form Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="card w-full max-w-sm bg-green-50/90 backdrop-blur shadow-2xl border border-green-300">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label text-green-800 font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered border-green-300 focus:border-green-500"
                placeholder="Email"
              />

              <label className="label text-green-800 font-semibold">Password</label>
              <input
                type="password"
                className="input input-bordered border-green-300 focus:border-green-500"
                placeholder="Password"
              />

              <div className="mt-2">
                <a className="link link-hover text-green-700">
                  Forgot password?
                </a>
              </div>
              

              <button className="btn bg-green-600 hover:bg-green-700 text-white mt-4">
                Login
              </button>

              <p className='font-semibold text-center'>Don't Have An Account ? <Link className='text-secondary' to={"/register"} >Register</Link></p>
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