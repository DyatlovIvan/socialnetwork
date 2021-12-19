import {useFormik} from "formik";

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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    placeholder="login"
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
            </div>

            <div>
                <input
                    placeholder="password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
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