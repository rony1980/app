import "bootstrap/dist/css/bootstrap.css";
import Award from "./components/Award";
import Client from "./components/Client";
import Discover from "./components/Discover";
import Homeslider from "./components/Homeslider";
import Location from "./components/Location";
import NewsEvent from "./components/NewsEvent";
import Social from "./components/Social";
import Strength from "./components/Strength";
import Footer from "./components/Footer";
import Top from "./components/Top";
export default function () {
  return (
    <>
      <div className="container-fluid">
        <Top />
        <Homeslider />
        <Discover />
        <Strength />
        <Client />
        <NewsEvent />
        <Award />
        <Location />
        <Social />
      </div>

      <Footer />
    </>
  );
}
