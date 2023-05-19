import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="min-h-[95vh]">
      <div>
        <div
          className="z-10 h-72"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(206,3,184,1) 100%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-7.1rem"} />
      </div>
      <div className="flex p-4">
        <Videos videos={videos} />
      </div>
    </div>
  );
};
export default ChannelDetail;
