// import React, {useEffect} from 'react';
// import MealImg from "../../assets/img/Image 2.svg";
// import {addToBasket, getProducts} from "../../redux/action/MenuActions";
// import {useDispatch} from "react-redux";
//
// const MealCard = ({el}) => {
//     // const catalog = useSelector(state => state.catalog)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getProducts())
//     }, [])
//     return (
//         <div>
//             {
//                 el.map(el => (
//                     <div className="meal flex flex-wrap basis-2/3" key={el.id}>
//                         <div className="meal-cont m-5 mt-4">
//                             <div className="meal-cont-head flex flex-row">
//                                 <div className="meal-cont-head-news bg-red-500">
//                                     <h3 className="meal-cont-head-news-new text-white mt-2">New!</h3>
//                                 </div>
//                                 <img src={MealImg} className="meal-img mx-4" alt=""/>
//                             </div>
//                             <h3 className="meal-cont-title text-white pt-4">{el.name}</h3>
//                             <h3 className="meal-cont-desc text-white">{el.description}</h3>
//                             <div className="meal-cont-buttons flex justify-center mt-5">
//                                 <button
//                                     className="meal-cont-buttons-btn text-white">Традиционное
//                                 </button>
//                                 <button
//                                     className="meal-cont-buttons-btn2 text-white">Тонкое
//                                 </button>
//                             </div>
//                             <div className="meal-cont-buttons2 flex justify-center">
//                                 <button className="meal-cont-buttons2-btn3 text-white mt-4"
//                                         onClick={() => dispatch(addToBasket(el))}>В Корзину
//                                     за {el.price} c.
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };
//
// export default MealCard;