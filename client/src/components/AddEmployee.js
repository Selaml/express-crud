import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddEmployee = () => {
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [email, setemail] = useState('');
    const [gross_salary, setgross_salary] = useState('');
    const [rollid, setrollid] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();
 
    const saveEmployee = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/register',{
           first_name:first_name,
           last_name:last_name,
           email:email,
           gross_salary:gross_salary,
           rollid:rollid,
           password:password
           
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveEmployee }>
                <div className="field">
                    <label className="label">first_name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="first_name"
                        value={ first_name }
                        onChange={ (e) => setfirst_name(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">last_name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="last_name"
                        value={ last_name }
                        onChange={ (e) => setlast_name(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">gross_salary</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="gross_salary"
                        value={ gross_salary }
                        onChange={ (e) => setgross_salary(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="email"
                        value={ email }
                        onChange={ (e) => setemail(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">password</label>
                    <input 
                        className="input"
                        type="password"
                        placeholder="password"
                        value={ password }
                        onChange={ (e) => setpassword(e.target.value) }
                    />
                </div>
                <div className="field">
            <label className="label">EmployeeRoll</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={rollid}
                  onChange={(e) => setrollid(e.target.value)}
                >
                  <option value="1">User</option>
                  <option value="2">Admin</option>
                </select>
              </div>
            </div>
          </div>
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddEmployee