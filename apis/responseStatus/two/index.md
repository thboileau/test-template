---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Response Status"
    version: "two"
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
            method: "GET"
            bodies:
              bd284d65-f466-4c4e-9ed5-734bc7af89c2:
                type: "STRING"
                description: "# This is \n**markdown**\ndescription"
                mediaTypes:
                - "application/json"
              "4ec1df06-a973-4549-9730-2af36e214e56":
                type: "ARRAY"
                description: "This is \n* another markdown \n* description"
                items:
                  type: "STRING"
                  required: false
                mediaTypes:
                - "application/x-yaml"
            responses:
              "7a8fef19-fd7b-41c6-805a-21bc4df09cd2":
                status: "200"
                description: "This is a **markdown** description"
              c5c5adf6-a14a-4b9c-b44e-8cd5a704aeef:
                status: "4XX"
                description: "another __4xx__ response"
  components: {}
---