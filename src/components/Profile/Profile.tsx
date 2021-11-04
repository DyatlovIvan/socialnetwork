import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";


export function Profile(){
    return(
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}