import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profilePageReducer";


type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto:(photo:File) => void
    saveProfile:(profileData:ProfileType)=>void
}

export function Profile(props: PropsType) {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto = {props.savePhoto}
                         saveProfile = {props.saveProfile}
            />
            <MyPostContainer/>
        </div>
    )
}