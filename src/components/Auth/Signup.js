import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {

    onSubmit = formProps => {
        this.props.signup(formProps);
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Name</label>
                    <Field
                        name='name'
                        type='text'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset> 
                <fieldset>
                    <label>Email</label>
                    <Field
                        name='email'
                        type='text'
                        component='input'
                        autoComplete='none'
                    /> 
                </fieldset> 
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name='password'
                        type='password'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset> 
                <fieldset>
                    <label>Confirm Password</label>
                    <Field
                        name='password2'
                        type='password'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset> 
                <button>Signup</button>
            </form> 
        );
    }
}

export default compose(
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(Signup); 

