import { Link } from "react-router-dom";

import { CheckCircle, Sensors } from "@mui/icons-material";
import { abbreviateNumber } from "js-abbreviation-number";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCardHorizontal = ({ video }) => {
  return (
    <div className=" flex w-full flex-row">
      <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
        <div className=" mr-2 block h-24 w-44 ">
          <img
            src={video?.thumbnails?.[0]?.url || demoThumbnailUrl}
            alt={video?.title}
            className=" h-full w-full overflow-hidden rounded-lg object-cover"
          />
        </div>
      </Link>
      <div className=" w-full min-w-0">
        <div className="box-border flex w-full min-w-0 flex-col sm:pr-6 ">
          <Link
            to={video?.videoId ? `/video/${video?.videoId}` : demoChannelUrl}
          >
            <h6 className="mb-1 text-sm font-medium text-white">
              {video?.title
                ? video?.title.length > 58
                  ? video?.title.slice(0, 57) + "..."
                  : video?.title
                : demoVideoTitle.slice(0, 57)}
            </h6>
          </Link>
          <Link
            to={
              video?.author?.channelId
                ? `/channel/${video?.author?.channelId}`
                : demoChannelUrl
            }
          >
            <div className=" text-xs leading-[1.5em] text-gray-400">
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
            <div className="flex  text-xs leading-[1.5em] text-gray-400">
              <span>
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
export default VideoCardHorizontal;
