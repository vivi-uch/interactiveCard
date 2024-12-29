import backCard from "/images/bg-card-back.png";
function BottomCard() {
  return (
    <div>
      {/* This is for the second card */}
      <img
        src={backCard}
        alt="backCard"
        className="absolute w-64 md:w-80 bottom-64 md:bottom-16 left-12 md:left-52"
      />
    </div>
  );
}
export default BottomCard;
