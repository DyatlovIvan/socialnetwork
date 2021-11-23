import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profilePageReducer";


type PropsType = {
    profile:ProfileType
}
export function Profile(props:PropsType){
    return(
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostContainer/>
        </div>
    )
}