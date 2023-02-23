const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="text">Nome:</label>
          <input 
            type='text' 
            id="text" name="text" 
            placeholder="Digite seu nome" 
            autoComplete="off"
            value={data.name || ''}
            onChange={(e) => updateFieldHandler('name', e.target.value)}
            required/>
        </div>
        
        <div className="form-control">
          <label htmlFor="E-mail">E-mail:</label>
          <input 
            type='E-mail' 
            id="E-mail" 
            name="E-mail" 
            placeholder="Digite seu E-mail" 
            autoComplete="off"
            value={data.email || ''}
            onChange={(e) => updateFieldHandler('email', e.target.value)}
            required/>
        </div>
    </div>
  )
}

export default UserForm