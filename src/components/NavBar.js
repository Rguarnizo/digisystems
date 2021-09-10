import React from 'react'


export default function NavBar(){
    return(
        <nav className="nav flex justify-around my-4 exo-2">
        <div className="hidden md:flex sections flex-1 justify-around ">
          <div className="section btn btn-ghost">Home</div>
          <div className="section btn btn-ghost">About</div>
          <div className="section btn btn-ghost">Services</div>
        </div>
        <div className="logo self-center font-bold flex-1 text-4xl exo-2  text-center">DIGISYSTEMS</div>
        <div className="hidden contacts flex-1  md:flex justify-around ">
          <div className="contact btn btn-ghost">Location</div>
          <div className="contact btn btn-ghost">Contact</div>
          <div className="contact btn btn-ghost">Other services</div>
        </div>
      </nav>
    );
};