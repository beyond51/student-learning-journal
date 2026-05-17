import { useToggle } from "../hooks/usetoggle";

import { useloginGsap } from "../hooks/usegsap";
import { useForm } from "react-hook-form";
import { uselogin } from "../hooks/uselogin";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Login = ({ settoggle }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { error } = useSelector((store) => store.error);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // react hook form

  let LoginRef = useRef({});

  // self made hook hai
  let { navigateToForgetFn, formsubmit } = uselogin();
  let { toggleFn } = useToggle(settoggle);
  useloginGsap(LoginRef);

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div
        ref={LoginRef}
        className="w-full max-w-md rounded-3xl border border-gray-200 bg-white shadow-2xl"
      >
        <div className="flex flex-col items-center px-6 pt-8 text-center md:px-10">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Login to continue your learning journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(formsubmit)}
          className="space-y-5 p-6 md:p-8"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              {...register("studentEmail", { required: true })}
              type="email"
              name="studentEmail"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
            />
            {errors?.studentEmail?.type === "required" && (
              <p className="text-red-600 text-sm ml-1">email is required</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-16 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:text-base"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors?.password?.type === "required" && (
              <p className="text-red-600 text-sm ml-1">password is required</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            {error ? (
              <h1 className="text-red-600 capitalize text-sm">*{error}</h1>
            ) : (
              <div></div>
            )}
            <button
              onClick={navigateToForgetFn}
              type="button"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:text-base"
          >
            Login
          </button>
        </form>

        <div className="pb-8 text-center">
          <p className="text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <span
              onClick={toggleFn}
              className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
