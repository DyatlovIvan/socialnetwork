import {UserType} from "../redux/usersReducer";

export const updateObjectInArray = (items:Array<UserType>, itemId:number, newObjParams:{})=>{
    return items.map(el => el.id === itemId ? {...el, ...newObjParams} : {...el})
}