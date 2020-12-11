---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "component"
    version: "headers"
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
          headers:
            "9aa9edd0-1b23-46bc-ab8d-5e3d064d7757":
              type: "#/components/headers/cab47b43-f02a-41f9-aea8-75aafe4a3141"
    resources:
      e60fad66-1f2a-4fb5-9a0b-b7e25128474b:
        path: "/get"
        operations:
          "15fd8966-91bd-4e08-b86f-aae390fe1c5c":
            name: "GET"
            method: "GET"
            headers:
              "68fa6478-d500-4a3b-84e1-9bfeb858b615":
                type: "#/components/headers/cab47b43-f02a-41f9-aea8-75aafe4a3141"
            responses:
              b1cf411b-88c2-4028-a5e6-4bd9606d6168:
                status: "200"
                headers:
                  e2c8c11d-2366-4798-a201-79bf838b58d6:
                    type: "#/components/headers/cab47b43-f02a-41f9-aea8-75aafe4a3141"
  components:
    headers:
      cab47b43-f02a-41f9-aea8-75aafe4a3141:
        name: "header"
        componentName: "header"
        type: "STRING"
        description: "description"
        required: false
---