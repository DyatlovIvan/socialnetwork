import style from './ProfileInfo.module.css'

export function ProfileInfo(){
    return(
     <div>
         <div className={style.headLayer}>
             <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'/>
         </div>
         <div className={style.descriptionBlock}>
             <img src='https://klike.net/uploads/posts/2020-04/1587719791_1.jpg'/>
         </div>
     </div>

    )
}