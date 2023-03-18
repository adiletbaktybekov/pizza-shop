import React from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import question from '../../assets/img/question2.0.png'

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    ,
    email: Yup.string()

})


const FormCall = () => {
    return (
        <div>
            <div>
                <Formik validationSchema={SignupSchema}
                        onSubmit={(values, actions) => {
                            console.log(JSON.stringify(values,null,2))
                            actions.setSubmitting(false);}}>
                    {({ errors, touched }) => (
                        <div className="">
                            <Form>
                                <div className="form flex flex-row flex-wrap justify-center">
                                    <div className="">
                                        <h1 className="text-3xl text-center text-orange-500 font-bold mb-5">Помогите нам стать лучше!</h1>
                                        <div className='flex justify-center'>
                                            <img src={question} className=" w-[50%]" alt=""/>
                                        </div>
                                    </div>
                                    <div className="form-right ml-[50px] w-[50%]">
                                        <div className="">
                                            <h1>Имя</h1>
                                            <label htmlFor="firstName">
                                                <input className="p-[10px] w-full border-gray-500 border rounded" id="firstName" name="firstName" placeholder="Иван Петров"/>{errors.firstName && touched.firstName ? (
                                                <div><p style={{color:"red"}}>{errors.firstName}</p></div>
                                            ) : null}
                                            </label>
                                        </div>
                                        <div className="mt-[20px]">
                                            <h1>Email</h1>
                                            <label htmlFor="firstName">
                                                <input className="p-[10px] w-full border-gray-500 border rounded" id="email" name="email" placeholder="example@email.com"/>{errors.email && touched.email ? (<div><p style={{color:"red"}}>{errors.email}</p></div>) : null}</label>
                                        </div>
                                        <div className="mt-[20px]">
                                            <h1>Опишите суть вопроса, ситуации</h1>
                                            <label htmlFor="firstName">
                                                <textarea className="p-[10px] w-full border-gray-500 border rounded" id="email" name="email" placeholder="Опишите суть вопроса, ситуации"/>{errors.email && touched.email ? (<div><p style={{color:"red"}}>{errors.email}</p></div>) : null}</label>
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