import { VideoCard } from "./VideoCard";

const VIDEOS = [
    {
        image: "yt.jpg",
        title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
        author: "Harshad Khandare",
        views: "100mn",
        timestamp: "2 days ago",
      },
      {
        image: "yt.jpg",
        title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
        author: "Harshad Khandare",
        views: "100mn",
        timestamp: "2 days ago",
      },
      {
        image: "yt.jpg",
        title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
        author: "Harshad Khandare",
        views: "100mn",
        timestamp: "2 days ago",
      },
      {
        image: "yt.jpg",
        title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
        author: "Harshad Khandare",
        views: "100mn",
        timestamp: "2 days ago",
      },
  {
    image: "yt.jpg",
    title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
    author: "Harshad Khandare",
    views: "100mn",
    timestamp: "2 days ago",
  },
  {
    image: "yt.jpg",
    title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
    author: "Harshad Khandare",
    views: "100mn",
    timestamp: "2 days ago",
  },
  {
    image: "yt.jpg",
    title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
    author: "Harshad Khandare",
    views: "100mn",
    timestamp: "2 days ago",
  },
  {
    image: "yt.jpg",
    title: "Jawan : Chaleya(Hindi) | Shahrukh Khan",
    author: "Harshad Khandare",
    views: "100mn",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            image={video.image}
            title={video.title}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
