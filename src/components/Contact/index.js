import React from 'react';
import './contact.scss';
import ContactForm from './contact_form';
import Schedule from '../general/schedule/index'; 

export default (props) => {
    return (
       <div>     
            <ContactForm />
            <Schedule />
        </div>
     ) }