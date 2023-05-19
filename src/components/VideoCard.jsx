import { Link } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className=" w-full xs:w-80">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div>
          <img
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            className="h-44 w-full rounded-lg object-cover "
          />
        </div>
      </Link>
      <div className="p-4">
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
  );
};
export default VideoCard;
