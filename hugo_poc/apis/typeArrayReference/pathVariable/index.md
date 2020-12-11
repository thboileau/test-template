---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "type array reference"
    version: "path variable"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/41e65f38-0420-44b6-89ee-0b8a868656f0"
    - "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
    resources:
      "41e65f38-0420-44b6-89ee-0b8a868656f0":
        path: "/user/{userId}"
        pathVariables:
          "52d937a4-dd9e-4ba8-b662-e25368f68a64":
            name: "userId"
            type: "ARRAY"
            items:
              required: false
              type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
            required: true
        operations:
          "7134e352-19a3-42fd-9535-53de1b300875":
            name: "type reference"
            method: "GET"
    types:
      b96345ae-0202-4d74-89e6-e8fbed27eedf:
        name: "My data type"
        type: "STRING"
  components: {}
---