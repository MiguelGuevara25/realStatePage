import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import FunFacts from "@/components/FunFacts/FunFacts";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SliderSeven from "@/components/SliderSection/SliderSeven";

const Home = () => {
  return (
    <Layout pageTitle="Home 01">
      <Style
        font="DM Sans, sans-serif"
        bFont="DM Sans, sans-serif"
        black="#182e65"
        text="#7c8498"
        base="#ffc001"
        baseRgb="255, 192, 1"
        scrollToTopColor="var(--thm-black)"
        blackRgb="24, 46, 101"
      />
      <HeaderOne
        rightMenu
        links={false}
        headerStyle="header-style-one header-style-six header-style-six-no-border"
        logo={2}
      />
      <MobileMenu />
      <SearchPopup />
      <SliderSeven />
      <FunFacts />
      <AboutMeOne />
      <GallerySectionOne />
      <FooterSix />
    </Layout>
  );
};

export default Home;
