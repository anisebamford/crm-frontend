import React, {useCallback, useMemo} from "react";
import {SurveyAnswerBoolean, SurveyQuestionBoolean} from "../gql/graphql";
import {Checkbox, FormControl, FormLabel, Radio, RadioGroup} from "@mui/joy";

type Props = {
  surveyQuestion: SurveyQuestionBoolean
  onChange: (answer: SurveyAnswerBoolean) => void
}

export function SurveyQuestionBooleanInput({surveyQuestion, onChange}: Props) {
  const changeCallback = useCallback((value: boolean) => {
    onChange({
      answer: value,
      question: surveyQuestion
    })
  }, [surveyQuestion])
  const formElement = useMemo(() => {
    if (surveyQuestion.trueDisplayValue && !surveyQuestion.falseDisplayValue) {
      return <Checkbox label={surveyQuestion.trueDisplayValue} onChange={(event) => changeCallback(event.target.checked)}/>
    }
    else {
      return <RadioGroup defaultValue={1} onChange={(event) => changeCallback(!!+event.target.value)}>
        <Radio value={1} label={surveyQuestion.trueDisplayValue || "Yes"} />
        <Radio value={0} label={surveyQuestion.falseDisplayValue || "No"} />
      </RadioGroup>
    }
  }, [surveyQuestion])
  return <FormControl required={surveyQuestion.required} id={surveyQuestion.id}>
    <FormLabel>{surveyQuestion.question}</FormLabel>
    {formElement}
  </FormControl>

}
