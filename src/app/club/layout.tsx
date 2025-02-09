import Image from 'next/image';

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="flex flex-col justify-start items-start py-2 px-5">
        <div className="flex items-center gap-3">
          <div className="">
            <Image
              src="/uic-logo.png"
              alt="UIC Logo"
              width={100}
              height={100}
              className="w-20 h-20 mx-auto md:float-right"
            />
          </div>
          <h1 className="text-3xl text-gray-800 mt-2 font-bold">UIC ReuseConnect</h1>
        </div>
        <p className="-mt-3 text-gray-500 ml-24">Simplify events, amplify sustainability</p>
      </header>
      {children}
    </div>
  );
}

export default DashboardLayout;
