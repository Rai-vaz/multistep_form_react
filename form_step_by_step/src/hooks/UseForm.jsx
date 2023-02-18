import {useState} from 'react'

const UseForm = (steps) => {
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e) {
        if (e)  e.preventDefault()
        
        if (i < 0 || i >= steps.length) return

        setCurrentStep(i)
    }

  /*RETORNANDO UM OBJETO */
  return {
    //retorna valor inicial 0
    currentStep,
    //recebe o array de componente e retorn com base no indice currente step
    currentComponent: steps[currentStep],
    //função de mudança de passo
    changeStep,
    isLastStep: currentStep === steps.length - 1 ? true : false,
    isFirstStep: currentStep === 0 ? true : false
  }
}
export default UseForm