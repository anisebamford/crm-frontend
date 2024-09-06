import React from "react";
import {SurveyQuestionBoolean} from "../../gql/graphql";
import {SurveyQuestionBooleanInput} from "./SurveyQuestionBooleanInput";
import {fireEvent, render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

it("Will render radio buttons", async () => {
  const question: SurveyQuestionBoolean = {
    id: "idk",
    question: "What is your name?",
  }
  const onChange = jest.fn()
  render(<SurveyQuestionBooleanInput surveyQuestion={question} onChange={onChange}/>)
  const radio = await screen.findAllByRole("radio")
  expect(radio.length).toBe(2);
})

it("If given only a true display value, it will render a checkbox", async () => {
  const question: SurveyQuestionBoolean = {
    id: "idk",
    question: "What is your name?",
    trueDisplayValue: "Ralph"
  }
  const onChange = jest.fn()
  render(<SurveyQuestionBooleanInput surveyQuestion={question} onChange={onChange}/>)
  const checkbox = await screen.findByRole("checkbox")
  expect(checkbox).toBeTruthy();
})

it("If given true and false display values, it will render radios", async () => {
  const question: SurveyQuestionBoolean = {
    id: "idk",
    question: "What is your name?",
    trueDisplayValue: "Ralph",
    falseDisplayValue: "Not Ralph"
  }
  const onChange = jest.fn()
  render(<SurveyQuestionBooleanInput surveyQuestion={question} onChange={onChange}/>)
  const radio = await screen.findAllByRole("radio")
  expect(radio).toBeTruthy();
})

// @todo figure out how to test for input.
it.skip("Will report clicks", async () => {
  const question: SurveyQuestionBoolean = {
    id: "idk",
    question: "What is your name?",
  }
  const onChange = jest.fn()
  render(<SurveyQuestionBooleanInput surveyQuestion={question} onChange={onChange}/>)
  await userEvent.click(await screen.getByText("Yes"))
  expect(onChange).toHaveBeenCalledWith({
    question,
    answer: true,
  });
})
