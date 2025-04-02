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
########################
slider
const hero=[{id:1,name:'harryimg'}]
<div className="grid lg:grid-cols-2 gap-24 items-center">
  <div>info</div>
  <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
{hero.map((item)=>{
return (
  <div key={item.id} className="carousel-item">
<img src={item.name} alt="item" className="rounded-box h-full w-80 object-cover" />
  </div>
)
})}

  </div>
</div>

```js

const data = { url: "https://example.com?name=John&age=25&city=Delhi" };
const queryParams = Object.fromEntries([...new URL(data.url).searchParams.entries()]);

console.log(queryParams);
const url = new URL("https://example.com/search?query=javascript&sort=asc&page=2");

const params = new URLSearchParams(url.search);

console.log(params);
```
#use loder
```js
import { createBrowserRouter, RouterProvider, Route, useLoaderData } from "react-router-dom";

// Loader function to fetch user data
const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Failed to load data");
  }
  return response.json();
};

// Component using useLoaderData
const UserProfile = () => {
  const user = useLoaderData(); // Get loaded data
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Email: {user.email}</p>//
    </div>
  );
};

// Define routes
const router = createBrowserRouter([
  {
    path: "/user",
    element: <UserProfile />,
    loader: userLoader, // Attach loader to route
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
 
```



