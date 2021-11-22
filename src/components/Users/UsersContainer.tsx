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
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type UsersPresentType = {
    users: Array<UsersType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

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

class UsersContainer extends React.Component<UsersPresentType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <Users totalUserCount = {this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
                      users = {this.props.users}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)