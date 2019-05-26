import { QuestionBase } from './question-Base';
import { FhirHook } from './fhir-hook';
import { V2Hook } from './v2-hook';
import { AlgoHook } from './algo-hook';
export class RadioQuestion extends QuestionBase {
  controlType = 'radio';
  buttons: {key: string, value: string, order: number, showArrayOnSelect: number[],
    fhirHook: FhirHook, v2Hook: V2Hook, algoArray: {key: string, algoHook: AlgoHook} }[] ;
  // TODO ADD ALGO OBJECT FOR ANSWERS
}
