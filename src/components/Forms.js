import React, { Component } from 'react';
import QuotesForm from './QuotesForm';
import DailyForm from './DailyForm';

class Form extends Component {
    render() {
        let type = this.props.type;
        switch (type) {
            case "quotes":
                return <QuotesForm />;
            case "daily":
                return <DailyForm />;
            default:
                return <h1>Error</h1>
        }
    }
}

export default Form;
