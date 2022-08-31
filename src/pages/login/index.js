import React from "react";
import Head from "next/head";
import bg from "../../../public/pinkbackground.png";
import "../../../firebaseConfig";
import { withPublic } from "../../hook/route";


function Login({auth}) {
  const { user, loginWithGoogle, error } = auth;
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Header */}
        <div className="grid grid-cols-6 gap-1 pt-5">
          <div></div>
          <div>
            <img
              height={50}
              width={50}
              src="https://ulatroi.net/themes/wondertag/img/logo.png"
            />
          </div>
          <div></div>
          <div></div>
          <div>
            <button className="bg-red-800 hover:bg-red-600 text-white font-medium py-2 px-4 rounded float-right">
              Register
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-12 gap-3 mt-20">
          <div className="hidden col-span-2 lg:block"></div>

          <div className="hidden col-span-4 pt-10 lg:block">
            <h2
              style={{ color: "#212529" }}
              className="font-medium text-3xl block mb-10"
            >
              {"Share what's new and life moments with your friends."}
            </h2>
            <p
              style={{ color: "#212529" }}
              className="font-medium text-base block mb-5"
            >
              Trending!
            </p>
            <p className="block mb-5">Content of trending</p>
            <p
              style={{ color: "#212529" }}
              className="font-medium text-base block mb-5"
            >
              Joined users
            </p>
            {/* <p class="block mb-5">Avatars</p> */}
            <div className='grid grid-cols-6 gap-2'>
            
              <img src='https://ulatroi.net/themes/wondertag/img/logo.png' preview={false}/>     
           
              <img src='https://ulatroi.net/themes/wondertag/img/logo.png' preview={false}/>
            
              <img src='https://ulatroi.net/themes/wondertag/img/logo.png' preview={false}/>
        
              <img src='https://ulatroi.net/themes/wondertag/img/logo.png' preview={false}/>
        
              <img src='https://ulatroi.net/themes/wondertag/img/logo.png' preview={false}/>
  
              <img src='https://ulatroi.net/themes/wondertag/img/logo.png' preview={false}/>
   
          </div>
          </div>

          <div className="hidden col-span-2 sm:flex lg:block lg:col-span-1"></div>

          <div className="col-span-12 md:col-span-8 lg:col-span-3">
            <div className="w-full max-w-lg h-64 ">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p
                  style={{ color: "#212529" }}
                  className="font-bold text-lg block mb-5"
                >
                  Welcome!
                </p>
                {error && <h1>{error}</h1>}
                <h1>{user?.uid}</h1>
                <div className="mb-4">
                  {/* backgroundColor: '#f5f5f5', width: 250, height: 56, alignContent: 'left', borderRadius: 5, borderBottomColor: 'black' */}
                  <input
                    className="leading-10 bg-gray-100 border-gray-500 border-b-1 border border-l-0 border-r-0 border-t-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="leading-10 bg-gray-100 border-gray-500 border-b-1 border border-l-0 border-r-0 border-t-0 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="mb-6">
                  <span>
                    <input className="mr-4" id="password" type="checkbox" />
                    Remember this device?
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="w-40 bg-red-800 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={loginWithGoogle}
                    className="bg-green-800 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Google
                  </button>
                </div>
              </form>
              <div
                style={{
                  fontSize: 15,
                  marginTop: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" Don't have account? "}
                <a style={{ color: "#a52729", fontWeight: "bold" }}>Register</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-12 mt-40">
          <div className="col-span-12 text-center ml-5 mr-5">
            <a style={{ fontSize: 15, color: "black" }}>
              © 2022 U là Trời · Terms of Use · Privacy Policy · Contact Us ·
              About · Market · Language{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default withPublic(Login);
