// src/components/LanguageSwitcher.tsx
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      <option value="zh">{t("language.zh")}</option>
      <option value="en">{t("language.en")}</option>
    </select>
  );
};
