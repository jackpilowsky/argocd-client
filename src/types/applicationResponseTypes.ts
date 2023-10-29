export type ApplicationListResp = {
  "items": [
    {
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
                    "values": []
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
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
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
                    "values": []
                  }
                ],
                "matchLabels": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "template": {
                "metadata": {
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
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
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
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
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
                  }
                }
              }
            },
            "matrix": {
              "generators": [
                {
                  "clusterDecisionResource": {
                    "values": {}
                  },
                  "clusters": {
                    "values": {}
                  },
                  "git": {
                    "directories": [],
                    "files": []
                  },
                  "list": {
                    "elements": []
                  },
                  "matrix": {},
                  "merge": {},
                  "pullRequest": {
                    "filters": []
                  },
                  "scmProvider": {
                    "filters": []
                  },
                  "selector": {
                    "matchExpressions": [],
                    "matchLabels": {}
                  }
                }
              ],
              "template": {
                "metadata": {
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
                  }
                }
              }
            },
            "merge": {
              "generators": [
                {
                  "clusterDecisionResource": {
                    "values": {}
                  },
                  "clusters": {
                    "values": {}
                  },
                  "git": {
                    "directories": [],
                    "files": []
                  },
                  "list": {
                    "elements": []
                  },
                  "matrix": {},
                  "merge": {},
                  "pullRequest": {
                    "filters": []
                  },
                  "scmProvider": {
                    "filters": []
                  },
                  "selector": {
                    "matchExpressions": [],
                    "matchLabels": {}
                  }
                }
              ],
              "mergeKeys": [
                "string"
              ],
              "template": {
                "metadata": {
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
                  }
                }
              }
            },
            "pullRequest": {
              "bitbucketServer": {
                "api": "string",
                "basicAuth": {
                  "passwordRef": {},
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
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
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
                  "passwordRef": {},
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
                    null
                  ],
                  "pathsExist": [
                    null
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
                  "annotations": {},
                  "finalizers": [
                    null
                  ],
                  "labels": {},
                  "name": "string",
                  "namespace": "string"
                },
                "spec": {
                  "destination": {},
                  "ignoreDifferences": [
                    null
                  ],
                  "info": [
                    null
                  ],
                  "project": "string",
                  "revisionHistoryLimit": "string",
                  "source": {},
                  "sources": [
                    null
                  ],
                  "syncPolicy": {
                    "syncOptions": []
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
                    null
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
                    "values": []
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
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
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
  ],
  "metadata": {
    "continue": "string",
    "remainingItemCount": "string",
    "resourceVersion": "string",
    "selfLink": "string"
  }
}

export type ApplicationCreateResp = {
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
  "operation": {
    "info": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "initiatedBy": {
      "automated": true,
      "username": "string"
    },
    "retry": {
      "backoff": {
        "duration": "string",
        "factor": "string",
        "maxDuration": "string"
      },
      "limit": "string"
    },
    "sync": {
      "dryRun": true,
      "manifests": [
        "string"
      ],
      "prune": true,
      "resources": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string"
        }
      ],
      "revision": "string",
      "revisions": [
        "string"
      ],
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
        }
      ],
      "syncOptions": [
        "string"
      ],
      "syncStrategy": {
        "apply": {
          "force": true
        },
        "hook": {
          "syncStrategyApply": {
            "force": true
          }
        }
      }
    }
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
  },
  "status": {
    "conditions": [
      {
        "lastTransitionTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "message": "string",
        "type": "string"
      }
    ],
    "health": {
      "message": "string",
      "status": "string"
    },
    "history": [
      {
        "deployStartedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "deployedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "id": "string",
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    ],
    "observedAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "operationState": {
      "finishedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "message": "string",
      "operation": {
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "initiatedBy": {
          "automated": true,
          "username": "string"
        },
        "retry": {
          "backoff": {
            "duration": "string",
            "factor": "string",
            "maxDuration": "string"
          },
          "limit": "string"
        },
        "sync": {
          "dryRun": true,
          "manifests": [
            "string"
          ],
          "prune": true,
          "resources": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string"
            }
          ],
          "revision": "string",
          "revisions": [
            "string"
          ],
          "source": {
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
          },
          "sources": [
            {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
                  }
                ]
              },
              "ref": "string",
              "repoURL": "string",
              "targetRevision": "string"
            }
          ],
          "syncOptions": [
            "string"
          ],
          "syncStrategy": {
            "apply": {
              "force": true
            },
            "hook": {
              "syncStrategyApply": {
                "force": true
              }
            }
          }
        }
      },
      "phase": "string",
      "retryCount": "string",
      "startedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "syncResult": {
        "resources": [
          {
            "group": "string",
            "hookPhase": "string",
            "hookType": "string",
            "kind": "string",
            "message": "string",
            "name": "string",
            "namespace": "string",
            "status": "string",
            "syncPhase": "string",
            "version": "string"
          }
        ],
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    },
    "reconciledAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "resourceHealthSource": "string",
    "resources": [
      {
        "group": "string",
        "health": {
          "message": "string",
          "status": "string"
        },
        "hook": true,
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "requiresPruning": true,
        "status": "string",
        "syncWave": "string",
        "version": "string"
      }
    ],
    "sourceType": "string",
    "sourceTypes": [
      "string"
    ],
    "summary": {
      "externalURLs": [
        "string"
      ],
      "images": [
        "string"
      ]
    },
    "sync": {
      "comparedTo": {
        "destination": {
          "name": "string",
          "namespace": "string",
          "server": "string"
        },
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
        ]
      },
      "revision": "string",
      "revisions": [
        "string"
      ],
      "status": "string"
    }
  }
}

export type ManifestsWithFilesGetResp =  {
  "manifests": [
    "string"
  ],
  "namespace": "string",
  "revision": "string",
  "server": "string",
  "sourceType": "string",
  "verifyResult": "string"
}

export type ApplicationUpdateResp = {
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
  "operation": {
    "info": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "initiatedBy": {
      "automated": true,
      "username": "string"
    },
    "retry": {
      "backoff": {
        "duration": "string",
        "factor": "string",
        "maxDuration": "string"
      },
      "limit": "string"
    },
    "sync": {
      "dryRun": true,
      "manifests": [
        "string"
      ],
      "prune": true,
      "resources": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string"
        }
      ],
      "revision": "string",
      "revisions": [
        "string"
      ],
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
        }
      ],
      "syncOptions": [
        "string"
      ],
      "syncStrategy": {
        "apply": {
          "force": true
        },
        "hook": {
          "syncStrategyApply": {
            "force": true
          }
        }
      }
    }
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
  },
  "status": {
    "conditions": [
      {
        "lastTransitionTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "message": "string",
        "type": "string"
      }
    ],
    "health": {
      "message": "string",
      "status": "string"
    },
    "history": [
      {
        "deployStartedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "deployedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "id": "string",
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    ],
    "observedAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "operationState": {
      "finishedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "message": "string",
      "operation": {
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "initiatedBy": {
          "automated": true,
          "username": "string"
        },
        "retry": {
          "backoff": {
            "duration": "string",
            "factor": "string",
            "maxDuration": "string"
          },
          "limit": "string"
        },
        "sync": {
          "dryRun": true,
          "manifests": [
            "string"
          ],
          "prune": true,
          "resources": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string"
            }
          ],
          "revision": "string",
          "revisions": [
            "string"
          ],
          "source": {
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
          },
          "sources": [
            {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
                  }
                ]
              },
              "ref": "string",
              "repoURL": "string",
              "targetRevision": "string"
            }
          ],
          "syncOptions": [
            "string"
          ],
          "syncStrategy": {
            "apply": {
              "force": true
            },
            "hook": {
              "syncStrategyApply": {
                "force": true
              }
            }
          }
        }
      },
      "phase": "string",
      "retryCount": "string",
      "startedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "syncResult": {
        "resources": [
          {
            "group": "string",
            "hookPhase": "string",
            "hookType": "string",
            "kind": "string",
            "message": "string",
            "name": "string",
            "namespace": "string",
            "status": "string",
            "syncPhase": "string",
            "version": "string"
          }
        ],
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    },
    "reconciledAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "resourceHealthSource": "string",
    "resources": [
      {
        "group": "string",
        "health": {
          "message": "string",
          "status": "string"
        },
        "hook": true,
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "requiresPruning": true,
        "status": "string",
        "syncWave": "string",
        "version": "string"
      }
    ],
    "sourceType": "string",
    "sourceTypes": [
      "string"
    ],
    "summary": {
      "externalURLs": [
        "string"
      ],
      "images": [
        "string"
      ]
    },
    "sync": {
      "comparedTo": {
        "destination": {
          "name": "string",
          "namespace": "string",
          "server": "string"
        },
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
        ]
      },
      "revision": "string",
      "revisions": [
        "string"
      ],
      "status": "string"
    }
  }
}

export type ManagedResourcesListResp = {
  "hosts": [
    {
      "name": "string",
      "resourcesInfo": [
        {
          "capacity": "string",
          "requestedByApp": "string",
          "requestedByNeighbors": "string",
          "resourceName": "string"
        }
      ],
      "systemInfo": {
        "architecture": "string",
        "bootID": "string",
        "containerRuntimeVersion": "string",
        "kernelVersion": "string",
        "kubeProxyVersion": "string",
        "kubeletVersion": "string",
        "machineID": "string",
        "operatingSystem": "string",
        "osImage": "string",
        "systemUUID": "string"
      }
    }
  ],
  "nodes": [
    {
      "createdAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "health": {
        "message": "string",
        "status": "string"
      },
      "images": [
        "string"
      ],
      "info": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "networkingInfo": {
        "externalURLs": [
          "string"
        ],
        "ingress": [
          {
            "hostname": "string",
            "ip": "string",
            "ports": [
              {
                "error": "string",
                "port": 0,
                "protocol": "string"
              }
            ]
          }
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "targetLabels": {
          "property1": "string",
          "property2": "string"
        },
        "targetRefs": [
          {
            "group": "string",
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "uid": "string",
            "version": "string"
          }
        ]
      },
      "parentRefs": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string",
          "uid": "string",
          "version": "string"
        }
      ],
      "resourceRef": {
        "group": "string",
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "uid": "string",
        "version": "string"
      },
      "resourceVersion": "string"
    }
  ],
  "orphanedNodes": [
    {
      "createdAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "health": {
        "message": "string",
        "status": "string"
      },
      "images": [
        "string"
      ],
      "info": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "networkingInfo": {
        "externalURLs": [
          "string"
        ],
        "ingress": [
          {
            "hostname": "string",
            "ip": "string",
            "ports": [
              {
                "error": "string",
                "port": 0,
                "protocol": "string"
              }
            ]
          }
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "targetLabels": {
          "property1": "string",
          "property2": "string"
        },
        "targetRefs": [
          {
            "group": "string",
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "uid": "string",
            "version": "string"
          }
        ]
      },
      "parentRefs": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string",
          "uid": "string",
          "version": "string"
        }
      ],
      "resourceRef": {
        "group": "string",
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "uid": "string",
        "version": "string"
      },
      "resourceVersion": "string"
    }
  ]
}

export type ResourceTreeGetResp = {
  "hosts": [
    {
      "name": "string",
      "resourcesInfo": [
        {
          "capacity": "string",
          "requestedByApp": "string",
          "requestedByNeighbors": "string",
          "resourceName": "string"
        }
      ],
      "systemInfo": {
        "architecture": "string",
        "bootID": "string",
        "containerRuntimeVersion": "string",
        "kernelVersion": "string",
        "kubeProxyVersion": "string",
        "kubeletVersion": "string",
        "machineID": "string",
        "operatingSystem": "string",
        "osImage": "string",
        "systemUUID": "string"
      }
    }
  ],
  "nodes": [
    {
      "createdAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "health": {
        "message": "string",
        "status": "string"
      },
      "images": [
        "string"
      ],
      "info": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "networkingInfo": {
        "externalURLs": [
          "string"
        ],
        "ingress": [
          {
            "hostname": "string",
            "ip": "string",
            "ports": [
              {
                "error": "string",
                "port": 0,
                "protocol": "string"
              }
            ]
          }
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "targetLabels": {
          "property1": "string",
          "property2": "string"
        },
        "targetRefs": [
          {
            "group": "string",
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "uid": "string",
            "version": "string"
          }
        ]
      },
      "parentRefs": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string",
          "uid": "string",
          "version": "string"
        }
      ],
      "resourceRef": {
        "group": "string",
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "uid": "string",
        "version": "string"
      },
      "resourceVersion": "string"
    }
  ],
  "orphanedNodes": [
    {
      "createdAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "health": {
        "message": "string",
        "status": "string"
      },
      "images": [
        "string"
      ],
      "info": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "networkingInfo": {
        "externalURLs": [
          "string"
        ],
        "ingress": [
          {
            "hostname": "string",
            "ip": "string",
            "ports": [
              {
                "error": "string",
                "port": 0,
                "protocol": "string"
              }
            ]
          }
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "targetLabels": {
          "property1": "string",
          "property2": "string"
        },
        "targetRefs": [
          {
            "group": "string",
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "uid": "string",
            "version": "string"
          }
        ]
      },
      "parentRefs": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string",
          "uid": "string",
          "version": "string"
        }
      ],
      "resourceRef": {
        "group": "string",
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "uid": "string",
        "version": "string"
      },
      "resourceVersion": "string"
    }
  ]
}

export type ApplicationGetResp = {
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
  "operation": {
    "info": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "initiatedBy": {
      "automated": true,
      "username": "string"
    },
    "retry": {
      "backoff": {
        "duration": "string",
        "factor": "string",
        "maxDuration": "string"
      },
      "limit": "string"
    },
    "sync": {
      "dryRun": true,
      "manifests": [
        "string"
      ],
      "prune": true,
      "resources": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string"
        }
      ],
      "revision": "string",
      "revisions": [
        "string"
      ],
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
        }
      ],
      "syncOptions": [
        "string"
      ],
      "syncStrategy": {
        "apply": {
          "force": true
        },
        "hook": {
          "syncStrategyApply": {
            "force": true
          }
        }
      }
    }
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
  },
  "status": {
    "conditions": [
      {
        "lastTransitionTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "message": "string",
        "type": "string"
      }
    ],
    "health": {
      "message": "string",
      "status": "string"
    },
    "history": [
      {
        "deployStartedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "deployedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "id": "string",
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    ],
    "observedAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "operationState": {
      "finishedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "message": "string",
      "operation": {
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "initiatedBy": {
          "automated": true,
          "username": "string"
        },
        "retry": {
          "backoff": {
            "duration": "string",
            "factor": "string",
            "maxDuration": "string"
          },
          "limit": "string"
        },
        "sync": {
          "dryRun": true,
          "manifests": [
            "string"
          ],
          "prune": true,
          "resources": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string"
            }
          ],
          "revision": "string",
          "revisions": [
            "string"
          ],
          "source": {
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
          },
          "sources": [
            {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
                  }
                ]
              },
              "ref": "string",
              "repoURL": "string",
              "targetRevision": "string"
            }
          ],
          "syncOptions": [
            "string"
          ],
          "syncStrategy": {
            "apply": {
              "force": true
            },
            "hook": {
              "syncStrategyApply": {
                "force": true
              }
            }
          }
        }
      },
      "phase": "string",
      "retryCount": "string",
      "startedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "syncResult": {
        "resources": [
          {
            "group": "string",
            "hookPhase": "string",
            "hookType": "string",
            "kind": "string",
            "message": "string",
            "name": "string",
            "namespace": "string",
            "status": "string",
            "syncPhase": "string",
            "version": "string"
          }
        ],
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    },
    "reconciledAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "resourceHealthSource": "string",
    "resources": [
      {
        "group": "string",
        "health": {
          "message": "string",
          "status": "string"
        },
        "hook": true,
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "requiresPruning": true,
        "status": "string",
        "syncWave": "string",
        "version": "string"
      }
    ],
    "sourceType": "string",
    "sourceTypes": [
      "string"
    ],
    "summary": {
      "externalURLs": [
        "string"
      ],
      "images": [
        "string"
      ]
    },
    "sync": {
      "comparedTo": {
        "destination": {
          "name": "string",
          "namespace": "string",
          "server": "string"
        },
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
        ]
      },
      "revision": "string",
      "revisions": [
        "string"
      ],
      "status": "string"
    }
  }
}

export type ApplicationDeleteResp = {}

export type ApplicationPatchResp = {
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
  "operation": {
    "info": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "initiatedBy": {
      "automated": true,
      "username": "string"
    },
    "retry": {
      "backoff": {
        "duration": "string",
        "factor": "string",
        "maxDuration": "string"
      },
      "limit": "string"
    },
    "sync": {
      "dryRun": true,
      "manifests": [
        "string"
      ],
      "prune": true,
      "resources": [
        {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string"
        }
      ],
      "revision": "string",
      "revisions": [
        "string"
      ],
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
        }
      ],
      "syncOptions": [
        "string"
      ],
      "syncStrategy": {
        "apply": {
          "force": true
        },
        "hook": {
          "syncStrategyApply": {
            "force": true
          }
        }
      }
    }
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
  },
  "status": {
    "conditions": [
      {
        "lastTransitionTime": {
          "nanos": 0,
          "seconds": "string"
        },
        "message": "string",
        "type": "string"
      }
    ],
    "health": {
      "message": "string",
      "status": "string"
    },
    "history": [
      {
        "deployStartedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "deployedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "id": "string",
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    ],
    "observedAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "operationState": {
      "finishedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "message": "string",
      "operation": {
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "initiatedBy": {
          "automated": true,
          "username": "string"
        },
        "retry": {
          "backoff": {
            "duration": "string",
            "factor": "string",
            "maxDuration": "string"
          },
          "limit": "string"
        },
        "sync": {
          "dryRun": true,
          "manifests": [
            "string"
          ],
          "prune": true,
          "resources": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string"
            }
          ],
          "revision": "string",
          "revisions": [
            "string"
          ],
          "source": {
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
          },
          "sources": [
            {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
                  }
                ]
              },
              "ref": "string",
              "repoURL": "string",
              "targetRevision": "string"
            }
          ],
          "syncOptions": [
            "string"
          ],
          "syncStrategy": {
            "apply": {
              "force": true
            },
            "hook": {
              "syncStrategyApply": {
                "force": true
              }
            }
          }
        }
      },
      "phase": "string",
      "retryCount": "string",
      "startedAt": {
        "nanos": 0,
        "seconds": "string"
      },
      "syncResult": {
        "resources": [
          {
            "group": "string",
            "hookPhase": "string",
            "hookType": "string",
            "kind": "string",
            "message": "string",
            "name": "string",
            "namespace": "string",
            "status": "string",
            "syncPhase": "string",
            "version": "string"
          }
        ],
        "revision": "string",
        "revisions": [
          "string"
        ],
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
        ]
      }
    },
    "reconciledAt": {
      "nanos": 0,
      "seconds": "string"
    },
    "resourceHealthSource": "string",
    "resources": [
      {
        "group": "string",
        "health": {
          "message": "string",
          "status": "string"
        },
        "hook": true,
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "requiresPruning": true,
        "status": "string",
        "syncWave": "string",
        "version": "string"
      }
    ],
    "sourceType": "string",
    "sourceTypes": [
      "string"
    ],
    "summary": {
      "externalURLs": [
        "string"
      ],
      "images": [
        "string"
      ]
    },
    "sync": {
      "comparedTo": {
        "destination": {
          "name": "string",
          "namespace": "string",
          "server": "string"
        },
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
        ]
      },
      "revision": "string",
      "revisions": [
        "string"
      ],
      "status": "string"
    }
  }
}

export type ResourceEventList = {
  "items": [
    {
      "action": "string",
      "count": 0,
      "eventTime": {
        "nanos": 0,
        "seconds": "string"
      },
      "firstTimestamp": {
        "nanos": 0,
        "seconds": "string"
      },
      "involvedObject": {
        "apiVersion": "string",
        "fieldPath": "string",
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "resourceVersion": "string",
        "uid": "string"
      },
      "lastTimestamp": {
        "nanos": 0,
        "seconds": "string"
      },
      "message": "string",
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
      "reason": "string",
      "related": {
        "apiVersion": "string",
        "fieldPath": "string",
        "kind": "string",
        "name": "string",
        "namespace": "string",
        "resourceVersion": "string",
        "uid": "string"
      },
      "reportingComponent": "string",
      "reportingInstance": "string",
      "series": {
        "count": 0,
        "lastObservedTime": {
          "nanos": 0,
          "seconds": "string"
        }
      },
      "source": {
        "component": "string",
        "host": "string"
      },
      "type": "string"
    }
  ],
  "metadata": {
    "continue": "string",
    "remainingItemCount": "string",
    "resourceVersion": "string",
    "selfLink": "string"
  }
}

export type LinksListResp = {
  "items": [
    {
      "description": "string",
      "iconClass": "string",
      "title": "string",
      "url": "string"
    }
  ]
}

export type PodLogsListResp = {
  "error": {
    "details": [
      {
        "type_url": "string",
        "value": "string"
      }
    ],
    "grpc_code": 0,
    "http_code": 0,
    "http_status": "string",
    "message": "string"
  },
  "result": {
    "content": "string",
    "last": true,
    "podName": "string",
    "timeStamp": {
      "nanos": 0,
      "seconds": "string"
    },
    "timeStampStr": "string"
  }
}

export type ApplicationManifesGetResp = {
  "manifests": [
    "string"
  ],
  "namespace": "string",
  "revision": "string",
  "server": "string",
  "sourceType": "string",
  "verifyResult": "string"
}

export type TerminateOperationResp = {}

export type PodLogsByPodListResp = {
  "error": {
    "details": [
      {
        "type_url": "string",
        "value": "string"
      }
    ],
    "grpc_code": 0,
    "http_code": 0,
    "http_status": "string",
    "message": "string"
  },
  "result": {
    "content": "string",
    "last": true,
    "podName": "string",
    "timeStamp": {
      "nanos": 0,
      "seconds": "string"
    },
    "timeStampStr": "string"
  }
}

export type ResourceGetResp = {
  "manifest": "string"
}

export type ResourcePatchResp = {
  "manifest": "string"
}
export type ResourceDeleteResp = {}

export type ResourceActionsListResp = {
  "actions": [
    {
      "disabled": true,
      "name": "string",
      "params": [
        {
          "default": "string",
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ]
    }
  ]
}
export type ResourceActionsRun = {}

export type ResourceLinksListResp = {
  "items": [
    {
      "description": "string",
      "iconClass": "string",
      "title": "string",
      "url": "string"
    }
  ]
}
export type RevisionMetadataResp = {
  "author": "string",
  "date": {
    "nanos": 0,
    "seconds": "string"
  },
  "message": "string",
  "signatureInfo": "string",
  "tags": [
    "string"
  ]
}

export type RollBackRunResp = {
  "appNamespace": "string",
  "dryRun": true,
  "id": "string",
  "name": "string",
  "prune": true
}

export type SpecUpdate = {
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

export type SyncRunResp = {
  "appNamespace": "string",
  "dryRun": true,
  "infos": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "manifests": [
    "string"
  ],
  "name": "string",
  "prune": true,
  "resources": [
    {
      "group": "string",
      "kind": "string",
      "name": "string",
      "namespace": "string"
    }
  ],
  "retryStrategy": {
    "backoff": {
      "duration": "string",
      "factor": "string",
      "maxDuration": "string"
    },
    "limit": "string"
  },
  "revision": "string",
  "strategy": {
    "apply": {
      "force": true
    },
    "hook": {
      "syncStrategyApply": {
        "force": true
      }
    }
  },
  "syncOptions": {
    "items": [
      "string"
    ]
  }
}

export type SyncRunWindowsResp = {
  "activeWindows": [
    {
      "duration": "string",
      "kind": "string",
      "manualSync": true,
      "schedule": "string"
    }
  ],
  "assignedWindows": [
    {
      "duration": "string",
      "kind": "string",
      "manualSync": true,
      "schedule": "string"
    }
  ],
  "canSync": true
}

export type ApplicationsStreamResp = {
  "error": {
    "details": [
      {
        "type_url": "string",
        "value": "string"
      }
    ],
    "grpc_code": 0,
    "http_code": 0,
    "http_status": "string",
    "message": "string"
  },
  "result": {
    "application": {
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
      "operation": {
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "initiatedBy": {
          "automated": true,
          "username": "string"
        },
        "retry": {
          "backoff": {
            "duration": "string",
            "factor": "string",
            "maxDuration": "string"
          },
          "limit": "string"
        },
        "sync": {
          "dryRun": true,
          "manifests": [
            "string"
          ],
          "prune": true,
          "resources": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string"
            }
          ],
          "revision": "string",
          "revisions": [
            "string"
          ],
          "source": {
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
          },
          "sources": [
            {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
                  }
                ]
              },
              "ref": "string",
              "repoURL": "string",
              "targetRevision": "string"
            }
          ],
          "syncOptions": [
            "string"
          ],
          "syncStrategy": {
            "apply": {
              "force": true
            },
            "hook": {
              "syncStrategyApply": {
                "force": true
              }
            }
          }
        }
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
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {
              "nanos": 0,
              "seconds": "string"
            },
            "message": "string",
            "type": "string"
          }
        ],
        "health": {
          "message": "string",
          "status": "string"
        },
        "history": [
          {
            "deployStartedAt": {
              "nanos": 0,
              "seconds": "string"
            },
            "deployedAt": {
              "nanos": 0,
              "seconds": "string"
            },
            "id": "string",
            "revision": "string",
            "revisions": [
              "string"
            ],
            "source": {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
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
              }
            ]
          }
        ],
        "observedAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "operationState": {
          "finishedAt": {
            "nanos": 0,
            "seconds": "string"
          },
          "message": "string",
          "operation": {
            "info": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "initiatedBy": {
              "automated": true,
              "username": "string"
            },
            "retry": {
              "backoff": {
                "duration": "string",
                "factor": "string",
                "maxDuration": "string"
              },
              "limit": "string"
            },
            "sync": {
              "dryRun": true,
              "manifests": [
                "string"
              ],
              "prune": true,
              "resources": [
                {
                  "group": "string",
                  "kind": "string",
                  "name": "string",
                  "namespace": "string"
                }
              ],
              "revision": "string",
              "revisions": [
                "string"
              ],
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
              "syncOptions": [
                "string"
              ],
              "syncStrategy": {
                "apply": {
                  "force": true
                },
                "hook": {
                  "syncStrategyApply": {}
                }
              }
            }
          },
          "phase": "string",
          "retryCount": "string",
          "startedAt": {
            "nanos": 0,
            "seconds": "string"
          },
          "syncResult": {
            "resources": [
              {
                "group": "string",
                "hookPhase": "string",
                "hookType": "string",
                "kind": "string",
                "message": "string",
                "name": "string",
                "namespace": "string",
                "status": "string",
                "syncPhase": "string",
                "version": "string"
              }
            ],
            "revision": "string",
            "revisions": [
              "string"
            ],
            "source": {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
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
              }
            ]
          }
        },
        "reconciledAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "resourceHealthSource": "string",
        "resources": [
          {
            "group": "string",
            "health": {
              "message": "string",
              "status": "string"
            },
            "hook": true,
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "requiresPruning": true,
            "status": "string",
            "syncWave": "string",
            "version": "string"
          }
        ],
        "sourceType": "string",
        "sourceTypes": [
          "string"
        ],
        "summary": {
          "externalURLs": [
            "string"
          ],
          "images": [
            "string"
          ]
        },
        "sync": {
          "comparedTo": {
            "destination": {
              "name": "string",
              "namespace": "string",
              "server": "string"
            },
            "source": {
              "chart": "string",
              "directory": {
                "exclude": "string",
                "include": "string",
                "jsonnet": {
                  "extVars": [
                    null
                  ],
                  "libs": [
                    null
                  ],
                  "tlas": [
                    null
                  ]
                },
                "recurse": true
              },
              "helm": {
                "fileParameters": [
                  {}
                ],
                "ignoreMissingValueFiles": true,
                "parameters": [
                  {}
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
                  {}
                ],
                "version": "string"
              },
              "path": "string",
              "plugin": {
                "env": [
                  {}
                ],
                "name": "string",
                "parameters": [
                  {
                    "array": [],
                    "map": {}
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
              }
            ]
          },
          "revision": "string",
          "revisions": [
            "string"
          ],
          "status": "string"
        }
      }
    },
    "type": "string"
  }
}

export type ResourceTreeStreamResp = {
  "error": {
    "details": [
      {
        "type_url": "string",
        "value": "string"
      }
    ],
    "grpc_code": 0,
    "http_code": 0,
    "http_status": "string",
    "message": "string"
  },
  "result": {
    "hosts": [
      {
        "name": "string",
        "resourcesInfo": [
          {
            "capacity": "string",
            "requestedByApp": "string",
            "requestedByNeighbors": "string",
            "resourceName": "string"
          }
        ],
        "systemInfo": {
          "architecture": "string",
          "bootID": "string",
          "containerRuntimeVersion": "string",
          "kernelVersion": "string",
          "kubeProxyVersion": "string",
          "kubeletVersion": "string",
          "machineID": "string",
          "operatingSystem": "string",
          "osImage": "string",
          "systemUUID": "string"
        }
      }
    ],
    "nodes": [
      {
        "createdAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "health": {
          "message": "string",
          "status": "string"
        },
        "images": [
          "string"
        ],
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "networkingInfo": {
          "externalURLs": [
            "string"
          ],
          "ingress": [
            {
              "hostname": "string",
              "ip": "string",
              "ports": [
                {
                  "error": "string",
                  "port": 0,
                  "protocol": "string"
                }
              ]
            }
          ],
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "targetLabels": {
            "property1": "string",
            "property2": "string"
          },
          "targetRefs": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string",
              "uid": "string",
              "version": "string"
            }
          ]
        },
        "parentRefs": [
          {
            "group": "string",
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "uid": "string",
            "version": "string"
          }
        ],
        "resourceRef": {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string",
          "uid": "string",
          "version": "string"
        },
        "resourceVersion": "string"
      }
    ],
    "orphanedNodes": [
      {
        "createdAt": {
          "nanos": 0,
          "seconds": "string"
        },
        "health": {
          "message": "string",
          "status": "string"
        },
        "images": [
          "string"
        ],
        "info": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "networkingInfo": {
          "externalURLs": [
            "string"
          ],
          "ingress": [
            {
              "hostname": "string",
              "ip": "string",
              "ports": [
                {
                  "error": "string",
                  "port": 0,
                  "protocol": "string"
                }
              ]
            }
          ],
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "targetLabels": {
            "property1": "string",
            "property2": "string"
          },
          "targetRefs": [
            {
              "group": "string",
              "kind": "string",
              "name": "string",
              "namespace": "string",
              "uid": "string",
              "version": "string"
            }
          ]
        },
        "parentRefs": [
          {
            "group": "string",
            "kind": "string",
            "name": "string",
            "namespace": "string",
            "uid": "string",
            "version": "string"
          }
        ],
        "resourceRef": {
          "group": "string",
          "kind": "string",
          "name": "string",
          "namespace": "string",
          "uid": "string",
          "version": "string"
        },
        "resourceVersion": "string"
      }
    ]
  }
}