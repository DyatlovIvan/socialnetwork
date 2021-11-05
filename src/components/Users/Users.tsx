import {UsersType} from "../../redux/usersReducer";
import s from './Users.module.css'


type UsersPresentType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export const Users = (props: UsersPresentType) => {

    return (
        <div>
            {props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={el.photoUrl}/>
                    </div>
                    <div>
                        {el.followed ?
                            <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(el.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {el.fullName}
                        </div>
                        <div>
                            {el.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {el.location.country}
                        </div>
                        <div>
                            {el.location.city}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}