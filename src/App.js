import './App.css';
import User from './Components/User';
import Admin from './Components/Admin';
import NewUser from './Components/NewUser';
import NewAdmin from './Components/NewAdmin';
import Student from './Components/Student';
import Input from './Components/Input';


function App() {
  return (
    <>
      {/* <User /> */}
      <Admin />     
      {/* <Admin /> */}
      {/* <NewUser /> */}
      {/* <NewAdmin /> */}
      {/* <Student name={"Props 2.0"}/> */}
      {/* <Student name={"3.0"} email={"rahul00@gmail.com"} addr={"Greater Up"}/> */}
      {/* <Student name={"3.0"} email={"rahul00@gmail.com"}/> */}
      {/* <Student name={"3.0"} email={"rahul00@gmail.com"}/> */}
      <Student />
      <Input />
    </>
  );
}

export default App;
