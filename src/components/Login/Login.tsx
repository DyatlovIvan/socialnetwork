import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
type valuesType = {
    login: string
    password: string
    rememberMe:boolean
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
            login: '', password: '',rememberMe:false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="login">login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />

                <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <label>remember me</label>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />



                <button type="submit">Submit</button>
            </form>
        </div>)

}