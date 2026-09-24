import type { Language } from '../../types/currentLang';
import type {currentLangMain} from '../../types/currentLang';
import css from './Main.module.css';

interface MainProps {
    setLanguage: (lang: Language) => void;
    currentLanguage: currentLangMain;
}

export default function Main({ setLanguage, currentLanguage }: MainProps) {
    return (
        <main className={css.content}>
            <div className={css.lang_buttons}>
                <button onClick={() => setLanguage("pl")}>PL</button>
                <button onClick={() => setLanguage("en")}>EN</button>
                <button onClick={() => setLanguage("ua")}>UA</button>
            </div>

            <header className={css.job_title}>
                <p className={css.role}>
                    {currentLanguage.mainRole}
                </p>
                <h1 className={css.name}>
                    Vladyslav Hradoblianskyi
                </h1>
                <p className={css.summary}>
                    {currentLanguage.mainSummary}
                </p>
            </header>

            <section className={css.projects}>
                <h2>{currentLanguage.mainProjects}</h2>

                <ul className={css.project_list}>
                    <p>{currentLanguage.mainProjectList[0]}</p>
                    <li>
                        <a href="https://vladislavgradoblyanskyi.github.io/project1/" target="_blank" >
                            https://vladislavgradoblyanskyi.github.io/project1/
                        </a>
                    </li>

                    <p>{currentLanguage.mainProjectList[1]}</p>

                    <li>
                        <a href="https://vladislavgradoblyanskyi.github.io/Team-Project/" target="_blank">
                            https://vladislavgradoblyanskyi.github.io/Team-Project/
                        </a>
                    </li>

                    <li>
                        <a href="https://vladislavgradoblyanskyi.github.io/pets_founder/" target="_blank" >
                            https://vladislavgradoblyanskyi.github.io/pets_founder/
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/vladislavgradoblyanskyi/wild-travels-Backend" target="_blank" >
                            https://github.com/vladislavgradoblyanskyi/wild-travels-Backend
                        </a>
                    </li>

                    <li>
                        <a href="https://wild-travels-rust.vercel.app/" target="_blank">
                            https://wild-travels-rust.vercel.app/
                        </a>
                    </li>
                </ul>
            </section>

            <section className={css.education}>
                <h2>{currentLanguage.mainEducation}</h2>

                <h4 className={css.school}>
                    {currentLanguage.mainEducationTechnical.school}
                </h4>

                <p className={css.degree}>
                    {currentLanguage.mainEducationTechnical.qualification}
                </p>

                <p className={css.meta}>
                    {currentLanguage.mainEducationTechnical.data}
                    <span className="sep"> | </span> Poland
                </p>
            </section>

            <section className={css.education}>
                <h4 className={css.school}>
                    {currentLanguage.mainEducationCourseGoIT.school}
                </h4>

                <p className={css.degree}>
                    {currentLanguage.mainEducationCourseGoIT.qualification}
                </p>

                <p className={css.degree}>
                    {currentLanguage.mainEducationCourseGoIT.newknowledge}
                </p>

                <p className={css.meta}>
                    {currentLanguage.mainEducationCourseGoIT.data}
                    <span className="sep"> | </span> online
                </p>
            </section>

            <section className={css.education}>
                <h4 className={css.school}>
                    {currentLanguage.mainEducationIntership.school}
                </h4>

                <p className={css.degree}>
                    {currentLanguage.mainEducationIntership.qualification}
                </p>

                <p className={css.meta}>
                    {currentLanguage.mainEducationIntership.data}
                    <span className="sep"> | </span> Greece
                </p>
            </section>

            <section className={css.education}>
                <h4 className={css.school}>
                    {currentLanguage.mainEducationCourse2.school}
                </h4>

                <p className={css.degree}>
                    {currentLanguage.mainEducationCourse2.qualification}
                </p>

                <p className={css.meta}>
                    {currentLanguage.mainEducationCourse2.data}
                    <span className="sep"> | </span>
                    online
                </p>
            </section>

            <section className={css.education}>
                <h4 className={css.school}>
                    {currentLanguage.mainInterests}
                </h4>

                <ul className={css.zainteresowania}>
                    {currentLanguage.mainInterestsList.map((interest) => (
                        <li key={interest}>
                            {interest}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
