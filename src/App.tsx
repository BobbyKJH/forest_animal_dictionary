// React
import { Route, Routes } from "react-router-dom";
// Page
import MainPage from "./page/MainPage";
import FishListPage from "./page/list/FishListPage";
// Components
import Header from "./components/common/Header";
import ProductPage from "./page/product/ProductList";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fishlist" element={<FishListPage />} />
        <Route path="fish/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default App;
