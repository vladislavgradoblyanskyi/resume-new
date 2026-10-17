import css from './Projects_section.module.css';
import type { currentLangMain } from '../../types/currentLang';
import { useState } from "react";


interface ProjectsListProps{
currentLanguage:currentLangMain;
}


export default function Projects({ currentLanguage }:ProjectsListProps) {
    const [openmyProject, setOpenmyProject] = useState<null | number>(null);
    const [openteamProject, setOpenteamProject] = useState<null | number>(null);

    

    return (
    <div className={css.projects}>
        <ul className={css.project_list}>
            <p>{currentLanguage.mainProjectList[0]}</p>
            {currentLanguage.myprojects.map((myproject, index) => {
                const isOpen = openmyProject === index;

                return (
                    <li className={`${css.project_item} ${isOpen ? css.open : ""}`} key={myproject.name}>
                        <button type="button" className={css.project_header} onClick={() => setOpenmyProject(isOpen ? null : index)} aria-expanded={isOpen}>
                            <span className={css.project_name}>
                                {myproject.name}
                            </span>

                            <span className={css.project_icon}>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </span>
                        </button>

                        {isOpen && (
                            <div className={css.project_content}>
                                <p className={css.project_desc}>{myproject.description}</p>
                                <div className={css.project_links}>
                                    <a href={myproject.live} target="_blank">Live Demo</a>
                                    <a href={myproject.github} target="_blank">GitHub</a>
                                </div>
                            </div>
                        )}
                    </li>
                );
                
            })}
            <p>{currentLanguage.mainProjectList[1]}</p>
            {currentLanguage.teamprojects.map((teamproject, index) => {
                const isOpen = openteamProject === index;

                return (
                    <li className={`${css.project_item} ${isOpen ? css.open : ""}`} key={teamproject.name}>
                        <button type="button" className={css.project_header} onClick={() => setOpenteamProject(isOpen ? null : index)} aria-expanded={isOpen}>
                            <span className={css.project_name}>
                                {teamproject.name}
                            </span>

                            <span className={css.project_icon}>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </span>
                        </button>

                        {isOpen && (
                            <div className={css.project_content}>
                                <p className={css.project_desc}>{teamproject.description}</p>
                                <div className={css.project_links}>
                                    <a href={teamproject.live} target="_blank">Live Demo</a>
                                    <a href={teamproject.github} target="_blank">GitHub</a>
                                </div>
                            </div>
                        )}
                    </li>
                );
                
            })}
        </ul>
    </div>
);
}