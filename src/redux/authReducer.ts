type InitialStateType ={
    id:null|string
    email:null|string
    login:null|string
}

const initialState:InitialStateType = {
    id:null,
    email:null,
    login:null
}

export const authReducer = (state = initialState,action:ActionsType)=>{
    switch (action.type) {
        case "SET_USER_DATA":{
            return {...state,...action.data}
        }
        default:return state
    }

}

type ActionsType = SetUserDataType
type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId:string,email:string,login:string)=>{
    return{
        type:'SET_USER_DATA',
        data:{id:userId,email,login}
    }as const
}