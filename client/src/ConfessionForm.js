import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Confessions } from './Confessions';
import './App.css';

export default class ConfessionForm extends React.Component {
    constructor(props){
        super(props);

    this.state = {uniRadios: 'Other', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }
    handleSubmit(event){
        fetch('/submit_content', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            console.log(response);
            return response;
        })

        const root = ReactDOM.createRoot(
            document.getElementById('site-content')
        );
        root.render(<Confessions />);
        event.preventDefault();
    }

    handleRatherNot(){
        const root = ReactDOM.createRoot(
            document.getElementById('site-content')
        );
        root.render(<Confessions />);
    }

    render(){
        return (
            <div className="row" id="confession-form-row">
                <form id="confession-form" onSubmit={this.handleSubmit}>
                    <h1 className='form-group'>Submit a confession to view</h1>
                    <span className="form-group">
                        <h4 htmlFor="uniRadios">Uni</h4>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="uniRadios"
                                id="uomRadio"
                                value="UoM"
                                checked={this.state.uniRadios === "UoM"}
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label" htmlFor="uomRadio">UoM</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="uniRadios"
                                id="mmuRadio"
                                value="MMU"
                                checked={this.state.uniRadios === "MMU"}
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label" htmlFor="uomRadio">
                            MMU
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="uniRadios"
                                id="uosRadio"
                                value="UoS"
                                checked={this.state.uniRadios === "UoS"}
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label" htmlFor="uomRadio">
                            UoS
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="uniRadios"
                                id="otherRadio"
                                value="Other"
                                checked={this.state.uniRadios === "Other"}
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label" htmlFor="uomRadio">
                            Other
                            </label>
                        </div>
                    </span>
                    <div className="form-group">
                        <h4 htmlFor="confessionTextArea">Confession</h4>
                        <textarea 
                            required
                            className="form-control"
                            id="confessionTextArea"
                            rows="8"
                            maxLength="1024"
                            name="content"
                            onChange={this.handleChange}
                        ></textarea>
                        <small id="confessionAnonymous" className="form-text text-muted">All confessions are completely anonymous</small>
                    </div>
                    <button type="submit" className="btn btn-confess">Confess</button>
                    {/* <small id="ratherNot" onClick={this.handleRatherNot}>No thanks</small> */}
                </form>
            </div>
        )
    }
}