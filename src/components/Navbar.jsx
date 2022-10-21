export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="#">
                        My Portofolio React
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
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
        <li class="nav-item">
            <a class="nav-link" href={props.link}>
                {props.title}
            </a>
        </li>
    );
}
