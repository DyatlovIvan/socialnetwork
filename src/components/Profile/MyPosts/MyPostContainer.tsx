import {MyPost} from "./MyPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import {ChangeEvent} from "react";
type MyPostContainerType = {
    store:any
}

export const MyPostContainer = (props:MyPostContainerType) =>{
    const state = props.store.getState()
    const AddNewPostHandler = () => {
        //let text = props.newPostText
        props.store.dispatch(addPostActionCreator())
    }

    const onChangeNewPostHandler = (value:string) => {
        // props.updateNewPostText(e.currentTarget.value)

        props.store.dispatch(updateNewPostTextActionCreator(value))
    }

    return(

        <MyPost posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                addPost = {AddNewPostHandler}
                updateNewPostText ={onChangeNewPostHandler}/>
    )
}