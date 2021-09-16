import style from './Post.module.css'
import {PostsType} from "../../../../redux/state";
type PostType = {
    id: number
    message: string
    likeCount: number
}

export function Post(props:PostType){

    return(
        <div className={style.item}>
            <img src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51404241-stock-illustration-female-profile-avatar-icon-white.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}