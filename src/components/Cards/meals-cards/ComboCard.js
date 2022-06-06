// import React, {useEffect} from 'react';
// import {addToBasket} from "../../../redux/action/MenuActions";
// import {useDispatch} from "react-redux";
// import {getDrinks} from "../../../redux/action/Drinks";
// import MealImage from "../../../assets/img/meal52345.png";
//
// const DrinksCard = ({el}) => {
//     console.log(el)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(())
//     }, [])
//     return (
//         <>
//             <div className="meal">
//                 <div className="meal-asset">
//                     <img src={MealImage} className="meal-asset-img" alt="photo"/>
//                 </div>
//                 <h3 className="meal-title text-white">{el.name}</h3>
//                 <h3 className="meal-desc text-white">{el.description}</h3>
//                 <div className="meal-buttons2 flex justify-center">
//                     <button className="meal-buttons2-btn3 text-white"
//                             onClick={() => dispatch(addToBasket(el))}>В Корзину
//                         за {el.price} c.
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default DrinksCard;