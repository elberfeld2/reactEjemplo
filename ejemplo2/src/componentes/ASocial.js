export default function ASocial({children,url="#"}) {
    return (<a href={url} style={{ padding: "0px 10px",textDecoration:"none" }}>{children}</a>)
}