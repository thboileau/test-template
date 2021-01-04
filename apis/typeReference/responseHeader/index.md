---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "types - reference"
    version: "Response header"
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
            responses:
              "7d22c79c-3c5c-4f1e-964a-ae62da65c576":
                status: "200"
                headers:
                  "0b48ca9f-9ec9-41e6-aea9-5996350fce79":
                    name: "h"
                    type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
                    required: false
    types:
      b96345ae-0202-4d74-89e6-e8fbed27eedf:
        name: "My data type"
        type: "STRING"
  components: {}
---