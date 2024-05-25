import './App.css'
import ContactForm from './components/ContactForm';
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher/>
      <main>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <ContactForm />
      </main>
    </>
  )
}

export default App
