import Link from 'next/link';

function RegisterDeliveryGuy() {
  return (
    <div>
      <div className="mt-20 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Register as a delivery guy</h1>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="username">
                Name
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="email">
                Vehicle
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="vehicle"
                id="vehicle"
                placeholder="Pickup Truck"
              />
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="email">
                Phone Number
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="number"
                id="number"
                placeholder="+1"
              />
            </div>
            <Link href="/delivery/dashboard">
              <button
                type="submit"
                className="w-full mt-6 button-primary px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterDeliveryGuy;
