import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import iphone from "./assets/iphone.png";
import Footer from "./components/Footer";
function Header() {
  return (
    <div className="navbar bg-primary-focus">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">BlackValley Comics</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

function IntroHero() {
  return (
    <div className="hero min-h-screen bg-primary-focus text-white">
      <div className="hero-content  flex-col  lg:flex-row  ">
        <img src={iphone} className="max-w-sm " />
        <div className="">
          <h1 className="text-5xl font-bold">
            Introducing Black Valley Comics{" "}
          </h1>
          <p className="py-6">
            Black Valley Comics is an upcoming comic book app for independent
            comic book authors and publishers looking to increase visibility for
            their work. With the ability to easily upload and distribute comics
            through the app, Black Valley Comics is the perfect platform for
            indie creators to reach a wider audience and boost their online
            presence. The app is also SEO-friendly, which means it can help your
            comics rank higher in search engine results, making it easier for
            potential readers to discover your work. If you're an independent
            comic book author or publisher looking to expand your reach, Black
            Valley Comics is a great option to consider.
          </p>
          <button className="btn btn-primary">See Comic Requirements</button>
        </div>
      </div>
    </div>
  );
}

function Requirements() {
  return (
    <div className="hero min-h-screen bg-accent">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Comic Requirements </h1>
          <ol className="py-6">
            <li>PNG Images of each page,10 pages minimum(no scans).</li>
            <li>Language of comic.</li>
            <li>Author & Publisher infomation.</li>
            <li>Artist Credits (backgrounds , line work etc).</li>
            <li>Signed original work waiver.</li>
            <li>Declare if its in color or black & white.</li>
          </ol>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

function Compensation() {
  return (
    <div className="hero min-h-screen  bg-info-content">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Compensation</h1>
          <p className="py-6">
           100% of all digital sells go to publishers/authors. Money made from 
           comics only viewable via subscription will be shared between the platform
           and the publisher of the comic. 
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Features</h1>
          <ol className="py-6">
            <li>Ability to sell comics digitally.</li>
            <li>Pay wall comics behind subscription system.</li>
            <li>Release free comics.</li>
            <li>Update users when new release is ready.</li>
          </ol>
          <button className="btn btn-primary">See Compensation</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white">
      <Header />
      <IntroHero />
      <Features />
      <Requirements />
      <Compensation />
      <Footer />
    </div>
  );
}

export default App;
