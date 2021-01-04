---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "component"
    version: "response"
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
              bce99b04-4856-49f0-979e-9d868ee36a45:
                status: "2XX"
                reference: "#/components/responses/1c57c677-0396-42ce-879f-246704c6d001"
  components:
    responses:
      "1c57c677-0396-42ce-879f-246704c6d001":
        componentName: "response"
        headers:
          "5d98e4aa-43af-4729-92dc-0985f561abfc":
            name: "response header"
            type: "STRING"
            required: false
        bodies:
          "15b93228-f49b-4cb6-b83b-d03cd8ea7f3d":
            type: "OBJECT"
            mediaTypes:
            - "application/xml"
---