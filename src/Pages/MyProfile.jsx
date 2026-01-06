import { useContext } from "react";
import PageWrapper from "../Layouts/PageWrapper";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-lg font-semibold">Loading profile...</p>
        </div>
      </PageWrapper>
    );
  }

  if (!user) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-red-500 text-lg">No user data found</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md text-center">

          {/* Profile Image */}
          <img
            src={user.photoURL || "https://via.placeholder.com/120"}
            alt="User"
            className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover"
          />

          {/* Name */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user.displayName || "No Name Found"}
          </h2>

          {/* Email */}
          <p className="mt-2 text-gray-600">
            {user.email || "No Email Found"}
          </p>

        </div>
      </div>
    </PageWrapper>
  );
};

export default MyProfile;
