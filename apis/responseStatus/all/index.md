---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Response Status"
    version: "all"
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
              c5c5adf6-a14a-4b9c-b44e-8cd5a704aeef:
                status: "100"
                description: "another __100__ response"
              f644b17e-8109-4454-9cb4-a379c7972f54:
                status: "101"
                description: "101 switching protocols"
              "35a0ba95-e40e-429b-bd79-1ad7eb7cbf20":
                status: "102"
                description: "102 processing"
              "7a8fef19-fd7b-41c6-805a-21bc4df09cd2":
                status: "1XX"
                description: "This is a **markdown** description"
              "6cc81cda-41f5-45a1-b0e8-0cdaf18a850c":
                status: "200"
                description: "200 ok"
              "67900879-8514-4e3d-a52d-18818968a8c9":
                status: "201"
                description: "201 created"
              ad74b234-27cf-4d3e-849b-1154894c785b:
                status: "202"
                description: "202 accepted"
              e306180f-dfd1-40c8-b733-a593ddec864c:
                status: "203"
                description: "203 non aut"
              "399be7cc-2550-4364-b88d-cc96f7d33d63":
                status: "204"
              cb9d1b82-265d-4230-9ac0-88c5864a4f0f:
                status: "205"
              "4b77e223-de25-4cd1-873b-cd6a58b44777":
                status: "206"
              "3105f9a2-4283-408b-af68-939b52731e0f":
                status: "207"
              "5987e74e-0453-4919-97ec-63945059aa6d":
                status: "208"
              "2de21d47-af09-42b0-a903-3f380eca06a9":
                status: "226"
              ea4d0216-0ed0-429f-b3ad-c92bb3b60449:
                status: "2XX"
                description: "2xx default"
              d223c60a-abed-4b71-9e08-dd5a60d5660c:
                status: "300"
              "442c1b8d-6c26-4339-8bed-fec00a75cb31":
                status: "301"
              "208e9438-97ed-48bf-8b1c-d7696a386efa":
                status: "302"
              d95ab722-acc3-4a76-9c42-7938d9ec8e17:
                status: "303"
              "5cf63bd2-ae6f-4210-addb-7e59759bd239":
                status: "304"
              "7c7480ca-23ed-4653-a803-0ae02415a09b":
                status: "305"
              "77db0055-2d4e-47ae-a6d6-6eb5a7b9d5ff":
                status: "307"
              "0e21fb52-721d-47cc-a62a-8d9c97662f44":
                status: "308"
              "5b8b8af1-ed93-4ada-ae6e-6413a6439d0e":
                status: "3XX"
              "32f5c8b1-8b7d-467c-900e-55ee1bef3988":
                status: "400"
              "4e2b289a-d3a7-429b-a48a-e9334433229d":
                status: "401"
              "1f52f6c6-f1ff-4a91-9863-f6e22f9ef573":
                status: "402"
              "5a53c7f6-d43a-4d39-b37e-096e2724d174":
                status: "403"
              "1f491a5f-c74e-4e30-9eca-cd8dc2338eaf":
                status: "404"
              "6cde88de-5df3-41cf-8950-68c2b70fa0d1":
                status: "405"
              "802c3346-c854-416e-950c-ad0a0b78bd01":
                status: "406"
              "3d89874d-092d-4466-83dc-1fe8217b0cb0":
                status: "407"
              "6f28c9ff-e675-4979-ac75-063e5c3f090a":
                status: "408"
              "40cdad68-2c30-4f65-90a7-84a5fcbbd837":
                status: "409"
              "068e4661-4b13-4271-b7b9-bc7681dd103f":
                status: "410"
              "2dfa6181-dc1c-4e66-bfdd-4917ea7ffdf3":
                status: "411"
              "6da08a09-c20d-465f-94da-9c11b988d206":
                status: "412"
              "30d75b3d-8c72-4c68-806f-d9796bb6b838":
                status: "413"
              "8a7da352-e3dc-4441-94a3-dc53493ca3bc":
                status: "414"
              "08314818-6538-4bec-85a6-d5c2d67f5607":
                status: "415"
              c98c85f2-edce-484c-99b9-1fe93479b27b:
                status: "416"
              e69f9fc6-58bb-4a8b-8ca7-7d98617dc6e5:
                status: "417"
              e89c5f3e-a71f-41fb-93a2-06245f674212:
                status: "421"
              "7aa9a82b-7239-4570-91bb-54b453d16cf8":
                status: "422"
              "3d7207f9-55f3-49df-9f34-03776b3b2e71":
                status: "423"
              d2ce3f0d-6b49-43cc-931b-c99d9647e07f:
                status: "424"
              "127b55d4-8521-44fb-9b86-b29b14aec162":
                status: "426"
              "38b2808b-8641-49dd-af4a-0b49e7cb52d8":
                status: "428"
              b2e19ffc-eaf8-4382-be56-5fc212b92829:
                status: "429"
              "65f123ae-6b26-4991-a3b0-8fe5b663672e":
                status: "431"
              cb71b746-ce72-4fce-ba8d-b3eddf4b5e5e:
                status: "4XX"
              "479ffa41-f92a-4680-b39a-e78a86fcb0a3":
                status: "500"
              "991f8323-5ac7-4557-841d-164a90ff3815":
                status: "501"
              d96cc348-b2a9-4a73-917f-b9f10b5e4e54:
                status: "502"
              "07510ec0-fe61-4bc4-8d03-3b71b5488d0c":
                status: "503"
              "78918eae-b84e-4875-be62-73bd65daf0db":
                status: "504"
              "28e0b41f-6904-4bb8-82f3-c6f6ca7261bd":
                status: "505"
              ff24f68b-8d2e-4f42-a27e-94a5b77f6103:
                status: "506"
              "04639ab9-928c-4b1f-8f89-df6ce8b3e7f0":
                status: "507"
              "342d0107-18de-492f-870e-d2347980965b":
                status: "508"
              "01abe6f0-eaaa-4a6f-8c59-27e8a509fc31":
                status: "510"
              "2509dfed-5ceb-46c7-9839-0c7ba1b56bab":
                status: "511"
              b35023c2-79ce-4c45-8ec6-94a8ecdb7c26:
                status: "5XX"
---