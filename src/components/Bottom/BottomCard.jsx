import backCard from "/public/images/bg-card-back.png";
function BottomCard() {
  return (
    <div>
      {/* This is for the second card */}
      <img src={backCard} alt="backCard" className="absolute w-80 bottom-16" />
    </div>
  );
}
export default BottomCard;
