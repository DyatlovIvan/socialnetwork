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
    const validate = (values: any) => {
        const errors = {};
        return errors;
    }
    const onSubmit = (values: valuesType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        debugger
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return (
        <div>
            <Formik
                initialValues={{login: '', password: '',rememberMe:false}}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type="login" name="login"/>
                            <ErrorMessage name="login" component="div"/>
                        </div>
                        <div><Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <div>
                            <Field type = "checkbox" name = "rememberMe"/> remember me
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>)

}