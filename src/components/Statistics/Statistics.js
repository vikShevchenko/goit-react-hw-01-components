import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

export default function Statistics(props) {
  
    const titles = props.title;
    return (
      <div >
        <section className="statistics">
          {titles && <h2 className="title">{titles}</h2>}

          <ul className="stat-list">

            {props.stats.map(stat => (
              <li className="item" key={stat.id}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
              </li>
            ))}
            
          </ul>

        </section>
      </div>
    );
  }

Statistics.propTypes = {
 
  stats: PropTypes.array.isRequired 
}
