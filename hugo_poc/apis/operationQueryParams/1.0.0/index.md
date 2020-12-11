---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "query params"
    version: "1.0.0"
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
            queryParameters:
              "180da139-71fa-4088-b93a-971b73fdb80e":
                name: "simple type required"
                type: "STRING"
                required: true
              b6470002-0a4e-4404-b23c-9dc63f766685:
                name: "simple type optional"
                type: "STRING"
                required: false
              "72bf1b15-e44f-46fa-83b7-78605537ba87":
                name: "simple type and text description"
                type: "STRING"
                description: "This is a text description"
                required: false
              e0173bc3-e730-4505-8019-cfc6772fef63:
                name: "simple type and markdown description"
                type: "STRING"
                description: "**markdown** __description__"
                required: false
              "54646e75-d5eb-4af6-8cfd-1385ea8c1a81":
                name: "simple type and a single example"
                type: "STRING"
                required: false
              "91e87e17-574e-4c3e-a4f0-cef3677038f1":
                name: "simple type and examples"
                type: "STRING"
                required: false
                examples:
                  "300ab39c-af0a-48fb-afc2-03731ba7ab8b":
                    value: "example 1"
                  d491c977-ddbb-4856-8e19-e193d304807a:
                    value: "example 2"
  components: {}
---