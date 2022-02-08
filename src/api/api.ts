import axios from "axios";
import {ProfileType} from "../redux/profilePageReducer";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d7bfc3c8-2c2d-429a-afe3-69f3367ec679"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export enum ResultCodesEnum {
    Success=0,
    Error = 1,
    CaptchaIsRequired = 10
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type getAuthTypes = {
    data: { id:string, email:string,login:string }
    resultCode:number
    messages:Array<string>
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    postFollow(id: number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`).then(
            response => {
                return response.data
            }
        )
    }
}

export const authAPI = {
    getAuth() {
        return instance.get<getAuthTypes>('auth/me')
    },
    login(email:string,password:string,rememberMe:boolean=false){
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }

}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get('security/get-captcha-url')
    }
}

export const profileAPI = {
    getProfile(userId: number){
       return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put('profile/status',{status:status})
    },
    savePhoto(photoFile:File){
        const formData = new FormData()
        formData.append('image',photoFile)
        return instance.put('profile/photo',formData,{
            headers:{
                'Content-Type':'multiline/from-data'
            }})
    },
    updateProfileInfo(profileData:ProfileType){
        return instance.put('profile',profileData)
    }
}



