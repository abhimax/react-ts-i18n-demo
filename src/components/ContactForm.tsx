import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './ContactForm.css'

interface contactFormProps {
  onSubmit: (name: string, message: string) => void
}
const ContactForm: React.FC <contactFormProps> = ({onSubmit}) => {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, message);

  }
  return (
    <form className="contact-form" onSubmit={onHandleSubmit}>
      <label className="contact-form__label">
        {t('name')}
        <input type="text" name="name" className="contact-form__input" required onChange={(e) => {setName(e.target.value)}}/>
      </label>
      <label className="contact-form__label">
        {t('message')}
        <textarea name="message" className="contact-form__textarea" required onChange={(e) => { setMessage(e.target.value)}}></textarea>
      </label>
      <button type="submit" className="contact-form__button">{t('submit')}</button>
    </form>
  )
}

export default ContactForm