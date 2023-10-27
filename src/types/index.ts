import {ApplicationListResp} from './applicationTypes';

export interface ArgoCDApi {
  token: null | string;
  base_url:  null | string;

  // application service
  getApplicationList(): Promise<ApplicationListResp>;

  // applicationSet service
  getApplicationSet(name: string):Promise<applicationSetResponse>;

}

export {
  ApplicationListResp

}

