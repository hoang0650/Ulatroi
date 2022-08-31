import { useRouter } from "next/router";
import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  ChartBarIcon,
  PencilIcon,
  ViewListIcon,
  CheckIcon,
  CameraIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";

const UserDetails = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [User, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataBody = new FormData();
      dataBody.append("server_key", "83f0fa958d10392fd10bc8bb377a044c");
      dataBody.append("fetch", "user_data");
      dataBody.append("user_id", id);

      const response = await Axios.post(
        "https://ulatroi.net/api/get-user-data?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a",
        dataBody
      );
      const data = response?.data?.user_data;
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url" + "('" + User?.cover + "')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-3">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={User?.avatar}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                      <div className="inline-flex absolute -bottom-0  justify-center items-center w-8 h-8 text-xs font-bold text-white bg-red-800 hover:bg-red-600 rounded-full border-2 border-white">
                        <button type="button">
                          <CameraIcon className="w-5" />
                        </button>
                      </div>
                      <div className="inline-flex absolute  -top-14 -right-20 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        type="button"
                        className="text-white bg-red-800 hover:bg-red-600 active:bg-red-600 uppercase focus:outline-none font-bold rounded text-xs px-4 py-2 text-center inline-flex items-center mr-2"
                      >
                        <ChartBarIcon
                          width={24}
                          className="mr-2 -ml-1 w-5 h-5"
                        />
                        Analytics
                      </button>
                      <button
                        type="button"
                        className="text-white bg-red-800 hover:bg-red-600 active:bg-red-600 uppercase focus:outline-none font-bold rounded text-xs px-4 py-2 text-center inline-flex items-center mr-2"
                      >
                        <PencilIcon width={24} className="mr-2 -ml-1 w-5 h-5" />
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-white bg-red-800 hover:bg-red-600 active:bg-red-600 uppercase focus:outline-none font-bold rounded text-xs px-4 py-2 text-center inline-flex items-center mr-2"
                      >
                        <ViewListIcon
                          width={24}
                          className="mr-2 -ml-1 w-5 h-5"
                        />
                        Activities
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {User?.details?.following_count}
                        </span>
                        <span className="text-sm text-gray-500">Following</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {User?.details?.followers_count}
                        </span>
                        <span className="text-sm text-gray-500">Followers</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {User?.details?.post_count}
                        </span>
                        <span className="text-sm text-gray-500">Posts</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {User?.details?.likes_count}
                        </span>
                        <span className="text-sm text-gray-500">Likes</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {User?.details?.groups_count}
                        </span>
                        <span className="text-sm text-gray-500">Groups</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    {User?.first_name} {User?.last_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    @{User?.username}
                  </div>
                </div>
              </div>
            </div>
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl p-5 bg-white">
                <Tab>
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Timeline
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Groups
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Likes
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Following
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full">
                      {User?.details?.following_count}
                    </span>
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Followers
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full">
                      {User?.details?.followers_count}
                    </span>
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Photos
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Videos
                  </button>
                </Tab>
                <Tab className="mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Products
                  </button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="justify-center items-center flex space-x-1 rounded-xl p-5">
                <Tab.Panel>
                  <div className="container p-4">
                    <div className="md:flex no-wrap md:-mx-2 ">
                      <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-t-4 border-red-800">
                          <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                            {User?.name}
                          </h1>
                          <h3 className="text-gray-600 font-lg text-semibold leading-6">
                            {User?.email}
                          </h3>
                          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                              <span>Status</span>
                              <span className="ml-auto">
                                <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                  Online
                                </span>
                              </span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Gender</span>
                              <span className="ml-auto uppercase">
                                {" "}
                                {User?.gender}
                              </span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Birthday</span>
                              <span className="ml-auto"> {User?.birthday}</span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Website</span>
                              <span className="ml-auto">
                                <a href={User?.website}>
                                  <button
                                    type="button"
                                    className="inline-flex items-center py-1 px-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                    View
                                  </button>
                                </a>
                              </span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Working at</span>
                              <span className="ml-auto"> {User?.working}</span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Studied at</span>
                              <span className="ml-auto"> {User?.school}</span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Living in</span>
                              <span className="ml-auto">Vietnam</span>
                            </li>
                            <li className="flex items-center py-3">
                              <span>Located in</span>
                              <span className="ml-auto"> {User?.address}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="my-4"></div>
                        {/* <div class="bg-white p-3 hover:shadow">
                          <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span class="text-green-500">
                              <svg
                                class="h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </span>
                            <span>Similar Profiles</span>
                          </div>
                          <div class="grid grid-cols-3">
                            <div class="text-center my-2">
                              <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt=""
                              />
                              <a href="#" class="text-main-color">
                                Kojstantin
                              </a>
                            </div>
                            <div class="text-center my-2">
                              <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                alt=""
                              />
                              <a href="#" class="text-main-color">
                                James
                              </a>
                            </div>
                            <div class="text-center my-2">
                              <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt=""
                              />
                              <a href="#" class="text-main-color">
                                Natie
                              </a>
                            </div>
                            <div class="text-center my-2">
                              <img
                                class="h-16 w-16 rounded-full mx-auto"
                                src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                alt=""
                              />
                              <a href="#" class="text-main-color">
                                Casey
                              </a>
                            </div>
                          </div>
                        </div> */}
                      </div>

                      <div className="w-full md:w-9/12 mx-2 h-64">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clasName="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">About</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>

                        <div className="my-4"></div>

                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="grid grid-cols-2">
                            <div>
                              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                  <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </span>
                                <span className="tracking-wide">Experience</span>
                              </div>
                              <ul className="list-inside space-y-2">
                                <li>
                                  <div className="text-teal-600">
                                    Owner at Her Company Inc.
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    March 2020 - Now
                                  </div>
                                </li>
                                <li>
                                  <div className="text-teal-600">
                                    Owner at Her Company Inc.
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    March 2020 - Now
                                  </div>
                                </li>
                                <li>
                                  <div className="text-teal-600">
                                    Owner at Her Company Inc.
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    March 2020 - Now
                                  </div>
                                </li>
                                <li>
                                  <div className="text-teal-600">
                                    Owner at Her Company Inc.
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    March 2020 - Now
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                  <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      fill="#fff"
                                      d="M12 14l9-5-9-5-9 5 9 5z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                  </svg>
                                </span>
                                <span className="tracking-wide">Education</span>
                              </div>
                              <ul className="list-inside space-y-2">
                                <li>
                                  <div className="text-teal-600">
                                    Masters Degree in Oxford
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    March 2020 - Now
                                  </div>
                                </li>
                                <li>
                                  <div className="text-teal-600">
                                    Bachelors Degreen in LPU
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    March 2020 - Now
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
                <Tab.Panel>
                <div className="justify-center container items-center flex space-x-1 rounded-xl p-5 bg-white">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Group</span>
                          </div>
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  First Name
                                </div>
                                <div className="px-4 py-2">Jane</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Last Name
                                </div>
                                <div className="px-4 py-2">Doe</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Gender
                                </div>
                                <div className="px-4 py-2">Female</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Contact No.
                                </div>
                                <div className="px-4 py-2">+11 998001001</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Current Address
                                </div>
                                <div className="px-4 py-2">
                                  Beech Creek, PA, Pennsylvania
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Permanant Address
                                </div>
                                <div className="px-4 py-2">
                                  Arlington Heights, IL, Illinois
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Email.
                                </div>
                                <div className="px-4 py-2">
                                  <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                  >
                                    jane@example.com
                                  </a>
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                  Birthday
                                </div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                              </div>
                            </div>
                          </div>
                          <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                          </button>
                        </div>
                  </div>
                  
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserDetails;
