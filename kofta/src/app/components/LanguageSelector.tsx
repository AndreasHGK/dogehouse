import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  options?: Array<{ value: string; label: string }>;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  options = [
    { value: "en", label: "🇬🇧 English" },
    { value: "af", label: "🇿🇦 Afrikaans" },
    { value: "al", label: "🇦🇱 Albanian" },
    { value: "am", label: "🇪🇹 Amharic" },
    { value: "ar", label: "🇸🇦 Arabic" },
		{ value: "az", label: "🇦🇿 Azerbaijani" },
    { value: "bn", label: "🇧🇩 Bangla" },
    { value: "zh-CN", label: "🇨🇳 Chinese (Simplified)" },
    { value: "zh-TW", label: "🇹🇼 Chinese (Traditional)" },
    { value: "cs", label: "🇨🇿 Czech" },
    { value: "da", label: "🇩🇰 Danish" },
    { value: "nl", label: "🇳🇱 Dutch" },
    { value: "et", label: "🇪🇪 Estonian" },
    { value: "fi", label: "🇫🇮 Finnish" },
    { value: "fr", label: "🇫🇷 French" },
    { value: "de", label: "🇩🇪 German" },
		{ value: "el-GR", label: "🇬🇷 Greek" },
    { value: "he", label: "🇮🇱 Hebrew" },
    { value: "hi", label: "🇮🇳 Hindi" },
    { value: "hu", label: "🇭🇺 Hungarian" },
    { value: "is", label: "🇮🇸 Icelandic" },
    { value: "id", label: "🇮🇩 Indonesian" },
    { value: "it", label: "🇮🇹 Italian" },
    { value: "ja", label: "🇯🇵 Japanese" },
    { value: "lt", label: "🇱🇹 Lithuanian" },
    { value: "ne", label: "🇳🇵 Nepali" },
    { value: "nb", label: "🇳🇴 Norwegian" },
    { value: "pl", label: "🇵🇱 Polish" },
    { value: "pt-PT", label: "🇵🇹 Portuguese" },
    { value: "pt-BR", label: "🇧🇷 Portuguese (Brazil)" },
		{ value: "ro", label: "🇷🇴 Romanian" },
    { value: "ru", label: "🇷🇺 Russian" },
    { value: "sk", label: "🇸🇰 Slovak" },
    { value: "sr", label: "🇷🇸 Serbian (Cyrillic)" },
    { value: "sr-Latin", label: "🇷🇸 Serbian (Latin)" },
		{ value: 'se', label: "🇸🇪 Swedish" },
    { value: 'ch', label: "🇨🇭 Swiss German" },
    { value: "es", label: "🇪🇸 Spanish" },
    { value: "th", label: "🇹🇭 Thai" },
    { value: "tr", label: "🇹🇷 Turkish" },
    { value: "uk", label: "🇺🇦 Ukrainian" },
    { value: "ur", label: "🇵🇰 Urdu" },
	  { value: "owo", label: "OwO english"},
    { value: "bg", label: "🇧🇬 Bulgarian"},
		{ value: "en-pirate", label: "🏴‍☠️ Pirate"},
  ],
}) => {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};
