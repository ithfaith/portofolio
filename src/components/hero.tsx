const Hero = () => {
    return (
      <div
  className="hero w-screen min-h-screen bg-cover bg-no-repeat" id="hero"
  style={{
    backgroundImage: "url(./src/assets/faithpantai.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hi there!</h1>
      <p className="mb-5">
        Im Mochammad Faith Afdhal Santoso, I'm a junior front-end developer.
      </p>
    </div>
  </div>
</div>
    );
  };

  export default Hero;
  
  