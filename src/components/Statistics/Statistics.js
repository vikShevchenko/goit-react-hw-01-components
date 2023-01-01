import React from 'react';
import css from './Statistics.module.css';
import StatisticRow from './StatisticRow';

export default function Statistics(props) {
  const titles = props.title;
  return (
    <div>
      <section className={css.statistics}>
        {titles && <h2 className={css.title}>{titles}</h2>}

        <ul className={css.stat}>
          {props.stats.map(stat => (
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

