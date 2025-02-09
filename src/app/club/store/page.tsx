import { LISTINGS } from '@/utils/consts';
import Link from 'next/link';

function StorePage() {
  return (
    <div className="flex justify-center flex-col items-center relative">
      <div className="flex justify-between items-center w-full px-10 mt-10">
        <div className="container mx-auto rounded-lg p-14 bg-gray-100">
          <form>
            <h1 className="text-center font-bold text-4xl">Find the next product for your event</h1>
            <p className="mx-auto font-normal text-sm my-6 max-w-lg">
              Enter a keyword, category, or product name (tables, chairs, etc.)
            </p>
            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
                className="text-base text-gray-400 flex-grow outline-none px-2 "
                type="text"
                placeholder="Search "
              />
              <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <select
                  id="Com"
                  className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
                  <option
                    value="com"
                    selected>
                    com
                  </option>
                  <option value="net">net</option>
                  <option value="org">org</option>
                  <option value="io">io</option>
                </select>
                <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
              </div>
            </div>
          </form>
        </div>
        <Link
          href="/club/dashboard"
          className="absolute -top-16 right-10">
          <button className="button-primary">Back to listings</button>
        </Link>
      </div>
      <div className="px-10 py-10 w-full">
        <section className="text-gray-600 body-font">
          <div className="flex flex-wrap -m-4">
            {LISTINGS.map((listing) => (
              <div
                key={listing.id}
                className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                <div className="flex relative flex-col">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src="https://dummyimage.com/600x360"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{listing.name}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{listing.price}</h1>
                    <p className="leading-relaxed">{listing.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StorePage;