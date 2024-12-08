import React, { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xovqbdry");
  if (state.succeeded) {
    return <p>Thanks for reaching out!.. I'll contact you ASAP!</p>;
  }

  return (
    <section id='ContactMe'>
      <div className='form-container wow fadeInRight' data-wow-delay='.4s'>
        <div className='contact-form-wrapper d-flex justify-content-center'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <h5 className='title'>Contact Me</h5>
            <p className='description'>
              Feel free to contact me if you like to reach out or have any
              questions.
            </p>
            <div>
              <input
                type='name'
                className='form-control rounded border-white mb-3 form-input'
                name='user_name'
                placeholder='Name'
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <input
                type='email'
                className='form-control rounded border-white mb-3 form-input'
                name='user_email'
                placeholder='Email'
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <input
                type='phoneNumber'
                className='form-control rounded border-white mb-3 form-input'
                name='phoneNumber'
                placeholder='Phone Number (Optional)'
              />
              <ValidationError
                prefix="PhoneNumber"
                field="phoneNumber"
                errors={state.errors}
              />
            </div>
            <div>
              <textarea
                className='form-control rounded border-white mb-3 form-text-area'
                name='message'
                rows='5'
                cols='30'
                placeholder='Message'
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className='submit-button-wrapper' data-wow-delay='.6s'>
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
