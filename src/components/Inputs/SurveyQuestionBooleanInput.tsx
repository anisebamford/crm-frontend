import React, {useCallback, useMemo} from "react";
import {SurveyAnswerBoolean, SurveyQuestionBoolean} from "../../gql/graphql";
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
      return <Checkbox
        label={surveyQuestion.trueDisplayValue}
        onChange={(event) => changeCallback(event.target.checked)}
        defaultChecked={surveyQuestion.default}
      />
    }
    else {
      return <RadioGroup defaultValue={surveyQuestion.default} onChange={(event) => changeCallback(event.target.value)}>
        <Radio value={true} label={surveyQuestion.trueDisplayValue || "Yes"} />
        <Radio value={false} label={surveyQuestion.falseDisplayValue || "No"} />
      </RadioGroup>
    }
  }, [surveyQuestion])
  return <FormControl required={surveyQuestion.required} id={surveyQuestion.id}>
    <FormLabel>{surveyQuestion.question}</FormLabel>
    {formElement}
  </FormControl>

}
