import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => (
    <div>
        <div>
            <img src='https://www.seonews.ru/upload/medialibrary/2d7/2d7a50bf0f6a956bbfcc00b13e25dab2.jpg' alt=''/>
        </div>
        <div className={s.discriptionBlock}>
            avatar + discription
        </div>
    </div>
);
export default ProfileInfo