import Table from "./Components/Table";

function App() {
  var name1="Kiran"
  var roll1="090"
  var pn1="9878965537"
  var dept1="CSE"
  return (
    <>
    <Table name={name1} roll={roll1} pn={pn1} dept={dept1}/>
    </>
  );
}

export default App;
