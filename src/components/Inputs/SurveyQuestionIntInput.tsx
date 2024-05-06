import React, {useState} from "react";
import {SurveyAnswerInt, SurveyQuestionInt} from "../../gql/graphql";
import {FormControl, FormHelperText, FormLabel, Input} from "@mui/joy";
import {NumericFormatAdapter} from "./NumericFormatAdapter";
import {useDebouncedCallback} from "use-debounce";

type Props = {
  surveyQuestion: SurveyQuestionInt,
  onChange: (answer: SurveyAnswerInt) => void
}

const debounceInterval = 500

export function SurveyQuestionIntInput({surveyQuestion, onChange}: Props) {
  const [error, setError] = useState(false);

  const max = typeof surveyQuestion.rangeMax === "number" ? surveyQuestion.rangeMax : Number.MAX_SAFE_INTEGER
  const min = typeof surveyQuestion.rangeMin === "number" ? surveyQuestion.rangeMin : Number.MIN_SAFE_INTEGER

  const debounce = useDebouncedCallback((input: number) => {
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
        setError(min > newValue || max < newValue)
        debounce(newValue)
      }}
      slotProps={{
        input: {
          component: NumericFormatAdapter(0) as React.ElementType,
        },
      }}
    />
    <FormHelperText color="danger.500">
      {error ? `Value must be between ${min} and ${max}` : null}
    </FormHelperText>
  </FormControl>
}
