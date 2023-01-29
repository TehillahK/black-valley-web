import iphone from "../assets/iphone.png";
import {Link} from "react-scroll"
const IntroHero = () => {
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
            Valley Comics is a great option to consider.Thank you for your
            interest in BlackValley Comics . This is a product of Newgate
            Solutions . Contact us if you want your comic published on our App
            ,just press the contact button to reach out..
          </p>
          <div className="flex flex-row">
            <Link to="req" spy={true} smooth={true} offset={0} duration={500} className="btn text-white mr-4">
              See Comic Requirements
            </Link>
            <a href="#my-modal-2" className="btn btn-info ">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;
