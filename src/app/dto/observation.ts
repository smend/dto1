import {FhirHook} from './fhir-hook';
import {V2Hook} from './v2-hook';

export class Observation {
  fhirHooK: FhirHook;
  v2Hook: V2Hook ;
  readonly: boolean;
  name: string;
  type: string;
}
