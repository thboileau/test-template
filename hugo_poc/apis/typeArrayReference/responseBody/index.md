---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "type array reference"
    version: "Response body"
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
                bodies:
                  a74dfb46-943d-4a62-97bc-0466b6a16707:
                    type: "ARRAY"
                    items:
                      required: false
                      type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
    types:
      b96345ae-0202-4d74-89e6-e8fbed27eedf:
        name: "My data type"
        type: "STRING"
  components: {}
---