/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export default function ImgCarousel({
  subheading,
  img = [],
  maxWidth,
  maxHeight,
}) {
  return (
    <div className="px-10 my-20">
      <div id="carousel-header" className="flex justify-between">
        <h3 className="font-semibold text-3xl">{subheading}</h3>
        <div>
          <button>
            <svg
              className="rounded-full bg-[#f5f5f5] p-2"
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xml:space="preserve"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <button>
            <svg
              fill="#000000"
              className="rounded-full bg-[#f5f5f5] p-2"
              height="40px"
              width="40px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" />
            </svg>
          </button>
        </div>
      </div>
      <div id="carousel-container" className="flex gap-7">
        {img.map((obj, index) => (
          <div key={index} className={maxWidth}>
            <img className={maxHeight} src={obj.src}></img>
            <span className="text-3xl">{obj.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
