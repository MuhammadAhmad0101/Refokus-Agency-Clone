import Navbar from "./components/Navbar";
import Stripes from "./components/Stripe/Stripes";
import Work from "./components/Work";

function App() {
      return (
            <div className="bg-[#18181B]  font-Satoshi">
                  <Navbar />
                  <Work />
                  <Stripes />
            </div>
      );
}

export default App;
