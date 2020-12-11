---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Security schemes"
    version: "unanthentication"
    description: "No description"
  contract:
    securedBy:
    - null
    securitySchemes:
      "7e1551d2-dbec-44e6-8974-a561eeb84a1c":
        name: "HTTP_BASIC"
        type: "basic"
        description: "All GET methods are public, meaning that *you can read all the data*. Write operations require authentication and therefore are forbidden to the general public."
        describedBy: {}
      dad0dc49-d453-42a5-ae1c-a9867f748727:
        name: "Bearer authentication"
        type: "bearer"
        description: "This is a *Bearer* authentication"
        settings:
          bearerFormat: "dsds"
        describedBy:
          headers:
            e06c0cfb-e534-48b8-9ebb-ab704ca0a7e5:
              name: "header1"
              type: "STRING"
              description: "dsdsf"
              required: true
              examples:
                b2517b60-d943-4bf0-b942-e5656cb42694:
                  value: "fds"
            "6ff8a6aa-489f-42e4-b03a-c6ea34544e9e":
              name: "dsfdsf"
              type: "STRING"
              description: "dsfs"
              required: false
          queryParameters:
            a6711ded-ab10-46e2-9b97-3224db16a0df:
              name: "queryparam1"
              type: "STRING"
              description: "This a *query param*"
              required: true
              examples:
                f89bfa64-9f65-4110-84dd-717db288111f:
                  value: "example"
            "327d4cae-43ee-4fba-ab47-497240ae2cb1":
              name: "queryParam2"
              type: "STRING"
              description: "ds"
              required: false
              examples:
                c666f81a-491c-41d0-bad9-cca478bdce3e:
                  value: "ds"
---