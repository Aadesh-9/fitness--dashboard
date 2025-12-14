import bannerImage from "../assets/fitness-banner.webp";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h2>Track Your Daily Activities</h2>
        <p>
          Monitor your workouts, calories burned, and daily steps to stay
          consistent and achieve your fitness goals.
        </p>
      </div>
    </div>
  );
};

export default Banner;
