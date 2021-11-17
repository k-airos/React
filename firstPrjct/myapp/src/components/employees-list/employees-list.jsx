import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList =({data, onDelete, onToggleProp, changedSalary}) =>{

    const elemnts = data.map(item =>{
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            changedSalary={(e)=>changedSalary(e.currentTarget.value,id)}
            onDelete = {()=>onDelete(id)}
            onToggleProp = {(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            key={id} {...itemProps}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elemnts}
        </ul>
    )
}

export default EmployeesList;