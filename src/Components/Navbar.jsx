import{ Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark ">
            <div className="container-fluid " >
                <Link className="navbar-brand  text-white " to="/">NEWS-FOR-YOU</Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/General">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Politics">Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/Food">Food</Link>
                        </li>
                        
                        
                        {/* <li className="nav-item">
                            <a className="nav-Link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-Link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-Link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    </div>
    )
  }
}
