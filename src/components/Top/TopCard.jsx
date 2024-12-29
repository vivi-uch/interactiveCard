import frontCard from "/images/bg-card-front.png";

function TopCard() {
  return (
    <div>
      {/* This person is in charge of this card */}
      <img
        src={frontCard}
        alt="frontCard"
        className="absolute w-64 z-10 md:w-80 top-32 md:top-40 left-4 md:left-44"
      />
    </div>
  );
}
export default TopCard;
