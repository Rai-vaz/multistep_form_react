import {GrFormPrevious, GrFormNext, GrSend} from "react-icons/gr"
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import './App.css'

//HOOKS
  import UseForm from './hooks/UseForm'

function App() {

  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>]
  //importando hook customizado e desestruturando
  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = UseForm(formComponents)
 
  return (
    <div className="App">
      <div className='header'>
        <h2>Deixe sua avaliação </h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className='form-container'>
        <p>Etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='input-container'>
            {/**COMPONENTES DINÂMICOS */}
            {currentComponent}
          </div>
          <div className='actions'>
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
            )}

            {isLastStep ? (
              <button type='button'>
                <span>Avançar</span>
                <GrSend/>
              </button>
            ) : (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App