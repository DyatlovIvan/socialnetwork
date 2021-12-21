import {useFormik} from "formik";
import * as Yup from "yup";
import style from "./Login.module.css";
import React from "react";

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormType = {
    onSubmit:(formData:LoginDataType)=>void
}

export const LoginForm = (props:LoginFormType) => {
    const formik = useFormik({
        initialValues: {
            email: '', password: '', rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required').email('incorrectly filled email'),
            password: Yup.string().required('Required')
        }),
        onSubmit: values => {
            props.onSubmit(values)
        },
    });
    const validations = (touched: boolean | undefined, error: string | undefined) => {
        return touched && error ? <div className={style.error}>{error}</div> : null
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    placeholder="login"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
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

            <button type="submit">Submit</button>
        </form>
    )
}