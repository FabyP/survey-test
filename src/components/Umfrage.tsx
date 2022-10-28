import 'survey-core/modern.min.css';
import { StylesManager, surveyLocalization, Model } from 'survey-core';
import { Survey } from "survey-react-ui";
import { useCallback } from 'react';
import "survey-core/survey.i18n";
import './Umfrage.css';

//import Inputmask from 'inputmask';
import * as SurveyCore from "survey-core";
//@ts-ignore
import * as widgets from "surveyjs-widgets";


var defaultThemeColors = StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#ee8000";
defaultThemeColors["$main-hover-color"] = "#e7e7e7";
defaultThemeColors["$header-color"] = "#7ff07f";
defaultThemeColors["$answer-background-color"] = "#ea872833";
StylesManager.applyTheme("modern");

surveyLocalization.defaultLocale = "de"

widgets.inputmask(SurveyCore);


interface UmfrageProps {
    surveyJson: object
}

const Umfrage: React.FC<UmfrageProps> = ({ surveyJson }: UmfrageProps) => {
    const survey = new Model(surveyJson);
    //widgets.inputmask(Survey);

    const alertResults = useCallback((sender: { data: any; }) => {
        const results = JSON.stringify(sender.data);
        console.log(results);
    }, []);

    survey.onComplete.add(alertResults);
    survey.locale = "de";

   

    return (
        <div  id="surveyElement">
            <Survey model={survey} />
        </div>
        
    )
}

export default Umfrage;