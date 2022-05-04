import React, {useState} from 'react';
import ".././../styles/modals/modal.scss";
import {Link, Route, Routes} from 'react-router-dom'
import {publicApi} from "../../http/publicApi";

export const Modal = ({active, setActive}) => {
    const [user, setUser] =useState({
        username:"",
        email:"",
        password:"",
        password2:"",
    })
    const handleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const sendData= (e) => {
        e.preventDefault()
        publicApi.post("/auth/jwt/create/").then(({data}) => console.log(data))
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-sign flex flex-row justify-center">
                    <Link to="admin/sign-in">
                        <h1 className="modal-sign-title m-7">Вход</h1>
                    </Link>
                    <Link to="admin/sign-up">
                        <h1 className="modal-sign-title m-7">Регистрация</h1>
                    </Link>
                </div>
                <div className="modal-sign-cont flex justify-center">
                    <Routes>
                        <Route path="admin/sign-in" element={
                            <div className="form flex flex-col">
                                <input type="email" name="email" onChange={handleChange} className="form-input mt-3 p-3" placeholder="E-mail"/>
                                <input type="password" name="password" onChange={handleChange} className="form-input mt-3 p-3" placeholder="Пароль"/>
                                <button className="form-btn mt-3">Войти</button>
                                <h1 className="form-forgot mt-3 ml-16">Забыли пароль?</h1>
                            </div>
                        }>
                        </Route>
                        <Route path="admin/sign-up" element={
                            <form onSubmit={sendData}>
                                <div className="form flex flex-col">
                                    <input type="text" name="username" onChange={handleChange} className="form-input p-3" placeholder="Имя"/>
                                    <input type="email" name="email" onChange={handleChange} className="form-input mt-3 p-3" placeholder="E-mail"/>
                                    <input type="password" name="password" onChange={handleChange} className="form-input mt-3 p-3" placeholder="Пароль"/>
                                    {/*<Link to="admin/sign-up/confirmation">*/}
                                        <button className="form-btn mt-3">Зарегистрироваться</button>
                                    {/*</Link>*/}
                                    <Routes>
                                        {/*<Route path="admin/sign-up/confirmation" element={*/}
                                        {/*    <form>*/}
                                        {/*        <h1>Вам отправлено с кодом подтверждения регистрации в электронные*/}
                                        {/*            почте</h1>*/}
                                        {/*        <input type="text" className="form-input p-3"*/}
                                        {/*               placeholder="Код подтверждения"/>*/}
                                        {/*        <button className="form-btn mt-3">Зарегистрироваться</button>*/}
                                        {/*    </form>*/}
                                        {/*}>*/}
                                        {/*</Route>*/}
                                    </Routes>
                                </div>
                            </form>
                        }>
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};
