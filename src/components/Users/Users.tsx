import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import React from "react";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../api/api";


type PropsType = {
    totalUserCount: number
    pageSize: number
    users: Array<UsersType>
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void


}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span onClick={() => props.onPageChanged(el)}
                                 className={`${props.currentPage === el ? s.selectedPage : ''} ${s.page}`}>
                        {el}
                    </span>
                })}
            </div>


            {props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img className={s.usersPhoto} src={el.photos.small === null ? userPhoto : el.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed ?
                            <button onClick={() =>
                               followAPI.deleteFollow(el.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(el.id)
                                    }
                                })
                            }>Unfollow</button>
                            : <button onClick={() =>
                              followAPI.postFollow(el.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                })
                            }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {el.name}
                        </div>
                        <div>
                            {el.status}
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
            </div>)}
        </div>
    )
}