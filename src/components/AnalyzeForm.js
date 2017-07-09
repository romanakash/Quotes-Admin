import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { postQuotes } from '../api';
import Tag from './Tag';
const json = require('../../data.json');

class AnalyzeForm extends Component {
    constructor() {
        super();
        this.data = [];
        this.quotes = [];
        this.index = 0;
        this.state = {
            value: '',
            author: '',
            tags: {},
        };
    }
    componentWillMount() {
        let index = localStorage.getItem('number');
        if (index) {
            this.index = parseInt(index, 10);
        }
        this.data = json;
        console.log(this.data.length);
    }
    componentDidMount() {
        this.switchQuote();
    }
    switchQuote = (position) => {
        switch(position) {
            case "right":
                this.index++;
                break;
            case "left":
                this.index--;
                break;
            case "ten":
                this.index += 10;
                break;
            case "first":
                this.index = 0;
                break;
            default:
                this.index = this.index;
        }
        const value = this.data[this.index].value;
        const author = this.data[this.index].author;
        this.setState({ value: value, author: author, tags: null})
        localStorage.setItem('number', this.index.toString())
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
        this.quotes.push(this.state);
        console.log("Succesfully Added");
    }
    handleClear = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
            author: '',
            tags: null
        });
    }
    handleBucket = (e) => {
        e.preventDefault();
        this.quotes = [];
        console.log("Cleared Bucket");
    }
    handleRequest = (e) => {
        e.preventDefault();
        postQuotes(this.quotes);
        console.log("Sent to Server");
    }
    handleIndex = (e) => {
        let index = e.target.value;
        if (index && index < 36165) {
            this.index = parseInt(index, 10);
            this.switchQuote();
        }
        else {
            this.switchQuote("first");
        }
    }
    render() {
        return (
            <div className="form">
                <TextField
                    id="index"
                    value={this.index.toString()}
                    onChange={this.handleIndex}
                    floatingLabelText="Index"
                    fullWidth={true}
                    multiLine={true}
                />
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
                    label="Left"
                    primary={true}
                    style={{ margin: 12 }}
                    onClick={() => this.switchQuote("left")}
                />
                <RaisedButton
                    label="Right"
                    primary={true}
                    style={{ margin: 12 }}
                    onClick={() => this.switchQuote("right")}
                />
                <RaisedButton
                    label="Skip 10"
                    primary={true}
                    style={{ margin: 12 }}
                    onClick={() => this.switchQuote("ten")}
                /> <br /> <br />
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

export default AnalyzeForm;
