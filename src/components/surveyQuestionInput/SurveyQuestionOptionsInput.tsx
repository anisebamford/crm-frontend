import React, {useMemo} from "react";
import {SurveyAnswerOptions, SurveyQuestionOptions} from "../../gql/graphql";
import {FormControl, FormLabel, Option, Radio, RadioGroup, Select} from "@mui/joy";

type Props = {
  surveyQuestion: SurveyQuestionOptions,
  onChange: (answer: SurveyAnswerOptions) => void,
}

export function SurveyQuestionOptionsInput({surveyQuestion, onChange}: Props) {
  const changeHandler = (answer: string) => {
    onChange({
      question: surveyQuestion,
      answer,
    })
  }

  const formComponent = useMemo(() => {
    if (surveyQuestion.options.length <= 5) {
      return <RadioGroup
        onChange={(event) => {
          changeHandler(event.target.value)
        }}
        defaultValue={surveyQuestion.default}
      >
        {surveyQuestion.options.map((option) => {
          return <Radio value={option} key={option} label={option} />
        })}
      </RadioGroup>
    }
    else {
      return <Select
        onChange={(event, value) => {
          changeHandler(value)
        }}
        defaultValue={surveyQuestion.default}
      >
        {surveyQuestion.options.map((option) => {
          return <Option value={option} key={option}>{option}</Option>
        })}
      </Select>
    }
  }, [])

  return <FormControl>
    <FormLabel>{surveyQuestion.question}</FormLabel>
    {formComponent}
  </FormControl>
}
