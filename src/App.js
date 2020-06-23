import React from 'react';
import Routers from './Routers'
import './style.scss'

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="root-app">
                <Routers/>
            </div>
        )
    }
}