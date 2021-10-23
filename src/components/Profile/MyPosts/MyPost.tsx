import style from './MyPost.module.css'
import { Post } from "./Post/Post";
import { ActionsTypes, PostsType} from "../../../redux/state";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";
import React, { ChangeEvent, RefObject } from "react";


type MyPostType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}



export function MyPost(props: MyPostType) {

    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />);

    const AddNewPostHandler = () => {
        //let text = props.newPostText
        props.dispatch(addPostActionCreator())
    }
    const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        let value = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(value))

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