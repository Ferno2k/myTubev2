import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div
      className="m-auto flex h-80 w-80 items-center justify-center"
      style={{ marginTop }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col items-center justify-center text-center text-white">
          <img
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            className="mb-4 h-44 w-44 rounded-[50%] border border-solid border-white"
          />
          <h6 className="text-lg font-medium">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </h6>
        </div>
      </Link>
    </div>
  );
};
export default ChannelCard;
