import { Link } from "react-router-dom";

// Import images properly
import hero1 from "../components/imgSvg/hero1.svg";
import hero2 from "../components/imgSvg/hero2.svg";
import hero3 from "../components/imgSvg/hero3.svg";
import hero4 from "../components/imgSvg/hero4.svg";
import hero5 from "../components/imgSvg/hero5.svg";

const carouselImages = [hero1, hero2, hero3, hero4,hero5];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-40 items-center">
      <div><h1 className="max-w-2xl text-4xl font-bold tracking-tighter sm:text-6xl">we are changing the way pepole shop</h1>
      <p className="mt-8 max-w-xl  text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus ex, voluptate reprehenderit laborum quis natus iusto deserunt, tempore architecto aliquam eligendi eum suscipit explicabo nemo, ea animi ipsam repellendus.</p>
      <div className="mt-10">
       <Link to='/products' className="btn btn-primary">our products </Link>
      </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={image}
              className="rounded-box h-full w-70 object-cover"
              alt={`Carousel item `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
