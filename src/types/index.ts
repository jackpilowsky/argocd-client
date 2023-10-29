import {ApplicationListResp,ApplicationCreateResp} from './applicationTypes';

export interface ArgoCDApi {
  token: null | string;
  base_url:  null | string;

  // application service
  getApplicationList(): Promise<ApplicationListResp>;
  creteApplication(): Promise<ApplicationCreateResp>;


  // applicationSet service
  getApplicationSet(name: string):Promise<applicationSetResponse>;

}

export {
  ApplicationListResp,
  ApplicationCreateResp
}

