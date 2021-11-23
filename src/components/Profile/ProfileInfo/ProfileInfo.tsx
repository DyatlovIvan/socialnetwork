import style from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileType} from "../../../redux/profilePageReducer";

type PropsType = {
    profile: ProfileType
}

export function ProfileInfo(props:PropsType){
    if(!props.profile){
        return <Preloader/>
    }
    return(
     <div>
         <div className={style.headLayer}>
             <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'/>
         </div>
         <div className={style.descriptionBlock}>
             <img src= {props.profile.photos.small}/>
         </div>
     </div>

    )
}