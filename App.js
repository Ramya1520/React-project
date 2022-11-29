import './App.css';
import React from 'react';
// CHILD COMPONENT
// NESTED COMPONENT
  function FormatName(user) 
  {
     return user.firstName + ' ' + user.lastName;
  }

const user = {firstName: 'ram',lastName: 'kumar'};
class AppName extends React.Component
{
render(){
  return(
      <div className="AppName">
      <h5>Expense Tracker</h5>
      <h5> Hello, {FormatName(user)}!</h5>
      <Tracker></Tracker>
      </div>
      )
      }
}
class Tracker extends React.Component
{
render(){
  return(
      <div className="TraCker">
      <h5>Expense Tracker app</h5>    
      </div>
       )
}
}
// PARENT COMPONENT
function App() {
  return (
    <div className="App">
    <h1>this is my web page</h1>
    <AppName></AppName>
    <Tracker></Tracker>  
    </div>
  ); 
}
export default App;
