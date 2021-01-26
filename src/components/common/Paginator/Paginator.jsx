import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  
  return (
    <div className={s.paginator}>
      <ul className={s.nav}>
        {portionNumber > 1 && <button onClick={() => {
          setPortionNumber(portionNumber - 1);
        }
        }>PREV</button>}
        {
          pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
              return <li onClick={(e) => {
                onPageChanged(page);
              }} className={cn({[s.selectedPage]: currentPage === page}, s.pageNumber)} key={page}>{page}</li>;
            })
        }
        {portionCount > portionNumber && <button onClick={() => {
          setPortionNumber(portionNumber + 1);
        }
        }>NEXT</button>}
      </ul>
    </div>
  );
};

export default Paginator;
