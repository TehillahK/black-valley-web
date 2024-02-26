import {Link} from "react-scroll"

const RequirementsHero = () => {
  return (
    <div className="hero min-h-screen bg-primary-focus text-white">
      <div className="hero-content  flex-col  lg:flex-row  ">
        <img
          src={"https://images.unsplash.com/photo-1658437920181-0d95844e0839?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="max-w-sm "
          alt=""
        />
        <div className="">
          <h1 className="text-5xl font-bold">
           
          </h1>
          <p className="py-6">
            
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
             deserunt mollit anim id est laborum.
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

export default RequirementsHero;
