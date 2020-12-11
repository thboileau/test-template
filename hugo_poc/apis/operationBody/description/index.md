---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Operation body"
    version: "description"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/4df9f0b2-8a1f-4287-8929-4379c667b2b9"
    resources:
      "4df9f0b2-8a1f-4287-8929-4379c667b2b9":
        path: "/test"
        operations:
          cdc498d7-5276-4c76-810e-17e8399e2611:
            name: "test"
            method: "PUT"
            bodies:
              bd284d65-f466-4c4e-9ed5-734bc7af89c2:
                type: "STRING"
                description: "# This is \n**markdown**\ndescription"
                mediaTypes:
                - "application/json"
  components: {}
---