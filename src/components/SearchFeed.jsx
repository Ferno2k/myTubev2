import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div className="h-[90vh] overflow-y-auto p-1">
      <h4 className="my-4 text-4xl font-bold capitalize text-white">
        Search Result for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm} </span>
        videos
      </h4>
      <Videos videos={videos} />
    </div>
  );
};
export default SearchFeed;
