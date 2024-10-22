import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <section className="text-white body-font relative overflow-hidden">
      {/* Orange Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-orange-500 opacity-40 rounded-full w-96 h-96 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-orange-600 opacity-30 rounded-full w-72 h-72 absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Section for Gym Owner */}
      <div className="container mx-auto px-5 py-24 relative z-10">
        {/* Home Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center bg-orange-500 border border-orange-500 text-white py-2 px-6 rounded text-lg hover:bg-transparent hover:text-orange-500"
          >
            Home
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center mb-16">
          {/* Owner Images */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <div className="flex flex-wrap">
              <img
                alt="owner"
                className="w-full h-full object-cover mb-4 "
                src="https://dummyimage.com/600x400"
              />
              <div className="flex w-full">
                <img
                  alt="owner"
                  className="w-1/2 object-cover pr-2 "
                  src="https://dummyimage.com/300x200"
                />
                <img
                  alt="owner"
                  className="w-1/2 object-cover pl-2 "
                  src="https://dummyimage.com/301x201"
                />
              </div>
            </div>
          </div>
          {/* Owner Description */}
          <div className="lg:w-1/2 w-full lg:pl-12">
            <h1 className="text-5xl font-bold mb-4 text-orange-500 underline">
              Meet Our Owner
            </h1>
            <p className="leading-relaxed text-lg text-white">
              John Doe, our dedicated gym owner, has over 15 years of experience
              in the fitness industry. Passionate about health and fitness, he
              has built this gym to provide the best training environment. His
              vision is to help members achieve their fitness goals, making the
              gym a welcoming place for everyone.
            </p>
          </div>
        </div>

        {/* Section for Gym and Events */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">
            The Gym & Events
          </h2>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gym"
                  className="w-full object-cover h-full object-center block "
                  src="https://dummyimage.com/400x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gym"
                  className="w-full object-cover h-full object-center block "
                  src="https://dummyimage.com/401x301"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gym"
                  className="w-full h-full object-cover object-center block "
                  src="https://dummyimage.com/600x400"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="event"
                  className="w-full h-full object-cover object-center block "
                  src="https://dummyimage.com/601x401"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="event"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/402x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="event"
                  className="w-full object-cover h-full object-center block "
                  src="https://dummyimage.com/403x303"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;