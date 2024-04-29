import React from "react";
import {SurveyAnswerBoolean, SurveyQuestionBoolean} from "../gql/graphql";

type Props = {
  surveyQuestion: SurveyQuestionBoolean
  onChange: (answer: SurveyAnswerBoolean) => void
}

export function SurveyQuestionBooleanInput({surveyQuestion, onChange}: Props) {

}
