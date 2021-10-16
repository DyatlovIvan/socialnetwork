import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPosts/MyPost";
import {ProfilePageType, updateNewPostText} from "../../redux/state";

type ProfileType = {
    profilePage : ProfilePageType
    addPost: () => void
    updateNewPostText:(value:string)=>void
}

export function Profile(props:ProfileType){
    return(
        <div>
            <ProfileInfo/>
            <MyPost posts = {props.profilePage.posts}
                    newPostText = {props.profilePage.newPostText}
                    updateNewPostText ={props.updateNewPostText}
                    addPost = {props.addPost}/>
        </div>
    )
}