import s from "./Paginator.module.css";
import React from "react";


type PropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUserCount,pageSize,currentPage,onPageChanged,...props}: PropsType) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span onClick={() => onPageChanged(el)}
                                 className={`${currentPage === el ? s.selectedPage : ''} ${s.page}`}>
                        {el}
                    </span>
                })}
            </div>

        </div>
    )
}