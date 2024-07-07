import "./Header.scss"
import {FC} from "react";

interface HeaderProps {
    searchValue: string
    setSearchValue: Function
    getData: Function
}

const Header: FC<HeaderProps> = ({searchValue, setSearchValue, getData}) => {

    return (
        <div className="header">
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="header__searchField" type={"text"}></input>
            <button onClick={() => {
                localStorage.setItem("searchValue", searchValue)
                getData()
            }}>Поиск</button>
        </div>
    );
};

export default Header;