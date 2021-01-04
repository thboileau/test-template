---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "component"
    version: "pathVariable"
    description: "No description"
    license: {}
    contact: {}
  contract:
    unsortedElementOrder:
    - "#/contract/resources/e60fad66-1f2a-4fb5-9a0b-b7e25128474b"
    resources:
      e60fad66-1f2a-4fb5-9a0b-b7e25128474b:
        path: "/get/{pathVariable}"
        pathVariables:
          "33199f8e-6de4-4e92-8df4-20f2b493bca3":
            type: "#/components/pathVariables/2c9f6776-5c5e-4c8c-afe2-f30e986f1f9b"
        operations:
          "15fd8966-91bd-4e08-b86f-aae390fe1c5c":
            name: "GET"
            method: "GET"
  components:
    pathVariables:
      "2c9f6776-5c5e-4c8c-afe2-f30e986f1f9b":
        name: "pathVariable"
        componentName: "pathVariable"
        type: "STRING"
        description: "**description**"
        required: true
---