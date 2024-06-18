import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import FunFacts from "@/components/FunFacts/FunFacts";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const Home = () => {
  return (
    <Layout pageTitle="Home 01">
      <HeaderOne
        rightMenu
        links={false}
        headerStyle="header-style-one header-style-six header-style-six-no-border"
        logo={2}
      />
      <MobileMenu />
      <SearchPopup />

      <div style={{ height: "100vh", display: "flex" }}>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <h1>Real State</h1>
        </div>

        <div className="w-100">
          <img
            className="w-100"
            src="https://linoorwp.pixydrops.com/wp-content/uploads/2023/02/slider-eleven-img-1.jpg"
          />
        </div>
      </div>

      <FunFacts />

      <h1>Acá será el titulo para el git add</h1>

      <AboutMeOne />
      <GallerySectionOne />
    </Layout>
  );
};

export default Home;
