import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import css from './App.module.css';
import Main from '../main/Main';
import en from '../../translations/en.ts';
import pl from '../../translations/pl.ts';
import ua from '../../translations/ua.ts';
import type { Language } from '../../types/currentLang.ts';

const translations = {en,pl,ua};


export default function App() {
    const [language, setLanguage] = useState<Language>('pl');

    const currentLanguage = translations[language];

    return (
        <div className={css.page_wrap}>
            <Sidebar currentLanguage={currentLanguage}/>
            <Main
                setLanguage={setLanguage}
                currentLanguage={currentLanguage}
            />
        </div>
    );
}