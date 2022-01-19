import { send } from "emailjs-com";
import{ init } from '@emailjs/browser';
import React, { useState } from "react";
import { ErrorMessage, StyledText, TextContainer } from "../../pages/Pages.styles";
import Input from "./InputField";
import { MailButton } from "./MailButton";
import { MessageField } from "./MessageField";
import { ButtonContainer, ContactContainer, ContactForm, ErrorMsgContainerInputField, ErrorMsgContainerMessageField, InputContainer, MessageSentText } from "./Contact.styles";

import {
  EMAILJS_USERID,
  EMAILJS_TEMPLATEID,
  EMAILJS_SERVICEID
} from '../../config';

type InputFieldValues = {
  from_name: string;
  message: string;
  reply_to: string;
}

type Error = {
  isError: boolean;
  emailValid: boolean;
  nameValid: boolean;
  messageValid: boolean;
  randomFieldValid: boolean; // for catching spam
}

type hasBeenTargeted = {
  nameFieldTargeted: boolean;
  emailFieldTargeted: boolean;
  messageFieldTargeted: boolean;
}

export const Contact = (): JSX.Element => {
  const [messageSent, setMessageSent] = useState(false);
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
  const validateEmail = (email: string): void => {
    const regexp = /\S+@\S+\.\S+/;
    if (regexp.test(email)) {
      setErrorHandler({...errorHandler, emailValid: true });
    }
    else {
      setErrorHandler({...errorHandler, emailValid: false, isError: true });
    }
  }

  // simple name validation (min 2 max 35 letters)
  const validateName = (name: string): void => {
    if (name.length >= 2 && name.length <= 35) {
      setErrorHandler({...errorHandler, nameValid: true});
    }
    else {
      setErrorHandler({...errorHandler, nameValid: false, isError: true});
    }
  }

  // simple message validation (atleast 4 letters)
  const validateMessage = (message: string): void => {
    if (message.length >= 4) {
      setErrorHandler({...errorHandler, messageValid: true });
    }
    else {
      setErrorHandler({...errorHandler, messageValid: false, isError: true });
    }
  }

  // send email on submit
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (errorHandler.randomFieldValid) { 
      e.preventDefault();
      init(EMAILJS_USERID);
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
      setMessageSent(true);
      resetForm();
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
    <ContactContainer id="contact-container">
      <TextContainer className="text-container">
        <StyledText>Send me a message!</StyledText>
      </TextContainer>
       <ContactForm className="contact-form" onSubmit={onSubmit}>
        {/* this field shouldnt be filled out - not really sure how well this works */}
        <input type='text' 
          id="phone"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            validateRandomField(e.target.value);
          }}
        /> 
        <InputContainer className="input-container"> 
          <Input
            label="Name"
            id="nameField"
            type={"text"}
            name='from_name'
            placeholder='Your name...'
            value={toSend.from_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMessageSent(false);
              setToSend({ ...toSend, [e.target.name]: e.target.value });
              validateName(e.target.value);
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              setWasTargeted({...wasTargeted, nameFieldTargeted: true})
              validateName(e.target.value);
            }}
          />
          <ErrorMsgContainerInputField className="error-message-container-input-field">
            {errorHandler.isError && wasTargeted.nameFieldTargeted && !errorHandler.nameValid ? <ErrorMessage>* Name needs to be between 2-35 characters!</ErrorMessage> : ''}
          </ErrorMsgContainerInputField>
        </InputContainer>
        <InputContainer className="input-container">
          <Input
            label="Email"
            id="emailField"
            type={"text"}
            name='reply_to'
            placeholder='your@email.com...'
            value={toSend.reply_to}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMessageSent(false);
              setToSend({ ...toSend, [e.target.name]: e.target.value });
              validateEmail(e.target.value);
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              setWasTargeted({...wasTargeted, emailFieldTargeted: true})
              validateEmail(e.target.value);
            }}
          />
          <ErrorMsgContainerInputField className="error-message-container-input-field">
            {errorHandler.isError && wasTargeted.emailFieldTargeted && !errorHandler.emailValid ? <ErrorMessage>* Please enter a valid email address!</ErrorMessage> : ''}
          </ErrorMsgContainerInputField>
        </InputContainer>
        <MessageField
          label="Message" 
          id="messageField"
          value={toSend.message}
          placeholder='Your message...'
          name='message'
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessageSent(false);
            setCharacterCount(e.target.value.length);
            setToSend({ ...toSend, [e.target.name]: e.target.value });
            validateMessage(e.target.value);
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            setWasTargeted({...wasTargeted, messageFieldTargeted: true});
            validateMessage(e.target.value);
          }}
          characterCount={characterCount}
        />
        <ErrorMsgContainerMessageField className="error-message-container-message-field">
          {errorHandler.isError && wasTargeted.messageFieldTargeted && !errorHandler.messageValid ? <ErrorMessage>* Message needs to be atleast 4 characters!</ErrorMessage> : ''}
        </ErrorMsgContainerMessageField>
        <ButtonContainer className="button-container">
          <MailButton disabled={!errorHandler.nameValid || !errorHandler.emailValid || !errorHandler.messageValid} type='submit' desc='SEND'></MailButton>
          {messageSent ? <MessageSentText>Thank you for your message! &#128512;</MessageSentText> : ''}
        </ButtonContainer>
      </ContactForm>
    </ContactContainer>
  );
};