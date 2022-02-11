import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Product from "./pages/Products";
import Solution from "./pages/Solutions";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Company from "./pages/Company";
import Signin from "./pages/Signin";
import Error404 from "./pages/Error404";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
