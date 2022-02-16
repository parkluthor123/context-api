import React, {useContext} from 'react'
import { CountContext } from '../contexts/count'

export default function Counter() {
   const { count } = useContext(CountContext);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Contador {count}</h1>
        </div>
        <hr />
      </div>
    </>
  )
}
