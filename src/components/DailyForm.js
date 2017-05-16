import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { postDaily } from '../api';

let dailies = [];

class DailyForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            author: '',
            day: '',
            date: null
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
    }
    handleDate = (e, date) => {
        this.setState({ date: date })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        dailies.push(this.state);
        console.log("Succesfully Added");
    }
    handleClear = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
            author: '',
            day: ''
        })
    }
    handleBucket = (e) => {
        e.preventDefault();
        dailies = [];
        console.log("Cleared Bucket");
    }
    handleRequest = (e) => {
        e.preventDefault();
        postDaily(dailies);
        console.log("Sent to Server");
    }
    render() {
        return (
            <div className="form">
                <TextField
                    id="value"
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Value"
                    fullWidth={true}
                    multiLine={true}
                />
                <TextField
                    id="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                    floatingLabelText="Author"
                /> <br />  <br />
                <DatePicker
                    hintText="Date"
                    value={this.state.date}
                    onChange={this.handleDate}
                    container="inline" mode="landscape"
                />
                <TextField
                    id="day"
                    value={this.state.day}
                    onChange={this.handleChange}
                    floatingLabelText="Day"
                /> <br />  <br />
                <RaisedButton
                    label="Submit"
                    primary={true}
                    style={{ margin: 12 }}
                    onClick={this.handleSubmit}
                />
                <RaisedButton
                    label="clear"
                    primary={true}
                    style={{ margin: 12 }}
                    onClick={this.handleClear}
                /> <br />
                <RaisedButton
                    label="Send to api"
                    secondary={true}
                    style={{ margin: 12 }}
                    onClick={this.handleRequest}
                /> <br />
                <RaisedButton
                    label="Clear Bucket"
                    secondary={true}
                    style={{ margin: 12 }}
                    onClick={this.handleBucket}
                /> <br />
            </div>
        );
    }
}

export default DailyForm;
