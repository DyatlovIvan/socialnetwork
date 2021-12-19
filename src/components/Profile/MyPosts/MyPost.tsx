import style from './MyPost.module.css'
import { Post } from "./Post/Post";
import {PostsType} from "../../../redux/profilePageReducer";
import React, { ChangeEvent } from "react";
import {useFormik} from "formik";


type MyPostType = {
    posts: Array<PostsType>
    AddNewPostHandler: (newPostText:string) =>void

}

export function MyPost(props: MyPostType) {
    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />);

    const AddNewPostHandler = (newPostText:string) => {
        props.AddNewPostHandler(newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <AddPostForm AddNewPostHandler = {AddNewPostHandler}/>
            </div>

            <div className={style.posts}>
                {postsElement}
            </div>

        </div>
    )
}
type AddPostFormType = {
    AddNewPostHandler:(newPostText:string)=>void
}
const AddPostForm = (props:AddPostFormType) =>{
    const formik = useFormik({
        initialValues: {
            text: ""
        },
        onSubmit: values => {
            props.AddNewPostHandler(values.text)
        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    placeholder="Enter your message"/>
            </div>
            <div>
                <button type="submit">add post</button>
            </div>
        </form>
    )
}