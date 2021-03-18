export default function Trabajo(props) {
    return (
        <div style={{ display: "flex", width: "90%", paddingLeft: "5%", paddingTop: 10 }}>
            <div style={{ width: "30%" }}>
                <h4 style={{ padding: 0, margin: 0 }}>{props.nombre}</h4>
                <p>{props.fecha}</p>
            </div>
            <div style={{ width: "70%" }}>
                <h4 style={{ padding: 0, margin: 0 }}>{props.donde}</h4>
                <p>{props.children}</p>
            </div>
        </div>)
}