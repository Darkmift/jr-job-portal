import "./PostItem.scss";

const PostItem = (props) => {
    return (<div className="post-item">
        <div>
            <span className="post-layout">
                <div className="post-row" >
                    <div className="post-author">שם כותב הפוסט</div>
                    <div className="post-date">פורסם לפני</div>
                </div>
            </span>
            <span className="post-layout">
            <div className="post-row">
                <p >ללא טקסט</p>
                </div>

            </span>

        </div>
    </div>)
};

export default PostItem;