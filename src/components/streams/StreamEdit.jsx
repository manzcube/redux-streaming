import React, { useEffect } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editStream, fetchStream } from "../../actions";
import { useParams } from "react-router-dom";




class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(3)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return <div>{this.props.stream.title}</div>
    }
}

const mapStateToProps= (state) => {
    return { stream: state.streams[3]}
}

export default connect(mapStateToProps, {fetchStream}) (StreamEdit)


// const StreamEdit = (props) => {
//     const ID = useParams().id

//     useEffect(() => {        
//         props.fetchStream(ID)
//     })

//     const renderInput = ({ input, label, meta }) => {
//         const className = `field ${meta.touched && meta.error ? 'error' : ''}`
//         return (            
//             <div className={className}>
//                 <label>{label}</label>
//                 <input {...input} autoComplete='off' />
//                 <div>{(meta.touched && meta.error) ? meta.error : ''}</div>
//             </div>
//         )
//     }


//     if (!props.stream) {
//         return <div>Loading...</div>
//     } else {
//         return (
//             <form className="ui form">
//                 <Field name='title' component={renderInput} label='Enter Title' />
//                 <Field name='description' component={renderInput} label='Enter Description' />
//                 <button className="ui button primary">Update</button>
//             </form>
//         )
//     }
// }

// const formWrapped = reduxForm({
//     form: 'streamEdit'
// })(StreamEdit);

// const mapStateToProps = (state) => {
//     return { stream: state.streams }
// }

// export default connect(mapStateToProps, { fetchStream })(formWrapped)