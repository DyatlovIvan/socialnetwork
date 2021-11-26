type InitialStateType ={
    id:null|string
    email:null|string
    login:null|string
    isAuth:boolean
}

const initialState:InitialStateType = {
    id:null,
    email:null,
    login:null,
    isAuth:false
}

export const authReducer = (state = initialState,action:ActionsType)=>{
    switch (action.type) {
        case "SET_USER_DATA":{
            return {...state,...action.data,isAuth:true}
        }
        default:return state
    }

}

type ActionsType = SetAuthUserDataType
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId:string,email:string,login:string)=>{
    return{
        type:'SET_USER_DATA',
        data:{id:userId,email,login}
    }as const
}