import {followSuccess, InitialStateType, unfollowSuccess, usersReducer} from "./usersReducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'Ivan', followed: false, photos: {small: '', large: ''},
                status: null, uniqueUrlName: null, location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 1, name: 'Ivan', followed: false, photos: {small: '', large: ''},
                status: null, uniqueUrlName: null, location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 2, name: 'Ivan', followed: true, photos: {small: '', large: ''},
                status: null, uniqueUrlName: null, location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 3, name: 'Ivan', followed: true, photos: {small: '', large: ''},
                status: null, uniqueUrlName: null, location: {country: 'Russia', city: 'Moscow'}
            }
        ],
        pageSize: 5,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const newState = usersReducer(state, followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
    const newState = usersReducer(state, unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})