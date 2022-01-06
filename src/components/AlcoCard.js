import React from "react";
import PropTypes from 'prop-types';
import '../routes/main.css';

function AlcoCard({drink, handlerBuyAlco}) {
    return (
        <div className="alcoCard">
            <img src={drink.img} alt={drink.name} width="300" height="300"/>
            <p>{drink.name}</p>
            <p>{drink.price} $</p>
            <button onClick={() => handlerBuyAlco(drink.name)}>Buy now</button>
        </div>
    )
}

AlcoCard.propTypes = {
    drink: PropTypes.object,
    handlerBuyAlco: PropTypes.func
};

export default AlcoCard