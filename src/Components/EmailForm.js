import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import { styles } from '../styles';

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            interestedIn: '',
            invalidEmail: false,
            invalidSelect: false,
            emailSubmitted: false,
            loading: false,
        }
    }

    // handling submission of form
    handleSubmitForm = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!this.state.email.match(emailRegex) || !this.state.email) {
            this.setState({
                invalidEmail: true
            });
        }
        else if (!this.state.interestedIn) {
            this.setState({
                invalidSelect: true
            })
        }
        else {
            this.setState({ loading: true });
            setTimeout(() => {
              console.log(`Email Address: ${this.state.email}`);
              console.log(`Interested In: ${this.state.interestedIn}`);
              this.setState({
                loading: false,
                emailSubmitted: true,
              });
            }, 2000);
        }
        
    }

    // handling email input change
    handleInputChange = e => {
        return (this.state.invalidEmail) ? this.setState({ invalidEmail: false, email: e.target.value}): this.setState({
            email: e.target.value
        })
    }

    // handling selecting options change
    handleSelectChange = e => {
        return (this.state.invalidSelect) ? this.setState({
            invalidSelect: false, interestedIn: e.target.value }) : this.setState({ interestedIn: e.target.value});
    }

    // render error message if email inputted in invalid
    handleInvalidEmail = () => {
        return (
            this.state.invalidEmail ? <div style={styles.InvalidEmail}> Please enter a valid email address</div> : null
        );
    }

    // render error message if no option is selected
    handleInvalidSelect = () => {
        return (
            this.state.invalidSelect ? <div style={styles.InvalidSelect}> Please select an option</div> : null
        );
    }

    // render success message when email is valid and an option is selected
    submitMessage = () => {
        return (
            <div>
                <h2 style={styles.SubmitMessage}>Thanks for subscribing</h2>
                <div>{"You'll start receiving free tips and resources soon."}</div>
            </div>
        );
    }

    render() {
        if(this.state.emailSubmitted) {
            return <div>{this.submitMessage()}</div>;
        }
        else {
            return (            
                <Form onSubmit={this.handleSubmitForm} noValidate>
                    <div style={styles.FormHeading}>Subscribe for free marketing tips</div>
                    <div style={{ display: "flex", paddingBottom: this.state.invalidEmail || this.state.invalidSelect ? "0.5em" : "2em" }}>
                        <FormGroup style={styles.FormFields} className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" placeholder="Email Address" name="email" onChange={this.handleInputChange} value={this.state.email} required/>
                    </FormGroup>
                        <FormGroup style={styles.FormFields} className="mb-2 mr-sm-2 mb-sm-0">
                            <Input type="select" name="category" value={this.state.interestedIn} onChange={this.handleSelectChange}  required>
                            <option value="null" >Interested In...</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Site Design">Site Design</option>
                            <option value="New Features">New Features</option>
                            <option value="Client Stories">Client Stories</option>
                        </Input>
                    </FormGroup>
                    </div>
                    {this.handleInvalidEmail()}
                    {this.handleInvalidSelect()}
                    <Button style={styles.FormButton} >{this.state.loading ? "Submitting..." : "Sign up now"}</Button>
                </Form>
            )
        }
    }
}

export default EmailForm;