import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher/>
      <h2>{t('welcome')}</h2>
    </>
  )
}

export default App
