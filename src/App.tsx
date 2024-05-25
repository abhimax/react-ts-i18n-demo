import { useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm';
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

function App() {
  interface useType {
    name: string,
    message: string
  }
  const { t } = useTranslation();
  const [user, setUser] = useState<useType>();
  const handleOnSubmit = (name: string, message:string) => {
    setUser({"name":name,"message":message});
  }
  return (
    <>
<LanguageSwitcher />
      <main>
        {user && <h2 data-test-id="greeting">{`Hi, ${user.name}`}</h2>}
        <h1 data-test-id="welcome-message">{t('welcome')}</h1>
        <p data-test-id="description">{t('description')}</p>
        <ContactForm onSubmit={handleOnSubmit} />
        {user && (
          <div className="contact-details" data-test-id="contact-details">
            <h2>{t('Submitted Information')}</h2>
            <p><strong>{t('name')}:</strong> {user.name}</p>
            <p><strong>{t('message')}:</strong> {user.message}</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
