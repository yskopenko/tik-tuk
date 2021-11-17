import './UserVideoList.css';
import VideoCard from "../videoCard/VideoCard";
import { useEffect, useState } from "react";
import { getTrendingFeed, getUserFeed } from "../../services/HttpService";
import InfiniteScroll from "react-infinite-scroll-component";
import UserVideoCard from "../userVideoCard/UserVideoCard";
import { useParams } from "react-router";

const limit = 6;

function UserVideoList(props) {
    const params = useParams();
    const [videoList, setVideoList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await fetchMoreData();
        })();
    }, []);

    const fetchMoreData = async () => {
        const newVideoList = await getUserFeed(params.username, videoList.length, limit);

        setVideoList(newVideoList);
    }

    return (
        <div>
            <InfiniteScroll className="user_video"
                dataLength={videoList?.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<div class="down-limit"><i className="fas fa-spinner down-limit"></i></div>}
            >
                {videoList.map((video) => (
                    <UserVideoCard
                        playCount={video.stats.playCount}
                        userPost={video.playAddr}
                        picUrl={video.playAddr}
                    />
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default UserVideoList;