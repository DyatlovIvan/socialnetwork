import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    user: UserType
    unfollowSuccess: (userId: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User = ({user, unfollowSuccess, followingInProgress, follow, unfollow, ...props}: PropsType) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.usersPhoto}
                                 src={user.photos.small === null ? userPhoto : user.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(s => s === user.id)}
                                    onClick={() => unfollow(user.id)}
                            >Unfollow</button>
                            : <button disabled={followingInProgress.some(s => s === user.id)}
                                      onClick={() => follow(user.id)
                                      }>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'Russia'}
                        </div>
                        <div>
                            {'City'}
                        </div>
                    </span>
                </span>
        </div>
    )
}