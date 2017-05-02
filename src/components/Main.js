import React, { Component } from 'react';
import Forms from './Forms';
import RaisedButton from 'material-ui/RaisedButton';

class Main extends Component {
    state = {
        type: 'quotes'
    }
    setQuote = () => {
        this.setState({ type: 'quotes'})
    }
    setDaily = () => {
        this.setState({ type: 'daily' })
    }
    render() {
        return (
            <div>
                <div className="top-bar">
                    <h1 className="heading">{this.state.type.toUpperCase()}</h1>
                </div>
                <div className="main">
                    <RaisedButton
                        label="quotes"
                        secondary={true}
                        style={{ margin: 12 }}
                        onClick={this.setQuote}
                    />
                    <RaisedButton
                        label="daily"
                        secondary={true}
                        style={{ margin: 12 }}
                        onClick={this.setDaily}
                    /> <br /> <br/>
                    <Forms type={this.state.type}/>
                </div>
            </div>
        );
    }
}

export default Main;
