import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/preloader";



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
      <div>
        <div className={s.profileBg}><img src="https://wallbox.ru/wallpapers/main/201611/e24797d8928253e.jpg" alt=""/></div>
        <div className={s.description}><img src={props.profile.photos.small} alt=""/> {props.profile.aboutMe}</div>
      </div>
  );
};

export default ProfileInfo;