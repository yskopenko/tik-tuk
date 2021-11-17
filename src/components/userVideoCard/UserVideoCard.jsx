import './UserVideoCard.css';

function UserVideoCard(props) {
    return (
        <div className="post_user">
            <p className="views_post"><i className="fas fa-play" />{props.playCount}</p>
            <video className="video__player video__player_user" muted src={props.userPost} controls poster={props.picUrl} />
        </div>
    );
}

export default UserVideoCard;