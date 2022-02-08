import {follow} from "./usersReducer";
import {followAPI, ResultCodesEnum} from "../api/api";

jest.mock("../api/api")
const userAPIMock = followAPI as jest.Mocked<typeof followAPI>

const result = {
 resultCode:ResultCodesEnum.Success,
 messages:[],
 data:{}
}

userAPIMock.postFollow.mockReturnValue(Promise.resolve(result))

test('',async ()=>{
 const thunk = follow(1) 
 const dispatchMock = jest.fn()

 await thunk(dispatchMock)
 expect(dispatchMock).toBeCalledTimes(3)



})