import React from 'react';
import PropTypes from 'prop-types';
import BGImg from '@/assets/images/emailSubscribe.svg';

function JoinMePanel({ clickMe }) {
    const clickHandler = evt => {
        console.log(
            '🚀 ~ file: JoinMePanel.jsx:8 ~ clickHandler ~ clickHandler:',
            'I WAS CLICKED',
            evt
        );

        clickMe && clickMe();
    };
    return (
        <div
            style={{
                padding: '44px 40px',
                background: `url(${BGImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '483px',
                height: '300px',
                direction: 'rtl',
                fontFamily: 'nunito-sans-extra-bold',
            }}
        >
            <span>בואו להיות חלק מקהילת #כולא_לייק 😃👋 </span>
            <ul>
                <li> סדנאות והרצאות ממיטב אנשי ההייטק בתעשייה.</li>
                <li>סיוע ועזרה להקפצת הקריירה שלך.</li>
                <li>מאגר אירועים שקורים בקהילה.</li>
                <li>חשיפה למגייסים.</li>
                <li>ועוד מלא הטבות ועידכונים לכל מי שנרשם.</li>
            </ul>

            <button onClick={clickHandler}>צרפו אותי</button>
        </div>
    );
}

JoinMePanel.propTypes = {};

export default JoinMePanel;
