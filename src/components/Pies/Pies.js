import React, {useState, useEffect} from 'react';
import './Pies.css';

import Pie from '../Pies/Pie/Pie';

const Pies = (props) => {

    const [pies, setPies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/pies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
            .then(res => res.json())
            .then(json => setPies(json))
            .catch(err => console.log(err))
    }, []);

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {/* Pie Data will go */}
                <Pie pie={pies} />
            </tbody>
        </table>
    )
}

export default Pies;