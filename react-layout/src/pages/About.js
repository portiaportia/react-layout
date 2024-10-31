import SlideShow from "../components/SlideShow";
import HousePlan from "../components/HousePlan";

const About = () => {
    return (
        <>
            <h3>About</h3>
            <SlideShow />

            <h3>House Plans</h3>
            <div class="house-plans">
                <HousePlan 
                    name="Best House"
                    size="200sf"
                    bedrooms="1"
                    bathrooms="0"/>
            </div>
        </>
    );
};

export default About;