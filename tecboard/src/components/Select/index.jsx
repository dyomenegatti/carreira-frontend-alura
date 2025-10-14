import './select-formulario.estilos.css';

export function SelectFormulario({ itens, ...rest }) {
  return (
    <select {...rest} className='lista-suspensa' defaultValue="">
      <option disabled value="">Selecione uma opção</option>
      {itens.map(function(item) {
        return <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      })}
    </select>
  )
}