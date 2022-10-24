export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        My Portofolio React
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <List link="" title="Home" />
                            <List link="" title="About Me" />
                            <List link="" title="My Projects" />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function List(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link}>
                {props.title}
            </a>
        </li>
    );
}
