---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "types - object"
    version: "Operation header"
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
            method: "GET"
            headers:
              a06cbac0-38ca-4526-b839-2de7a6aac4e3:
                name: "h"
                type: "OBJECT"
                properties:
                  ef6abf1c-8ced-4511-a564-12061da34562:
                    name: "property"
                    type: "STRING"
                    required: false
  components: {}
---