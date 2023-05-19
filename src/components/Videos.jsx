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
        if (item.id.videoId || item.id.channelId) {
          if (direction) {
            return (
              <div className="p-2" key={idx}>
                {item.id.videoId && <VideoCardHorizontal video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </div>
            );
          }
          return (
            <div className="p-4" key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};
export default Videos;
