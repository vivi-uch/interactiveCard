import BottomCard from "./components/Bottom/BottomCard";
import BottomInput from "./components/Bottom/BottomInput";
import TopCard from "./components/Top/TopCard";
import TopInput from "./components/Top/TopInput";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className={`md:bg-[url('/images/bg-main-desktop.png')] bg-[url('/images/bg-main-mobile.png')] bg-cover md:p-52 p-28`}
      >
        <TopCard />
        <BottomCard />
      </div>
      <div className="md:p-52 py-28 px-4">
        <TopInput />
        <BottomInput />
      </div>
    </div>
  );
}
export default App;
