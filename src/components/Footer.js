import React, { useState } from 'react'
import FooterImg from '../images/footer_img.webp'
import FormInput from './FormInputs'
import TextArea from './TextArea'
import '../sass/base/_footer.scss'
import '../sass/layout/_footer.scss'

export const Footer = () => {
  const [valuesInputs, setValuesInputs] = useState({
    name: '',
    prenom: '',
    email: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      maxLength: '10',
      placeholder: 'Nom',
      errorMessage: "The name should be 3-10 and shouldn't include any special character !",
      required: true,
      pattern: '^[A-Za-z0-9]{3,10}$'
    },{
      id: 2,
      name: 'prenom',
      type: 'text',
      maxLength: '10',
      placeholder: 'Prenom',
      errorMessage: "The name should be 3-10 and shouldn't include any special character !",
      required: true,
      pattern: '^[A-Za-z0-9]{3,10}$'
    },{
      id: 3,
      name: 'email',
      type: 'email',
      maxLength: '15',
      placeholder: 'Email',
      errorMessage: "The name should be 3-15 and shouldn't include any special character !",
      required: true,
      pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
    }
  ]
  const firstColumn = inputs.slice(0, 2)
  console.log(firstColumn)
  const lastOfInputs = inputs.slice(2, 3)
  console.log(lastOfInputs)
  const onChange = (e) =>{
      setValuesInputs({...valuesInputs, [e.target.name]: e.target.value})
    }
  return (
    <div className='footer-container'>
        <h1>parlons de votre projet ?</h1>
        <div className="footer_fom">
          <div className="footer-img">
            <img src={FooterImg} alt='people on moon talikng' /> 
          </div>
          <div className='for_form'>
            <form className='for_form--inputs'>
              <div className="first-for__form">
                {firstColumn.map((input) => (
                        <FormInput key={input.id} {...input} value={valuesInputs[input.name] || ''} onChange={onChange} className="form-input"/>
                    ))}
              </div>
              <div className="second-for__form">
                {lastOfInputs.map((input) => (
                          <FormInput key={input.id} {...input} value={valuesInputs[input.name] || ''} onChange={onChange} className="form-input"/>
                      ))}
              </div>
              <div className='select-options'>
                <select>
                  <option value={''}>Sur quel(s) sujet(s) aimeriez-vous échanger ?</option>
                  <option value="identité de marque">Identité de marque</option>
                  <option value="Réseaux sociaux">Réseaux sociaux</option>
                  <option value="Support print">Support print</option>
                  <option value="Photo ou vidéo">Photo ou vidéo</option>
                  <option value="Logo + charte">Logo + charte</option>
                  <option value="Site web">Site web</option>
                  <option value="Edition/magazine">Edition/magazine</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </form>

          </div>
        </div>
        <div className="footer_details">
          <h2>Créer une identité de marque mémorale et authentique</h2>
          <div className='footer_elements'>
            <div className="footer_elements-first">
              <h3>Contact</h3>
              <ol>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ol>
            </div>
            <div className="footer_elements-second">
              <h3>Infos</h3>
              <ol>
                <li>Studio</li>
                <li>Services</li>
                <li>Réalisations</li>
                <li>Services</li>
              </ol>
            </div>
            <div className="footer_elements-third">
              <h3>Autre</h3>
              <ol>
                <li>Mentions</li>
                <li>CGV</li>
                <li>FAQs</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="footer-text">
          <span>By KrisCartel House</span>
        </div>
    </div>
  )
}
export default Footer