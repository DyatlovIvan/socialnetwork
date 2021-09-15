import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPosts/MyPost";

export function Profile(){
    return(
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}