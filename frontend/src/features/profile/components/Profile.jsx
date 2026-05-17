import { useProfileHook } from "../hooks/useProfileHook";

const Profile = () => {
  let {
    student,
    setStudent,
    isEdit,
    setIsEdit,
    user,
    handleChange,
    handleSubmit,
  } = useProfileHook();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

        <div className="px-8 pb-8">
          <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="flex items-center gap-5">
              <div className="">
                <img
                  src={user?.profileImage}
                  alt="profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {student.studentName}
                </h1>

                <p className="text-gray-700 font-semibold text-red-600 mt-1 ">
                  {student.studentEmail}
                </p>

                <span className="inline-block mt-3 bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
                  {student.course}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsEdit(!isEdit)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl transition shadow-md"
            >
              {isEdit ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student Name
              </label>

              <input
                type="text"
                name="studentName"
                value={student.studentName}
                onChange={handleChange}
                disabled={!isEdit}
                className={`w-full px-4 py-3 rounded-2xl border outline-none ${
                  isEdit
                    ? "border-indigo-400 focus:ring-2 focus:ring-indigo-500"
                    : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="studentEmail"
                value={student.studentEmail}
                onChange={handleChange}
                disabled={!isEdit}
                className={`w-full px-4 py-3 rounded-2xl border outline-none ${
                  isEdit
                    ? "border-indigo-400 focus:ring-2 focus:ring-indigo-500"
                    : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Course
              </label>

              <input
                type="text"
                name="course"
                value={student.course}
                onChange={handleChange}
                disabled={!isEdit}
                className={`w-full px-4 py-3 rounded-2xl border outline-none ${
                  isEdit
                    ? "border-indigo-400 focus:ring-2 focus:ring-indigo-500"
                    : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Semester / Year
              </label>

              <input
                type="text"
                name="semesterYear"
                value={student.semesterYear}
                onChange={handleChange}
                disabled={!isEdit}
                className={`w-full px-4 py-3 rounded-2xl border outline-none ${
                  isEdit
                    ? "border-indigo-400 focus:ring-2 focus:ring-indigo-500"
                    : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phoneNumber"
                value={student.phoneNumber}
                onChange={handleChange}
                disabled={!isEdit}
                className={`w-full px-4 py-3 rounded-2xl border outline-none ${
                  isEdit
                    ? "border-indigo-400 focus:ring-2 focus:ring-indigo-500"
                    : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                profile Image
              </label>

              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                disabled={!isEdit}
                className={`w-full px-4 py-3 rounded-2xl border outline-none ${
                  isEdit
                    ? "border-indigo-400 focus:ring-2 focus:ring-indigo-500"
                    : "bg-gray-100 border-gray-200"
                }`}
              />
            </div>

            {isEdit && (
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-semibold transition"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
