import './VideoCard.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function VideoCard(props) {


    return (
        <div>
            <div className=" user_desc d-flex justify-content-between align-items-center">
                <div className=" user_desc d-flex">
                    <Link className="user" to={`/user/${props.name}`}>
                        <img className="suggestedAccountIcon"
                            src={props.avatar} />
                    </Link>
                    <div className="user_desc">
                        <Link className="user" to={`/user/${props.name}`}>
                            <h6 className="mb-0 fw-bold">
                                {props.username} <i className="fas fa-check-circle text-blue" />
                            </h6>
                        </Link>
                        <div><small>{props.description}</small></div>
                    </div>
                </div>
                <div><a href="#" className="btn btn-outline-danger">
                    Підписатися
                </a></div>
            </div>
            <div className="mt-3 d-flex align-items-end">
                <video className="video__player" src={props.videoUrl} autoplay="autoplay" muted controls poster={props.pictureUrl} />
                <div className="ms-3">
                    <div className="d-flex flex-column align-items-center">
                        <div className="actions_tikTok">
                            <i className="fas fa-heart" />
                        </div>
                        <span>{props.like}</span>
                    </div>
                    <div className="d-flex flex-column align-items-center my-4">
                        <div className="actions_tikTok">
                            <i className="fas fa-comment-dots" />
                        </div>
                        <span>{props.comment}</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="actions_tikTok">
                            <i className="fas fa-share" />
                        </div>
                        <span>{props.share}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;