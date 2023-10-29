# About
This is the only argoCD client for Node.JS / Javascript written so far. It is very much a work in progress. a lot of methods have not

# Getting Started

In order to get started, you need an authorization token. You can get a token and pass it on to initialize the

```import {ArgoCDClient} from from 'argocd-client'

const client = new ArgoCDClient(<my-token>)
```

or you can use the `getSessionToken` to get a token using the username and password

```import {ArgoCDClient, getSessionToken} from from 'argocd-client'

async function myFunction(){
  const token = await getSessionToken({
    username: <my-username>,
    password: <my-password>,
    base_url: <my-base_url>
  })
  const client = new ArgoCDClient( <my-base_url>, <my-token>)
}
```

