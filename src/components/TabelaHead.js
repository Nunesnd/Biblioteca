import React from 'react';
const TabelaHead = (props) => (
    <tread>
		<tr>
			<th colSpan="4">Tabela de livros</th>
		</tr>
		<tr>
			<th >ISBN
				<div className='container-setinhas'>
					<div onClick={() => props.ordemIsbnCrescente()}>&#129093;</div> 
					<div onClick={() => props.ordemIsbnDecrescente()}>&#129095;</div>
				</div>
			</th>
			<th >Título
				<div className='container-setinhas'>
					<div onClick={() => props.ordenarCrescente()}>&#129093;</div> 
					<div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
				</div>
			</th>
			<th >Autor</th>
			<th></th>
		</tr>
    </tread>
);

export default TabelaHead;