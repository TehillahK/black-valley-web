import iphone from "../assets/iphone.png";

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
            Valley Comics is a great option to consider.
          </p>
          <button className="btn btn-primary">See Comic Requirements</button>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;
