import React, { useEffect, useState } from 'react'

export const Input = () => {

    const url = 'http://localhost:3000/Employee'

    const [data, setData] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [salary, setSalary] = useState(0);
    const [dep, setDep] = useState("");
    const [display, setDisplay] =  useState([]);

    const handleData = (event) => {
        setData(event.target.value);
        console.log(data);
    }
    const handleRole = (event) => {
        setRole(event.target.value);
        console.log(role);
    }
    const handleSalary = (event) => {
        setSalary(Number(event.target.value))
        console.log(salary);
    }
    const handleGender = (event) =>{
        setGender(event.target.value)
        console.log(gender);
    }

    const handleDep = (event) => {
        setDep(event.target.value);
    }



    const putTask = () => {
        const payload = {
            "name" : data,
            "gender" : gender,
            "department" : dep,
            "role" : role,
            "salary": salary

        }
        postData(payload)
    }

    const postData = (payload) => {
        


        
        fetch(url, {
            method: "POST",
            body:JSON.stringify(payload),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    }

    useEffect(() => {
       show()
    },[])

    const show = () => {
        fetch(url)
        .then(res => res.json())
        .then(json => setDisplay(json))
        .catch(err => console.log("Something is going wrong"))
    }



    const sortme = (text) => {
        fetch(`${url}?_sort=salary&_order=${text}`)
        .then(res => res.json())
        .then(json => setDisplay(json))
        .catch(err => console.log("Something is going wrong"))
    }

    const serchme = (dbs) => {
        fetch(`${url}?q=dbs`)
        .then(res => res.json())
        .then(json => setDisplay(json))
        .catch(err => console.log("Something is going wrong"))
    }

  return (
    <div>
        <input type="text" placeholder='Name' value={data} onChange={handleData}/>
        <input type="text" placeholder='Gender' value={gender} onChange={handleGender}/>
        <input type="text" placeholder='Department' value={dep} onChange= {handleDep}/>
        <input type="text" placeholder='Role' value={role} onChange={handleRole}/>
        <input type="text" placeholder='Salary' value={salary} onChange={handleSalary}/>

        <button onClick={putTask}>ADD Employee</button>
        <button onClick={() => sortme("asc")}>Sort by Salary Ascending</button>
        <button onClick={() =>sortme("desc")}>Sort by Salary Descending</button>
        <button onClick={show}>Show All Department</button>
        <button onClick={() => serchme({})}>Show Marketing</button>
        <button onClick={() => serchme("IT")}>Show IT</button>
        <button onClick={() => serchme("Finance")}>Show Finance</button>
        <button onClick={() => serchme("HR")}>Show HR</button>

        <div className='box'>
            {display.map((emp) => {
               return (
                   <div className='employee' key={emp.id}>
                       <p> {emp.name}</p>
                       <p>{emp.gender}</p>
                       <p>{emp.department}</p>
                       <p>{emp.role}</p>
                       <p>{`$${emp.salary}`}</p>
                   </div>
               )
            })}
        </div>



    </div>
  )
}
