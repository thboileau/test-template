---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "type array simple"
    version: "Operation body"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/1356d527-f5fc-4ee2-8fe0-8f1d524d6a6f"
    resources:
      "1356d527-f5fc-4ee2-8fe0-8f1d524d6a6f":
        path: "/user"
        operations:
          bfeb08f8-078e-4ece-b2c5-622caff4d6d9:
            name: "type object"
            method: "PUT"
            bodies:
              "d06becea-09e3-4a0e-a4a4-b57d289f9227":
                type: "ARRAY"
                items:
                  type: "STRING"
                  required: false

  components: {}
---