---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "type array array simple"
    version: "Response header"
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
            responses:
              "7d22c79c-3c5c-4f1e-964a-ae62da65c576":
                status: "200"
                headers:
                  "0b48ca9f-9ec9-41e6-aea9-5996350fce79":
                    name: "h"
                    type: "ARRAY"
                    items:
                      type: "ARRAY"
                      required: false
                      items:
                        type: "STRING"
                        required: false
  components: {}
---