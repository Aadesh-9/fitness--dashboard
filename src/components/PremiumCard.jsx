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

      {/* Decorative image only */}
      <img className="premium-image" src={premiumImg} alt="Premium Fitness" />
    </div>
  );
};

export default PremiumCard;
