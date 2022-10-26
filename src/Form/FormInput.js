import React from 'react'

export default function FormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
                <div>
                    <label>Full Name : </label>
                    <input type="text" onChange={props.handleChange('fullname')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="text" onChange={props.handleChange('salary')}></input>
                </div>
                <div>
                    <button type="submit">Simpan</button>
                    <button onClick={()=> props.setDisplay(false)}>Cancel</button>
                </div>
            </form>
    </div>
  )
}
