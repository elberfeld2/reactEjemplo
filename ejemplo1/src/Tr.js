import React, { useState } from 'react';

function Tr({nombre,edad,onClick}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{edad}</td>
            <td><button onClick={onClick}>Editar</button></td>
        </tr>
    );
}

export default Tr;
