import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import {useFormik} from "formik";
import {sendMessageCreator} from "../../redux/dialogsPageReducer";

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
        onSubmit: values => {
            props.sendMessageCreator(values.text)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    placeholder="Enter your message"/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>)
}