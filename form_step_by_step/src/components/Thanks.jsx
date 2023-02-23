import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';
import '../css/Thanks.css'

const Thanks = ({data}) => {

  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>
  }

  return (
    <div className='thanks-container'>
        <h2>Falta pouco</h2>
        <p>
          A sua opinião é muito importante, em breve você receberá um cupom de desconto de 10% para suas próximas compras.
        </p>
        <p>Para concluir sua avaliação clique no botão de enviar a baixo.</p>
        <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
        <p className='review-data'>
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </p>
        <div className='review-data'>
          <span>Comentários:</span>
          {data.comment}
        </div>
    </div>
  )
}

export default Thanks