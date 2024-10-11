import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  subject:string;
  message:string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,subject,
  message
}) => (
  <div>
    <h1>subject:{subject}</h1>
    <p>{message}</p>
    <p>You can respond back {email}</p>
  </div>
);
