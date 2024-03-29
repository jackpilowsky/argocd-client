import queryString from 'query-string';
import {
  ArgoCDApi,
  ApplicationListResp,
  ApplicationCreateResp,
  ApplicationRequest,
  ApplicationUpdateResp
} from './types'


export const getSessionToken = async (props: {
  base_url: string,
  username: string,
  password: string,
}):Promise<boolean> => {
  const {username, password, base_url} = props
  if(!username || !password || !base_url){
    throw new Error("username, password and base_url are required")
  }
  const response = await fetch(`${base_url}/api/v1/session`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"username":username,"password":password}),
  });
  return response!.json()
}


export class ArgoCDClient implements ArgoCDApi {
  token: null | string = null
  base_url: null | string = null
  constructor(base_url: string, token:string) {
    this.base_url = base_url
    this.token = token
  }
  async _makeRequest(urlPath: string, errorMessage: string, method = 'GET', data: object | null = null ){
    const response: {status: number, ok: boolean, json: () => any }  = await fetch(
      `${this.base_url}/api/v1${urlPath}`,
      {
        method,
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: (data && JSON.stringify(data))
      },
    );
    if (!response.ok) {
      throw new Error(errorMessage.replace('{{status}}', String(response.status)));
    }
    return response!.json()
  }
  /* Application methods */
  async getApplicationList(): Promise<ApplicationListResp>{
    return this._makeRequest(
      `/applications`,
      `Failed to fetch applications from ArgoCD with status: {{status}}`
    )
  };

  async createApplication(upsert, validate, applicationRequest: ApplicationRequest): Promise<ApplicationCreateResp>{
    const url = `/applications?${queryString.stringify({upsert, validate})}`
    return this._makeRequest(
      `/applications`,
      `Failed to create application, response ArgoCD with status: {{status}}`,
      'POST',
      applicationRequest
    )
  }

  async updateApplicaton(name: string, validate, applicationRequest:ApplicationRequest): Promise<ApplicationUpdateResp>{
    const url = `/applications/${name}?${queryString.stringify(validate)}`
    return this._makeRequest(
      url,
      `Failed to create application, response ArgoCD with status: {{status}}`,
      'PUT',
      applicationRequest
    )
  }


  async getApplicationSet(name: string): Promise<ApplicationListResp>{
    return this._makeRequest(
      `/applicationsets/${name}`,
      `Failed to fetch applicationSet ${name} from ArgoCD with status: {{status}}`
    )
  }




  async getProject(name: string): Promise<object>{
    return this._makeRequest(
      `/api/v1/projects/${name}`,
      `Failed to fetch project from ArgoCD with status: {{status}}`
    )
  }
}
