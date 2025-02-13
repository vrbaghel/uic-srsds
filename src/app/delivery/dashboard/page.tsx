import { JOBS } from '@/utils/consts';
import Link from 'next/link';

function DeliveryDashboard() {
  return (
    <div className="flex justify-center flex-col items-center relative">
      <div className="flex justify-between items-center w-full px-10 mt-10">
        <h1 className="text-3xl font-bold">Browse Active Jobs</h1>
      </div>
      <div className="px-10 py-10 w-full">
        <section className="text-gray-600 body-font">
          <div className="flex flex-wrap -m-4">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                <div className="flex relative flex-col">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src="https://dummyimage.com/600x360"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{job.name}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{job.price}</h1>
                    <p className="leading-relaxed">{job.address}</p>
                    <Link href={`/job`} className=''>
                      <button className="button-primary mt-5">View Job</button>
                    </Link>
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

export default DeliveryDashboard;