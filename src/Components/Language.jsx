import React from 'react'
import LinksLanguage from './LinksLanguage'



const Language = () => {
  return (
    <div className='LangDiv'>
      <p>Google offered in:</p>
      <LinksLanguage link={"Hausa"}/>
      <LinksLanguage link={"Igbo"}/>
      <LinksLanguage link={"Èdè Yorùbá"}/>
      <LinksLanguage link={"Nigerian Pidgin"}/>
    </div>
  )
}

export default Language