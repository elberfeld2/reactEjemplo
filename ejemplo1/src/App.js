import React, { useState, useEffect } from 'react';
import Tr from './Tr'
function App() {
    let [nombre, setNombre] = useState("")
    let [edad, setEdad] = useState("")
    let [data, setData] = useState([])
    let [index, setIndex] = useState(0)
    let [loading, setLoading] = useState(true)

    let [users, setUsers] = useState([])
    let [usersPares, setUsersPares] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(users => users.json())
            .then(users => setUsers(users))
            .catch(() => alert("Error en el server"))
            .finally(() => setLoading(false))
    }, [])
    
    useEffect(() => {
        setUsersPares(users.filter(u=>u.id%2==0))
    },[users])

    const Agregar = () => {
        setData([...data, { nombre, edad }])
        setNombre("")
        setEdad("")
    }
    const Actualizar = () => {
        data[index] = { nombre, edad }
        setNombre("")
        setEdad("")
    }
    const Editar = (i) => {
        setNombre(data[i].nombre)
        setEdad(data[i].edad)
        setIndex(i)
    }
    return (
        <div>

            <div>
                {
                    loading ?
                        <div>Cargando</div>
                        :
                        <div>
                            {usersPares.map(user => (
                                <div>{user.id}.{user.name}</div>
                            ))}
                        </div>
                }
            </div>


            <div>Nombre : {nombre}</div>
            <div>Edad : {edad}</div>
            <input type="text" placeholder="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <input type="number" placeholder="edad" onChange={(e) => setEdad(e.target.value)} value={edad} />
            <button onClick={Agregar}>
                Agregar
            </button>
            <button onClick={Actualizar}>
                Editar
            </button>
            <div style={{ paddingTop: 10 }}>
                <table style={{ width: "100%" }}>
                    <tr>
                        <th style={{ width: "40%", textAlign: "left" }}>Nombre</th>
                        <th style={{ width: "40%", textAlign: "left" }}>Edad</th>
                        <th></th>
                    </tr>
                    {
                        data.map(({ nombre, edad }, i) => (
                            <Tr
                                nombre={nombre}
                                edad={edad}
                                onClick={() => Editar(i)}
                            />
                        ))
                    }
                </table>
            </div>
        </div>
    );
}

export default App;
