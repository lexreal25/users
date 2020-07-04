import React from "react";

class UserItem extends React.Component {
  // You can also do - "class UserList extends Component",
  // just that you'd have to import React this way -
  // import React, {Component} from "react".

  render() {
    const {name, email} = this.props
    return (
      <div>
        <h2 className='courier'>{name}</h2>
        <h3 className='calisto'>{email}</h3>
        <hr></hr>
      </div>
    );
  }
}

export default UserItem;
