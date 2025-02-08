import Image from "next/image";

function ChooseRole() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center px-2 sm:px-0">
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
      <div className="m-auto mt-20 space-y-6 w-full sm:w-8/12 md:w-7/12">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">You are a ...</h1>
        <div className="flex flex-col justify-center items-center gap-8 !mt-14">
          <button className="button-primary w-[350px]">Delivery Guy</button>
          <button className="button-primary w-[350px]">Club</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;