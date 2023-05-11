import React from 'react';
import style from './Article.module.scss';
// proptypes
import PropTypes from 'prop-types';
// utils
import formatDate from '@/utils/formatDate';

const Article = ({
    article: { title, author, date, image, authorDescription },
}) => {
    return (
        <div className={style.ArticleDivContainer}>
            <div className={style.articleTop}>
                <div className={style.articleTitle}>{title}</div>
                <div className={style.avatarDiv}>
                    <img
                        className={style.avatarImg}
                        src={image}
                    ></img>
                    <p>{author}</p>
                </div>
            </div>
            <div className={style.articleBottom}>
                <div className={style.articleTitleBottom}>{title}</div>
                <div className={style.avatarDivBottom}>
                    <img
                        className={style.avatarImgBottom}
                        src={image}
                    ></img>
                    <div className={style.avatarBottomLeft}>
                        <p>{author}</p>
                        <div>
                            <p>{authorDescription}</p>
                            <p>{formatDate(date)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ArticlePropType = PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.object,
    authorDescription: PropTypes.string,
});

Article.propTypes = {
    articles: ArticlePropType,
};

export default Article;
