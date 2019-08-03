import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../assets/images/up-dots.png';


const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderField = ({ input, placeholder, type, style,meta: { touched, error, warning } }) => (
  <div >
    <div>
      <input {...input} placeholder={placeholder} type={type} style={style}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} 
    </div>
  </div>
)

const ContactForm = (props) => {
    console.log("Props:",props);
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    
    <form style={{position:"relative",float:"right"}}onSubmit={handleSubmit}>
      <h2 style={{fontFamily:"arial",color:"#754b23"}}>Contact Form</h2>
      <Field style={{height:"35px",width:"310px",backgroundColor:"#e86b35",margin:"4px 0px"}} name="username" type="text"
        component={renderField} placeholder="Username" 
        validate={[ required]}
      />
      <Field name="email" type="email" style={{height:"35px",width:"310px",backgroundColor:"#f6b53e",margin:"4px 0"}}
        component={renderField} placeholder="email" 
        validate={email}
        
      />
      <Field name="phone" type="number" style={{height:"35px",width:"310px",backgroundColor:"#06b4af",margin:"4px 0"}}
        component={renderField} placeholder="phone"
        validate={[ required]}
        
       />
       <Field name="subject" type="text" style={{height:"35px",width:"310px",backgroundColor:"#e86b35",margin:"4px 0"}}
        component={renderField} placeholder="subject"
        validate={[ required]}        
       /> 
       <Field name="message" type="text" style={{height:"115px",width:"310px",backgroundColor:"#f6b53e",margin:"4px 0"}}
        component={renderField} placeholder="message"
        validate={[ required]}        
       />   
        <div>
        <button style={{height:"40px", width:"80px",position:"relative",float:"right",margin:"5px 0px",backgroundColor:"aquamarine", fontFamily:"arial",fontSize:"18px"}}type="submit" disabled={submitting}>Submit</button>
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button> */}
      </div>
    </form>
  )
}

export default reduxForm ({
    form:'ContactForm'
})(ContactForm);