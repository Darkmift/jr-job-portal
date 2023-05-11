// styles
import styles from './ArticleList.module.scss';
// proptypes
import PropTypes from 'prop-types';
// cmps
import Article from './index';
// proptype article
// import ArticlePropType from './index';

const ArticleList = ({ articles }) => {
    return (
        <div className={styles['article-list']}>
            <h3 className={styles['secondary-heading']}>כתבות אחרונות</h3>
            <div className={styles['articles-wrapper']}>
                {articles.map((article, key) => (
                    <Article
                        key={key}
                        article={article}
                    />
                ))}
            </div>
        </div>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            author: PropTypes.string,
            date: PropTypes.object,
            authorDescription: PropTypes.string,
        })
    ),
};

export default ArticleList;
