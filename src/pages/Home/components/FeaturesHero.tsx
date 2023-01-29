import {Link} from "react-scroll"
const FeaturesHero = () => {
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
          <Link  to="compensation" spy={true} smooth={true} offset={0} duration={500}  className="btn btn-primary">See Compensation</Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
