function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://avatars.githubusercontent.com/u/20080981?v=4" className="d-block mx-lg-auto img-fluid" alt="Connor Walden" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-light">Connor Walden</h1>
          <p className="lead text-light">connormwalden@gmail.com</p>
          <p className="lead text-light">0412248066</p>
          <p className="lead text-light">Github: <a href="https://github.com/Connor-Walden" target="_blank" rel="noreferrer">Connor Walden</a></p>
          <p className="lead text-light">LinkedIn: <a href="https://www.linkedin.com/in/connor-walden-96122011b/" target="_blank" rel="noreferrer">Connor Walden</a></p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="./download/resume.pdf" className="btn btn-outline-secondary btn-lg px-4" download>Download resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;