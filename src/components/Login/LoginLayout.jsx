//import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
//import React from 'react'

const LoginLayout = () => {
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-sm mx-auto">
            <div className="text-center">
              <img
                className="w-auto h-18 mx-20 pt-8"
                src="https://www.zimyellow.com/logos/profile/limage-13656-478-photo.jpg"
                alt=""
              />
              <h1 className="mt-12 text-3xl font-bold text-gray-900">
                Fossil Contracting Admin Dashboard
              </h1>
              <p className="mt-4 text-sm font-medium text-gray-500">
                Kuzolunga!
              </p>
            </div>
            {/* <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                <FaLock />
              </button>
            </div> */}
            <div className="">
              <div className="absolute inset-0 flex items-center">
                <div className="" />
              </div>
              <div className="relative flex justify-center">
                {/* <span className="px-2 text-sm text-gray-400 bg-white">
                  {" "}
                  or{" "}
                </span> */}
              </div>
            </div>
            <form action="#" method="POST" className="mt-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="" className="text-sm font-bold text-gray-900">
                    {" "}
                    Email{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email address"
                      defaultValue=""
                      className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-green-600 hover:text-green-700"
                    >
                      {" "}
                      Forgot Password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password (min. 8 character)"
                      defaultValue=""
                      className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="remember-password"
                      id="remember-password"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3">
                    <label
                      htmlFor="remember-password"
                      className="text-sm font-medium text-gray-900"
                    >
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>
                <div>
                  <Link to="/dashboard" className="px-8 py-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-green-900"
                    >
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginLayout;
