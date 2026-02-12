import { useTranslation } from 'react-i18next';

const Switcher = () => {
  const { i18n } = useTranslation();

  return (
    <select 
      value={i18n.language} 
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default Switcher;
