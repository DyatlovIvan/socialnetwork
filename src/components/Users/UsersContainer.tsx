import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/usersReducer";
import {Users} from "./Users";

const mapStateToProps = (state:RootStoreType) =>{
  return{
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage:state.usersPage.currentPage
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
     },
     setCurrentPage:(currentPage:number)=>{
         dispatch(setCurrentPageAC(currentPage))
     },
     setTotalUsersCount:(totalUsersCount:number)=>{
         dispatch(setTotalUsersCountAC(totalUsersCount))
     }
 }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)