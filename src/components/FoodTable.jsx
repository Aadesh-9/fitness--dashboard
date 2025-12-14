import "../styles/foodTable.css";

const foodData = [
  {
    id: 1,
    icon: "🌯",
    food: "Burrito",
    meal: "Pizza Burger",
    calories: "Receiving",
    time: "01:00 AM",
    carbs: "20 gm",
  },
  {
    id: 2,
    icon: "🍔",
    food: "Burger",
    meal: "Pizza Burger",
    calories: "Receiving",
    time: "01:00 AM",
    carbs: "20 gm",
  },
];

const FoodTable = () => {
  return (
    <div className="food-table">
      {/* Header */}
      <div className="food-header">
        <span>Food</span>
        <span>Meal</span>
        <span>Calories</span>
        <span>Priorities</span>
        <span>Carbs</span>
      </div>

      {/* Rows */}
      {foodData.map((item) => (
        <div className="food-row" key={item.id}>
          <div className="food-cell food-name">
            <span className="food-icon">{item.icon}</span>
            <span>{item.food}</span>
          </div>
          <div className="food-cell">{item.meal}</div>
          <div className="food-cell">{item.calories}</div>
          <div className="food-cell">{item.time}</div>
          <div className="food-cell">{item.carbs}</div>
        </div>
      ))}
    </div>
  );
};

export default FoodTable;
