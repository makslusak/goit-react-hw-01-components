import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id} class="item">
              <span class="label">{stat.label}</span>
              <span class="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
