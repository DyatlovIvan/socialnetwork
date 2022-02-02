import {useFormik} from "formik";
import {ContactsType, ProfileType} from "../../../redux/profilePageReducer";
import React, {ChangeEventHandler} from "react";
import style from './ProfileInfo.module.scss'

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
            contacts: {
                facebook: props.profile.contacts.facebook,
                website: props.profile.contacts.website,
                vk: props.profile.contacts.vk,
                twitter: props.profile.contacts.twitter,
                instagram: props.profile.contacts.instagram,
                youtube: props.profile.contacts.youtube,
                github: props.profile.contacts.github,
                mainLink: props.profile.contacts.mainLink,
            }


        },
        onSubmit: (values) => props.saveProfile(values as ProfileType)
    })

    const OnChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
        formik.handleChange(e)
    }
    return (
        <form onSubmit={formik.handleSubmit} className={style.info}>
            <button type="submit" className={style.button}>Save</button>
            <div className={style.contactBlock}>
                <div>
                    <b>Full name</b>:
                    <div>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            onChange={OnChangeHandler}
                            onBlur={formik.handleBlur}
                            className={style.infoString}
                            value={formik.values.fullName}/>
                    </div>

                    <b>Looking for a job</b>:
                    <div><input
                        id="lookingForAJob"
                        name="lookingForAJob"
                        type="checkbox"
                        onChange={formik.handleChange}
                        className={style.infoString}
                        checked={formik.values.lookingForAJob}/>
                    </div>


                    <b>My professional skills:</b>:
                    <div><textarea
                        id="lookingForAJobDescription"
                        name="lookingForAJobDescription"
                        onChange={OnChangeHandler}
                        onBlur={formik.handleBlur}
                        className={style.infoString}
                        value={formik.values.lookingForAJobDescription}/>
                    </div>


                    <b>About me</b>:
                    <div><textarea
                        id="aboutMe"
                        name="aboutMe"
                        onChange={OnChangeHandler}
                        onBlur={formik.handleBlur}
                        className={style.infoString}
                        value={formik.values.aboutMe}/>
                    </div>
                </div>
                <div>
                    {Object.entries(props.profile.contacts).map(([key, value]) => {
                        return <div className={style.contact}>
                            <b>{key}</b>: <div><input
                            id={`contacts.${key}`}
                            name={`contacts.${key}`}
                            type="text"
                            onChange={OnChangeHandler}
                            onBlur={formik.handleBlur}
                            className={style.infoString}
                            value={formik.values.contacts[key as keyof ContactsType]}/>
                        </div>
                        </div>
                    })}
                </div>
            </div>
        </form>
    )
}