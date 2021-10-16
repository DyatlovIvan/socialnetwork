import style from './MyPost.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";
import React, {ChangeEvent, RefObject} from "react";


type MyPostType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (value: string) => void
}

export function MyPost(props: MyPostType) {

    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    const AddNewPostHandler = () => {

        let text = props.newPostText
        props.addPost()
    }
    const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <div>
                    <textarea onChange={onChangeNewPostHandler} value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={AddNewPostHandler}>add post</button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElement}
            </div>

        </div>
    )
}