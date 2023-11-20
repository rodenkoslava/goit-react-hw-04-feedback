import React from 'react';

import {
  StatisticsList,
  StatisticsListItem,
  StatisticsElem,
} from './stylesStatistics';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsElem>
        Positive feedback:{' '}
        {Number.isNaN(positivePercentage) ? 0 : positivePercentage} %
      </StatisticsElem>
    </StatisticsList>
  );
};
