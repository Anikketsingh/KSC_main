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
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
        <Carousel pauseOnHover>
          <div className="flex space-x-4">
            <img src={image1} alt="Event 1" className="w-64 object-cover" />
            <img src={image2} alt="Event 2" className="w-64 object-cover" />
            <img src={image3} alt="Event 3" className="w-64 object-cover" />
            <img src={image4} alt="Event 4" className="w-64 object-cover" />
            {/* Repeat images for effect */}
            <img src={image1} alt="Event 1" className="w-64 object-cover" />
            <img src={image2} alt="Event 2" className="w-64 object-cover" />
            <img src={image3} alt="Event 3" className="w-64 object-cover" />
            <img src={image4} alt="Event 4" className="w-64 object-cover" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Events;