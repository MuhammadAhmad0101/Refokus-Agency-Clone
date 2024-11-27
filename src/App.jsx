import Cards from "./components/Card/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/Marquee/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Product/Products";
import Stripes from "./components/Stripe/Stripes";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
      const locomotiveScroll = new LocomotiveScroll();
      return (
            <div className="bg-[#18181B] pb-4 font-Satoshi">
                  <Navbar />
                  <Work />
                  <Stripes />
                  <Products />
                  <Marquees />
                  <Cards />
                  <Footer />
            </div>
      );
}

export default App;
