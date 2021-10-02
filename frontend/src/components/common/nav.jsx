import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/artists">
            Artists
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/genres">
            Genres
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/albums">
            Albums
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/labels">
            Labels
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
