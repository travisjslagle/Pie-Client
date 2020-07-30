import React from 'react';
import './Pie.css';

const Pie = (props) => {

    // *TIP* console.logging your props is helpful in debugging
    console.log('Pie:', props)

    return(
      <>
        {/* React.Fragments */}
        
        {props.pie.map(pie => {
            return(
                <tr key={pie.id}>
                    <td>{pie.nameOfPie}</td>
                    <td>{pie.baseOfPie}</td>
                    <td>{pie.crust}</td>
                    <td>{pie.timeToBake}</td>
                    <td>{pie.servings}</td>
                    <td>{pie.rating}</td>
                </tr>
            )
        })
        }
      </>
    )
}

export default Pie;