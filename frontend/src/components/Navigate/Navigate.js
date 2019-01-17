import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigate.css';

class Navigate extends Component {

    render() {
        return (
            <ul className='mainNav'>
                <li><Link to='/'>Posts</Link></li>
                <li><Link to='/add-post'>Add new post</Link></li>
            </ul>
        )
    }
}

export default Navigate;