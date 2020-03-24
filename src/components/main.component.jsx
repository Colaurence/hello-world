import React from "react";

class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      username : "",
      password : ""
    }
  }

  render(){
    const changeName = event => {
      const key = event.target.name;
      this.setState({[key]: event.target.value})
    }

    const log = () => {
      console.log(this.state.username)
      console.log(this.state.password)
    }

    return(
      <>
      <input type="text" name="username" onChange={changeName}/>
      <input type="password" name="password" onChange={changeName}/>
      <button
      onClick = {log}
      >
      </button>
      </>
    );
  }

  
}
/*
 constructor() {
    super();
    this.state = {
      Name: "Data",
      lastname: "Datum"
    };
  }

  render() {
    const changeName = event => {
      const key = event.target.name;
      this.setState({[key]: event.target.value})
    }
    return (
      <>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button
                  onClick={() => {
                    this.setState({ Name: "Laurence" });
                  }}
                ></button>
              </td>
              <td>{this.state.Name}</td>
              <td>{this.state.lastname}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" name="Name" onChange={changeName}/>
              </td>
            </tr>
            <tr>
              <td>Lastname:</td>
              <td>
                <input type="text" name="lastname" onChange={changeName}/>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
*/

/** field : ""
 * create constructor and initialized the state with 2 values password and username
 * create basic form 2 fields ( username = text, password = password) and submit button
 * on button click display the 2 values in console or alert
 */

export default Main;
