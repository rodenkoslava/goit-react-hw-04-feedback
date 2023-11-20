import React from 'react';

import { Message } from './styledNotification';

export const Notification = ({ message }) => {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  );
};
