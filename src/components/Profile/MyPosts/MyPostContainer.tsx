import {MyPost} from "./MyPost";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStoreType} from "../../../redux/redux-store";



// export const MyPostContainer = (props:MyPostContainerType) =>{
//     const state = props.store.getState()
//
//     const AddNewPostHandler = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     const onChangeNewPostHandler = (value:string) => {
//         props.store.dispatch(updateNewPostTextActionCreator(value))
//     }
//
//     return(
//
//         <MyPost posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}
//                 addPost = {AddNewPostHandler}
//                 updateNewPostText ={onChangeNewPostHandler}/>
//     )
// }

type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    AddNewPostHandler: ()=>void
    onChangeNewPostHandler: (value:string)=>void
}

const mapStateToProps = (state:RootStoreType):mapStateToPropsType =>{
  return{
      posts:state.profilePage.posts,
      newPostText:state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType =>{
    return{
        AddNewPostHandler:() => {
            dispatch(addPostActionCreator())
        },
        onChangeNewPostHandler:(value:string) => {
            dispatch(updateNewPostTextActionCreator(value))
        }
    }
}



export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);