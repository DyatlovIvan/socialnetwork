import {UsersType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import React from "react";
import userPhoto from '../../assets/images/userPhoto.png'

type UsersPresentType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export class Users extends React.Component<UsersPresentType> {
    getUsers = () => {
        debugger
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {this.props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={el.photos.small===null?userPhoto:el.photos.small}/>
                    </div>
                    <div>
                        {el.followed ?
                            <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {el.name}
                        </div>
                        <div>
                            {el.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'Russia'}
                        </div>
                        <div>
                            {'City'}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    }
}

