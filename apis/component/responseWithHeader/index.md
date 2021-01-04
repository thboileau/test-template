---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "component"
    version: "response with header"
    description: "No description"
    license: {}
    contact: {}
  contract:
    unsortedElementOrder:
    - "#/contract/resources/e60fad66-1f2a-4fb5-9a0b-b7e25128474b"
    resources:
      e60fad66-1f2a-4fb5-9a0b-b7e25128474b:
        path: "/get"
        operations:
          "15fd8966-91bd-4e08-b86f-aae390fe1c5c":
            name: "GET"
            method: "GET"
            responses:
              "6102b8a6-4eca-42c0-ae22-5ef23014ff35":
                status: "1XX"
                reference: "#/components/responses/e397ecae-9c25-4a0b-a82d-44385488fec3"
  components:
    headers:
      cab47b43-f02a-41f9-aea8-75aafe4a3141:
        name: "header"
        componentName: "header"
        type: "STRING"
        description: "description"
        required: false
    responses:
      e397ecae-9c25-4a0b-a82d-44385488fec3:
        componentName: "responseWithHeaderComponent"
        headers:
          "10213862-d691-4226-95ab-440da5791282":
            type: "#/components/headers/cab47b43-f02a-41f9-aea8-75aafe4a3141"
---