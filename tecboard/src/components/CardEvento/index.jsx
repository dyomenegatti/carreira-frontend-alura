import './card-eventos.estilos.css';

export function CardEvento({ evento }) {
  return (
    <div className='card-evento'>
      <img src={evento.capa} alt={evento.titulo} />
      <div className="corpo-evento">
        <p className="tag-evento">
          {evento.tema.nome}
        </p>
        <p className="data-evento">
          {evento.data.toLocaleDateString('pt-BR')}
        </p>
        <h4 className="titulo-evento">
          {evento.titulo}
        </h4>
      </div>
    </div>
  )
}