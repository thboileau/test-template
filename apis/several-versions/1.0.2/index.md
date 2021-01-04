---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Several versions"
    version: "1.0.2"
    description: "Last version should be 1.12, 1.0.12 should the last 1.0.* version"
  contract:
    mediaTypes:
    - "application/json"
    unsortedElementOrder:
    - "#/contract/resources/f9feec7b-02bc-40e8-95c0-0bbe6e26b7e7"
    - "#/contract/types/8b97ae58-2493-462b-9f6c-863b724b8d09"
    - "#/contract/types/4043a407-cfce-4630-9cb2-413518ad3daa"
    - "#/contract/types/85da4936-0e88-4408-b5c3-b12cf412b2eb"
    resources:
      f9feec7b-02bc-40e8-95c0-0bbe6e26b7e7:
        path: "/create"
        operations:
          "3cf9e78a-c8af-4b61-898e-892013eac1b2":
            name: "allof"
            method: "POST"
            tags:
            - "contacts"
            queryParameters:
              c9829a63-7c9f-4098-9aa0-f4dc82e4fc8c:
                name: "qsqsqs"
                type: "STRING"
                description: "Allows to filter the collections of result by the value of field name"
                examples:
                  eb842225-64d4-48a4-89b9-46a6a10d18d6:
                    value: "George Street Brewery"
            bodies:
              "647f5d6a-2070-42ff-ae4e-288a4c38244b":
                type: "ALLOF"
                allOf:
                - "#/contract/types/8b97ae58-2493-462b-9f6c-863b724b8d09"
                - "#/contract/types/85da4936-0e88-4408-b5c3-b12cf412b2eb"
                - "#/contract/types/4043a407-cfce-4630-9cb2-413518ad3daa"
                properties:
                  b40fe381-0393-46eb-9be2-bc0a49769a46:
                    name: "anotherp1"
                    type: "STRING"
                    required: false
                  "40d2c00e-f8cc-4d3d-bc7b-c028181c2fd2":
                    name: "anotherp2"
                    type: "STRING"
                    required: false
            responses:
              "0b8be310-7c45-4d8f-8640-2c7f5d5c3d80":
                status: "200"
                bodies:
                  efe38ca8-b282-4e48-8db1-fa8eb956cc23:
                    type: "ALLOF"
                    allOf:
                    - "#/contract/types/8b97ae58-2493-462b-9f6c-863b724b8d09"
                    - "#/contract/types/4043a407-cfce-4630-9cb2-413518ad3daa"
                    - "#/contract/types/85da4936-0e88-4408-b5c3-b12cf412b2eb"
                    properties:
                      a243d774-9fd7-4977-adc8-f9d6cf542fc1:
                        name: "anotherp1"
                        type: "STRING"
                        required: false
                      "6f8f3f8e-7ef2-4e68-981b-5fbc72d3ab2a":
                        name: "anotherp2"
                        type: "STRING"
                        required: false
    types:
      "8b97ae58-2493-462b-9f6c-863b724b8d09":
        name: "type1"
        type: "OBJECT"
        properties:
          de0bb169-d7d3-4797-99c1-e15f3ae632d3:
            name: "property1"
            type: "STRING"
            required: false
          "971cd779-f026-42a6-807f-70e0def2c598":
            name: "property2"
            type: "STRING"
            required: false
      "4043a407-cfce-4630-9cb2-413518ad3daa":
        name: "type2arrayofstring"
        type: "ARRAY"
        items:
          type: "STRING"
          required: false
      "85da4936-0e88-4408-b5c3-b12cf412b2eb":
        name: "allof"
        type: "ALLOF"
        allOf:
        - "#/contract/types/8b97ae58-2493-462b-9f6c-863b724b8d09"
        - "#/contract/types/4043a407-cfce-4630-9cb2-413518ad3daa"
        properties:
          "65e7545a-bb8a-45b5-9e6d-472cc618f4e8":
            name: "anotherProperty1"
            type: "STRING"
            required: false
          a92cbfcc-fc9a-4502-b33a-f59d57f54b77:
            name: "anotherProperty2"
            type: "STRING"
            required: false
  components: {}
---
