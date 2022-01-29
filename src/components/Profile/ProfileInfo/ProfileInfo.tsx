import style from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileType} from "../../../redux/profilePageReducer";
import { ProfileStatus } from './ProfileStatus';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.png'
import {ChangeEvent} from "react";

type PropsType = {
    isOwner: boolean
    profile: ProfileType|null
    status: string
    updateStatus: (status: string) => void
    savePhoto:(photo:File) => void
}

export function ProfileInfo(props:PropsType){

    if(!props.profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>)=>{

        if(e.target.files!==null){
            console.log(e.target.files[0])
            props.savePhoto(e.target.files[0])
        }
    }
    return(
     <div>
         <div className={style.headLayer}>
             {/*<img src='https://telecomdom.com/wp-content/uploads/2019/12/shapka_for_youtube-fon-9.jpg'/>*/}
         </div>
         <div className={style.descriptionBlock}>
             <img src= {props.profile.photos.large || userPhoto} className={style.mainPhoto}/>
             {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
             <ProfileStatusWithHooks status = {props.status}
                            updateStatus = {props.updateStatus}/>
         </div>
     </div>

    )
}