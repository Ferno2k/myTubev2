import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <BrowserRouter>
      <div className="bg-black">
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={<Feed selectedCategory={selectedCategory} />}
          />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
