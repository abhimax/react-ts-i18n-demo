import React from 'react'
import { useTranslation } from 'react-i18next'
import './ContactForm.css'

const ContactForm: React.FC = () => {
  const { t } = useTranslation()

  return (
    <form className="contact-form">
      <label className="contact-form__label">
        {t('name')}
        <input type="text" name="name" className="contact-form__input" required />
      </label>
      <label className="contact-form__label">
        {t('message')}
        <textarea name="message" className="contact-form__textarea" required></textarea>
      </label>
      <button type="submit" className="contact-form__button">{t('submit')}</button>
    </form>
  )
}

export default ContactForm