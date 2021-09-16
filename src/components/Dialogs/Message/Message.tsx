type MessageType = {
    id:number
    message:string
}

export function Message(props:MessageType){
    return(
        <div>
            {props.message}
        </div>
    )
}