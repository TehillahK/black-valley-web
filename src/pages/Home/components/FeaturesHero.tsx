import {Link} from "react-scroll"
const FeaturesHero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <img
          src={""}
          className="max-w-sm "
          alt="Theres supposed to be something here"
        />
          <Link  to="compensation" spy={true} smooth={true} offset={0} duration={500}  className="btn btn-primary">See Compensation</Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
