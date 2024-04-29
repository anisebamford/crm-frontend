/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  streetAddress: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  date: Scalars['DateTime']['output'];
  message: Scalars['String']['output'];
  subject: CommentSubject;
};

export type CommentSubject = Comment | Customer | SurveyTemplate;

export type Contact = {
  __typename?: 'Contact';
  contents: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  from?: Maybe<ContactIndividual>;
  id: Scalars['String']['output'];
  medium?: Maybe<ContactMedium>;
  subject: Scalars['String']['output'];
  survey?: Maybe<SurveyResponse>;
  to?: Maybe<ContactIndividual>;
};

export type ContactIndividual = Customer | User;

export type ContactInfo = {
  __typename?: 'ContactInfo';
  email?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  phone?: Maybe<Scalars['String']['output']>;
};

export enum ContactMedium {
  Conversation = 'CONVERSATION',
  Email = 'EMAIL',
  Letter = 'LETTER',
  Phone = 'PHONE'
}

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['String']['output'];
  person: Person;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPerson?: Maybe<Scalars['Boolean']['output']>;
  createSurveyQuestion?: Maybe<Scalars['Boolean']['output']>;
  createSurveyTemplate?: Maybe<Scalars['Boolean']['output']>;
  createUser?: Maybe<Scalars['Boolean']['output']>;
  deleteSurveyQuestion?: Maybe<Scalars['Boolean']['output']>;
  login?: Maybe<Scalars['Boolean']['output']>;
  removeSurveyQuestionFromTemplate?: Maybe<Scalars['Boolean']['output']>;
  setPassword?: Maybe<Scalars['Boolean']['output']>;
  updatePerson?: Maybe<Scalars['Boolean']['output']>;
  updateSurveyQuestion?: Maybe<Scalars['Boolean']['output']>;
  updateSurveyTemplate?: Maybe<Scalars['Boolean']['output']>;
  updateUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreatePersonArgs = {
  person: Person;
};


export type MutationCreateSurveyQuestionArgs = {
  surveyQuestion: SurveyQuestion;
};


export type MutationCreateSurveyTemplateArgs = {
  surveyTemplate: SurveyTemplate;
};


export type MutationCreateUserArgs = {
  user: User;
};


export type MutationDeleteSurveyQuestionArgs = {
  surveyQuestion: SurveyQuestion;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRemoveSurveyQuestionFromTemplateArgs = {
  surveyQuestionId: Scalars['String']['input'];
  surveyTemplateId: Scalars['String']['input'];
};


export type MutationSetPasswordArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdatePersonArgs = {
  person: Person;
};


export type MutationUpdateSurveyQuestionArgs = {
  surveyQuestion: SurveyQuestion;
};


export type MutationUpdateSurveyTemplateArgs = {
  surveyTemplate: SurveyTemplate;
};


export type MutationUpdateUserArgs = {
  user: User;
};

export type Person = {
  __typename?: 'Person';
  birthday?: Maybe<Scalars['DateTime']['output']>;
  contactInfo: ContactInfo;
  givenName: Scalars['String']['output'];
  preferredName?: Maybe<Scalars['String']['output']>;
  surName: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getContacts?: Maybe<Array<Maybe<Contact>>>;
  getCustomers?: Maybe<Array<Maybe<Customer>>>;
  getSurveyTemplates: Array<Maybe<SurveyTemplate>>;
};


export type QueryGetContactsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCustomersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSurveyTemplatesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyAnswer = SurveyAnswerBoolean | SurveyAnswerDate | SurveyAnswerFloat | SurveyAnswerInt | SurveyAnswerOptions | SurveyAnswerString;

export type SurveyAnswerBoolean = {
  __typename?: 'SurveyAnswerBoolean';
  answer: Scalars['Boolean']['output'];
  question: SurveyQuestionBoolean;
};

export type SurveyAnswerDate = {
  __typename?: 'SurveyAnswerDate';
  answer: Scalars['DateTime']['output'];
  question: SurveyQuestionDate;
};

export type SurveyAnswerFloat = {
  __typename?: 'SurveyAnswerFloat';
  answer: Scalars['Float']['output'];
  question: SurveyQuestionFloat;
};

export type SurveyAnswerInt = {
  __typename?: 'SurveyAnswerInt';
  answer: Scalars['Int']['output'];
  question: SurveyQuestionInt;
};

export type SurveyAnswerOptions = {
  __typename?: 'SurveyAnswerOptions';
  answer: Scalars['String']['output'];
  question: SurveyQuestionOptions;
};

export type SurveyAnswerString = {
  __typename?: 'SurveyAnswerString';
  answer: Scalars['String']['output'];
  question: SurveyQuestionString;
};

export type SurveyQuestion = SurveyQuestionBoolean | SurveyQuestionDate | SurveyQuestionFloat | SurveyQuestionInt | SurveyQuestionOptions | SurveyQuestionString;

export type SurveyQuestionBoolean = {
  __typename?: 'SurveyQuestionBoolean';
  falseDisplayValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  trueDisplayValue?: Maybe<Scalars['String']['output']>;
};

export type SurveyQuestionDate = {
  __typename?: 'SurveyQuestionDate';
  id: Scalars['String']['output'];
  question: Scalars['DateTime']['output'];
  rangeMax?: Maybe<Scalars['DateTime']['output']>;
  rangeMin?: Maybe<Scalars['DateTime']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type SurveyQuestionFloat = {
  __typename?: 'SurveyQuestionFloat';
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
  rangeMax?: Maybe<Scalars['Float']['output']>;
  rangeMin?: Maybe<Scalars['Float']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type SurveyQuestionInt = {
  __typename?: 'SurveyQuestionInt';
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
  rangeMax?: Maybe<Scalars['Int']['output']>;
  rangeMin?: Maybe<Scalars['Int']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type SurveyQuestionOptions = {
  __typename?: 'SurveyQuestionOptions';
  id: Scalars['String']['output'];
  options: Array<Maybe<Scalars['String']['output']>>;
  question: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type SurveyQuestionString = {
  __typename?: 'SurveyQuestionString';
  id: Scalars['String']['output'];
  pattern?: Maybe<Scalars['String']['output']>;
  question: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type SurveyResponse = {
  __typename?: 'SurveyResponse';
  date: Scalars['DateTime']['output'];
  respondent: Customer;
  responses: Array<Maybe<SurveyAnswer>>;
  survey: SurveyTemplate;
};

export type SurveyTemplate = {
  __typename?: 'SurveyTemplate';
  author: User;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  questions: Array<Maybe<SurveyQuestion>>;
};

export type User = {
  __typename?: 'User';
  person: Person;
  role: Scalars['String']['output'];
  status: UserStatus;
  username: Scalars['String']['output'];
};

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}
