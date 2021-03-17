import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <header style={{ textAlign: "center" }}>
                <h1 style={{ padding: 10 }}>Portofolio</h1>
                <div>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                </div>
            </header>
            <main style={{ padding: 10 }}>
                <div style={{ padding: 10 }}>
                    <h2 style={{ textAlign: "center" }}>Experiencia</h2>
                    <div style={{ justifyContent: 'center', paddingTop: 10 }}>
                        <div style={{ display: "flex", width: "90%", paddingLeft: "5%", paddingTop: 10 }}>
                            <div style={{ width: "30%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>Nombre</h4>
                                <p>12-02-02</p>
                            </div>
                            <div style={{ width: "70%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>Donde</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque id deserunt inventore. Deleniti corrupti tempore pariatur voluptatibus earum aspernatur.
                            </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "90%", paddingLeft: "5%", paddingTop: 10 }}>
                            <div style={{ width: "30%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>Nombre</h4>
                                <p>12-02-02</p>
                            </div>
                            <div style={{ width: "70%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>Donde</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque id deserunt inventore. Deleniti corrupti tempore pariatur voluptatibus earum aspernatur.
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ padding: 10 }}>
                    <h2 style={{ textAlign: "center" }}>Tecnologias</h2>
                    <div style={{ justifyContent: 'center', paddingTop: 10 }}>
                        <div style={{ display: "flex", justifyContent: "center",flexWrap:"wrap ", width: "90%", paddingLeft: "5%", paddingTop: 10 }}>
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>  
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>  
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>  
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>  
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>  
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>  
                            <div style={{ width: "25%", textAlign:"center" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>                       
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
