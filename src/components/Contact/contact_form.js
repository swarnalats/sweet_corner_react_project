import React from 'react';
import { Field, reduxForm } from 'redux-form';

// class ContactForm extends React.Component {

//     constructor(props)
//     {
//         super(props);
//     }

//     handleFormSubmit(formValue)
//     {
//         console.log("Form submitted");
//     }

//     resetForm()
//     {
//         this.props.reset();
//     }

//     render()
//     {
//         const { handleSubmit } = this.props;
//         const required = value => value ? undefined : 'Required';
//         const maxLength = max => value =>
//             value && value.length > max ? `Must be ${max} characters or less` : undefined
//         const maxLength15 = maxLength(15)
//         const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
//         const minValue = min => value =>
//             value && value < min ? `Must be at least ${min}` : undefined
//         const minValue18 = minValue(18)
//         const email = value =>
//              value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//                     'Invalid email address' : undefined   
//         const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//             <div>
//                 <label>{label}</label>
//                     <div>
//                         <input {...input} placeholder={label} type={type}/>
//                             {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//                     </div>
//             </div>
//         );   
        
//         {        
//         return (
            
//             <div style={{position:"absolute" float:"right" }}>
//                 <h2>My Contact Form</h2>
//                 <form onSubmit= { handleSubmit(this.handleFormSubmit)}>
                   
//                 <div className="input-field">
//                     <label>Name</label>
//                     <Field name="name" type="text" component="input" placeholder="Username" label="Username" validate={`${const required = value => value ? undefined : 'Required'}`}></Field>
//                 </div>   
//                 <div className="input-field">
//                     <label>Email</label>
//                     <Field name="email" type="email" component="input" label="Email" validate={email}></Field>
//                 </div>    
//                 <div>
//                     <label>Phone</label>
//                     <Field name="phone" component="input"></Field> 
//                 </div>
//                 <div> 
//                     <label>Subject</label>
//                     <Field name="subject" component="input"></Field> 
//                 </div> 
//                 <div>
//                     <label>Message</label> */}
//                     <Field name="message" component="input"></Field>
//                 </div> 
//                 <button onClick={this.handleFormSubmit}>Send</button>
//                </form>
                
//             </div>   
//           );
//         }
//     }
// }

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} 
    </div>
  </div>
)

const ContactForm = (props) => {
    console.log("Props:",props);
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        component={renderField} placeholder="Username" 
        validate={[ required]}
      />
      <Field name="email" type="email"
        component={renderField} placeholder="email" 
        validate={email}
        
      />
      <Field name="phone" type="number"
        component={renderField} placeholder="phone"
        validate={[ required]}
        
       />
       <Field name="subject" type="text"
        component={renderField} placeholder="subject"
        validate={[ required]}        
       /> 
       <Field name="message" type="text"
        component={renderField} placeholder="message"
        validate={[ required]}        
       />   
        <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm ({
    form:'ContactForm'
})(ContactForm);