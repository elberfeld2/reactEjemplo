import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <header style={{ textAlign: "center", borderBottom: "1px solid #efefef", paddingBottom: 10, background: "white" }}>
                <h1 style={{ padding: 10 }}>Portofolio</h1>
                <div>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                    <a href="http://" style={{ padding: "0px 10px" }}>Faccebook</a>
                </div>
            </header>
            <main style={{ background: "#f1f3f5" }}>
                <div style={{ padding: 10, background: "white" }}>
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
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap ", width: "90%", paddingLeft: "5%", paddingTop: 10 }}>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                            <div style={{ width: "10%", textAlign: "center", padding: 10, background: "white", margin: "2.5%" }}>
                                <h4 style={{ padding: 0, margin: 0 }}>C#</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: 10, background: "white" }}>
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
