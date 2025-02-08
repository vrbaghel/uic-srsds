import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="antialiased">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div className='mr-auto'>
              <Image
                src="/uic-logo.png"
                alt="UIC Logo"
                width={100}
                height={100}
                className="w-20 h-20 mx-auto md:float-right"
              />
            </div>
            <h1 className="text-5xl text-gray-800 mt-2 font-bold">UIC ReuseConnect</h1>
            <p className="w-5/12 mx-auto md:mx-0 mt-2 text-gray-500">Simplify events, amplify sustainability</p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="p-10 flex flex-col w-full justify-center">
              <Link href="/choose-role">
              <button className="text-lg font-bold text-white text-left bg-black py-3 px-10 rounded-lg w-auto mx-auto">
                Log In with UIC Credentials
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
