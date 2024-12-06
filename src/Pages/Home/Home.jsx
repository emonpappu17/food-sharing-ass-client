import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;