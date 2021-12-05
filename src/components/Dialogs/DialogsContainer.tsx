import {initialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import {Dialog} from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import state from "../../redux/state";

type mapStateToPropsType = {
    dialogsPage: initialStateType
    isAuth:boolean
}

type mapDispatchToPropsType = {
    onSendMessageClickHandler: () => void
    onNewMessageChangeHandler: (body: string) => void
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType =>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType  =>{
    return{
        onSendMessageClickHandler:() =>{
            dispatch(sendMessageCreator());
        },
        onNewMessageChangeHandler: (body:string) =>{
            dispatch(updateNewMessageBodyCreator(body));
        }

    }
}
export const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)