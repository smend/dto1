import { QuestionBase } from './question-Base';
import { FhirHook } from './fhir-hook';
import { V2Hook } from './v2-hook';
import { AlgoHook } from './algo-hook';
export class YesnoQuestion extends QuestionBase {
  controlType = 'yesno';
  buttons: {key: string, value: string, order: number, showArrayOnSelect: number[],
    fhirHook: FhirHook, v2Hook: V2Hook, algoArray: {key: string, algoHook: AlgoHook}[];

  // TODO : INITIATE THE YES NO BUTTONS WITH ONLY THE KEY
}
