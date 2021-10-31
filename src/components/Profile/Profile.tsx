import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPost} from "./MyPosts/MyPost";
import {ActionsTypes, ProfilePageType} from "../../redux/state";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

type ProfileType = {
    // profilePage : ProfilePageType
    // dispatch:(action:ActionsTypes)=>void
    store:any
}

export function Profile(props:ProfileType){
    return(
        <div>
            <ProfileInfo/>
            <MyPostContainer
                    // posts = {props.profilePage.posts}
                    // newPostText = {props.profilePage.newPostText}
                    // updateNewPostText ={props.updateNewPostText}
                    // addPost = {props.addPost}
                    // dispatch = {props.dispatch}
                    store = {props.store}
                    />
        </div>
    )
}