import { Routes, Route } from "react-router-dom";
import Lists from "./components/list";
import Header from "./components/header";
import Input from "./components/input";
import Stopwatch from "./components/stopwatch";
import Counter from "./components/counter";
import Filter from "./components/filter";

function App() {
  return (
    <div>
      <Header />

      <Routes>
      <Route exact path="/" element={<Counter />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/input" element={<Input />} />
      <Route path="/list" element={<Lists />} />
      </Routes>
    </div>
    
  );
}

export default App;
