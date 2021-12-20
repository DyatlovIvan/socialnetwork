export const required = (value:string)=>{
    if(value) return undefined
    return 'Field is required'
}

export const validate = (values:any) => {
    const errors: any = {};
    if (!values.text) {
        errors.text = 'Required';
    } else if (values.text.length > 15) {
        errors.text = 'Must be 15 characters or less';
    }
    return errors
}

export const maxLengthCreator = (maxValue:number)=>{

}