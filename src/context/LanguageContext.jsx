import { createContext, useContext, useState, useEffect } from 'react'
import { translations, availableLanguages } from '../config/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    if (saved && translations[saved]) return saved
    const browserLang = navigator.language.split('-')[0]
    return translations[browserLang] ? browserLang : 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const getLocalizedContent = (content) => {
    if (typeof content === 'string') return content
    return content?.[language] || content?.en || ''
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getLocalizedContent,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}