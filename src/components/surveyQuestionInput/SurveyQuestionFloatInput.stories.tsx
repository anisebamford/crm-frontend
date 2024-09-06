import type { Meta, StoryObj } from '@storybook/react';

import {SurveyQuestionFloatInput} from "./SurveyQuestionFloatInput";

const meta: Meta<typeof SurveyQuestionFloatInput> = {
  component: SurveyQuestionFloatInput,
};

export default meta;

export const FloatInput: StoryObj<typeof SurveyQuestionFloatInput> = {
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
