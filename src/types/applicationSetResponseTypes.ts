export type ApplicationSetGetResp = {
  "metadata": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string",
    "creationTimestamp": {
      "nanos": 0,
      "seconds": "string"
    },
    "deletionGracePeriodSeconds": "string",
    "deletionTimestamp": {
      "nanos": 0,
      "seconds": "string"
    },
    "finalizers": [
      "string"
    ],
    "generateName": "string",
    "generation": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managedFields": [
      {
        "apiVersion": "string",
        "fieldsType": "string",
        "fieldsV1": {
          "Raw": "string"
        },
        "manager": "string",
        "operation": "string",
        "subresource": "string",
        "time": {
          "nanos": 0,
          "seconds": "string"
        }
      }
    ],
    "name": "string",
    "namespace": "string",
    "ownerReferences": [
      {
        "apiVersion": "string",
        "blockOwnerDeletion": true,
        "controller": true,
        "kind": "string",
        "name": "string",
        "uid": "string"
      }
    ],
    "resourceVersion": "string",
    "selfLink": "string",
    "uid": "string"
  },
  "spec": {
    "generators": [
      {
        "clusterDecisionResource": {
          "configMapRef": "string",
          "labelSelector": {
            "matchExpressions": [
              {
                "key": "string",
                "operator": "string",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "name": "string",
          "requeueAfterSeconds": "string",
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          },
          "values": {
            "property1": "string",
            "property2": "string"
          }
        },
        "clusters": {
          "selector": {
            "matchExpressions": [
              {
                "key": "string",
                "operator": "string",
                "values": [
                  "string"
                ]
              }
            ],
            "matchLabels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          },
          "values": {
            "property1": "string",
            "property2": "string"
          }
        },
        "git": {
          "directories": [
            {
              "exclude": true,
              "path": "string"
            }
          ],
          "files": [
            {
              "path": "string"
            }
          ],
          "pathParamPrefix": "string",
          "repoURL": "string",
          "requeueAfterSeconds": "string",
          "revision": "string",
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          }
        },
        "list": {
          "elements": [
            {
              "raw": "string"
            }
          ],
          "elementsYaml": "string",
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          }
        },
        "matrix": {
          "generators": [
            {
              "clusterDecisionResource": {
                "configMapRef": "string",
                "labelSelector": {
                  "matchExpressions": [
                    null
                  ],
                  "matchLabels": {}
                },
                "name": "string",
                "requeueAfterSeconds": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                },
                "values": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "clusters": {
                "selector": {
                  "matchExpressions": [
                    null
                  ],
                  "matchLabels": {}
                },
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                },
                "values": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "git": {
                "directories": [
                  {}
                ],
                "files": [
                  {}
                ],
                "pathParamPrefix": "string",
                "repoURL": "string",
                "requeueAfterSeconds": "string",
                "revision": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "list": {
                "elements": [
                  {}
                ],
                "elementsYaml": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "matrix": {
                "raw": "string"
              },
              "merge": {
                "raw": "string"
              },
              "pullRequest": {
                "bitbucketServer": {
                  "api": "string",
                  "basicAuth": {},
                  "project": "string",
                  "repo": "string"
                },
                "filters": [
                  {}
                ],
                "gitea": {
                  "api": "string",
                  "insecure": true,
                  "owner": "string",
                  "repo": "string",
                  "tokenRef": {}
                },
                "github": {
                  "api": "string",
                  "appSecretName": "string",
                  "labels": [
                    null
                  ],
                  "owner": "string",
                  "repo": "string",
                  "tokenRef": {}
                },
                "gitlab": {
                  "api": "string",
                  "labels": [
                    null
                  ],
                  "project": "string",
                  "pullRequestState": "string",
                  "tokenRef": {}
                },
                "requeueAfterSeconds": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "scmProvider": {
                "azureDevOps": {
                  "accessTokenRef": {},
                  "allBranches": true,
                  "api": "string",
                  "organization": "string",
                  "teamProject": "string"
                },
                "bitbucket": {
                  "allBranches": true,
                  "appPasswordRef": {},
                  "owner": "string",
                  "user": "string"
                },
                "bitbucketServer": {
                  "allBranches": true,
                  "api": "string",
                  "basicAuth": {},
                  "project": "string"
                },
                "cloneProtocol": "string",
                "filters": [
                  {
                    "pathsDoNotExist": [],
                    "pathsExist": []
                  }
                ],
                "gitea": {
                  "allBranches": true,
                  "api": "string",
                  "insecure": true,
                  "owner": "string",
                  "tokenRef": {}
                },
                "github": {
                  "allBranches": true,
                  "api": "string",
                  "appSecretName": "string",
                  "organization": "string",
                  "tokenRef": {}
                },
                "gitlab": {
                  "allBranches": true,
                  "api": "string",
                  "group": "string",
                  "includeSubgroups": true,
                  "tokenRef": {}
                },
                "requeueAfterSeconds": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "selector": {
                "matchExpressions": [
                  {
                    "values": []
                  }
                ],
                "matchLabels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            }
          ],
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          }
        },
        "merge": {
          "generators": [
            {
              "clusterDecisionResource": {
                "configMapRef": "string",
                "labelSelector": {
                  "matchExpressions": [
                    null
                  ],
                  "matchLabels": {}
                },
                "name": "string",
                "requeueAfterSeconds": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                },
                "values": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "clusters": {
                "selector": {
                  "matchExpressions": [
                    null
                  ],
                  "matchLabels": {}
                },
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                },
                "values": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "git": {
                "directories": [
                  {}
                ],
                "files": [
                  {}
                ],
                "pathParamPrefix": "string",
                "repoURL": "string",
                "requeueAfterSeconds": "string",
                "revision": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "list": {
                "elements": [
                  {}
                ],
                "elementsYaml": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "matrix": {
                "raw": "string"
              },
              "merge": {
                "raw": "string"
              },
              "pullRequest": {
                "bitbucketServer": {
                  "api": "string",
                  "basicAuth": {},
                  "project": "string",
                  "repo": "string"
                },
                "filters": [
                  {}
                ],
                "gitea": {
                  "api": "string",
                  "insecure": true,
                  "owner": "string",
                  "repo": "string",
                  "tokenRef": {}
                },
                "github": {
                  "api": "string",
                  "appSecretName": "string",
                  "labels": [
                    null
                  ],
                  "owner": "string",
                  "repo": "string",
                  "tokenRef": {}
                },
                "gitlab": {
                  "api": "string",
                  "labels": [
                    null
                  ],
                  "project": "string",
                  "pullRequestState": "string",
                  "tokenRef": {}
                },
                "requeueAfterSeconds": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "scmProvider": {
                "azureDevOps": {
                  "accessTokenRef": {},
                  "allBranches": true,
                  "api": "string",
                  "organization": "string",
                  "teamProject": "string"
                },
                "bitbucket": {
                  "allBranches": true,
                  "appPasswordRef": {},
                  "owner": "string",
                  "user": "string"
                },
                "bitbucketServer": {
                  "allBranches": true,
                  "api": "string",
                  "basicAuth": {},
                  "project": "string"
                },
                "cloneProtocol": "string",
                "filters": [
                  {
                    "pathsDoNotExist": [],
                    "pathsExist": []
                  }
                ],
                "gitea": {
                  "allBranches": true,
                  "api": "string",
                  "insecure": true,
                  "owner": "string",
                  "tokenRef": {}
                },
                "github": {
                  "allBranches": true,
                  "api": "string",
                  "appSecretName": "string",
                  "organization": "string",
                  "tokenRef": {}
                },
                "gitlab": {
                  "allBranches": true,
                  "api": "string",
                  "group": "string",
                  "includeSubgroups": true,
                  "tokenRef": {}
                },
                "requeueAfterSeconds": "string",
                "template": {
                  "metadata": {
                    "annotations": {},
                    "finalizers": [],
                    "labels": {}
                  },
                  "spec": {
                    "ignoreDifferences": [],
                    "info": [],
                    "sources": []
                  }
                }
              },
              "selector": {
                "matchExpressions": [
                  {
                    "values": []
                  }
                ],
                "matchLabels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            }
          ],
          "mergeKeys": [
            "string"
          ],
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          }
        },
        "pullRequest": {
          "bitbucketServer": {
            "api": "string",
            "basicAuth": {
              "passwordRef": {
                "key": "string",
                "secretName": "string"
              },
              "username": "string"
            },
            "project": "string",
            "repo": "string"
          },
          "filters": [
            {
              "branchMatch": "string"
            }
          ],
          "gitea": {
            "api": "string",
            "insecure": true,
            "owner": "string",
            "repo": "string",
            "tokenRef": {
              "key": "string",
              "secretName": "string"
            }
          },
          "github": {
            "api": "string",
            "appSecretName": "string",
            "labels": [
              "string"
            ],
            "owner": "string",
            "repo": "string",
            "tokenRef": {
              "key": "string",
              "secretName": "string"
            }
          },
          "gitlab": {
            "api": "string",
            "labels": [
              "string"
            ],
            "project": "string",
            "pullRequestState": "string",
            "tokenRef": {
              "key": "string",
              "secretName": "string"
            }
          },
          "requeueAfterSeconds": "string",
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          }
        },
        "scmProvider": {
          "azureDevOps": {
            "accessTokenRef": {
              "key": "string",
              "secretName": "string"
            },
            "allBranches": true,
            "api": "string",
            "organization": "string",
            "teamProject": "string"
          },
          "bitbucket": {
            "allBranches": true,
            "appPasswordRef": {
              "key": "string",
              "secretName": "string"
            },
            "owner": "string",
            "user": "string"
          },
          "bitbucketServer": {
            "allBranches": true,
            "api": "string",
            "basicAuth": {
              "passwordRef": {
                "key": "string",
                "secretName": "string"
              },
              "username": "string"
            },
            "project": "string"
          },
          "cloneProtocol": "string",
          "filters": [
            {
              "branchMatch": "string",
              "labelMatch": "string",
              "pathsDoNotExist": [
                "string"
              ],
              "pathsExist": [
                "string"
              ],
              "repositoryMatch": "string"
            }
          ],
          "gitea": {
            "allBranches": true,
            "api": "string",
            "insecure": true,
            "owner": "string",
            "tokenRef": {
              "key": "string",
              "secretName": "string"
            }
          },
          "github": {
            "allBranches": true,
            "api": "string",
            "appSecretName": "string",
            "organization": "string",
            "tokenRef": {
              "key": "string",
              "secretName": "string"
            }
          },
          "gitlab": {
            "allBranches": true,
            "api": "string",
            "group": "string",
            "includeSubgroups": true,
            "tokenRef": {
              "key": "string",
              "secretName": "string"
            }
          },
          "requeueAfterSeconds": "string",
          "template": {
            "metadata": {
              "annotations": {
                "property1": "string",
                "property2": "string"
              },
              "finalizers": [
                "string"
              ],
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "namespace": "string"
            },
            "spec": {
              "destination": {
                "name": "string",
                "namespace": "string",
                "server": "string"
              },
              "ignoreDifferences": [
                {
                  "group": "string",
                  "jqPathExpressions": [
                    null
                  ],
                  "jsonPointers": [
                    null
                  ],
                  "kind": "string",
                  "managedFieldsManagers": [
                    null
                  ],
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "info": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "project": "string",
              "revisionHistoryLimit": "string",
              "source": {
                "chart": "string",
                "directory": {
                  "exclude": "string",
                  "include": "string",
                  "jsonnet": {
                    "extVars": [],
                    "libs": [],
                    "tlas": []
                  },
                  "recurse": true
                },
                "helm": {
                  "fileParameters": [
                    null
                  ],
                  "ignoreMissingValueFiles": true,
                  "parameters": [
                    null
                  ],
                  "passCredentials": true,
                  "releaseName": "string",
                  "skipCrds": true,
                  "valueFiles": [
                    null
                  ],
                  "values": "string",
                  "version": "string"
                },
                "kustomize": {
                  "commonAnnotations": {},
                  "commonAnnotationsEnvsubst": true,
                  "commonLabels": {},
                  "forceCommonAnnotations": true,
                  "forceCommonLabels": true,
                  "images": [
                    null
                  ],
                  "namePrefix": "string",
                  "nameSuffix": "string",
                  "namespace": "string",
                  "replicas": [
                    null
                  ],
                  "version": "string"
                },
                "path": "string",
                "plugin": {
                  "env": [
                    null
                  ],
                  "name": "string",
                  "parameters": [
                    null
                  ]
                },
                "ref": "string",
                "repoURL": "string",
                "targetRevision": "string"
              },
              "sources": [
                {
                  "chart": "string",
                  "directory": {},
                  "helm": {
                    "fileParameters": [],
                    "parameters": [],
                    "valueFiles": []
                  },
                  "kustomize": {
                    "commonAnnotations": {},
                    "commonLabels": {},
                    "images": [],
                    "replicas": []
                  },
                  "path": "string",
                  "plugin": {
                    "env": [],
                    "parameters": []
                  },
                  "ref": "string",
                  "repoURL": "string",
                  "targetRevision": "string"
                }
              ],
              "syncPolicy": {
                "automated": {
                  "allowEmpty": true,
                  "prune": true,
                  "selfHeal": true
                },
                "managedNamespaceMetadata": {
                  "annotations": {},
                  "labels": {}
                },
                "retry": {
                  "backoff": {},
                  "limit": "string"
                },
                "syncOptions": [
                  "string"
                ]
              }
            }
          }
        },
        "selector": {
          "matchExpressions": [
            {
              "key": "string",
              "operator": "string",
              "values": [
                "string"
              ]
            }
          ],
          "matchLabels": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "goTemplate": true,
    "preservedFields": {
      "annotations": [
        "string"
      ]
    },
    "strategy": {
      "rollingSync": {
        "steps": [
          {
            "matchExpressions": [
              {
                "key": "string",
                "operator": "string",
                "values": [
                  "string"
                ]
              }
            ],
            "maxUpdate": {
              "intVal": 0,
              "strVal": "string",
              "type": "string"
            }
          }
        ]
      },
      "type": "string"
    },
    "syncPolicy": {
      "preserveResourcesOnDeletion": true
    },
    "template": {
      "metadata": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "finalizers": [
          "string"
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "namespace": "string"
      },
      "spec": {
        "destination": {
          "name": "string",
          "namespace": "string",
          "server": "string"
        },
        "ignoreDifferences": [
          {
            "group": "string",
            "jqPathExpressions": [
              "string"
            ],
            "jsonPointers": [
              "string"
            ],
            "kind": "string",
            "managedFieldsManagers": [
              "string"
            ],
            "name": "string",
            "namespace": "string"
          }
        ],
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "project": "string",
        "revisionHistoryLimit": "string",
        "source": {
          "chart": "string",
          "directory": {
            "exclude": "string",
            "include": "string",
            "jsonnet": {
              "extVars": [
                {
                  "code": true,
                  "name": "string",
                  "value": "string"
                }
              ],
              "libs": [
                "string"
              ],
              "tlas": [
                {
                  "code": true,
                  "name": "string",
                  "value": "string"
                }
              ]
            },
            "recurse": true
          },
          "helm": {
            "fileParameters": [
              {
                "name": "string",
                "path": "string"
              }
            ],
            "ignoreMissingValueFiles": true,
            "parameters": [
              {
                "forceString": true,
                "name": "string",
                "value": "string"
              }
            ],
            "passCredentials": true,
            "releaseName": "string",
            "skipCrds": true,
            "valueFiles": [
              "string"
            ],
            "values": "string",
            "version": "string"
          },
          "kustomize": {
            "commonAnnotations": {
              "property1": "string",
              "property2": "string"
            },
            "commonAnnotationsEnvsubst": true,
            "commonLabels": {
              "property1": "string",
              "property2": "string"
            },
            "forceCommonAnnotations": true,
            "forceCommonLabels": true,
            "images": [
              "string"
            ],
            "namePrefix": "string",
            "nameSuffix": "string",
            "namespace": "string",
            "replicas": [
              {
                "count": {
                  "intVal": 0,
                  "strVal": "string",
                  "type": "string"
                },
                "name": "string"
              }
            ],
            "version": "string"
          },
          "path": "string",
          "plugin": {
            "env": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "name": "string",
            "parameters": [
              {
                "array": [
                  "string"
                ],
                "map": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string",
                "string": "string"
              }
            ]
          },
          "ref": "string",
          "repoURL": "string",
          "targetRevision": "string"
        },
        "sources": [
          {
            "chart": "string",
            "directory": {
              "exclude": "string",
              "include": "string",
              "jsonnet": {
                "extVars": [
                  {}
                ],
                "libs": [
                  "string"
                ],
                "tlas": [
                  {}
                ]
              },
              "recurse": true
            },
            "helm": {
              "fileParameters": [
                {
                  "name": "string",
                  "path": "string"
                }
              ],
              "ignoreMissingValueFiles": true,
              "parameters": [
                {
                  "forceString": true,
                  "name": "string",
                  "value": "string"
                }
              ],
              "passCredentials": true,
              "releaseName": "string",
              "skipCrds": true,
              "valueFiles": [
                "string"
              ],
              "values": "string",
              "version": "string"
            },
            "kustomize": {
              "commonAnnotations": {
                "property1": "string",
                "property2": "string"
              },
              "commonAnnotationsEnvsubst": true,
              "commonLabels": {
                "property1": "string",
                "property2": "string"
              },
              "forceCommonAnnotations": true,
              "forceCommonLabels": true,
              "images": [
                "string"
              ],
              "namePrefix": "string",
              "nameSuffix": "string",
              "namespace": "string",
              "replicas": [
                {
                  "count": {},
                  "name": "string"
                }
              ],
              "version": "string"
            },
            "path": "string",
            "plugin": {
              "env": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "name": "string",
              "parameters": [
                {
                  "array": [
                    null
                  ],
                  "map": {},
                  "name": "string",
                  "string": "string"
                }
              ]
            },
            "ref": "string",
            "repoURL": "string",
            "targetRevision": "string"
          }
        ],
        "syncPolicy": {
          "automated": {
            "allowEmpty": true,
            "prune": true,
            "selfHeal": true
          },
          "managedNamespaceMetadata": {
            "annotations": {
              "property1": "string",
              "property2": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "retry": {
            "backoff": {
              "duration": "string",
              "factor": "string",
              "maxDuration": "string"
            },
            "limit": "string"
          },
          "syncOptions": [
            "string"
          ]
        }
      }
    }
  },
  "status": {
    "applicationStatus": [
      {
        "application": "string",
        "lastTransitionTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "message": "string",
        "status": "string",
        "step": "string"
      }
    ],
    "conditions": [
      {
        "lastTransitionTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "message": "string",
        "reason": "string",
        "status": "string",
        "type": "string"
      }
    ]
  }
}