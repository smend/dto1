export class QuestionBase {
  ID: number;
  name: string;  // q name for display in admin
  MasterQuestionFromRepositoryID: number; // if the Q was duplicated from existing Q - '0' if none
  parentQuestionOnCurrentTemplateID: number; // if the Q is a daugther of another Q in the template for indentation and inital visability
  orderOnCurrentTemplate: number;
  daugtherQuestionsArray: {key: string, value: number[]}[]; // for visabiltiy, example: show this array of qouestions
  required: boolean;
  controlType: string;
  visableOnInit: boolean;
  /////// medical logic hooks/////////
  fhirHook: {key: string, value: string}[] = [];
  v2Hook: {key: string, value: string}[] = [];
  snomedHook:{key: string, value: string}[] = [];


}
