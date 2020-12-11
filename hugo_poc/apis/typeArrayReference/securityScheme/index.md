---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "type array reference"
    version: "security scheme"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
    securitySchemes:
      "6aa4b72b-c9c7-4e51-bba1-71f089ec515c":
        name: "Basic authentication"
        type: "basic"
        describedBy:
          headers:
            a9ac6558-f815-4541-831d-46150a307539:
              name: "h"
              type: "ARRAY"
              items:
                required: false
                type: "#/contract/types/b96345ae-0202-4d74-89e6-e8fbed27eedf"
          queryParameters:
            "19cbd88a-1372-40c9-87ff-754c68291bb2":
              name: "qp"
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