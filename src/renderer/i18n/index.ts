import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { storage } from '../storage'
import en from './en_US'
import zh from './zh_CN'

type Language = 'zh' | 'en'

// 创建初始化函数
export async function initI18n() {
  // 先获取存储的语言
  const savedLanguage = await storage.get('language') as Language || 'zh'
  
  const unifiedStorageDetector = {
    name: 'unifiedStorage',
    lookup: function() {
      return savedLanguage
    },
    cacheUserLanguage: async function(lng: string) {
      try {
        await storage.set('language', lng)
      } catch (error) {
        console.error('Failed to cache language:', error)
      }
    }
  }

  const languageDetector = new LanguageDetector()
  languageDetector.addDetector(unifiedStorageDetector)

  await i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      resources: { en, zh },
      fallbackLng: 'zh',
      supportedLngs: ['en', 'zh'],
      interpolation: {
        escapeValue: false
      },
      detection: {
        order: [unifiedStorageDetector.name, 'navigator'],
        caches: [unifiedStorageDetector.name]
      }
    })

  return i18n
}
