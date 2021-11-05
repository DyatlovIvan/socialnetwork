import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";
import {Users} from "./Users";

const mapStateToProps = (state:RootStoreType) =>{
  return{
      users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch:Dispatch) =>{
 return{
     follow:(userId:number)=>{
         dispatch(followAC(userId))
     },
     unfollow:(userId:number)=>{
         dispatch(unfollowAC(userId))
     },
     setUsers:(users:Array<UsersType>)=>{
         dispatch(setUsersAC(users))
     }
 }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)