export default function Card(props) {
    return (
        <div className="card_custom">
            <div className="card_custom_icon">
                <i className={`fa-${props.jenis_icon} fa-${props.icon}`}></i>
            </div>
            <div className="card_custom_title">
                <p>{props.title}</p>
            </div>
            <div className="card_custom_body">
                <p>{props.content}</p>
            </div>
        </div>
    );
}
function CardColumn(props) {
    return (
        <div className={`${props.column}`}>
            <Card
                icon={`${props.icon}`}
                title={`${props.title}`}
                jenis_icon={`${props.jenis_icon}`}
                content={`${props.content}`}
            />
        </div>
    );
}

Card.column = CardColumn;
