import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="pl-64 ">
      <main>
        <div className="py-6">
          <div className="px-4 mx-auto sm:px-6 md:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex items-center">
                <GrUserAdmin style={{ fontSize: "36px" }} />
                {/* <img className="flex-shrink-0 object-cover rounded-full w-14 h-14" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" /> */}
                <div className="ml-5">
                  <p className="text-lg font-bold text-gray-900">
                    Hey Eng. Jakwe! 👋
                  </p>
                  <p className="mt-1 pl-4 text-sm font-medium text-gray-500">
                    Monitor activities accross all sites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base font-bold text-gray-900">
                      Plant Performance
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      Last 30 days: $84,840 Profits
                    </p>

                    <div id="chart1" className="mt-0"></div>
                  </div>
                </div>

                <div className="space-y-6 lg:col-span-2">
                  <div className="overflow-hidden border border-indigo-200 bg-indigo-50 rounded-xl">
                    <div className="px-5 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="flex text-sm font-medium text-gray-500">
                            <HiOutlineStatusOnline
                              style={{
                                marginRight: "8px",
                                fontSize: "20px",
                                color: "green",
                              }}
                            />
                            Running Plant
                          </p>
                          <p className="mt-2 text-xl font-bold text-gray-900">
                            1, 693 Online
                          </p>
                        </div>

                        <div></div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                    <div className="px-4 py-5 sm:p-6">
                      <p className="mt-6 text-xs font-semibold tracking-widest text-green-500 uppercase">
                        New requisition
                      </p>
                      <p className="mt-6 text-lg font-medium text-green-500">
                        <span className="font-bold">Ziminya Site</span> is
                        requesting a disc harrow.
                      </p>
                      <p className="mt-3 text-sm font-medium text-green-500">
                        Requisition passed by the Site Agent.
                      </p>
                      <div className="flex items-center mt-6 space-x-4">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-green-600 hover:text-green-700"
                        >
                          Contact
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-green-700"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-green-800 p-4 md:p-6">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                          32.4k
                        </h5>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Users this week
                        </p>
                      </div>
                      <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        12%
                        <svg
                          className="w-3 h-3 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13V1m0 0L1 5m4-4 4 4"
                          />
                        </svg>
                      </div>
                    </div>
                    <div id="area-chart" />
                    <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                      <div className="flex justify-between items-center pt-5">
                        {/* Button */}
                        <button
                          id="dropdownDefaultButton"
                          data-dropdown-toggle="lastDaysdropdown"
                          data-dropdown-placement="bottom"
                          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                          type="button"
                        >
                          Last 7 days
                          <svg
                            className="w-2.5 m-2.5 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                          id="lastDaysdropdown"
                          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Yesterday
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Last 7 days
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Last 30 days
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Last 90 days
                              </a>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                        >
                          Users Report
                          <svg
                            className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                <div className="overflow-hidden border border-gray-200 lg:col-span-3 bg-gray-50 rounded-xl">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base font-bold text-gray-900">
                      Download Reports
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      Get pdf versions of reports for further analysis
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 py-4">
                          <div className="flex items-center justify-between space-x-5">
                            <div className="flex items-center flex-1">
                              <div className="flex-1 min-w-0 ml-4">
                                <p className="text-sm font-bold text-gray-900 truncate">
                                  Daily Diary
                                </p>
                                <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                                  Today&apos;s Activities
                                </p>
                              </div>
                            </div>

                            <div className="ml-auto">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                              >
                                <FaDownload
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "20px",
                                  }}
                                />
                                PDF
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 py-4">
                          <div className="flex items-center justify-between space-x-5">
                            <div className="flex items-center flex-1">
                              <div className="flex-1 min-w-0 ml-4">
                                <p className="text-sm font-bold text-gray-900 truncate">
                                  Weekly Report
                                </p>
                                <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                                  Summary for the week
                                </p>
                              </div>
                            </div>

                            <div className="ml-auto">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                              >
                                <FaDownload
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "20px",
                                  }}
                                />
                                PDF
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 py-4">
                          <div className="flex items-center justify-between space-x-5">
                            <div className="flex items-center flex-1">
                              <div className="flex-1 min-w-0 ml-4">
                                <p className="text-sm font-bold text-gray-900 truncate">
                                  Monthly Report
                                </p>
                                <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                                  Progress review for the whole month
                                </p>
                              </div>
                            </div>

                            <div className="ml-auto">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                              >
                                <FaDownload
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "20px",
                                  }}
                                />
                                PDF
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-6 rounded-xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div>
                        <p className="flex text-base font-bold text-gray-900">
                          <GiBreakingChain
                            style={{ marginRight: "8px", fontSize: "22px" }}
                          />
                          MAJOR BREAKDOWNS
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Equipment which is on breakdown and their statuses.
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0">
                        <a
                          href="#"
                          title=""
                          className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
                        >
                          See all Breakdowns
                          <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                        <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          PROGRESS
                        </span>
                      </div>

                      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                        <p className="text-sm font-bold text-gray-900">
                          HOHAN TIPPER
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          FLT 102
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="text-sm font-bold text-gray-900">
                          ALTERNATOR BELT
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Feb 17, 2024
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          TEFOMA
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                        <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          PROGRESS
                        </span>
                      </div>

                      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                        <p className="text-sm font-bold text-gray-900">
                          CAT EXCAVATOR
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          FCX 17
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="text-sm font-bold text-gray-900">
                          BUCKET BROKEN
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          FEB 12, 2024
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          HEBE P4
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                        <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          PENDING
                        </span>
                      </div>

                      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                        <p className="text-sm font-bold text-gray-900">
                          HOHAN TIPPER
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          FLT 52
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="text-sm font-bold text-gray-900">
                          TYRE BURST
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Jan 17, 2024
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          ZIMINYA
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                        <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3"></circle>
                          </svg>
                          DECOMISSIONED
                        </span>
                      </div>

                      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                        <p className="text-sm font-bold text-gray-900">
                          VOLVO EXCAVATOR
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          SXE 22
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="text-sm font-bold text-gray-900">
                          OVERHEATING
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Jan 17, 2023
                        </p>
                      </div>

                      <div className="px-4 lg:py-4 sm:px-6">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          TEFOMA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
