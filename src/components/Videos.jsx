import { VideoCard, ChannelCard, VideoCardHorizontal } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <div
      className="flex flex-wrap"
      style={{
        flexDirection: direction || "row",
        justifyContent: direction ? "flex-start" : "center",
      }}
    >
      {videos.map((item, idx) => {
        if (item?.video?.videoId || item?.channel?.channelId) {
          if (direction) {
            return (
              <div className="p-2" key={idx}>
                {item?.type === "video" ? (
                  <VideoCardHorizontal video={item?.video} />
                ) : (
                  <ChannelCard channelDetail={item?.channel} />
                )}
              </div>
            );
          }
          return (
            <div className="pb-2 xs:p-4" key={idx}>
              {item?.type === "video" ? (
                <VideoCard video={item?.video} />
              ) : (
                <ChannelCard channelDetail={item?.channel} />
              )}
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};
export default Videos;
