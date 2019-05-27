import {FhirHook} from './fhir-hook';
import {V2Hook} from './v2-hook';
export class InfoElement {
  orderOnCurrentTemplate: number;
  visibleOnInit: boolean;
  info: {key: string, info: string, order: number };
  fhirHook: FhirHook;
  saveOnPatientRecord: boolean;
  // TODO CHOOSE HTML AND CSS STYLRE: TABLE, COLOR ETC'
}
