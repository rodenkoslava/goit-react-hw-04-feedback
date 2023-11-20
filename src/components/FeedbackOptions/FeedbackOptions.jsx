import React from 'react';

import { ContainerButtons, Button } from './styledFeedbackOptions';

export const FeedbackOptions = ({ data, onLeaveFeedback }) => {
  const buttonsName = Object.keys(data);

  return (
    <ContainerButtons>
      {buttonsName.map(name => (
        <Button
          key={buttonsName.indexOf(name)}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </Button>
      ))}
    </ContainerButtons>
  );
};
