import heroImg from './assets/hero.svg'
const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique corrupti amet in nulla quae, saepe eum nam odit dolorem ut blanditiis? A iste accusantium, ab officiis voluptatum sapiente minima?</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="" className="img"/>

            </div>
        </div>


        </section>;
  };
  export default Hero;
