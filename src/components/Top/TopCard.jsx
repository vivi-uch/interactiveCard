import frontCard from "/public/images/bg-card-front.png";

function TopCard() {
  return (
    <div>
      {/* This person is in charge of this card */}
      <img
        src={frontCard}
        alt="frontCard"
        className="absolute w-80 top-36 left-36"
      />
    </div>
  );
}
export default TopCard;
