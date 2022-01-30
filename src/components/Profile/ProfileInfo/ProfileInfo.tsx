import style from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileType} from "../../../redux/profilePageReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.png'
import {ChangeEvent, useState} from "react";
import {ProfileDataForm} from "./ProfileDataForm";

export function ProfileInfo(props: PropsType) {
    const [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            console.log(e.target.files[0])
            props.savePhoto(e.target.files[0])
        }
    }

    const saveProfileHandler = (profileData: ProfileType)=>{
        debugger
        props.saveProfile(profileData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm saveProfile={saveProfileHandler} profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=>setEditMode(true)}/>}

                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}

const ProfileData = (props: ProfileDataType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>

            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.entries(props.profile.contacts).map(([key, value]) => {
                return <Contacts key={key} contactTitle={key} contactValue={value}/>
            })}
            </div>
        </div>
    )
}




const Contacts = ({contactTitle, contactValue}: ContactsType) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile:(profileData:ProfileType)=>void
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

type ContactsType = {
    contactTitle: string
    contactValue: string | null
}