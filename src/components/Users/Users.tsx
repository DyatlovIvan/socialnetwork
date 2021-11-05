import {UsersType} from "../../redux/usersReducer";
import s from './Users.module.css'


type UsersPresentType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export const Users = (props: UsersPresentType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Dmitry',
                photoUrl: 'https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
                status: 'Im ok',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'Ivan',
                photoUrl: 'https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
                status: 'Im ok too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                followed: false,
                fullName: 'Alex',
                photoUrl: 'https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
                status: 'Im ok too!',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                followed: false,
                fullName: 'Andrew',
                photoUrl: 'https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
                status: 'OK',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

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