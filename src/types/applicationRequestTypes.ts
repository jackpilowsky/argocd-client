export type ApplicationRequest =  {
  "metadata"?: {
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
  "operation"?: {
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
  "spec"?: {
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
  "status"?: {
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