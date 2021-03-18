import React, { useContext, useEffect, useState } from 'react'
import logo from './logo.svg'
import Trabajo from './componentes/Trabajo';
import Tecnologia from './componentes/Tecnologia';
import ASocial from './componentes/ASocial';

function App() {

    const loadData = async ()=>{
        let response = await fetch("./data/data.json")
        let json = await response.json()
        console.log(json);
    }
    useEffect( ()=>{
        loadData()
    },[])

    return (
        <div>
            <header style={{ textAlign: "center", borderBottom: "1px solid #efefef", paddingBottom: 10, background: "white" }}>
                <h1 style={{ padding: 10 }}>Portofolio</h1>
                <div>
                    <ASocial url="https://www.facebook.com/">Faccebook</ASocial>
                    <ASocial>Instagran</ASocial>
                    <ASocial>Instagran</ASocial>
                </div>
            </header>

            <main style={{ background: "#f1f3f5" }}>
                <div style={{ padding: 10, background: "white" }}>
                    <h2 style={{ textAlign: "center" }}>Experiencia</h2>
                    <div style={{ justifyContent: 'center', paddingTop: 10 }}>
                        <Trabajo nombre="Nombre" fecha="22-12-2222" donde="Donde">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque id deserunt inventore. Deleniti corrupti tempore pariatur voluptatibus earum aspernatur.
                        </Trabajo>
                    </div>
                </div>
                <div style={{ padding: 10 }}>
                    <h2 style={{ textAlign: "center" }}>Tecnologias</h2>
                    <div style={{ justifyContent: 'center', paddingTop: 10 }}>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap ", width: "90%", paddingLeft: "5%", paddingTop: 10 }}>
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                            
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                           
                             <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                            
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                            
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                  
                             <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                            
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>                            
                            <Tecnologia>
                                <h2>C#</h2>
                            </Tecnologia>
                        </div>
                    </div>
                </div>
                <div style={{ padding: 10, background: "white" }}>
                    <h2 style={{ textAlign: "center" }}>Experiencia</h2>
                    <div style={{ justifyContent: 'center', paddingTop: 10 }}>
                        <Trabajo nombre="Nombre" fecha="22-12-2222" donde="Donde">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque id deserunt inventore. Deleniti corrupti tempore pariatur voluptatibus earum aspernatur.
                        </Trabajo>
                        <Trabajo nombre="Nombre" fecha="22-12-2222" donde="Donde">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque id deserunt inventore. Deleniti corrupti tempore pariatur voluptatibus earum aspernatur.
                        </Trabajo>
                        <Trabajo nombre="Nombre" fecha="22-12-2222" donde="Donde">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque id deserunt inventore. Deleniti corrupti tempore pariatur voluptatibus earum aspernatur.
                        </Trabajo>
                    </div>
                </div>
            </main>
            <header style={{ display: "flex", alignItems: "center", borderTop: "1px solid #efefef", paddingTop: 10, background: "white", marginTop: 10, paddingBottom: 50 }}>
                <h1 style={{ padding: 10 }}>Portofolio</h1>
                <div style={{ marginLeft: "auto" }}>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                </div>
            </header>
        </div>
    );
}

export default App;
