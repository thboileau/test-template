---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Contacts API"
    version: "2.0.0"
    description: "An API for keeping track of your contacts and the companies they work for."
    license: {}
    contact: {}
    termsOfService: ""
  contract:
    mediaTypes:
    - "application/json"
    sections:
      abbcf701-23f3-4dd5-a621-c58c430d5009:
        name: "General"
        elementOrder:
        - "#/contract/texts/4ef293ec-3e4b-4da1-8ec8-168c55bd7995"
        - "#/contract/texts/225609e7-da6f-4f6e-a5ad-c0bcb5053ef0"
        - "#/contract/types/03c2075b-a275-4da1-8f3e-c767f35ae11f"
      c65b3795-f238-4603-b430-f8e1386571ce:
        name: "Contacts"
        description: ""
        elementOrder:
        - "#/contract/resources/7bf657a7-ef1d-454f-be6e-6239383fca8b"
        - "#/contract/resources/207e7b3c-bbf1-4965-9a06-3dccf1556de9"
        - "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
      ceddef06-6977-4691-8073-7cddedcae886:
        name: "Companies"
        elementOrder:
        - "#/contract/resources/2f595a85-9f54-428b-b5de-17c45157b3f6"
        - "#/contract/resources/ddd465bc-6459-4fdc-97bd-f2dac4713624"
        - "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
    securitySchemes:
      "6f99c8c4-43e2-46be-aabd-eff0ae8b3b39":
        name: "HTTP_BASIC"
        type: "basic"
        description: "All GET methods are public, meaning that *you can read all the data*. Write operations require authentication and therefore are forbidden to the general public."
        describedBy: {}
    resources:
      "2f595a85-9f54-428b-b5de-17c45157b3f6":
        path: "/companies/"
        section: "#/contract/sections/ceddef06-6977-4691-8073-7cddedcae886"
        operations:
          a9e59487-b17c-4d79-ad70-0ce33595f946:
            name: "Load the list of Companies"
            method: "GET"
            description: "Loads a list of Company"
            tags:
            - "Companies"
            queryParameters:
              "7c3dc76c-f042-475c-8266-9eaf3783cf1f":
                type: "#/components/queryParameters/7b908b8d-93a2-4297-97da-169ecca5c2a9"
              ad2e241c-a59b-428e-a864-024cf2029f54:
                type: "#/components/queryParameters/2bc9e50d-4eb7-41d5-ae8f-87b6a7539b01"
              d5abb36d-58e7-41ad-b32f-2e0dece04dc6:
                type: "#/components/queryParameters/cd1614da-2b67-49f2-9eb0-a1ff1be9fc83"
              "272f3171-9517-490e-afd1-54c76e12e1e8":
                name: "name"
                type: "STRING"
                description: "Allows to filter the collection of results by the value of field `name`"
                examples:
                  c59e957b-5eff-4b5a-ada7-e8cd57bf3f9a:
                    value: "George Street Brewery"
            responses:
              dc5cda68-74d5-4868-9001-b8e5b24f8bfe:
                status: "200"
                description: "Status 200"
                headers:
                  b94d04bb-88b5-452c-8448-c435557708a3:
                    type: "#/components/headers/c3a02db7-4f51-4fe6-8bc9-e9cf75e77baa"
                  "6aad5bd8-b39d-494f-9983-e011dd107b80":
                    type: "#/components/headers/99c89a5c-6272-4fc0-8c26-5bcfe6cb4db1"
                  "078272af-4321-45c9-8dee-b3e42b9c4016":
                    type: "#/components/headers/27a98905-e12f-41eb-85da-96f0cda8766c"
                  ae424a33-00d5-4b9c-ad1e-4f2b51a7fcd1:
                    type: "#/components/headers/dc5fc627-8418-4af2-a1cc-c69e218ea3b0"
                bodies:
                  "710c0c48-0aa0-4fb7-ab57-48d6dd224cec":
                    type: "ARRAY"
                    items:
                      type: "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
                    examples:
                      "8ce05edb-7b33-4e09-b4bf-41e06fc567e3":
                        value: "[{\n  \"id\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\",\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}]"
              "3f473d7b-19ee-4ae1-ae24-e686ee6790b4":
                status: "400"
                componentName: "Status 400"
                reference: "#/components/responses/a253f767-3e1f-4320-804d-190cb63fa575"
          "18368a67-cab0-44a3-aa3d-53e082df8bc2":
            name: "Create a new Company"
            method: "POST"
            description: "Adds a Company"
            tags:
            - "Companies"
            securedBy:
            - scheme: "#/contract/securitySchemes/6f99c8c4-43e2-46be-aabd-eff0ae8b3b39"
              scopes: []
            bodies:
              c2767eaa-f66d-4a30-8b5d-855fdbea1574:
                type: "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
                examples:
                  "7bd20b6a-2908-469a-bb94-67c940d439d5":
                    value: "{\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}"
            responses:
              e2460970-32ae-40a3-ae76-d8f6ec0398f8:
                status: "200"
                description: "Status 200"
                bodies:
                  ab3f35d3-fa00-47f5-8120-d670719ab280:
                    type: "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
                    examples:
                      "85568b72-1d09-4437-8034-2b32f57b93c0":
                        value: "{\n  \"id\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\",\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}"
      ddd465bc-6459-4fdc-97bd-f2dac4713624:
        path: "/companies/{companyid}"
        section: "#/contract/sections/ceddef06-6977-4691-8073-7cddedcae886"
        pathVariables:
          b1d6e075-dea7-4f99-b9b5-15c1b148f476:
            type: "#/components/pathVariables/1a42a1d5-bd58-4dec-96b7-508ca9ad8a80"
        operations:
          "1edadff0-f907-4f2c-af10-75f278f31037":
            name: "Load a Company"
            method: "GET"
            description: "Loads a Company"
            tags:
            - "Companies"
            responses:
              "102dbfbb-09f8-437e-a81a-d0f009932ecb":
                status: "200"
                description: "Status 200"
                bodies:
                  f496c985-10b1-4760-ba21-67f4c7e424d3:
                    type: "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
                    examples:
                      "4b7e605d-3a12-4a47-8ea0-135d667db07f":
                        value: "{\n  \"id\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\",\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}"
              "7a17a4ab-3f72-4779-98ae-a1e7f288961d":
                status: "400"
                componentName: "Status 400"
                reference: "#/components/responses/a253f767-3e1f-4320-804d-190cb63fa575"
          "5607e862-2cbd-4217-b187-b4e0229d0263":
            name: "Update a Company"
            method: "PUT"
            description: "Updates a Company"
            tags:
            - "Companies"
            securedBy:
            - scheme: "#/contract/securitySchemes/6f99c8c4-43e2-46be-aabd-eff0ae8b3b39"
              scopes: []
            bodies:
              aefc35a5-6d36-4650-b04f-f90136b05087:
                type: "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
                examples:
                  "70a72d0b-5aaa-445a-b663-4f42fde4cf2f":
                    value: "{\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}"
            responses:
              "76e4cea2-20c7-4703-aa12-557ef7d27856":
                status: "200"
                description: "Status 200"
                bodies:
                  d57188b4-94c3-4ea8-936e-5226177c2a80:
                    type: "#/contract/types/fbf7a9cb-616d-4094-980c-a505bd87e257"
                    examples:
                      "105c48e8-a405-4c96-ab30-bc72b4653ece":
                        value: "{\n  \"id\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\",\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}"
          e2ff98fb-7376-40f0-8602-0b75ca7b72c2:
            name: "Delete a Company"
            method: "DELETE"
            description: "Deletes a Company"
            tags:
            - "Companies"
            securedBy:
            - scheme: "#/contract/securitySchemes/6f99c8c4-43e2-46be-aabd-eff0ae8b3b39"
              scopes: []
            responses:
              "74d2888e-ebae-4578-8662-2d8ad53e15b1":
                status: "200"
                description: "Status 200"
      "7bf657a7-ef1d-454f-be6e-6239383fca8b":
        path: "/contacts/"
        section: "#/contract/sections/c65b3795-f238-4603-b430-f8e1386571ce"
        operations:
          "47432654-18bb-4f92-898c-40a278dac659":
            name: "Get the list of Contacts"
            method: "GET"
            description: "Loads a list of Contact"
            tags:
            - "Contacts"
            queryParameters:
              "37b7d9ec-f166-4b6d-a835-aa07a4733c48":
                type: "#/components/queryParameters/7b908b8d-93a2-4297-97da-169ecca5c2a9"
              "1b973c48-b943-4ddd-9f11-6af8774895ac":
                type: "#/components/queryParameters/2bc9e50d-4eb7-41d5-ae8f-87b6a7539b01"
              "5493eea1-7960-4534-b92c-ba680fda9fc2":
                type: "#/components/queryParameters/cd1614da-2b67-49f2-9eb0-a1ff1be9fc83"
              "86e6bc04-f3b2-47c2-bd28-ab0ece58fa8b":
                name: "firstName"
                type: "STRING"
                description: "Allows to filter the collection of results by the value of field `firstName`"
                examples:
                  b5ec938a-685f-4ea0-a762-5fda0fbe8af4:
                    value: "John"
              c364daea-c314-479e-9b24-a63f57c993fb:
                name: "lastName"
                type: "STRING"
                description: "Allows to filter the collection of results by the value of field `lastName`"
                examples:
                  "27b55873-a53d-40f1-960d-498152dee59d":
                    value: "Doe"
              "8d6a4041-47cf-4f89-8551-f71277be3c85":
                name: "active"
                type: "BOOLEAN"
                description: "Allows to filter the collection of results by the value of field `active`"
                examples:
                  "47a15201-872d-4dc4-b31d-283fac838f6d":
                    value: true
                  "2d95ef61-02c6-4a2c-bae1-abc30592d872":
                    value: false
              "565952df-dcb3-42c5-ae44-13ee35b26a56":
                name: "company"
                type: "STRING"
                description: "Allows to filter the collection of results by the value of field `company`"
                examples:
                  "1889bf42-0661-4e40-a9c4-b77ee5c4216f":
                    value: "0e8c9fb0-ad98-11e6-bf2e-47644ada7c0f"
            responses:
              "9ec858de-afc4-41d1-8e69-09ea55f12300":
                status: "200"
                description: "Status 200"
                headers:
                  "7cab89e7-a966-4d84-9fb6-8ec359392b2c":
                    type: "#/components/headers/c3a02db7-4f51-4fe6-8bc9-e9cf75e77baa"
                  "94c422a0-8617-4800-a6a3-90deb9e4cd5f":
                    type: "#/components/headers/99c89a5c-6272-4fc0-8c26-5bcfe6cb4db1"
                  "6e2cfa4d-4a53-4bc6-b9a1-72b64da325a2":
                    type: "#/components/headers/27a98905-e12f-41eb-85da-96f0cda8766c"
                  "4348c41c-b73f-47c8-8d69-02468707bf14":
                    type: "#/components/headers/dc5fc627-8418-4af2-a1cc-c69e218ea3b0"
                bodies:
                  "355a72ba-a888-424e-838e-736da5cf7582":
                    type: "ARRAY"
                    items:
                      type: "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
                    examples:
                      d129ad7b-d14e-42d8-a1d8-a968291dac43:
                        value: "[{\n  \"id\": \"0e8dd830-ad98-11e6-bf2e-47644ada7c0f\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}]"
              c3ddb619-855f-4d34-89a1-7aa08a2736c8:
                status: "400"
                componentName: "Status 400"
                reference: "#/components/responses/a253f767-3e1f-4320-804d-190cb63fa575"
          "8ac26ba3-2f1b-4f16-b6fe-12df1ea5b2da":
            name: "Create a Contact"
            method: "POST"
            description: "Adds a Contact"
            tags:
            - "Contacts"
            securedBy:
            - scheme: "#/contract/securitySchemes/6f99c8c4-43e2-46be-aabd-eff0ae8b3b39"
              scopes: []
            bodies:
              "708e3049-44f6-400a-9243-6384625be6f8":
                type: "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
                examples:
                  ce1894ec-1d51-41e6-a853-c5aa1bfa00e8:
                    value: "{\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}"
            responses:
              a38112a3-b928-4587-a9d9-022ad85aca8b:
                status: "200"
                description: "Status 200"
                bodies:
                  "1c3418d4-650b-4a59-83d2-85090913301d":
                    type: "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
                    examples:
                      "2965a5a4-3f9d-43a7-aa88-8c558381a5f7":
                        value: "{\n  \"id\": \"0e8dd830-ad98-11e6-bf2e-47644ada7c0f\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}"
      "207e7b3c-bbf1-4965-9a06-3dccf1556de9":
        path: "/contacts/{contactid}"
        section: "#/contract/sections/c65b3795-f238-4603-b430-f8e1386571ce"
        pathVariables:
          "567e6cd1-05eb-4c76-ba14-9145c1c30cc9":
            type: "#/components/pathVariables/33fe77b9-15d5-461e-ae4c-3e6c790aeba6"
        operations:
          "8e7de571-6d92-478b-93ce-44b29fa5a7a4":
            name: "Load a Contact"
            method: "GET"
            description: "Loads a Contact"
            tags:
            - "Contacts"
            responses:
              "9d6bd504-1539-40ab-985a-357bac8c55a5":
                status: "200"
                description: "Status 200"
                bodies:
                  f8509446-f40f-4046-9910-8ddf32fb9657:
                    type: "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
                    examples:
                      e4bf50ca-1228-44c1-9bce-bbe17599513f:
                        value: "{\n  \"id\": \"0e8dd830-ad98-11e6-bf2e-47644ada7c0f\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}"
              "413c622d-b917-443f-a68f-42d764f6928d":
                status: "400"
                componentName: "Status 400"
                reference: "#/components/responses/a253f767-3e1f-4320-804d-190cb63fa575"
          "59b53a0a-1325-45a4-a161-f6620f1298dd":
            name: "Update a Contact"
            method: "PUT"
            description: "Updates a Contact"
            tags:
            - "Contacts"
            securedBy:
            - scheme: "#/contract/securitySchemes/6f99c8c4-43e2-46be-aabd-eff0ae8b3b39"
              scopes: []
            bodies:
              "6c9dbf8e-71e6-4048-adaf-b023807be6d6":
                type: "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
                examples:
                  "774a2c68-d4b5-4f57-8953-e597187adf19":
                    value: "{\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}"
            responses:
              "6c57a93a-973f-4fb2-bcb5-a09ab9c538f7":
                status: "200"
                description: "Status 200"
                bodies:
                  "1bbe646f-604f-4bb3-bd31-5055210a1884":
                    type: "#/contract/types/4cb6b425-67cb-45e9-88f3-0ac4e23ea94c"
                    examples:
                      "0c1a7547-472b-45a3-ae93-9c7624b4e2f2":
                        value: "{\n  \"id\": \"0e8dd830-ad98-11e6-bf2e-47644ada7c0f\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}"
          f0e577a5-3840-4c65-9d6b-4dcc859e46ad:
            name: "Delete a Contact"
            method: "DELETE"
            description: "Deletes a Contact"
            tags:
            - "Contacts"
            securedBy:
            - scheme: "#/contract/securitySchemes/6f99c8c4-43e2-46be-aabd-eff0ae8b3b39"
              scopes: []
            responses:
              "3504c92f-3f74-4600-bb67-9fc475de63ae":
                status: "200"
                description: "Status 200"
    types:
      fbf7a9cb-616d-4094-980c-a505bd87e257:
        name: "Company"
        type: "OBJECT"
        description: "The dataType of a Company"
        section: "#/contract/sections/ceddef06-6977-4691-8073-7cddedcae886"
        properties:
          b1423c5e-a03a-4e71-a901-d498caaed8dd:
            name: "id"
            type: "STRING"
            description: "Auto-generated primary key field"
            required: true
          "5f3c5f64-a6db-4a85-92ad-d4fef7476717":
            name: "name"
            type: "STRING"
            required: true
          c2d83130-b9ef-40a1-8e5b-4b55f443d0ba:
            name: "tags"
            type: "ARRAY"
            description: "This is a description"
            minItems: 10
            maxItems: 20
            items:
              type: "STRING"
              pattern: "[a-zA-Z]+"
            examples:
              "7a625240-4de8-4ad2-8c54-ed65f6e61882":
                value: "[\"brewery\", \"beer\", \"ale\"]"
          d7bb0679-bedd-4ca2-90f0-a5f8dd08cbf0:
            name: "address"
            type: "OBJECT"
            required: true
            properties:
              e48d7056-fd43-42fd-a0e0-3b4e37b1b899:
                name: "street"
                type: "STRING"
                required: true
              e368f69d-341d-40ed-9fa4-2f8878bd5fd1:
                name: "city"
                type: "STRING"
                required: true
              "52d9fa4e-b5d8-47b3-a701-29ef4c941d7a":
                name: "zipcode"
                type: "STRING"
                required: true
                pattern: "[0-9]*"
        examples:
          a33b229f-e73b-49f8-b1ec-2d179da6cf85:
            value: "{\n  \"id\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\",\n  \"name\": \"George Street Brewery\",\n  \"address\":{\n    \"street\": \"2 place de la Defense\",\n    \"zipcode\": \"92053\",\n    \"city\": \"Paris\"\n  },\n  \"tags\":[\n    \"brewery\",\n    \"beer\",\n    \"ale\"\n  ]\n}"
      "4cb6b425-67cb-45e9-88f3-0ac4e23ea94c":
        name: "Contact"
        type: "OBJECT"
        description: "The dataType of a Contact"
        section: "#/contract/sections/c65b3795-f238-4603-b430-f8e1386571ce"
        properties:
          ec42d03c-ed04-4b86-9f08-fbfebcd8d852:
            name: "id"
            type: "STRING"
            description: "Auto-generated primary key field"
            required: true
            examples:
              "834c09f7-2c8b-466c-8a9a-02f799c0c26e":
                value: "0e8ffb10-ad98-11e6-bf2e-47644ada7c0f"
          "79e52d3e-bbed-420f-8485-9aab98e5ae14":
            name: "firstName"
            type: "STRING"
            required: true
            examples:
              ef3e415d-7ec4-4849-8d10-e4dc34d8b670:
                value: "Kurt"
          "430c0c30-55d2-401d-900d-7e86d455fb33":
            name: "lastName"
            type: "STRING"
            required: true
            examples:
              aefd7a48-f8eb-4fba-93cb-b80d9fadb6d7:
                value: "Williams"
          b8d0c830-0765-492f-9e5a-f33fdda6164b:
            name: "birthday"
            type: "INTEGER"
            format: "INT64"
            description: "Birthday as unix timestamp (in ms)"
            examples:
              "74359983-0377-477c-8bcc-5845b1dba4b8":
                value: 173664000000
              "5332f586-81ff-4a82-9faa-65c95f305e20":
                value: 383270400000
          "03f0c429-187d-45a6-b32d-79d9688fe288":
            name: "active"
            type: "BOOLEAN"
            default: true
          f2b73c5d-34f8-4ac7-9aac-35862de530c2:
            name: "rank"
            type: "INTEGER"
            format: "INT32"
            minimum: 1
            examples:
              d2431baf-fee5-4943-93db-4a25eaa52be4:
                value: 1
              "06997352-1adb-4cd2-b95f-6a02f826c4be":
                value: 2
              "67230d6f-af7b-4a6f-b749-3de73b98e7fa":
                value: 3
          abf19f94-e117-4148-8f9c-cf295b177622:
            name: "company"
            type: "STRING"
            description: "This property is a reference to a Company"
            examples:
              "6692c5b8-50d7-4a4d-a882-36d698f495a1":
                value: "0e8c9fb0-ad98-11e6-bf2e-47644ada7c0f"
        examples:
          cb804e14-382f-479b-ad56-14f44eeaa198:
            value: "{\n  \"id\": \"0e8dd830-ad98-11e6-bf2e-47644ada7c0f\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"birthday\": 152755200000,\n  \"active\": true,\n  \"rank\": 1,\n  \"company\": \"0e8cedd0-ad98-11e6-bf2e-47644ada7c0f\"\n}"
      "03c2075b-a275-4da1-8f3e-c767f35ae11f":
        name: "Error"
        type: "OBJECT"
        description: "This general error structure is used throughout this API."
        section: "#/contract/sections/abbcf701-23f3-4dd5-a621-c58c430d5009"
        properties:
          e559d1f2-20f4-403e-8e3a-aa0276dd3104:
            name: "code"
            type: "INTEGER"
            required: true
            minimum: 400
            maximum: 599
          e9f8f20d-fab3-4934-a29d-5d723fb8c6e4:
            name: "description"
            type: "STRING"
            examples:
              d045e639-31c9-4424-a707-64e53830666c:
                value: "Bad query parameter [$size]: Invalid integer value [abc]"
              f1b2dd9b-bf44-46a3-ac48-d059099a74ca:
                value: "The server understood the request, but is refusing to fulfill it"
          "872ea39a-7c63-4017-83e5-e632c03e4143":
            name: "reasonPhrase"
            type: "STRING"
            examples:
              "7ab5b4c3-5173-4cf2-9c8a-b25a525effd2":
                value: "Bad Request"
              "440c531c-76ba-4e7a-bb47-ba215001d221":
                value: "Forbidden"
        examples:
          "24593c12-e24b-4300-854a-3feda263d148":
            value: "{\n  \"code\": 400,\n  \"description\": \"Bad query parameter [$size]: Invalid integer value [abc]\",\n  \"reasonPhrase\": \"Bad Request\"\n}"
    texts:
      "4ef293ec-3e4b-4da1-8ec8-168c55bd7995":
        title: "Authentication"
        content: "This API is secured using Basic Authentication.\n\nAll **read operations are open** and don't require authentication. However, all **write operations require authentication**."
        section: "#/contract/sections/abbcf701-23f3-4dd5-a621-c58c430d5009"
      "225609e7-da6f-4f6e-a5ad-c0bcb5053ef0":
        title: "Error handling"
        content: "This API uses standard HTTP status codes to indicate the status of a response.\n\nThere are two main categories of error responses. Each have a different response payload structure.\n\n* Simple errors\n* Detailed errors\n\n\n# Simple errors\n\n| Name | Code | Description |\n| -------- | -------- | -------- |\n| Bad request     | 400     | The request was unacceptable     |\n| Unauthorized     | 401     | The request has not been applied because it lacks valid authentication credentials for the target resource.     |\n| Forbidden     | 403     | The server understood the request, but is refusing to fulfill it     |\n| Not Found     | 404     | The server has not found anything matching the request URI     |\n| Not acceptable     | 406     | The server is unable to return a response in the format that was requested by the client     |\n| Unsupported Media Type     | 415     | The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method     |\n| Too many requests     | 429     | Too many requests hit the API too quickly     |\n| Server error     | 500     | A technical error occured  |\n\n\n\n\n\n\n# Detailed errors\n| Name | Code | Description |\n| -------- | -------- | -------- |\n| Unprocessable entity     | 422     | The server understands the content type of the request entity, and the syntax of the request entity is correct, but was unable to process the contained instructions.     |\n\n\n\n\n"
        section: "#/contract/sections/abbcf701-23f3-4dd5-a621-c58c430d5009"
  components:
    pathVariables:
      "33fe77b9-15d5-461e-ae4c-3e6c790aeba6":
        name: "contactid"
        componentName: "contactid"
        type: "STRING"
        description: "Identifier of the Contact"
        required: true
        examples:
          "8f449805-c785-4a09-974a-e2049be52460":
            value: "0e8dd830-ad98-11e6-bf2e-47644ada7c0f"
      "1a42a1d5-bd58-4dec-96b7-508ca9ad8a80":
        name: "companyid"
        componentName: "companyid"
        type: "STRING"
        description: "Identifier of the Company"
        required: true
        examples:
          d1dec8f7-f788-4c92-8a88-b76fa3258cd1:
            value: "0e8c9fb0-ad98-11e6-bf2e-47644ada7c0f"
    queryParameters:
      "7b908b8d-93a2-4297-97da-169ecca5c2a9":
        name: "$size"
        componentName: "$size"
        type: "INTEGER"
        description: "Size of the page to retrieve."
        examples:
          e8cb78d0-8904-4b32-9f35-f60b20187b96:
            value: 10
      "2bc9e50d-4eb7-41d5-ae8f-87b6a7539b01":
        name: "$page"
        componentName: "$page"
        type: "INTEGER"
        description: "Number of the page to retrieve."
        examples:
          "0891f3a3-60f2-4885-9eeb-979305039f8f":
            value: 1
          "31fac6a9-82ea-48cf-bb86-caf13b2fd2ec":
            value: 42
      cd1614da-2b67-49f2-9eb0-a1ff1be9fc83:
        name: "$sort"
        componentName: "$sort"
        type: "STRING"
        description: "Order in which to retrieve the results. Multiple sort criteria can be passed."
        examples:
          "6521a038-2616-47e8-a5e2-bb8d7437db95":
            value: "birthday DESC"
          eb6b90b1-9918-4c1f-9d70-ad01291bb041:
            value: "birthday ASC,rank DESC"
    headers:
      c3a02db7-4f51-4fe6-8bc9-e9cf75e77baa:
        name: "X-Page-Count"
        componentName: "X-Page-Count"
        type: "INTEGER"
        examples:
          "447a9d08-107d-43f3-93cc-60ed31b8b982":
            value: 1
      "99c89a5c-6272-4fc0-8c26-5bcfe6cb4db1":
        name: "X-Page-Number"
        componentName: "X-Page-Number"
        type: "INTEGER"
        examples:
          "519b16fe-4a13-4979-803c-1b04655ec301":
            value: 1
      "27a98905-e12f-41eb-85da-96f0cda8766c":
        name: "X-Page-Size"
        componentName: "X-Page-Size"
        type: "INTEGER"
        examples:
          e6871e1b-c2c7-4389-84c4-a791610b690c:
            value: 25
      dc5fc627-8418-4af2-a1cc-c69e218ea3b0:
        name: "X-Total-Count"
        componentName: "X-Total-Count"
        type: "INTEGER"
        examples:
          "2be8bf69-f28b-4914-b4c7-b071df97686c":
            value: 2
    responses:
      a253f767-3e1f-4320-804d-190cb63fa575:
        componentName: "Status 400"
        bodies:
          ef9710c8-7c63-4a2d-9780-48895864f055:
            type: "#/contract/types/03c2075b-a275-4da1-8f3e-c767f35ae11f"
            mediaTypes:
            - "application/json"
---
