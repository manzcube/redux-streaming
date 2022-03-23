import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class StreamCreate extends React.Component {

    renderInput({ input, label, meta }) {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`
        return (            
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                <div>{(meta.touched && meta.error) ? meta.error : ''}</div>
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title' />
                <Field name='description' component={this.renderInput} label='Enter Description' />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if (!formValues.description) {
        errors.description = 'You must enter a title'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'streamCreate', 
    validate
})(StreamCreate);  

export default connect(null, { createStream }) (formWrapped)