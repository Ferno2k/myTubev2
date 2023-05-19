import { useState, useEffect } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const Feed = ({ selectedCategory }) => {
  // const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="h-[90vh] overflow-y-auto p-4">
      <h4 className="mb-4 text-4xl font-bold capitalize text-white">
        {selectedCategory}
        <span style={{ color: "#F31503" }}> videos</span>
      </h4>
      <Videos videos={videos} />
    </div>
  );
};
export default Feed;
