export interface currentLangMain {
        mainRole: string;
        mainSummary: string;
        mainProjects: string;
        mainProjectList: string[];

        mainEducation: string;

        mainEducationTechnical: {
            school: string;
            qualification: string;
            data: string;
        };

        mainEducationCourseGoIT: {
            school: string;
            qualification: string;
            newknowledge: string;
            data: string;
        };

        mainEducationIntership: {
            school: string;
            qualification: string;
            data: string;
        };

        mainEducationCourse2: {
            school: string;
            qualification: string;
            data: string;
        };

        mainInterests: string;
        mainInterestsList: string[];
    };
export interface currentLangSidebar {
       sidebarContact: string;
       sidebarSoftSkills: string[];
   }

export type Language = "pl" | "en" | "ua";