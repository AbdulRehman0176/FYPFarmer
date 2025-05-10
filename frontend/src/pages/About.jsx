import React from "react";
import dsOne from "../assets/dsOne.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";
import UserLayout from "../component/UserLayout";
function About() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <>
    <UserLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full bg-white p-6 rounded-lg shadow-lg">
          {/* Right: Text */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl  font-bold mb-4 text-gray-800">About US</h2>
            <p className="text-gray-600">
              Unlock new potential with our latest agricultural machinery
              tailored for high performance and durability. lorem Unlock new
              potential with our latest agricultural machinery tailored for high
              performance and durability. lorem Unlock new potential with our
              latest agricultural machinery tailored for high performance and
              durability. lorem Unlock new potential with our latest
              agricultural machinery tailored for high performance and
              durability. lorem
            </p>
            <Link to={"/"}>
              <Button
                color="green"
                variant="outlined"
                className="mt-5 !font-bold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            <img
              src={dsOne}
              alt="Machine"
              className="w-full h-auto max-w-sm rounded-xl object-fit"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white max-w-6xl mx-auto">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              {/* Top row with two spans */}
              <div className="flex items-center justify-between mb-4">
                <span className="!text-4xl font-bold text-green-600  ">
                  0{index + 1}
                </span>
                <span className="text-2xl  font-bold text-gray-800 pr-8">
                  {["Farm Growth", "Better Tools", "Smart Solutions"][index]}
                </span>
              </div>

              {/* Small paragraph */}
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 p-6 bg-white max-w-6xl mx-auto">
  {/* Column 1 - Text (35%) */}
  <div className="w-full md:w-[40%] text-center md:text-left">
    <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
    <hr className="border-gray-300 mb-4 w-24 mx-auto md:mx-0" />
    <p className="text-gray-700 leading-relaxed">
      We aim to revolutionize modern farming by providing innovative and
      reliable agricultural solutions to farmers around the globe. Our
      mission is to support sustainable growth and productivity. solutions to farmers around the globe. Our
      mission is to support sustainable growth and productivity. solutions to farmers around the globe. Our
      mission is to support sustainable growth and productivity.solutions to farmers around the globe. Our
      mission is to support sustainable growth and productivity.
    </p>
  </div>

  {/* Column 2 - Grid of 6 Images (65%) */}
  <div className="w-full md:w-[65%] text-center">
    <h2 className="text-2xl font-bold mb-2">Gallery</h2>
    <hr className="border-gray-300 mb-4 w-24 mx-auto" />
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="w-full h-32 object-cover rounded-md shadow-md"
        />
      ))}
    </div>
  </div>
</div>

      </div>
      </UserLayout>
    </>
  );
}

export default About;
