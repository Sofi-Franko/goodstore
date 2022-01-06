import React, { useState } from "react";
import AlcoCard from "../components/AlcoCard";
import './main.css';

const list = [
    {id: "123", img: "https://pictures.mydutyfree.net/images/products/90/50/original/chivas-regal-12.9050.jpg", name: "Jack Daniels Honey", price: 30},
    {id: "234", img: "https://rumka.online/uploads/catalog/webp/17b64917b3e7353364ce10011f0d37a3.jpg.webp", name: "Whiskey Chivas", price: 50},
    {id: "345", img: "https://okwine.ua/files/resize/400x400/product/1968974886097388575/4dc6f9e0-bac9-11ea-9fc4-f75a7141d8b8.jpg.webp.webp", name: "Beileys", price: 19},
    {id: "456", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIuj5k1vCxP24DN55Q5gh93VNdDZfbFPICg&usqp=CAU", name: "Champagne", price: 25},
    {id: "567", img: "https://img2.zakaz.ua/1.1626804058.ad72436478c_2021-07-20_Tatyana_L/1.1626804058.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.350nowm.jpg.350x.jpg", name: "Captain Morgan", price: 22},
    {id: "678", img: "https://img2.zakaz.ua/upload.version_1.0.dce1389a9f36281bc23b3f398d639930.350x350.jpeg", name: "Martini Bianco", price: 33},
];

function MainPage() {
    const [bought, setBought] = useState([]);
    function handlerBuyAlco(drinkName) {
        setBought(() => [...bought, drinkName]);
    }

    return (
        <>
            <div className={"alcoCardsWrapper"}>
                {alcoListRender(list, handlerBuyAlco)}
            </div>
            <div>
                <h2>Already bought:</h2>
                {bought.length ? showBoughtAlco(bought) : "nothing was bought"}
            </div>
        </>

)

}

function showBoughtAlco(list) {
    return list.map((drinkName, i) => <p key={i}>{drinkName}</p>)
}

function alcoListRender(list, handlerBuyAlco) {
    return list.map((drink) => <AlcoCard key={drink.id} drink={drink} handlerBuyAlco={handlerBuyAlco} />)
}

export default MainPage;