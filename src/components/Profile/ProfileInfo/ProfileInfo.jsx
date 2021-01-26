import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  const { contacts } = profile;
  return (
    <div className={s.profile}>
      <div className={s.photo}>
        <img
          src={
            profile.photos.large ? profile.photos.large : 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1'
          }
          alt=""
        />
      </div>
      <div className={s.inf}>
        <div className={s.fullName}>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
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
