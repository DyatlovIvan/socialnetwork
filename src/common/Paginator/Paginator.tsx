import s from "./Paginator.module.css";
import React, {useState} from "react";


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?:number
}

export const Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged,portionSize =10,...props}: PropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber,setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber-1)*portionSize+1
    const rightPortionPageNumber = portionNumber*portionSize

    return (
        <div>
            {portionNumber>1 &&
            <button onClick={()=>setPortionNumber(portionNumber-1)}>Back</button>}
                {pages.filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(el => {
                    return <span onClick={() => onPageChanged(el)}
                                 className={`${currentPage === el ? s.selectedPage : ''} ${s.page}`}>
                        {el}
                    </span>
                })}
            {portionCount > portionNumber &&
            <button onClick={()=>setPortionNumber(portionNumber+1)}>Next</button>}

        </div>
    )
}