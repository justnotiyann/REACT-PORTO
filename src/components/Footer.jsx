import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="row p-5 d-flex justify-content-center ">
                <Column column="3" title="Belajar Javascript" content="lorem" />
                <Column column="3" title="Belajar Sass" content="lorem" />
                <Column column="3" title="Belajar NodeJS" content="lorem" />
            </div>
        </footer>
    );
}

function Column(props) {
    return (
        <div className={`col-lg-${props.column} text-center card_footer`}>
            <div className="card_footer_title">
                <p className={"fw-bold"}>{props.title}</p>
            </div>
            <div className="card_footer_content">
                <p>{props.content}</p>
            </div>
        </div>
    );
}
