type DialogItemType = {
    id:number
    name:string
    img:string
}



export function DialogItem(props:DialogItemType){
    return(
        <div>
            {props.name}
        </div>
    )
}