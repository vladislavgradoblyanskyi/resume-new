import css from './Sidebar.module.css'
import img from '../../assets/hero.png'
import type { currentLangSidebar } from '../../types/currentLang';

interface SideBarProps {
    currentLanguage: currentLangSidebar;
}
export default function Sidebar({ currentLanguage }:SideBarProps) {
  return(
  <aside className={css.sidebar}>
      <section className={css.photo_wrap}>
        <img src={img} alt="Portrait" width={380}/>
      </section>

      <section className={css.sidebar_inner}>
        <h3 className={css.sidebar_title}>{currentLanguage.sidebarContact}</h3>
        <section className={css.contacts}>
          <a className={css.phone} href="tel:+48727437949">+48 727 437 949</a>
          <a className={css.email} href="mailto:vladislavgradoblyanskyi@gmail.com">vladislavgradoblyanskyi@gmail.com</a>
        </section>

        <h4 className={css.sidebar_section}>Tech Skills</h4>
        <ul className={css.skill_list}>
          <p>Frontend:</p>
          <li>HTML5, CSS3</li>
          <li>JavaScript, TypeScript</li>
          <li>JavaScript/TypeScript</li>
          <li>React, Next.js</li>
          <p>Backend/Databases:</p>
          <li>Node.js, PHP</li>
          <li>SQL</li>
          <p>Tools</p>
          <li>GIT basics</li>
          <li>GitHub</li>
          <li>VS Code</li>
        </ul>

        <h4 className={css.sidebar_section}>Soft Skills</h4>
        <ul className={css.skill_list}>
            {currentLanguage.sidebarSoftSkills.map((skill) => (
                        <li key={skill}>
                            {skill}
                        </li>
                    ))}
        </ul>
        <h4 className={css.sidebar_section}>{currentLanguage.sidebarLangsName}</h4>
        <ul className={css.skill_list}>
            {currentLanguage.sidebarLangs.map((lang) => (
                        <li key={lang}>
                            {lang}
                        </li>
                    ))}
        </ul>
      </section>
    </aside>
  )
}
