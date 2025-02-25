// import Login from "./components/Login/Login"
// import "@fontsource/poppins"; // خط Poppins الافتراضي
// import "@fontsource/roboto/400.css"; // روبوتو بوزن 400
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faUser } from "@fortawesome/free-solid-svg-icons";
// import SignUp from "./components/SignUp/SignUp";
// function App() {
//     return (
//     <>
    
//         <Login/>
//         <SignUp/> 
//     </>
//     );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/roboto/400.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
