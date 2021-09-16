import style from './MyPost.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostType = {
    posts: PostsType[];

}


export function MyPost(props:MyPostType){

    let postsElement = props.posts.map(p=><Post id = {p.id} message = {p.message} likeCount = {p.likeCount}/>);
    return(
        <div className = {style.postsBlock}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElement}
            </div>

        </div>   
    )
}