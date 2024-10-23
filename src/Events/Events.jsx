"use client";

import { Carousel } from "flowbite-react";
import image1 from "../assets/c0.jpg"; // Adjusted path
import image2 from "../assets/c1.png"; // Adjusted path
import image3 from "../assets/c2.jpg"; // Adjusted path
import image4 from "../assets/c3.jpg"; // Adjusted path

export function Events() {
  return (
    <div>
      <div className="programs-header">
        <span className="stroke-text">SOME OF THE</span>
        <span>EVENTS</span>
        <span className="stroke-text">BY US</span>
      </div>
      <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover>
          <img src={image1} alt="Event 1" className="w-full h-full object-cover" />
          <img src={image2} alt="Event 2" className="w-full h-full object-cover" />
          <img src={image3} alt="Event 3" className="w-full h-full object-cover" />
          <img src={image4} alt="Event 4" className="w-full h-full object-cover" />
        </Carousel>
        <Carousel indicators={false}>
          <img src={image1} alt="Event 1" className="w-full h-full object-cover" />
          <img src={image2} alt="Event 2" className="w-full h-full object-cover" />
          <img src={image3} alt="Event 3" className="w-full h-full object-cover" />
          <img src={image4} alt="Event 4" className="w-full h-full object-cover" />
        </Carousel>
      </div>
    </div>
  );
}

export default Events;