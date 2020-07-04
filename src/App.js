import React from "react";
import "./App.css";
import UserItem from "./components/UserItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '',
      email: '',
      users: []
    }
  }
  //function to handle change in input
  handlgeInputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value
    this.setState({
      [name]: value  
    });
  }
  //function to handle input when submitted
  handleSubmit = (e) =>{
    e.preventDefault();
    const user = this.state
    let newUser = {name: user.name, email: user.email}
    this.setState({users:[...user.users, newUser]})
    //reset fields
    this.clear();
  }
  //function to reset the field/form after submition
  clear = () =>{
    this.setState({
      name: '',
      email: ''
    })
  }
  render() {
    const change = this.handlgeInputChange;
    const users = this.state.users
    return (
      <div className="App">
        {/* Form to add new user */}
        <div className='inputform  w-50'>
          <form onSubmit={this.handleSubmit}>
            <input 
             type="text"
             name='name' 
             placeholder="Name" 
             value={this.state.name} 
             onChange={change}/>
            <br />
            <input 
              type="email" 
              name='email'
              placeholder="Email" 
              value={this.state.email} 
              onChange={change}/>
            <br />
            <input className='sub bg-dark-blue' type="submit" />
          </form>
        </div>

        {/* List of users */}
        <div className='users sans-serif bg-dark-green w-50'>
          <h3 className="text">List of users</h3>
          <hr></hr>
          {
            users.map((user, i) => <UserItem key={i} {...user}/>)
          }
        </div>
      </div>
    );
  }
}
export default App;
