import React, { useContext } from 'react'
import { CountContext } from '../contexts/count';

export default function Mirror() {
    const { count } = useContext(CountContext);
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Mirror {count}</h1>
                </div>
            </div>
        </>
    )
}
