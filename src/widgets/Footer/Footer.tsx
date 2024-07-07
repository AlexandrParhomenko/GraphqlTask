import React, {FC} from 'react';
import "./Footer.scss"

interface FooterProps {
    page: number
    setPage: Function
    getData: Function
}

const Footer: FC<FooterProps> = ({page, setPage, getData}) => {

    return (
        <div className={"footer"}>
            {page - 1 > 0 && <div className={"page"} onClick={() => {
                setPage(page - 1)
                getData(page)
            }}>{page - 1}</div>}
            <div className={"pickedPage"}>{page}</div>
            {page + 1 < 11 && <div className={"page"} onClick={() => {
                setPage(page + 1)
                getData(page)
            }}>{page + 1}</div>}
        </div>
    );
};

export default Footer;