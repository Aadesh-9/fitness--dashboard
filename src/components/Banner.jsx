import bannerImage from "../assets/fitness-banner.webp";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h2>Track Your Daily Activities</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae velit
          laboriosam asperiores officia perspiciatis, ullam dolorem accusantium
          inventore, temporibus atque ab fugit dolore repudiandae, aperiam vero
          est numquam commodi eius.
        </p>
      </div>
    </div>
  );
};

export default Banner;
