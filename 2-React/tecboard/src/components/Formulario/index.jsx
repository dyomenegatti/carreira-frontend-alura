import './formulario-de-evento.estilos.css';
import { TituloFormulario } from "../Titulo";
import { CampoDeFormulario } from "../Fieldset";
import { Label } from "../Label";
import { CampoDeEntrada } from "../Campo";
import { SelectFormulario } from '../Select';
import { Botao } from '../Botao';

export function FormularioDeEvento({ temas, aoSubmeter }) {
  
  function aoFormSubmetido(formData) {
    const evento = {
        capa: formData.get('capaEvento'),
        tema: temas.find(function(item) {
          return item.id == formData.get('tema');
        }),
        data: new Date(formData.get('dataEvento')),
        titulo: formData.get('nomeEvento')
    }

    aoSubmeter(evento);
  }

  return (
    <form className='form-evento' action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada 
            type="text" 
            id='nome' 
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada 
            type="text" 
            id='capaEvento' 
            placeholder='https://...'
            name='capaEvento'
          />
        </CampoDeFormulario>
        
        <CampoDeFormulario>
          <Label htmlFor="nome">Data do Evento</Label>
          <CampoDeEntrada 
            type="date" 
            id='dataEvento' 
            name='dataEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="nome">Tema do Evento</Label>
          <SelectFormulario id="tema" name="tema" itens={temas}/>
        </CampoDeFormulario>
      </div>

      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}