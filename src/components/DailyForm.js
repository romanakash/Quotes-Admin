import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { postDaily } from '../api';
import Tag from './Tag';
import moment from 'moment';

let dailies = [];

class DailyForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            author: '',
            tags: {},
            day: '',
            date: null,
            creationDate: null,
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value});
    }
    handleDate = (e, date) => {
        this.setState({ date: date});
        let formatDate = moment(date).format("DD-MM-YY");
        console.log(formatDate);
        this.setState({ creationDate: formatDate})
    }
    handleTag = (chosenRequest) => {
        this.setState({ tags: chosenRequest });
        console.log(chosenRequest.tagId, chosenRequest.tag);
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
            tags: {}
        });
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
        let defaultd = new Date(2017, 6, 1)
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
                    hintText="Creation Date"
                    value={this.state.date}
                    onChange={this.handleDate}
                    container="inline" mode="landscape"
                    defaultDate={defaultd}
                />
                <TextField
                    id="day"
                    value={this.state.day}
                    onChange={this.handleChange}
                    floatingLabelText="Day"
                /> <br />  <br />
                <Tag handler={this.handleTag}/> <br />
                <RaisedButton
                    label="Submit"
                    primary={true}
                    style={{ margin: 12 }}
                    disabled={this.state.tag === '' ? true : false}
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
                    disabled={this.state.tag === '' ? true : false}
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
