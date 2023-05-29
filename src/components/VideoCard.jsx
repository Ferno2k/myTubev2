import { Link } from "react-router-dom";

import { CheckCircle, Sensors } from "@mui/icons-material";
import { abbreviateNumber } from "js-abbreviation-number";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <div className=" w-full xs:w-80">
      <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
        <img
          src={video?.thumbnails?.[0]?.url || demoThumbnailUrl}
          alt={video?.title}
          className="h-44 w-full rounded-lg object-cover "
        />
      </Link>
      <div className="grid grid-flow-col justify-start p-2 xs:p-0">
        <Link
          to={
            video?.author?.channelId
              ? `/video/${video?.author?.channelId}`
              : demoChannelUrl
          }
          className=" mr-3 mt-3 h-9 w-9"
        >
          <img
            src={video?.author?.avatar?.[0]?.url || demoProfilePicture}
            alt={video?.author?.title || demoVideoTitle}
            className="h-full w-full overflow-hidden rounded-[50%] object-cover"
          />
        </Link>
        <div>
          <Link
            to={video?.videoId ? `/video/${video?.videoId}` : demoChannelUrl}
          >
            <p className="mb-1 mt-3 font-medium leading-[1.375rem] text-white">
              {video?.title
                ? video?.title.length > 63
                  ? video?.title.slice(0, 62) + "..."
                  : video?.title
                : demoVideoTitle.slice(0, 62)}
            </p>
          </Link>
          <Link
            to={
              video?.author?.channelId
                ? `/channel/${video?.author?.channelId}`
                : demoChannelUrl
            }
          >
            <div className=" text-sm text-gray-400">
              {video?.author?.title || demoChannelTitle}
              {video?.author?.badges?.[0]?.text === "Verified" && (
                <CheckCircle
                  sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                />
              )}
            </div>
          </Link>
          <Link
            to={video?.videoId ? `/video/${video?.videoId}` : demoChannelUrl}
          >
            <div className="flex text-sm text-gray-400">
              <span className="">
                {abbreviateNumber(
                  video?.stats?.views || video?.stats?.viewers,
                  1,
                  {
                    symbols: ["", "K", "M", "B", "T"],
                    padding: false,
                  }
                )}{" "}
                views
              </span>
              {video?.publishedTimeText && (
                <span className=" before:mx-1 before:content-['•']">
                  {video?.publishedTimeText}
                </span>
              )}
            </div>
            {video?.isLiveNow && (
              <div className=" mr-1 mt-1 flex items-center">
                <div className="block cursor-pointer rounded-sm bg-red-700 px-[3px] py-0 text-xs tracking-wide text-white">
                  <Sensors
                    style={{ fontSize: "medium", verticalAlign: "middle" }}
                  />
                  <span className=" pl-1 align-middle font-medium">
                    {video?.badges?.[0]}
                  </span>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
