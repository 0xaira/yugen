const Trusted = () => {
    return (
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-bold mb-8">Trusted By 1000+ Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* my 1st img  */}
            <div className="slide flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
                className="w-40 h-40"
              />
            </div>
            <div className="slide flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
                className="w-40 h-40"
              />
            </div>
            <div className="slide flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
                className="w-40 h-40"
              />
            </div>
            <div className="slide flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
                className="w-40 h-40"
              />
            </div>
            <div className="slide flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
                className="w-40 h-40"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Trusted;
  