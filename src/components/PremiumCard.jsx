import "../styles/premiumCard.css";
import premiumImg from "../assets/premium.webp";

const PremiumCard = () => {
  return (
    <div className="premium-card">
      <div className="premium-content">
        <h4>50% off on Premium Membership</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <button className="upgrade-btn">Upgrade</button>
      </div>

      {/* CIRCULAR IMAGE */}
      <div className="premium-image-wrapper">
        <img src={premiumImg} alt="Premium Fitness" />
      </div>
    </div>
  );
};

export default PremiumCard;
