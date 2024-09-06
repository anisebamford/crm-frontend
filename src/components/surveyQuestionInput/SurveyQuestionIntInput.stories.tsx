import type { Meta, StoryObj } from '@storybook/react';

import {SurveyQuestionIntInput} from "./SurveyQuestionIntInput";

const meta: Meta<typeof SurveyQuestionIntInput> = {
  component: SurveyQuestionIntInput,
};

export default meta;

export const IntegerInput: StoryObj<typeof SurveyQuestionIntInput> = {
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
