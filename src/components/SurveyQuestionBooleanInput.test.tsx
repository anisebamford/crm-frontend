import React from "react";
import {SurveyQuestionBoolean} from "../gql/graphql";
import {SurveyQuestionBooleanInput} from "./SurveyQuestionBooleanInput";
import {render, screen} from "@testing-library/react";

it("Will render a checkbox", async () => {
  const question: SurveyQuestionBoolean = {
    id: "idk",
    question: "What is your name?",
    trueDisplayValue: "Ralph"
  }
  const onChange = jest.fn()
  render(<SurveyQuestionBooleanInput surveyQuestion={question} onChange={onChange}/>)
  const checkbox = await screen.findByRole("checkbox")
  console.log(checkbox);
  expect(checkbox).toBeTruthy();
})
