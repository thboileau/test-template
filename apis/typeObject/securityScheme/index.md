---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "types - object"
    version: "security scheme"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    securitySchemes:
      "879f2e95-c96c-4b3b-8102-df3388690ceb":
        name: "Basic authentication"
        type: "basic"
        describedBy:
          headers:
            "19c360b1-ec7a-4a44-953f-c39daa451ca6":
              name: "h"
              type: "OBJECT"
              properties:
                ce4f4a73-75ad-46ca-8a36-f374462d4b69:
                  name: "property"
                  type: "STRING"
                  required: false
          queryParameters:
            "1f7f7407-1082-4e45-821b-2780d1f6d62c":
              name: "qp"
              type: "OBJECT"
              properties:
                ef6abf1c-8ced-4511-a564-12061da34562:
                  name: "property"
                  type: "STRING"
                  required: false
  components: {}
---