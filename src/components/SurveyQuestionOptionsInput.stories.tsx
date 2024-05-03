import type { Meta, StoryObj } from '@storybook/react';

import { SurveyQuestionOptionsInput } from "./SurveyQuestionOptionsInput";

const meta: Meta<typeof SurveyQuestionOptionsInput> = {
  component: SurveyQuestionOptionsInput,
};

export default meta;

export const Radios: StoryObj<typeof SurveyQuestionOptionsInput> = {
  args: {
    surveyQuestion: {
      id: "example-question",
      question: "What is the smallest possible yak?",
      required: false,
      options: ["itty bitty", "teeny weeny", "frickin' huge"]
    },
    onChange: (result) => {
      console.log(result.answer)
    }
  },
};

export const Select: StoryObj<typeof SurveyQuestionOptionsInput> = {
  args: {
    surveyQuestion: {
      id: "example-question",
      question: "What is the smallest possible yak?",
      required: false,
      options: ["itty bitty", "teeny weeny", "like a bread", "normal", "barge large", "frickin' huge"]
    },
    onChange: (result) => {
      console.log(result.answer)
    }
  },
};

