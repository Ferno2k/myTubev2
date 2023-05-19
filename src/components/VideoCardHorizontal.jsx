import { Link } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCardHorizontal = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className=" flex w-full flex-row">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className=" mr-2 block h-24 w-44 ">
          <img
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            className=" h-full w-full overflow-hidden rounded-lg object-cover"
          />
        </div>
      </Link>
      <div className=" w-full min-w-0">
        <div className="box-border flex w-full min-w-0 flex-col text-sm sm:pr-6 sm:text-base">
          <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
            <p className="mb-1 font-bold text-white">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </p>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <p className=" text-sm text-gray-400">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: "14px", color: "gray", ml: "5px", mb: "4px" }}
              />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VideoCardHorizontal;
