import React from 'react';
const TabelaHead = (props) => (
    <tread>
        <tr>
            <th colSpan="3">Tabela de livros</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
                <div className='container-setinhas'>
                    <div onClick={() => props.ordenarCrescente()}>&#129093;</div> 
                    <div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
                </div>
            </th>
            <th>Autor</th>
        </tr>
    </tread>
);

export default TabelaHead;