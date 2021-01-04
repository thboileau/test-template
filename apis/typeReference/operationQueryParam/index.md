---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "types - reference"
    version: "Operation query param"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/1356d527-f5fc-4ee2-8fe0-8f1d524d6a6f"
    - "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
    resources:
      "1356d527-f5fc-4ee2-8fe0-8f1d524d6a6f":
        path: "/user"
        operations:
          bfeb08f8-078e-4ece-b2c5-622caff4d6d9:
            name: "type reference"
            method: "GET"
            queryParameters:
              a06cbac0-38ca-4526-b839-2de7a6aac4e3:
                name: "h"
                type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
                required: false
    types:
      b96345ae-0202-4d74-89e6-e8fbed27eedf:
        name: "My data type"
        type: "STRING"
  components: {}
---