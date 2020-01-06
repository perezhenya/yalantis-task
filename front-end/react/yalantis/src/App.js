import React from 'react';
import './styles/App.css';
import axios from 'axios';
import UsersList from './usersList';
import Months from './Months';

class App extends React.Component {
  ref = React.createRef();
state = {
  months: [
    {name: "January", id: '01'},
    {name: "February", id: '02'},
    {name: "March", id: '03'},
    {name: "April", id: '04'},
    {name: "May", id: '05'},
    {name: "June", id: '06'},
    {name: "July", id: '07'},
    {name: "August", id: '08'},
    {name: "September", id: '09'},
    {name: "October", id: '10'},
    {name: "November", id: '11'},
    {name: "December", id: '12'},
  ],
  users : [],
}

componentDidMount() {
  axios.get('http://yalantis-react-school.herokuapp.com/api/task0/users')
  .then(response => {
     let users = response.data;
     this.setState({users})
      
  })
}
 
handleMouseOver = (e) => {
  const updateUsers = [...this.state.users];
  const usersSum = updateUsers.reduce((result,user ) => {
    const month = user.dob.slice(5,7);
    result[month] = (result[month] || []).concat(`${user.firstName} ${user.lastName}`);
    if (e.target.dataset.id === month) {
      this.ref.current.innerText = result[month];
  }
    return result
  }, {});
    
    this.setState({users: updateUsers})
}

  render = () => { 
    const {users} = this.state
    const {months} = this.state
  return (
    <div className="App">
    {
      months.map(month => 
        <Months 
          mouseRef={this.ref}
          month={month}
          key={month.id}
          changeMouseOver={this.handleMouseOver}
        />
      )
    }
    {
      users.map(user => 
        <UsersList 
          user={user}
          key={user.id}
      />
      )
    }
 
    </div>
  );
  }
}

export default App;
