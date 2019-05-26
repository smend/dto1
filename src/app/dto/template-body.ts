import {QuestionBase} from './Question-base';
import {Algorithm} from './algorithm';
import {FhirHook} from './fhir-hook';
import {V2Hook} from './v2-hook';
import {PrognoseElement} from './prognose-element';

export class TemplateBody {
  id: number;
  name: string;
  category: number;
  questions: QuestionBase[]; // ONLY IF VALID IN TYPE-SCRIPT.
  // DERIVED CLASSES PROPERTIES SHOULD BE AVAILABLE
  fhirHooK: FhirHook;
  v2Hook: V2Hook ;
  appliedAlgorithms: Algorithm[];
  prognoseElement: PrognoseElement[];







}
