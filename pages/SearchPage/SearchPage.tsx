import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import {Link} from "react-router-dom";
import {GithubData, GithubDataItems} from "../../src/types/types";
import Header from "../../src/widgets/Header/Header";
import Footer from "../../src/widgets/Footer/Footer";
import {useCardStore} from "../../src/store/store";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState<string>(localStorage.getItem("searchValue") || "")
    const [data, setData] = useState<GithubData>({} as GithubData)
    const [repoData, setRepoData] = useState<GithubDataItems[]>([] as GithubDataItems[])
    const [page, setPage] = useState<number>(1)
    const updateCard = useCardStore((state) => state.updateCard)

    const getData = async () => {
        if (searchValue.length > 0) {
            fetch(`https://api.github.com/search/repositories?q=${searchValue}&per_page=10&page=${page}`)
                .then(res => res.json())
                .then(json => setData(json))
        }
    }

    useEffect(() => {
        if (searchValue) {
            getData()
        } else {
            fetch("https://api.github.com/users/AlexandrParhomenko/repos")
                .then(res => res.json())
                .then(json => setRepoData(json))
        }

    }, [])

    return (
        <div className={"app"}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} getData={getData}/>
            <div style={{display: "flex", flexDirection: "column", rowGap: 10, height: "80vh", overflowY: "scroll"}}>
                {data.items ? data.items.map((el: any, idx: number) =>
                    <Link onClick={() => {
                        localStorage.setItem("pickedCard", JSON.stringify(el))
                        updateCard(el)
                    }} to={"/card"} key={idx}>
                        <div className={"card"}>
                            <span>{el.full_name}</span>
                            <span>Stars: {el.stargazers_count}</span>
                            <span>Last commit: {moment(el.updated_at).format("DD.MM.YYYY HH:mm")}</span>
                            <span>GitHub: {el.owner.html_url}</span>
                        </div>
                    </Link>) : repoData.length && repoData.map((el, idx) =>
                    <Link onClick={() => {
                        localStorage.setItem("pickedCard", JSON.stringify(el))
                        updateCard(el)
                    }} to={"/card"} key={idx}>
                        <div className={"card"}>
                            <span>{el.full_name}</span>
                            <span>Stars: {el.stargazers_count}</span>
                            <span>Last commit: {moment(el.updated_at).format("DD.MM.YYYY HH:mm")}</span>
                            <span>GitHub: {el.owner.html_url}</span>
                        </div>
                    </Link>)}
            </div>
            <Footer page={page} setPage={setPage} getData={getData}/>
        </div>
    );
};

export default SearchPage;