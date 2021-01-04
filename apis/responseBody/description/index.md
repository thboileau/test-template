---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Response body"
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
          "8b08a7ff-6fe2-4e91-8c02-e7a832481150":
            name: "GET"
            method: "GET"
            responses:
              d36a896d-8b04-4afc-bdfd-f1eebb8201df:
                status: "199"
                bodies:
                  bd284d65-f466-4c4e-9ed5-734bc7af89c2:
                    type: "STRING"
                    description: "# This is \n**markdown**\ndescription"
                    mediaTypes:
                    - "application/json"
  components: {}
---