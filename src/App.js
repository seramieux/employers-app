import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import ListEmployees from "./components/ListEmployees";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  return (
    <div className="my-[50px] mx-auto max-w-[1000px] flex flex-col gap-[30px]">
      <Header />
      <div className="bg-[#3D5A80] text-[#FFF] p-[25px] shadow-main">
        <Search />
        <Filter />
      </div>
      <ListEmployees />
      <AddEmployee />
    </div>
  );
};

export default App;
