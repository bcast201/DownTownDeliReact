import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel() {
        this.setState({
             open: !this.state.open
     })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light sticky-top">
                    <Link to='/' className='navbar-brand'><h1 className=' brand'>Danny's Downtown Deli</h1></Link>
                    <button className="navbar-toggler" toggle={this.togglePanel} data-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu" isOpen={this.state.open} >
                        <ul className="nav navbar-nav ml-auto">
                            <Link to='/menu' className='nav-link'>
                                <li className="nav-item">
                                    Menu
                        </li>
                            </Link>
                            <Link to='/location' className='nav-link'>
                                <li>
                                    Location
                        </li>
                            </Link>
                            <li>
                                <a href="http://metrodiningdelivery.com/menus/dannys_online_order_form_lincoln_ne.html" target="_blank" rel="noopener noreferrer" className="nav-link">Delievery</a>
                            </li>
                            <Link to='/aboutdanny' className='nav-link'>
                                <li>
                                    About Danny
                        </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;