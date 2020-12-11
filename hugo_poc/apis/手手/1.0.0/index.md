---
type: apis
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "手手手手手"
    version: "1.0.0"
    description: "No description"
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/types/8ccbc0e5-2a64-4234-baf9-e80c4ebcd81e"
    - "#/contract/types/f9a99941-bc0f-4946-b8b9-9120d1516c51"
    - "#/contract/resources/538a48f4-ed47-44aa-99ae-ce06bddabd18"
    resources:
      "538a48f4-ed47-44aa-99ae-ce06bddabd18":
        path: "/list"
        operations:
          dbcab5ed-1ace-4438-bfb0-ce3a6d805a16:
            name: "list"
            method: "POST"
            queryParameters:
              "68807a4d-c128-4609-9f17-4372c2d01b99":
                name: "qp_with_additional_properties"
                type: "#/contract/types/f9a99941-bc0f-4946-b8b9-9120d1516c51"
                required: false
              "7fa75922-c196-4116-b05d-d2b1a8206ef2":
                name: "qp_without_additional_properties"
                type: "#/contract/types/8ccbc0e5-2a64-4234-baf9-e80c4ebcd81e"
                required: false
            headers:
              b2abeaf0-e8bb-407d-920b-5a4d1f14260d:
                name: "h_with_additional_properties"
                type: "#/contract/types/f9a99941-bc0f-4946-b8b9-9120d1516c51"
                required: false
              "7f320882-ff2a-4127-8e64-95ce39433cc0":
                name: "qp_without_additional_properties"
                type: "#/contract/types/8ccbc0e5-2a64-4234-baf9-e80c4ebcd81e"
                required: false
            bodies:
              "277ad71d-3b4e-4ca1-b4f9-a5566380b88f":
                type: "#/contract/types/8ccbc0e5-2a64-4234-baf9-e80c4ebcd81e"
            responses:
              "23b50c39-141d-4968-875f-7bbb2bbd5182":
                status: "200"
                headers:
                  f5291014-9f2b-4d10-b8bb-4ec8992b8ee2:
                    name: "h_without_additional_properties"
                    type: "#/contract/types/8ccbc0e5-2a64-4234-baf9-e80c4ebcd81e"
                    required: false
                  e192e3ce-0e3f-4fb4-94cc-06b1342096d2:
                    name: "qp_with_additional_properties"
                    type: "#/contract/types/f9a99941-bc0f-4946-b8b9-9120d1516c51"
                    required: false
                bodies:
                  "96b7acec-c211-4fb7-b34a-602767b3b1be":
                    type: "#/contract/types/f9a99941-bc0f-4946-b8b9-9120d1516c51"
    types:
      "8ccbc0e5-2a64-4234-baf9-e80c4ebcd81e":
        name: "withoutadditionalproperties"
        type: "OBJECT"
        properties:
          b988d5ae-9e5b-4c47-91c3-53c490a4377d:
            name: "property1"
            type: "STRING"
            required: false
          f3b9a6f7-98b4-4108-abc8-a8463b692bea:
            name: "property2"
            type: "STRING"
            required: false
        additionalProperties: false
      f9a99941-bc0f-4946-b8b9-9120d1516c51:
        name: "withadditionalproperty"
        type: "OBJECT"
        properties:
          aae8da36-bf5d-455c-8465-ea3cc0c863d7:
            name: "property1"
            type: "STRING"
            required: false
          "22b8a856-9163-4228-b68a-d962fb25bee8":
            name: "property2"
            type: "STRING"
            required: false
  components: {}
---