import React from 'react';
import './styles/App.css';
import PropTypes from 'prop-types';

const UsersList = ({user}) => (
  <div>
    <ul>
        <li >
            <h4>{user.firstName} {user.lastName}</h4>
              <p>{user.id}</p>
              <p>{user.dob.slice(0,10)}</p>
        </li>   
    </ul>
  </div>
  )


export default UsersList;

UsersList.propTypes = {
  user: PropTypes.object,

}