---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "component"
    version: "query parameters"
    description: "No description"
    license: {}
    contact: {}
  contract:
    unsortedElementOrder:
    - "#/contract/resources/e60fad66-1f2a-4fb5-9a0b-b7e25128474b"
    securitySchemes:
      b40ba0f8-3f8f-4a97-a6dc-575dc5d191c9:
        name: "Basic authentication"
        type: "basic"
        describedBy:
          queryParameters:
            "6a52d7aa-912d-4639-b5a0-5d4c30afd001":
              type: "#/components/queryParameters/9cd9a28d-a54b-480a-98ed-a3f1de6eb6f8"
    resources:
      e60fad66-1f2a-4fb5-9a0b-b7e25128474b:
        path: "/get"
        operations:
          "15fd8966-91bd-4e08-b86f-aae390fe1c5c":
            name: "GET"
            method: "GET"
            queryParameters:
              c2f941fd-5ab0-41fb-8a2c-37ec940f5108:
                type: "#/components/queryParameters/9cd9a28d-a54b-480a-98ed-a3f1de6eb6f8"
            responses:
              b1cf411b-88c2-4028-a5e6-4bd9606d6168:
                status: "200"
  components:
    queryParameters:
      "9cd9a28d-a54b-480a-98ed-a3f1de6eb6f8":
        name: "queryParameter"
        componentName: "queryParameter"
        type: "STRING"
        description: "descr**iption**"
        required: false
---