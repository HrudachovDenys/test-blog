import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Navigate } from './components';
import { AddPost, Posts, PostById } from './views';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navigate className="app__navigate"/>

                    <content className="app__content">
                        <Route exact path="/" component={Posts}/>
                        <Route exact path="/add-post" component={AddPost}/>
                        <Route exact path="/post/:id" component={PostById}/>
                    </content>
                </div>
            </Router>
        );
    }
}

export default App;
