import React, { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ForgetPassword = () => {
  const {
    sendPassResetEmailFunc,
    setLoading
    } = useContext(AuthContext);

  const emailRef = useRef(null);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPassResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-500 to-green-800 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="card w-full max-w-sm bg-green-50/90 shadow-2xl border border-green-300">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center text-green-800">
                Forgot Password
              </h2>

              <form onSubmit={handleResetPassword} className="space-y-4 mt-4">
                <div>
                  <label className="label font-semibold text-green-800">
                    Email
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
                    placeholder="Enter your email"
                    className="input input-bordered w-full border-green-300"
                  />
                </div>

                <button className="btn w-full bg-green-600 hover:bg-green-700 text-white">
                  Reset Password
                </button>
              </form>

              <p className="text-center mt-3 text-sm">
                Back to{" "}
                <Link to="/login" className="text-green-700 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
