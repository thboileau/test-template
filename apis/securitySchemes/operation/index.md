---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Security schemes"
    version: "operation"
    description: "No description"
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/eb3a8140-3cd7-43fe-9918-fe0d1948da34"
    securitySchemes:
      "1bee81fc-7129-4a76-be9f-9fd04ba3c6a0":
        name: "Basic authentication"
        type: "basic"
        describedBy: {}
    resources:
      eb3a8140-3cd7-43fe-9918-fe0d1948da34:
        name: "name"
        path: "/security"
        operations:
          "54117857-4d79-435f-b4fa-6910609fa99c":
            name: "get"
            method: "GET"
            securedBy:
            - null
            - scheme: "#/contract/securitySchemes/1bee81fc-7129-4a76-be9f-9fd04ba3c6a0"
---