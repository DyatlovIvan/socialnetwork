import {useFormik} from "formik";
import * as yup from "yup";
import style from "./Login.module.css";
import React, {ChangeEvent} from "react";

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormType = {
    errorMassage: string
    setErrorMassage:(errorMassage:string)=>void
    onSubmit: (formData:LoginDataType)=>void
}

export const LoginForm = (props:LoginFormType) => {
    const formik = useFormik({
        initialValues: {
            email: '', password: '', rememberMe: false
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('Required').email('incorrectly filled email'),
            password: yup.string().required('Required')
        }),
        onSubmit: values => {
            props.onSubmit(values)
        },
    });
    const validations = (touched: boolean | undefined, error: string | undefined) => {
        return touched && error ? <div className={style.error}>{error}</div> : null
    }
    const OnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        formik.handleChange(e)
        props.setErrorMassage('')

    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    placeholder="login"
                    id="email"
                    name="email"
                    type="email"
                    onChange={OnChangeHandler}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                {validations(formik.touched.email, formik.errors.email)}
            </div>

            <div>
                <input
                    placeholder="password"
                    id="password"
                    name="password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={OnChangeHandler}
                    value={formik.values.password}/>
                {validations(formik.touched.password, formik.errors.password)}
            </div>

            <div>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />
                <label>remember me</label>
            </div>
            {props.errorMassage && <div className={style.error}>{props.errorMassage}</div>}
            <button type="submit">Submit</button>
        </form>
    )
}