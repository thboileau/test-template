---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "one of"
    version: "single type"
    description: "No description"
    license: {}
    contact: {}
  contract:
    unsortedElementOrder:
    - "#/contract/types/21ff679d-75aa-49a3-b03d-b2292a6a900a"
    - "#/contract/types/eaaaf411-5c40-4473-8a84-a56dda628595"
    types:
      "21ff679d-75aa-49a3-b03d-b2292a6a900a":
        name: "oneOf"
        type: "ONEOF"
        oneOf:
        - "#/contract/types/eaaaf411-5c40-4473-8a84-a56dda628595"
      eaaaf411-5c40-4473-8a84-a56dda628595:
        name: "type"
        type: "OBJECT"
  components: {}
---