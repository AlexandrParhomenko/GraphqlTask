import React from 'react';
import {Link} from "react-router-dom";
import {useCardStore} from "../../src/store/store";
import moment from "moment";

const CardPage = () => {
    let card = useCardStore((state) => state.card)
    const lsCard = localStorage.getItem("pickedCard") || ""

    if (!card.owner) {
        card = JSON.parse(lsCard)
    }

    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100vh"}}>
            <Link style={{position: "fixed", top: 20, left: 20}} to={"/"}>
                <button>Назад</button>
            </Link>
            <div className={"cardPageWindow"}>
                {card.owner && <img style={{borderRadius: 50}} height={50} width={50} src={card.owner.avatar_url} alt={"avatar"}/>}
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span>Name: {card.full_name}</span>
                    <span>Stars: {card.stargazers_count}</span>
                    <span>Last commit: {moment(card.updated_at).format("DD.MM.YYYY HH:mm")}</span>
                    <span>Nickname: <Link to={card.owner.html_url}><span>{card.owner.login}</span></Link></span>
                    <span>Language: {card.language || "none"}</span>
                    <span>Description: {card.description || "none"}</span>
                </div>
            </div>
        </div>
    );
};

export default CardPage;