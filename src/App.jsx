import { useTranslation } from 'react-i18next';
import Switcher from './components/Switcher';
import './lib/i18n';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{t('title')}</h1>
        <p className="text-slate-600 mb-8">{t('subtitle')}</p>
        
        <div className="flex justify-center mb-10">
          <Switcher />
        </div>

        <p className="text-xs text-slate-400 uppercase tracking-widest">
          {t('footer')}
        </p>
      </div>
    </div>
  );
}

export default App;
