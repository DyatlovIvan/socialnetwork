import React, {ChangeEvent, useEffect, useState} from "react";

type PathParamsType = {
    status: string
    updateStatus: (status: string) => void
}

type prevStateType = {
    editMode: boolean
    status: string
}
export const ProfileStatusWithHooks = (props: PathParamsType) => {
    const [editMode,setEditMode] = useState<boolean>(false)
    const [status,setStatus] = useState<string>(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () =>{
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }

    const pressKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key === 'Enter') {
            setEditMode(false)
            props.updateStatus(status)
        }
    }

    return (
        <div>
            {!editMode&&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'set status!'}</span>
                </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       onKeyPress={pressKeyHandler}
                       onBlur={deactivateEditMode}
                       value = {status}
                       autoFocus
                />
            </div>}
        </div>
    )

}