import React from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {Form, Formik} from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    ,
    email: Yup.string()

})


const FormCall = () => {
    return (
        <div>
            <h1 className="text-2xl text-center mb-5">Помогите нам стать лучше!</h1>
            <div>
                <Formik validationSchema={SignupSchema}
                        onSubmit={(values, actions) => {
                            console.log(JSON.stringify(values,null,2))
                            actions.setSubmitting(false);}}>
                    {({ errors, touched }) => (
                        <div className="">
                            <Form>
                                <div className="form flex flex-row flex-wrap justify-around">
                                <div className="flex flex-col mx-[0px]">
                                    <div className="">
                                        <h1>Имя</h1>
                                        <label htmlFor="firstName">
                                            <input className="p-[10px] w-full border-gray-500 border rounded" id="firstName" name="firstName" placeholder="Иван Петров"/>{errors.firstName && touched.firstName ? (
                                            <div><p style={{color:"red"}}>{errors.firstName}</p></div>
                                        ) : null}
                                        </label>
                                    </div>

                                    <div className="my-[20px]">
                                        <h1>Номер телефона</h1>
                                        <label htmlFor="phoneNumber" id="phoneNumber">
                                            <PhoneInput country={"ru"} onChange={phone => console.log({phone})}
                                                        placeholder="+996 550 01 22 08"/>
                                        </label>
                                    </div>
                                    <div className="">
                                        <h1>Email</h1>
                                        <label htmlFor="firstName">
                                            <input className="p-[10px] w-full border-gray-500 border rounded" id="email" name="email" placeholder="example@email.com"/>{errors.email && touched.email ? (<div><p style={{color:"red"}}>{errors.email}</p></div>) : null}</label>
                                    </div>
                                </div>
                                    <div className="flex flex-col items-start">
                                        <div className="mt-[20px]">
                                            <h1>Опишите суть вопроса, ситуации</h1>
                                            <label htmlFor="firstName">
                                                <textarea className="p-[10px] w-[300px] border-gray-500 border rounded" id="email" name="email" placeholder="Опишите суть вопроса, ситуации"/>{errors.email && touched.email ? (<div><p style={{color:"red"}}>{errors.email}</p></div>) : null}</label>
                                        </div>
                                        <div className="mt-[15px]">
                                            <button className='p-[10px] bg-orange-500 rounded text-white' type="submit">Отправить</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>)
                    }
                </Formik>
            </div>
        </div>
    );
};

export default FormCall;