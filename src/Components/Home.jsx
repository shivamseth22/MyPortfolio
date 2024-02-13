import React from "react";
import mypic from "../assets/mypic.png";
const Home = () => {
  return (
    <div id="home" className="bg-black flex justify-center  p-40">
      <div className="text-white ">
        <h3 className="text-3xl text-green-400 p-3 font-bold">Hello,</h3>
        <h2 className="text-5xl p-3 font-bold">
          I'm Shivam <span className="text-green-400">Seth</span>
        </h2>
        <h1 className="text-5xl p-3 font-bold">Full Stack Developer</h1>
        <div className="p-3 text-xl">
          <p>
            Having in-depth knowledge of Java and{" "}
            <span className="text-green-300"> React.js </span> Technology
          </p>
          <p>
            and total experience of 2 Years in the software industry. Please
            
            <p>click on the below "Hire Me" button to find out how I might</p>
             contribute and add value to your next
            project.
          </p>
        </div>
        <button className="bg-white text-black px-6 py-4 m-3 font-semibold rounded-full">
          Hire Me
        </button>
      </div>
      <div className="w-1/2 h-1 -mt-28">
        <img src={mypic} className=""/>
      </div>
    </div>
  );
};

export default Home;
