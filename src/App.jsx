import BottomCard from "./components/Bottom/BottomCard";
import BottomInput from "./components/Bottom/BottomInput";
import TopCard from "./components/Top/TopCard";
import TopInput from "./components/Top/TopInput";
import bgDesk from "/images/bg-main-desktop.png";
import bgMob from "/images/bg-main-mobile.png";

function App() {
  return (
    <div className="flex h-screen">
      <div className={`md:bg-[url('${bgDesk}')] bg-[url('${bgMob}')] p-48`}>
        <TopCard />
        <BottomCard />
      </div>
      <div className="p-52">
        <TopInput />
        <BottomInput />
      </div>
    </div>
  );
}
export default App;
