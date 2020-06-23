import React from 'react';
import Routers from './Routers'

export default class index extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Routers/>
            </React.Fragment>
        )
    }
}