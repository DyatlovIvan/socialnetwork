import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPosts/MyPost";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage : ProfilePageType
}

export function Profile(props:ProfileType){
    return(
        <div>
            <ProfileInfo/>
            <MyPost posts = {props.profilePage.posts}  />
        </div>
    )
}