import { useToggle } from "../hooks/usetoggle";
import { useForm } from "react-hook-form";
import { useRegisterHook } from "../hooks/useRegisterHook";
import { useSelector } from "react-redux";

const Register = ({ settoggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let { error } = useSelector((store) => store.error);
  //hooks
  let { toggleFn } = useToggle(settoggle);
  let { formSubmit } = useRegisterHook();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white shadow-2xl md:max-w-1xl">
        {/* Header */}
        <div className="flex flex-col items-center px-6 pt-3 text-center md:px-10">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Create Account
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Start your learning journey today.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-1 p-6 md:p-10"
        >
          {/* Student Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Student Name
            </label>
            <input
              {...register("studentName", { required: true })}
              type="text"
              name="studentName"
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
            />
            {errors?.studentName?.type == "required" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *studentName is required
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Student Email
            </label>

            <input
              {...register("studentEmail", { required: true })}
              type="email"
              name="studentEmail"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
            />
            {errors?.studentEmail?.type == "required" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *studentEmail is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              name="password"
              placeholder="Create password"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
            />
            {errors?.password?.type == "required" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *password is required
              </p>
            )}
            {errors?.password?.type == "minLength" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *length of password must be 6
              </p>
            )}
          </div>

          {/* Course + Semester */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Course */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Course
              </label>

              <input
                {...register("course", { required: true })}
                type="text"
                name="course"
                placeholder="BCA"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
              />
              {errors?.course?.type == "required" && (
                <p className="text-xs text-red-500 ml-2 mt-1">
                  *course is required
                </p>
              )}
            </div>

            {/* Semester */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Semester / Year
              </label>

              <input
                {...register("semesterYear", { required: true })}
                type="text"
                name="semesterYear"
                placeholder="Semester 4"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
              />
              {errors?.semesterYear?.type == "required" && (
                <p className="text-xs text-red-500 ml-2 mt-1">
                  *semesterYear is required
                </p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>

            <input
              {...register("phoneNumber", {
                required: true,
                maxLength: 10,
                minLength: 10,
              })}
              type="number"
              name="phoneNumber"
              placeholder="Enter phone number"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
            />
            {errors?.phoneNumber?.type == "required" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *phoneNumber is required
              </p>
            )}
            {errors?.phoneNumber?.type == "maxLength" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *length of phoneNumber must be 10
              </p>
            )}
            {errors?.phoneNumber?.type == "minLength" && (
              <p className="text-xs text-red-500 ml-2 mt-1">
                *length of phoneNumber must be 10
              </p>
            )}
          </div>

          {/* Profile Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Profile Image
            </label>

            <input
              {...register("profileImage")}
              type="file"
              name="profileImage"
              className="w-full rounded-2xl border border-slate-300 p-3 text-sm"
            />
          </div>
          {error ? (
            <h1 className="text-red-600 capitalize text-sm">*{error}</h1>
          ) : (
            <div></div>
          )}
          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:text-base"
          >
            Register
          </button>
        </form>
        <div className="pb-8 text-center">
          <p className="text-sm text-slate-600">
            already have an account?{" "}
            <span
              onClick={toggleFn}
              className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700"
            >
              login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
