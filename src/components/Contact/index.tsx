import { send } from "emailjs-com";
import React, { useState } from "react";
import { ErrorMessage, StyledText } from "../../pages/Pages.styles";
import Input from "../InputField";
import { MailButton } from "../MailButton";
import { MessageField } from "../MessageField";

import {
  EMAILJS_USERID,
  EMAILJS_TEMPLATEID,
  EMAILJS_SERVICEID
} from '../../config';

type InputFieldValues = {
  from_name: string
  message: string
  reply_to: string
}

type Error = {
  isError: boolean
  emailValid: boolean
  nameValid: boolean
  messageValid: boolean
  randomFieldValid: boolean // for catching spam
}

type hasBeenTargeted = {
  nameFieldTargeted: boolean
  emailFieldTargeted: boolean
  messageFieldTargeted: boolean
}

export const Contact = (): JSX.Element => {
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [toSend, setToSend] = useState<InputFieldValues>({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [errorHandler, setErrorHandler] = useState<Error>({
    isError: false,
    emailValid: false,
    nameValid: false,
    messageValid: false,
    randomFieldValid: true // for catching spam
  });
  const [wasTargeted, setWasTargeted] = useState<hasBeenTargeted>({
    nameFieldTargeted: false,
    emailFieldTargeted: false,
    messageFieldTargeted: false
  })
  const clearFields = (): void => {
    setToSend({
      from_name: '',
      message: '',
      reply_to: '',
    });
  };

  // "validates" hidden field, if its not empty, its invalid.
  const validateRandomField = (randomValue: string): void => {
    if (randomValue.length !== 0) {
      setErrorHandler({...errorHandler, randomFieldValid: false})
    }
  }

  // simple email validation
  const validateEmail = (email: string): boolean => {
    //let email = (document.getElementById("emailField") as HTMLInputElement).value;
    const regexp = /\S+@\S+\.\S+/;
    return regexp.test(email);
  }

  // simple name validation (atleast 2 letters)
  const validateName = (name: string): boolean => {
    if (name.length >= 2) {
      return true;
    }
    return false;
  }

  // simple message validation (atleast 4 letters)
  const validateMessage = (message: string): boolean => {
    if (message.length >= 4) {
      return true;
    }
    return false
  }

  // send email on submit
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (errorHandler.randomFieldValid) { 
          e.preventDefault();
          send(
            EMAILJS_SERVICEID,
            EMAILJS_TEMPLATEID,
            toSend,
            EMAILJS_USERID
          ) 
          .then((response: any) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err: any) => {
            console.log('FAILED...', err);
          });
          resetForm();
          alert("Thank you for your message!"); // simple alert for now
        }
    else {
      e.preventDefault();
      resetForm();
      alert('Could not send message.');
    }
  };

  const resetForm = () => {
    clearFields(); // clear all fields
    setCharacterCount(0); // set character count to 0
    setWasTargeted({...wasTargeted, emailFieldTargeted: false, messageFieldTargeted: false, nameFieldTargeted: false}) // sets the targeted state of fields to false
    setErrorHandler({...errorHandler, emailValid: false, nameValid: false, messageValid: false }) // sets all validation to false
  }

  return (
    <div id="contactContainer">
      <div className="contactInfoText">
        <StyledText>Send me a message!</StyledText>
      </div>
       <form className="contactForm" onSubmit={onSubmit}>
        {/* this field shouldnt be filled out - not really sure how well this works */}
        <input type='text' 
        id="phone"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          validateRandomField(e.target.value);
          }}
        /> 
        <div className="inputDiv"> 
          <Input
            label="Name:"
            id="nameField"
            type={"text"}
            name='from_name'
            placeholder='Your name...'
            value={toSend.from_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToSend({ ...toSend, [e.target.name]: e.target.value })}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              setWasTargeted({...wasTargeted, nameFieldTargeted: true})
              let nameValid:boolean = validateName(e.target.value);
              if (nameValid) {          
                setErrorHandler({...errorHandler, nameValid: true});
              }
              else {
                setErrorHandler({...errorHandler, nameValid: false, isError: true});
              }
            }}
          />
          <div className="errorMessageContainerInputField">
            {errorHandler.isError && wasTargeted.nameFieldTargeted && !errorHandler.nameValid ? <ErrorMessage>* Name needs to be atleast two characters!</ErrorMessage> : ''}
          </div>
        </div>
        <div className="inputDiv">
          <Input
            label="Email:"
            id="emailField"
            type={"text"}
            name='reply_to'
            placeholder='example@mail.com...'
            value={toSend.reply_to}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToSend({ ...toSend, [e.target.name]: e.target.value })}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              setWasTargeted({...wasTargeted, emailFieldTargeted: true})
              let emailValid:boolean = validateEmail(e.target.value);
              if (emailValid) {          
                setErrorHandler({...errorHandler, emailValid: true })
              }
              else {
                setErrorHandler({...errorHandler, emailValid: false, isError: true })
              }
            }}
          />
          <div className="errorMessageContainerInputField">
            {errorHandler.isError && wasTargeted.emailFieldTargeted && !errorHandler.emailValid ? <ErrorMessage>* Please enter a valid email address!</ErrorMessage> : ''}
          </div>
        </div>
        <MessageField
          label="Message:" 
          id="messageField"
          value={toSend.message}
          placeholder='Your message...'
          name='message'
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setCharacterCount(e.target.value.length);
            setToSend({ ...toSend, [e.target.name]: e.target.value });
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            setWasTargeted({...wasTargeted, messageFieldTargeted: true});
            let messageValid:boolean = validateMessage(e.target.value);
            if (messageValid) {          
              setErrorHandler({...errorHandler, messageValid: true });
            }
            else {
              setErrorHandler({...errorHandler, messageValid: false, isError: true });
            }
          }}
          characterCount={characterCount}
        />
        <div className="errorMessageContainerMessageField">
          {errorHandler.isError && wasTargeted.messageFieldTargeted && !errorHandler.messageValid ? <ErrorMessage>* Message needs to be atleast 4 characters!</ErrorMessage> : ''}
        </div>
        <MailButton disabled={!errorHandler.nameValid || !errorHandler.emailValid || !errorHandler.messageValid} type='submit' desc='SEND MESSAGE'></MailButton>
      </form>
    </div>
  );
};