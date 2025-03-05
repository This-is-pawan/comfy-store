# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 NOTE:- some work is pending....
import React, { useState } from "react";
import Login from "../pages/Login";
import { BsSunFill,BsMoonFill } from 'react-icons/bs';
const Form = ({label,name,type,defaultValue}) => {
  const [user,setUser]=useState(false)
  const handle=()=>{
    setUser(!user)
  }
  return (
    <>
      <div className="fom-control">
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt">Top Right label</span>
          <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            placeholder="Type here"
           className="input input-bordered w-full max-w-xs"
          />
        </label>
        {/* <label className="label"> */}
       {/* <span className="label">Botton Left label</span>
       <span className="label-text-alt">Botton Right label</span>
        </label>
     */}
     <label className="swap swap-rotate">
      <input type="checkbox" onChange={handle} />
      <BsSunFill className='swap-on h-4 w-4' />
      <BsMoonFill className='swap-off h-4 w-4' />

     </label>
      </div>
      
    </>
  );
};

export default Form;
