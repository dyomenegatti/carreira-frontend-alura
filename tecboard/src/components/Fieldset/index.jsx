import './fieldset-formulario.estilos.css';

export function CampoDeFormulario({children}) {
  return (
    <fieldset className='field-form'>
      { children }
    </fieldset>
  )
}