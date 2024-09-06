import type { Meta, StoryObj } from '@storybook/react';

import {SurveyQuestionStringInput} from "./SurveyQuestionStringInput";

const meta: Meta<typeof SurveyQuestionStringInput> = {
  component: SurveyQuestionStringInput,
};

export default meta;

export const StringInput: StoryObj<typeof SurveyQuestionStringInput> = {
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
