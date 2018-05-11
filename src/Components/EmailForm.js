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
            emailSubmitted: false,
            loading: false,
        }
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!this.state.email.match(emailRegex)) {
            this.setState({
                invalidEmail: true
            });
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

    handleInputChange = e => {
        return (this.state.invalidEmail) ? this.setState({ invalidEmail: false, email: e.target.value}): this.setState({
            email: e.target.value
        })
    }

    handleSelectChange = e => {
        this.setState({ interestedIn: e.target.value });
    }

    handleInvalidEmail = () => {
        return (
            this.state.invalidEmail ? <div style={styles.InvalidEmail}> Please enter a valid email address</div> : null
        );
    }

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
                <Form>
                    <div style={styles.FormHeading}>Subscribe for free marketing tips</div>
                    <div style={styles.FormFieldsContainer}>
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
                    <Button style={styles.FormButton} onClick={this.handleSubmitForm}>{this.state.loading ? "Submitting..." : "Sign up now"}</Button>
                </Form>
            )
        }
    }
}

export default EmailForm;