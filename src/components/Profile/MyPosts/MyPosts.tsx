import style from './MyPost.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profilePageReducer";
import React, {ChangeEvent} from "react";
import {useFormik} from "formik";
import * as Yup from "yup"



type MyPostType = {
    posts: Array<PostsType>
    AddNewPostHandler: (newPostText: string) => void

}

export const MyPosts = React.memo((props: MyPostType) => {
    let postsElement = [...props.posts.reverse()].map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    const AddNewPostHandler = (newPostText: string) => {
        props.AddNewPostHandler(newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <AddPostForm AddNewPostHandler={AddNewPostHandler}/>
            </div>

            <div className={style.posts}>
                {postsElement}
            </div>

        </div>
    )
})

type AddPostFormType = {
    AddNewPostHandler: (newPostText: string) => void
}

const AddPostForm = (props: AddPostFormType) => {
    const formik = useFormik({
        initialValues: {
            text: ""
        },
        validationSchema:Yup.object({
            text:Yup.string().max(15,'Must be 15 characters or less').required('Required')
        }),
        onSubmit: values => {
            props.AddNewPostHandler(values.text)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    id="text"
                    name="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your message"/>
                {formik.touched.text && formik.errors.text ? <div>{formik.errors.text}</div> : null}
            </div>

            <div>
                <button type="submit">add post</button>
            </div>
        </form>
    )
}