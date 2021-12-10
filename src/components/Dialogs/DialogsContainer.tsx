import {initialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type mapStateToPropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    onSendMessageClickHandler: () => void
    onNewMessageChangeHandler: (body: string) => void
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClickHandler: () => {
            dispatch(sendMessageCreator());
        },
        onNewMessageChangeHandler: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }

    }
}
export const DialogContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)