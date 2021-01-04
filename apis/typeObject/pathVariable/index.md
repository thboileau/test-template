---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "types - object"
    version: "path variable"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/41e65f38-0420-44b6-89ee-0b8a868656f0"
    resources:
      "41e65f38-0420-44b6-89ee-0b8a868656f0":
        path: "/user/{userId}"
        pathVariables:
          "52d937a4-dd9e-4ba8-b662-e25368f68a64":
            name: "userId"
            type: "OBJECT"
            required: false
            properties:
              ef6abf1c-8ced-4511-a564-12061da34562:
                name: "property"
                type: "STRING"
        operations:
          "7134e352-19a3-42fd-9535-53de1b300875":
            name: "type object"
            method: "GET"
  components: {}
---