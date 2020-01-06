import React from 'react';
import './styles/App.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class Months extends React.Component {

render = () => {
  const {month,changeMouseOver, mouseRef} = this.props
  let liClasses = classNames({
    'blue': month.id === '10',
    'a-blue': month.id === '11',
    'b-blue': month.id === '12',
    'c-blue': month.id === '07',
    'd-blue': month.id === '08',
    'green': month.id === '02',
    'a-green': month.id === '09',
    'b-green': month.id === '06',
    'c-green': month.id === '03',
    'red': month.id === '04',
    'a-red': month.id === '01',
    'b-red': month.id === '05',
})
return (
  <div className="container">
      <ul ref={mouseRef} onMouseOver={changeMouseOver}>
        <li className={liClasses} data-id={month.id}>{month.name}</li>
      </ul>
  </div>
)
}
}

export default Months;

Months.propTypes = {
  mouseRef: PropTypes.object,
  month: PropTypes.object,
  changeMouseOver: PropTypes.func
}