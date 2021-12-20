import {useFormik} from "formik";
import style from './Login.module.css'
import * as Yup from "yup"
import React from "react";


type valuesType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}


const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '', password: '', rememberMe: false
        },
        validationSchema: Yup.object({
            login: Yup.string().required('Required'),
            password: Yup.string().required('Required')
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
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
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}/>
                {validations(formik.touched.login, formik.errors.login)}
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