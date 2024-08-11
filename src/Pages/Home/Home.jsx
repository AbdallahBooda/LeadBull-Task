import "./Home.css";
import Slider from "../../components/Slider/Slider";
import HugeUpdates from "../../components/HugeUpdates/HugeUpdates";
import Profile from "../../components/Profile/Profile";
import Selling from "../../components/Selling/Selling";
import Companyimprovement from "../../components/ Companyimprovement/Companyimprovement";
import Companyupdates from "../../components/Companyupdates/Companyupdates";
import Servicesclients from "../../components/Servicesclients/Servicesclients";
import Approaches from "../../components/Approaches/Approaches";


const Home = () => {
  return (
    <>
      <div className="bg-home">
        <video className="video-loop" autoPlay muted loop>
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <Slider />
          <HugeUpdates />
          <Profile />
          <Approaches />
          <Selling />
          <Servicesclients />
          <Companyupdates />
          <Companyimprovement />
        </div>
      </div>
    </>
  );
};

export default Home;
