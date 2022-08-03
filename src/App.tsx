// React
import { Route, Routes } from "react-router-dom";
// Page
import MainPage from "./page/MainPage";
import ProductPage from "./page/product/ProductList";
import SongListPage from "./page/list/SongListPage";
import ArtListPage from "./page/list/ArtListPage";
import BugListPage from "./page/list/BugListPage";
import FossilListPage from "./page/list/FossilListPage";
import MusicListPage from "./page/list/MusicListPage";
import SeaListPage from "./page/list/SeaListPage";
import VillagerListPage from "./page/list/VillagerListPage";
import FishListPage from "./page/list/FishListPage";
// Components
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* List Page */}
        <Route path="/fishlist" element={<FishListPage />} />
        <Route path="/songlist" element={<SongListPage />} />
        <Route path="/artlist" element={<ArtListPage />} />
        <Route path="/buglist" element={<BugListPage />} />
        <Route path="/fossillist" element={<FossilListPage />} />
        <Route path="/musiclist" element={<MusicListPage />} />
        <Route path="/sealist" element={<SeaListPage />} />
        <Route path="/villagerlist" element={<VillagerListPage />} />

        {/* 상세 설명 페이지 */}
        <Route path="/:link/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default App;
