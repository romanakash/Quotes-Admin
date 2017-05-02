import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { postQuotes } from '../api';
import Tag from './Tag';

let quotes = [];

class QuotesForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            author: '',
            tags: {},
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value});
    }
    handleTag = (chosenRequest) => {
        this.setState({ tags: chosenRequest });
        console.log(chosenRequest);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        quotes.push(this.state);
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
        quotes = [];
        console.log("Cleared Bucket");
    }
    handleRequest = (e) => {
        e.preventDefault();
        postQuotes(quotes);
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
                /> <br /> <br />
                <Tag handler={this.handleTag}/> <br /> <br />
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

export default QuotesForm;
