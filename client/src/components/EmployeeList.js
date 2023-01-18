import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const EmployeeList = () => {
    const [Employees, setEmployee] = useState([]);
 
    useEffect(() => {
        getEmployees();
    }, []);
 
    const getEmployees = async () => {
        const response = await axios.get('http://localhost:4000/employees');
        setEmployee(response.data);
    }
 
   /* const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:5000/Employees/${id}`);
        getEmployees();
    }*/
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th> id</th>
                        <th> first_name</th>
                        <th>last_name</th>
                        <th>gross_salary</th>
                        <th>email</th>
                        <th>roll</th>
                    </tr>
                </thead>
                <tbody>
             
                    { Employees.map((employee, index) => (
                        
                        <tr key={ employee.id }>
                            <td>{ index + 1 }</td>
                            <td>{ employee.first_name }</td>
                            <td>{ employee.last_name }</td>
                            <td>{ employee.gross_salary }</td>
                            <td>{ employee.email }</td>
                            <td>{ employee.employee_roll.name}</td>
                            
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList