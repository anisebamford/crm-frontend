import React, {useState} from "react";
import {SurveyAnswerString, SurveyQuestionString} from "../../gql/graphql";
import {FormControl, FormHelperText, FormLabel, Input} from "@mui/joy";
import {useDebouncedCallback} from "use-debounce";

type Props = {
  surveyQuestion: SurveyQuestionString,
  onChange: (answer: SurveyAnswerString) => void
}

const debounceInterval = 500

export function SurveyQuestionStringInput({surveyQuestion, onChange}: Props) {
  const [error, setError] = useState(false);

  const matcher = new RegExp(surveyQuestion.pattern)

  const debounce = useDebouncedCallback((input: string) => {
    onChange({
      question: surveyQuestion,
      answer: input,
    })
  }, debounceInterval)

  return <FormControl error={error}>
    <FormLabel required={surveyQuestion.required}>
      {surveyQuestion.question}
    </FormLabel>
    <Input
      defaultValue={surveyQuestion.default || ""}
      onChange={(event) => {
        const newValue = event.target.value
        setError(newValue && !matcher.test(newValue))
        debounce(newValue)
      }}
    />
    {/* @todo write better error handler */}
    <FormHelperText color={"danger.500"}>
      {error ? `Must match pattern ${surveyQuestion.pattern}.` : null}
    </FormHelperText>
  </FormControl>
}
