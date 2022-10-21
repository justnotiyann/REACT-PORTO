import Title from './Title';

export default function Tech() {
    return (
        <div className="container" id="tech">
            <Title
                title="Tools that I Love"
                content="beberapa tools yang saat ini saya gunakan"
            />
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 mb-3">
                    <CardTech
                        icon="github"
                        title="Github"
                        content="Github merupakan salah satu tools yang sangat berguna untuk melakukan kolaborasi"
                    />
                </div>
                <div className="col-lg-3 mb-3">
                    <CardTech
                        icon="square-js"
                        title="Javascript"
                        content="Javascript merupakan salah satu tools yang sangat berguna untuk melakukan kolaborasi"
                    />
                </div>
                <div className="col-lg-3 mb-3">
                    <CardTech
                        icon="sass"
                        title="Sass"
                        content="Javascript merupakan salah satu tools yang sangat berguna untuk melakukan kolaborasi"
                    />
                </div>
            </div>
        </div>
    );
}

function CardTech(props) {
    return (
        <div className="card_custom">
            <div className="card_custom_icon">
                <i className={`fa-brands fa-${props.icon}`}></i>
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
