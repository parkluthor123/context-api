import React, { useContext } from "react";
import { CountContext } from "../contexts/count";
import Counter from "../components/counter";
import Mirror from "../components/mirror";
import '../style/style.css'

function App() {
  const { count, setCount } = useContext(CountContext)
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <h1>Trabalhando com useContext</h1>
          </div>
          <div className="col-md-4">
            <button type="button" onClick={()=>setCount(count + 1)} className="btn btn-info">
              Adicionar + 1
            </button>
          </div>
        </div>
        <hr/>
        <Counter/>
        <Mirror/>
      </div>
    </>
  );
}

export default App;
