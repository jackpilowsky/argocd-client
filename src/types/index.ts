import {
  ApplicationListResp,
  ApplicationCreateResp,
  ApplicationUpdateResp
} from './applicationResponseTypes';
import {ApplicationRequest} from './applicationRequestTypes'

import {ApplicationSetGetResp} from './applicationSetResponseTypes'
export interface ArgoCDApi {
  token: null | string;
  base_url:  null | string;

  // application service
  getApplicationList(): Promise<ApplicationListResp>;
  createApplication(upsert, validate, applicationRequest: ApplicationRequest): Promise<ApplicationCreateResp>;
  updateApplicaton(name: string, validate, applicationRequest:ApplicationRequest): Promise<ApplicationUpdateResp>


  // applicationSet service
  getApplicationSet(name: string):Promise<ApplicationSetGetResp>;

}

export {
  //applicationResponseTypes
  ApplicationListResp,
  ApplicationCreateResp,
  ApplicationUpdateResp,
  //applicationRequestTypes
  ApplicationRequest
}

