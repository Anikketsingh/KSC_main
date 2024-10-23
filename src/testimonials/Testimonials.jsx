import React from "react";

const Testimonials = () => {
  return (
    <section className="text-white body-font relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large Orange Circle */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-orange-500 rounded-full opacity-40"></div>
        
        {/* Small Orange Circle */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500 rounded-full opacity-40"></div>
        
        {/* Orange Wave */}
        <div className="absolute top-1/2 left-0 w-full h-16 bg-gradient-to-r from-orange-500 to-transparent opacity-20"></div>
      </div>
      
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap relative z-10">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=H.NO.%20A-12,%20BALAJI%20NAGAR,%20P-1,%20NEELBAD,%20Bhopal,%20Neelbad,%20Madhya%20Pradesh%20462044&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-grey-300/40 backdrop-blur-sm relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-M">ADDRESS</h2>
              <p className="mt-1 text-black">
                H.NO. A-12, BALAJI NAGAR, P-1, NEELBAD, Bhopal, Neelbad, Madhya Pradesh 462044
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-black tracking-widest text-M">EMAIL</h2>
              <a className="text-orange-500 leading-relaxed">kscwellnesspvtltd@gmail.com</a>
              <h2 className="title-font font-semibold text-black tracking-widest text-M mt-4">PHONE</h2>
              <p className="leading-relaxed text-black">+91 9244280023</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-5xl mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-white">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Submit
          </button>
          <p className="text-xs text-white mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;