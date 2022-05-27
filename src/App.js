import { Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Question1 from "./components/question1/Question1";
import Question2 from "./components/question2/Question2";
import Question3 from "./components/question3/Question3";
import Question4 from "./components/question4/Question4";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route  path="question1" element={<Question1 />} />
        <Route  path="question2" element={<Question2 />} />
        <Route  path="question3" element={<Question3 />} />
        <Route  path="question4" element={<Question4 />} />
      </Routes>
    </div>
  );
}

export default App;
