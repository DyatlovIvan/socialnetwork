import {useFormik} from "formik";
import {ProfileType} from "../../../redux/profilePageReducer";
import React, {ChangeEventHandler} from "react";

type ProfileDataFormType = {
    saveProfile: (profileData: ProfileType) => void
    profile: ProfileType
}

export const ProfileDataForm = (props: ProfileDataFormType) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe,
            contacts:{
                facebook: props.profile.contacts.facebook,
                website: props.profile.contacts.website,
                vk: props.profile.contacts.vk,
                twitter: props.profile.contacts.twitter,
                instagram: props.profile.contacts.instagram,
                youtube: props.profile.contacts.youtube,
                github: props.profile.contacts.github,
                mainLink: props.profile.contacts.mainLink
            }


        },
        onSubmit: (values) => props.saveProfile(values as ProfileType )
    })

    const OnChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
        formik.handleChange(e)
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <button type="submit">Save</button>
            <div>
                <b>Full name</b>: <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={OnChangeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}/>
            </div>
            <div>
                <b>Looking for a job</b>: <input
                id="lookingForAJob"
                name="lookingForAJob"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.lookingForAJob}/>
            </div>

            <div>
                <b>My professional skills:</b>:<textarea
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                onChange={OnChangeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.lookingForAJobDescription}/>
            </div>

            <div>
                <b>About me</b>:<textarea
                id="aboutMe"
                name="aboutMe"
                onChange={OnChangeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.aboutMe}/>
            </div>

            <b>Contacts</b>: {Object.entries(props.profile.contacts).map(([key, value]) => {
                debugger
                let name = props.profile.contacts[key]
            return <div>
                <b>{key}</b>: <input
                id={`contacts.${key}`}
                name={`contacts.${key}`}
                type="text"
                onChange={OnChangeHandler}
                onBlur={formik.handleBlur}

                value={formik.values.contacts.vk}/>
            </div>
        })}

        </form>
    )
}