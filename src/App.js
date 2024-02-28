import './App.css';
// import User from './Components/User';
// import Admin from './Components/Admin';
// import NewUser from './Components/NewUser';
// import NewAdmin from './Components/NewAdmin';
// import Student from './Components/Student';
// import Input from './Components/Input';
// import Hide from './Components/Hide';
// import Forms from './Components/Forms';
// import Condition from './Components/Condition';
// import FormValidation from './Components/FormValidation';
// import ClickEvent from './Components/ClickEvent';
import UseState from './Components/UseState';
import FunctionAsProps from './Components/FunctionAsProps';


function App() {

  function getdata() {
    alert("HELLO");
  }

  return (
    <>
      {/* <User /> */}
      {/* <Admin />      */}
      {/* <Admin /> */}
      {/* <NewUser /> */}
      {/* <NewAdmin /> */}
      {/* <Student name={"Props 2.0"}/> */}
      {/* <Student name={"3.0"} email={"rahul00@gmail.com"} addr={"Greater Up"}/> */}
      {/* <Student name={"3.0"} email={"rahul00@gmail.com"}/> */}
      {/* <Student name={"3.0"} email={"rahul00@gmail.com"}/> */}
      {/* <Student /> */}
      {/* <Input /> */}
      {/* <Hide /> */}
      {/* <Forms /> */}
      {/* <Condition /> */}
      {/* <FormValidation /> */}
      {/* <ClickEvent /> */}
      <UseState data={getdata} />
      <FunctionAsProps data={getdata} />
    </>
  );
}

export default App;
