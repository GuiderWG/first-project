import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({ currentPage, totalCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow, onPageMore, btnTextIsFetching, ...props }) => {
  return (
    <div className={s.users}>
      {users.map((user) => (
        <User user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow}  key={user.id} />
      ))}

      <button
        className={`${s.button} ${s.button_red}`}
        onClick={() => {
          onPageMore(currentPage);
        }}
      >
        {btnTextIsFetching ? <FontAwesomeIcon icon="circle-notch" spin /> : 'Show more'}{' '}
      </button>
  
      <Paginator currentPage={currentPage}
                 totalCount={totalCount}
                 pageSize={pageSize}
                 onPageChanged={onPageChanged} />
    </div>
  );
};

export default Users;
