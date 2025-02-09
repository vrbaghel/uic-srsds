'use client';

import { CLUB_LIST } from '@/utils/consts';
import { Role } from '@/utils/enums';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import ReactDropdown from 'react-dropdown';

function ChooseRole() {
  const [role, setRole] = useState(Role.NONE);
  const [defaultOption, setDefaultOption] = useState('');
  // const appContext = useContext<AppContextType>(AppContext);
  return (
    <div className="min-h-screen h-full flex flex-col items-center px-2 sm:px-0">
      <div className="flex flex-col w-full items-center mt-16">
        <div className="mx-auto">
          <Image
            src="/uic-logo.png"
            alt="UIC Logo"
            width={100}
            height={100}
            className="w-20 h-20 mx-auto md:float-right"
          />
        </div>
        <h1 className="text-5xl text-gray-800 mt-2 font-bold">UIC ReuseConnect</h1>
        <p className="mx-auto mt-2 text-gray-500">Simplify events, amplify sustainability</p>
      </div>
      {role === Role.NONE && (
        <div className="m-auto mt-20 space-y-6 w-full sm:w-8/12 md:w-7/12">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">You are a ...</h1>
          <div className="flex flex-col justify-center items-center gap-8 !mt-14">
            <Link href={`/delivery/register`}>
              <button
                className="button-primary w-[350px]"
                onClick={() => setRole(Role.DELIVERY)}>
                Delivery Guy
              </button>
            </Link>
            <button
              className="button-primary w-[350px]"
              onClick={() => setRole(Role.CLUB)}>
              Club
            </button>
          </div>
        </div>
      )}
      {role === Role.CLUB && (
        <div className="flex flex-col gap-5 items-center">
          <ReactDropdown
            options={CLUB_LIST}
            onChange={(e) => setDefaultOption(e.value)}
            value={defaultOption}
            placeholder="Select an option"
            className="dropdown mt-10"
          />
          <Link href={`/club/dashboard`}>
            <button className="button-primary w-[150px]">
              <span>Next</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ChooseRole;
