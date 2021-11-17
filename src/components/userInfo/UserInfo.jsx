import './UserInfo.css';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getUserFeed, getUserInfo } from "../../services/HttpService";

function UserInfo() {
    const params = useParams();
    const [userInfo, setUserInfo] = useState({ user: {}, stats: {} });
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const newUserInfo = await getUserInfo(params.username);
            setUserInfo(newUserInfo.data);
        })();
    }, []);

    return (
        <div>
            <div className="share-info">
                <div className="image-wrap big user-page-header">
                    <a className="user" href="user.html">
                        <img className="suggestedAccountIcon user_photo"
                            src={userInfo?.user?.avatarThumb} />
                    </a>
                </div>
                <div className="share-title-container">
                    <h3 className="share-title verified">{userInfo?.user?.nickname}</h3>
                    <h6 className="share-sub-title"><span className="profile">{userInfo?.user?.uniqueId}</span></h6>
                    <div className="share-follow-container">
                        <div className="follow-button-wrap button">
                            <button type="button" className="btn btn-danger btn_new">Підписатися</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popul_people">
                <div className="number"><h6 className="count-infos"><strong title="Подписки">{userInfo?.stats?.followingCount}</strong><span
                    className="unit">&nbsp;Підписки</span></h6></div>
                <div className="number"><h6 className="count-infos"><strong title="Подписчики">{userInfo?.stats?.followerCount}</strong><span
                    className="unit">&nbsp;Підписники</span></h6></div>
                <div className="number"><h6 className="count-infos"><strong title=" Лайки">{userInfo?.stats?.heartCount}</strong><span
                    className="unit">&nbsp;Лайки</span></h6></div>
            </div>
            <h6 className="share-desc mt10">{userInfo?.user?.signature}</h6>
            <div className="share-links">
                <i className="fas fa-link "></i>
                <a className="my_link" target="blank" rel="noopener" href={userInfo?.user?.bioLink?.link}>{userInfo?.user?.bioLink?.link}</a>
            </div>
        </div>
    );
}

export default UserInfo;