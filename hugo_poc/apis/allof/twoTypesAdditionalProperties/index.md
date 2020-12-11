---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "all of"
    version: "two types - properties"
    description: "No description"
    license: {}
    contact: {}
  contract:
    unsortedElementOrder:
    - "#/contract/types/21ff679d-75aa-49a3-b03d-b2292a6a900a"
    - "#/contract/types/eaaaf411-5c40-4473-8a84-a56dda628595"
    - "#/contract/types/dbc4e914-8dc6-4abe-975b-ede9a6e6f50b"
    types:
      "21ff679d-75aa-49a3-b03d-b2292a6a900a":
        name: "allOf"
        type: "ALLOF"
        allOf:
        - "#/contract/types/eaaaf411-5c40-4473-8a84-a56dda628595"
        - "#/contract/types/dbc4e914-8dc6-4abe-975b-ede9a6e6f50b"
        properties:
          bacc490a-fa0b-401d-b49b-4d4bb169551e:
            name: "test"
            type: "STRING"
            required: false
      eaaaf411-5c40-4473-8a84-a56dda628595:
        name: "type"
        type: "OBJECT"
      dbc4e914-8dc6-4abe-975b-ede9a6e6f50b:
        name: "type2"
        type: "OBJECT"
---