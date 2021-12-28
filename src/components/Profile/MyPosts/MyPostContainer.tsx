import {MyPost} from "./MyPost";
import {addPost, PostsType} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../../redux/redux-store";


type mapStateToPropsType = {
    posts: Array<PostsType>
}

type mapDispatchToPropsType = {
    AddNewPostHandler: (newPostText:string) => void
    //onChangeNewPostHandler: (value: string) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        AddNewPostHandler: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);