import React from "react";
import s from "./ProfileInfo.module.css"



const ProfileInfo = () => {
  return (
      <div>
        <div className={s.profileBg}><img src="https://wallbox.ru/wallpapers/main/201611/e24797d8928253e.jpg" alt=""/></div>
        <div className={s.description}><img src="https://avatars.mds.yandex.net/get-pdb/1649566/504cd4c3-a457-45f8-829f-1fadda082892/s1200?webp=false" alt=""/> + desc</div>
      </div>
  );
};

export default ProfileInfo;