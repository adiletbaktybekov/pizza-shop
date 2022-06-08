import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {BsFillTrashFill} from "react-icons/bs";
import {ImCross} from "react-icons/im"
import {getPizza} from "../../../redux/action/Pizza";
import {getDrinks} from "../../../redux/action/Drinks";
import {ADD_TO_BASKET} from "../../../redux/types/types";
import {Link} from "react-router-dom";
import {API} from "../../../API/API";

export const addToBasket = (item) => {
    return {type: "ADD_TO_BASKET", payload: item}
}
const Basket = () => {
    const basket = useSelector(s => s.basket)
    console.log(basket)

    // const {register, handleSubmit, formState: {errors}} = useForm();
    // const onSubmit = data => {
    //     API.post('contact/', data)
    //         .then(response => {
    //             alert("ok")
    //             console.log(response)
    //         }).catch(e => {
    //         console.log(e)
    //         console.log(data)
    //     })
    //     console.log(data)
    // };
    // console.log(el, "Backend ЗАПРОС")
    //
    //
    const dispatch = useDispatch()
    const totalSum = basket.reduce((acc, el) => {
        return el.quantity * el.price + acc
    }, 0)
    useEffect(() => {
        dispatch(getPizza())
    }, [])

    useEffect(() => {
        dispatch(getDrinks())
    }, [])
    return (
        <section id="basket">
            <div className="container">
                {
                    basket.length === 0 ?
                        <div className="empty-basket">
                            <p className="text-white text-2xl font-medium py-10">Корзина пустая!</p>
                            <Link to="/">
                                <button className="empty-basket-btn">Назад</button>
                            </Link>
                        </div>
                        :
                        <div className="basket">
                            <div className="basket-table">
                                <table className="text-sm text-white">
                                    <thead>
                                    <tr className=" pt-5 basket-table-tr border-b border-gray-400 flex justify-between">
                                        <th scope="col" className="basket-table-tr-basket ml-3">
                                            Корзина
                                        </th>
                                        <th scope="col" className="basket-table-tr-delete">

                                            <button
                                                onClick={() => []}
                                                className="flex flex-row mr-3">
                                                Очистить все <BsFillTrashFill style={{width: "18px", height: "20px"}}
                                                                              className=""/>
                                            </button>
                                        </th>
                                    </tr>
                                    </thead>
                                    {
                                        basket.map((el, idx) => (
                                            <tbody>
                                            <tr className=" py-3 flex justify-between border-gray-500">
                                                <th scope="row"
                                                    className=" flex flex-row text-white">
                                                    <td className="text-xl ml-3">{idx + 1}</td>
                                                    <img src={el.image} className="basket-table-td-img ml-3" alt=""/>
                                                    <div className="basket-table-th flex flex-col align-middle">
                                                        <h3 className="basket-table-th-mealTitle pt-5 pl-3">{el.name}</h3>
                                                    </div>
                                                </th>
                                                <td className="">
                                                    <button className="basket-table-btn text-white font-bold"
                                                            onClick={() => dispatch({
                                                                type: "DECREASE_QUANTITY",
                                                                payload: idx
                                                            })}>
                                                        -
                                                    </button>
                                                    <p className="font-bold ml-2">{el.quantity}</p>
                                                    <button className="basket-table-btn text-white font-bold"
                                                            onClick={() => dispatch({
                                                                type: "ADD_TO_BASKET",
                                                                payload: el
                                                            })}>
                                                        +
                                                    </button>
                                                </td>
                                                <td className="">
                                                    <p className="font-bold pt-5 text-xl">{el.price * el.quantity}</p>
                                                </td>
                                                <td className=" ">
                                                    <button
                                                        onClick={() => dispatch({
                                                            type: "REMOVE_FROM_BASKET",
                                                            payload: el.id

                                                        })}
                                                    className="mr-5 mt-5">
                                                        <ImCross style={{width: "25px", height: "25px"}}/>
                                                    </button>
                                                </td>
                                            </tr>

                                            </tbody>
                                        ))
                                    }
                                </table>
                                <h1 className="text-center font-bold text-2xl text-white "> Итого: {totalSum} </h1>
                            </div>
                        </div>

                }
                {/*<>*/}
                {/*    <form*/}
                {/*        className="flex justify-between min-h-screen"*/}
                {/*        onSubmit={handleSubmit(onSubmit)}>*/}
                {/*        <div className="w-5/12">*/}
                {/*            <h1 className="text-[#010049] text-3xl font-bold font-nunito">Контактные*/}
                {/*                данные</h1>*/}
                {/*            <input*/}
                {/*                className="border-2 border-[#010049] text-[#010049] rounded w-full py-2 px-3 outline-none my-2"*/}
                {/*                type="text" placeholder="Фио*" {...register("fullname", {*/}
                {/*                required: true,*/}
                {/*                maxLength: 80*/}
                {/*            })} />*/}
                {/*            <input*/}
                {/*                className="mb-32 border-2 border-[#010049] text-[#010049] rounded w-full py-2 px-3 outline-none my-2"*/}
                {/*                type="tel" placeholder="Телефон*" {...register("Mobile number", {*/}
                {/*                required: true,*/}
                {/*                minLength: 6*/}
                {/*            })} />*/}
                {/*            <div>*/}
                {/*                <h1 className="text-[#010049] text-3xl font-bold font-nunito">Оплата</h1>*/}
                {/*                <div className="flex justify-between pb-5">*/}
                {/*                    <input*/}
                {/*                        className="mt-1 mr-3"*/}
                {/*                        {...register("payment_method", {required: true})} type="radio"*/}
                {/*                        value="Cart"/>*/}
                {/*                    <p className="text-[#010049] font-nunito text-base">Оплачу наличными при*/}
                {/*                        получении заказа</p>*/}
                {/*                </div>*/}
                {/*                <div className="flex justify-between pb-2">*/}
                {/*                    <input*/}
                {/*                        className="mt-1 mr-3"*/}
                {/*                        {...register("payment_method", {required: true})} type="radio"*/}
                {/*                        value="Cash"/>*/}
                {/*                    <p className="text-[#010049] font-nunito text-base">Оплата с банковской*/}
                {/*                        картой через <span className="text-green-600">PayBox</span></p>*/}
                {/*                </div>*/}
                {/*                <input*/}
                {/*                    type="submit"*/}
                {/*                    className='bg-[#010049] text-white py-2 w-full'/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="w-5/12">*/}
                {/*            <h1 className="text-[#010049] text-3xl font-bold font-nunito pb-2">Доставка</h1>*/}
                {/*            <p className="text-gray-500 font-nunito pb-2">Выберите удобный способ доставки*/}
                {/*                для этого заказа.</p>*/}
                {/*            <div className="flex pb-5">*/}
                {/*                <input*/}
                {/*                    className="mt-1 mr-3"*/}
                {/*                    {...register("dostavka", {required: true})} type="radio"*/}
                {/*                    value="Самовывоз"/>*/}
                {/*                <p className="text-[#010049] font-nunito text-base">Самовывоз</p>*/}
                {/*            </div>*/}
                {/*            <div className="flex pb-5">*/}
                {/*                <input*/}
                {/*                    className="mt-1 mr-3"*/}
                {/*                    {...register("dostavka", {required: true})} type="radio"*/}
                {/*                    value="Доставка курьером"/>*/}
                {/*                <p className="text-[#010049] font-nunito text-base">Доставка курьером</p>*/}
                {/*            </div>*/}
                {/*            <input*/}
                {/*                className="mb-32 border-2 border-[#010049] text-[#010049] rounded w-full h-36 pb-24 px-3 outline-none my-2"*/}
                {/*                type="text"*/}
                {/*                placeholder="Область, город (район, село), улица, дом№, кв.№*" {...register("address", {*/}
                {/*                required: true, minLength: 1*/}
                {/*            })} />*/}

                {/*            <div className="bg-[#010049] rounded-2xl py-3 px-14 text-white">*/}
                {/*                <div className="flex justify-between">*/}
                {/*                    <p>Итого: {totalSum} сомов</p>*/}
                {/*                    /!*{el.map(data => data.price ? data.price * data.quantity : "")} сом*!/*/}
                {/*                </div>*/}
                {/*                <p className="text-center pt-5">Ещё не оплачено</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </form>*/}
                {/*</>*/}
            </div>
        </section>
    );
};

export default Basket;