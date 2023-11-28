export default function NewsItem({post}) {
    var cardStyle = {
        height: 500
    };



    return (
        <div className="card" style={cardStyle}>
            <div className="card-divider">
                {post.title}
            </div>
            <a href="URL TO WEBSITE NEW YORK TIMES" target="_blank" rel="noreferrer">
                <img src="IMAGE" alt="TITLE" />
            </a>
            <div className="card-section">
                <p>{post.abstract}</p>
            </div>
        </div>
    );
};
