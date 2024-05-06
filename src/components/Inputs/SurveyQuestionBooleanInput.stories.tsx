import type { Meta, StoryObj } from '@storybook/react';

import { SurveyQuestionBooleanInput } from "./SurveyQuestionBooleanInput";

const meta: Meta<typeof SurveyQuestionBooleanInput> = {
  component: SurveyQuestionBooleanInput,
};

export default meta;

export const YesAndNo: StoryObj<typeof SurveyQuestionBooleanInput> = {
  args: {
    surveyQuestion: {
      id: "example-question",
      question: "What is the smallest possible yak?",
      required: false,
    },
    onChange: (result) => {
      console.log(result.answer)
    }
  },
};

export const Checkbox: StoryObj<typeof SurveyQuestionBooleanInput> = {
  args: {
    surveyQuestion: {
      id: "example-question",
      question: "What is the smallest possible yak?",
      trueDisplayValue: "really really tiny",
      required: false
    },
    onChange: (result) => {
      console.log(result.answer)
    }
  }
}

export const CustomLabels: StoryObj<typeof SurveyQuestionBooleanInput> = {
  args: {
    surveyQuestion: {
      id: "example-question",
      question: "What is the smallest possible yak?",
      trueDisplayValue: "really really tiny",
      falseDisplayValue: "like a bus",
      required: false,
    },
    onChange: (result) => {
      console.log(result.answer)
    }
  }
}
