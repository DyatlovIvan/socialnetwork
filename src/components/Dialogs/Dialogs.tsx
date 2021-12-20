import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import {useFormik} from "formik";
import * as Yup from "yup"
import React from "react";


type DialogType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
    sendMessageCreator: (newMessageBody: string) => void
}

export function Dialogs(props: DialogType) {
    let dialogElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img}/>)
    let messageElements = props.dialogsPage.messages.map(el => <Message id={el.id} message={el.message}/>)

    const sendMessageCreator = (newMessageBody: string) => {
        props.sendMessageCreator(newMessageBody)
    }
    return (
        <div className={style.dialogs}>

            <div className={style.dialogItem}>
                {dialogElements}
            </div>
            <div className={style.message}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <AddMessageForm sendMessageCreator={sendMessageCreator}/>
                </div>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    sendMessageCreator: (newMessageBody: string) => void
}

const AddMessageForm = (props: AddMessageFormType) => {
    const formik = useFormik({
        initialValues: {
            text: ""
        },
        validationSchema:Yup.object({
           text:Yup.string().max(50,'Must be 50 characters or less').required('Required')
        }),
        onSubmit: values => {
            props.sendMessageCreator(values.text)
            formik.values.text='';
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    id="text"
                    name="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your message"/>
                {formik.errors.text ? <div>{formik.errors.text}</div> : null}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>)
}