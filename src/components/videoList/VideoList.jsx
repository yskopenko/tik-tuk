import './VideoList.css';
import VideoCard from '../videoCard/VideoCard';
import { useEffect, useState } from 'react';
import { getTrendingFeed } from '../../services/HttpService';
import InfiniteScroll from 'react-infinite-scroll-component';

const limit = 5;

function a(a, b) {
  return a * c;
}

function VideoList() {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const videoScroll = () => {
    if (document.querySelectorAll('video[autoplay]').length > 0) {
      var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

      for (var i = 0; i < videoEl.length; i++) {
        var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

        if (
          videoClientRect <= windowHeight - videoHeight * 0.5 &&
          videoClientRect >= 0 - videoHeight * 0.5
        ) {
          thisVideoEl.play();
        } else {
          thisVideoEl.pause();
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      await fetchMoreData();
    })();
    window.addEventListener('load', videoScroll);
    window.addEventListener('scroll', videoScroll);
  }, []);

  const fetchMoreData = async () => {
    const newVideoList = await getTrendingFeed(
      videoList.length + limit,
    );

    setVideoList(newVideoList.data);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <InfiniteScroll
      dataLength={videoList.length}
      next={fetchMoreData}
      hasMore={true}
      loader={
        <div class="down-limit">
          <i class="fas fa-spinner down-limit"></i>
        </div>
      }
    >
      {videoList.map((video) => (
        <>
          <VideoCard
            name={video?.authorMeta?.name}
            username={video?.authorMeta?.nickName}
            avatar={video?.authorMeta?.avatar}
            description={video?.text}
            videoUrl={video?.videoUrl}
            pictureUrl={video?.covers?.origin}
            like={video?.diggCount}
            comment={video?.commentCount}
            share={video?.shareCount}
          />
          <hr />
        </>
      ))}
    </InfiniteScroll>
  );
}

export default VideoList;
