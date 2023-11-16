import { NavLink } from "react-router-dom";

function MainMenu() {
    return(
        <div>
            <h2>Capitals of Asia</h2>
            <ul className="menu">
                <li><NavLink to="/game" className={({ isActive }) => isActive ? "active" : undefined}>Play game</NavLink></li>
                <li><NavLink to="/highscores" className={({ isActive }) => isActive ? "active" : undefined}>Highscores</NavLink></li>
                <li><NavLink to="/info" className={({ isActive }) => isActive ? "active" : undefined}>Info</NavLink></li>
            </ul>
        </div>
    );
}

export default MainMenu;
