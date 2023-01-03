import React from 'react';
import css from './Statistics.module.css';
import StatisticRow from './StatisticRow';
import PropTypes from 'prop-types'

export default function Statistics({title, stats}) {

  return (
    <div>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat}>
          {stats.map(stat => (
            <StatisticRow
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string

}

