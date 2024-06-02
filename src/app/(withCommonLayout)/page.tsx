
import AboutUs from '@/components/Home/AboutUs/AboutUs';
import HeroSection from '@/components/Home/HeroSection/HeroSection';
import OurTeam from '@/components/Home/OurTeam/OurTeam';
import SearchDonar from '@/components/Home/SearchDonar/SearchDonar';




const HomePage = () => {
        return (
                <div>
                <HeroSection></HeroSection>
                <AboutUs></AboutUs>
                <OurTeam></OurTeam>
                <SearchDonar></SearchDonar>
                </div>
        );
};

export default HomePage;