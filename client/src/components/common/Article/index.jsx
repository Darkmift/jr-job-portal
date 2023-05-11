import React from 'react';
import style from './Article.module.scss';

const Article = () => {
    return (
        <div className={style.ArticleDivContainer}>
            <div className={style.articleTop}>
                <div className={style.articleTitle}>
                    רשימה של 5 טיפים שעזרו לי ללמוד CSS
                </div>
                <div className={style.avatarDiv}>
                    <div className={style.avatarImg}></div>
                    <p>אדיר קנדל</p>
                </div>
            </div>
            <div className={style.articleBottom}>
                <div className={style.articleTitleBottom}>
                    רשימה של 5 טיפים שעזרו לי ללמוד CSS
                </div>
                <div className={style.avatarDivBottom}>
                    <div className={style.avatarImgBottom}></div>
                    <div className={style.avatarBottomLeft}>
                        <p>אדיר קנדל</p>
                        <div>
                            <p>מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.</p>
                            <p> {` `} 13/12/22</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
