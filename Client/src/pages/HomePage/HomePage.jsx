import useTitle from '../../hooks/useTitle';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import MenuSection from './MenuSection/MenuSection';
import ReviewSection from './ReviewSection/ReviewSection';

const HomePage = () => {
  useTitle('Fast Food - Order Healthy & Fresh Food Anytime');
  return (
    <>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
