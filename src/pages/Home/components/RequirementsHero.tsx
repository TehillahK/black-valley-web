const RequirementsHero = () => {
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
};

export default RequirementsHero;
