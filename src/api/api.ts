import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d7bfc3c8-2c2d-429a-afe3-69f3367ec679"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    postFollow(id: number) {
        return instanse.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    deleteFollow(id: number) {
        return instanse.delete(`follow/${id}`).then(
            response => {
                return response.data
            }
        )
    }
}

export const authAPI = {
    getAuth() {
        return instanse.get('auth/me')
    },
    login(email:string,password:string,rememberMe:boolean=false){
        return instanse.post('/auth/login',{email,password,rememberMe})
    },
    logout(){
        return instanse.delete('/auth/login')
    }

}

export const profileAPI = {
    getProfile(userId: number){
       return instanse.get(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instanse.put('profile/status',{status:status})
    },
    savePhoto(photoFile:File){
        const formData = new FormData()
        formData.append('image',photoFile)
        return instanse.put('profile/photo',formData,{
            headers:{
                'Content-Type':'multiline/from-data'
            }})
    }
}

