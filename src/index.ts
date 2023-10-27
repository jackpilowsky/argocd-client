import {ArgoCDApi, ApplicationListResp} from './types'




export class ArgoCDService implements ArgoCDApi {
  token: null | string = null
  base_url: null | string = null
  constructor(base_url, token:string) {
    this.base_url
    this.token = token;
  }
  async _makeRequest(urlPath: string, errorMessage: string, method = 'GET' ){
    let result;
    try{
      const response: {status: number, ok: boolean, json: () => any }  = await fetch(
        `${this.base_url}/api/v1${urlPath}`,
        {
          method,
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
        },
      );


      if (!response.ok) {
        console.log(response)
        //throw new Error(errorMessage.replace('{{status}}', String(response.status)));
      }
      result = response!.json
    }catch(e){
      console.log(e)
    }
    console.log(result)
    return result
  }


  async getApplicationSet(name: string): Promise<ApplicationListResp>{
    return this._makeRequest(
      `/applicationsets/${name}`,
      `Failed to fetch applicationSet ${name} from ArgoCD with status: {{status}}`
    )
  }

  async getApplicationList(): Promise<{items: []}>{
    return this._makeRequest(
      `/applications`,
      `Failed to fetch applications from ArgoCD with status: {{status}}`
    )
  };

  async getProject(name: string): Promise<object>{
    return this._makeRequest(
      `/api/v1/projects/${name}`,
      `Failed to fetch project from ArgoCD with status: {{status}}`
    )
  }
}
