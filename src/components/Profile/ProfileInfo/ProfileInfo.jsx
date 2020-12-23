import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const { contacts } = props.profile;
  return (
    <div className={s.profile}>
      <div className={s.photo}>
        <img
          src={
            props.profile.photos.large ? props.profile.photos.large : 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1'
          }
          alt=""
        />
      </div>
      <div className={s.inf}>
        <div className={s.fullName}>{props.profile.fullName}</div>
        {/* <div className={s.aboutMe}>{props.profile.aboutMe}</div> */}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div className={s.contacts}>
          {Object.keys(contacts).map((link, idx) =>
            contacts[link] ? (
              <a href={contacts[link]} className={s.link} key={idx}>
                {contacts[link]}
              </a>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
