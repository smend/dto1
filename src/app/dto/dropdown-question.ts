import {QuestionBase} from './Question-base';
import {FhirHook} from './fhir-hook';
import {V2Hook} from './v2-hook';
import {AlgoHook} from './algo-hook';
export class DropdownQuestion extends QuestionBase {
  controlType = 'dropdown';
  optionArray: {key: string, value: string, order: number, showArrayOnSelect: number[],
    fhirHook: FhirHook, v2Hook: V2Hook, algoArray: {key: string, algoHook: AlgoHook}}[] ;
}
