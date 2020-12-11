---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "types - reference"
    version: "Type in types"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
    - "#/contract/types/f33fc504-bb5f-4823-97dd-26109244ca42"
    - "#/contract/types/3b6564f2-b385-4aad-9a89-3ce9deb41993"
    types:
      b96345ae-0202-4d74-89e6-e8fbed27eedf:
        name: "My data type"
        type: "STRING"
      f33fc504-bb5f-4823-97dd-26109244ca42:
        name: "My data type in property"
        type: "OBJECT"
        properties:
          a60d55fe-03c7-428d-9b03-14d3bb35d79e:
            name: "dsds"
            type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
            required: false
      "3b6564f2-b385-4aad-9a89-3ce9deb41993":
        name: "My data type as type"
        type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
  components: {}
---