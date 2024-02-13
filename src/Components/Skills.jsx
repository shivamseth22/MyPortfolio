import React from "react";
import reactimg from "../assets/reactimg.png";
import nodeimg from "../assets/nodeimg.png";
import jsimg from "../assets/jsimg.png";
import javaimg from "../assets/javaimg.png";
import mongoimg from "../assets/mongoimg.png";
import cssimg from "../assets/cssimg.png";
import htmlimg from "../assets/htmlimg.png";
import reduximg from "../assets/reduximg.png";
import express from "../assets/express-js.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/nextjs.png";
import git from "../assets/git.png";
import mui from "../assets/mui.png";
import flux from "../assets/flux.png";
const Skills = () => {
  return (
    <div id="skills" className="flex justify-center flex-wrap m-5 mt-10">
      <div className="flex flex-col justify-center items-center p-8">
        <img src={reactimg} className="w-48"/>
        <h1 className="font-bold text-5xl">Reactjs</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
      <img src={reduximg} className="w-64"/>
        <h1 className="font-bold text-5xl "></h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
      <img src={flux} className="w-64"/>
        <h1 className="font-bold text-5xl mt-16">Flux</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={jsimg} className="w-48"/>
        <h1 className="font-bold text-5xl">JavaScript</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={typescript} className="w-48"/>
        <h1 className="font-bold text-5xl">TypeScript</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={nextjs} className="w-48"/>
        <h1 className="font-bold text-5xl"></h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
      <img src={nodeimg} className="w-52"/>
      <h1 className="font-bold text-5xl"></h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={mongoimg} className="w-48"/>
        <h1 className="font-bold text-5xl"></h1>
      </div>
     
      
      <div className="flex flex-col justify-center items-center p-8">
        <img src={express} className="w-48"/>
        <h1 className="font-bold text-5xl"></h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={javaimg} className="w-60"/>
        <h1 className="font-bold text-5xl"></h1>
      </div>
    
      
      <div className="flex flex-col justify-center items-center p-8">
      <img src={htmlimg} className="w-52"/>
        <h1 className="font-bold text-5xl"></h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8 ">
      <img src={cssimg} className="w-40"/>
        <h1 className="font-bold text-5xl"></h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={tailwind} className="w-48"/>
        <h1 className="font-bold text-5xl">Tailwind</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <img src={mui} className="w-48"/>
        <h1 className="font-bold text-5xl">MUI</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
      <img src={git} className="w-52"/>
        <h1 className="font-bold text-5xl">Git</h1>
      </div>
      
      
      <div className="flex flex-col justify-center items-center p-8">
      <img src={github} className="w-52"/>
        <h1 className="font-bold text-5xl">GitHub</h1>
      </div>
       


    </div>
  );
};

export default Skills;
