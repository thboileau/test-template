---
layout: "apiDefinition_1.0.0"
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Star Wars API"
    version: "1.0"
    description: "Welcome to the swapi, the Star Wars API! This documentation should help you familiarise yourself with the resources available and how to consume them with HTTP requests. If you're after a native helper library then I suggest you scroll down and check out what's available. Read through the getting started section before you dive in. Most of your problems should be solved just by reading through it.\n"
    license: {}
    contact: {}
  contract:
    baseUrls:
      "75f8f47a-9c86-4e40-9760-8d8626d0e0fd":
        url: "https://swapi.co/api/"
      "3b878215-5a51-438d-9057-126be6aee2d8":
        url: "http://swapi.co/api/"
    sections:
      c554ec4a-fad5-46e3-a56c-eb3a2a94f2c8:
        name: "Films"
        elementOrder:
        - "#/contract/types/36b8ea32-54e0-4704-96d4-8a9f398126e9"
        - "#/contract/resources/6d37b628-f060-4c49-be55-83a3fdfb46d0"
        - "#/contract/resources/486c6ddc-50fe-4230-a60f-532886fe6488"
      "32f07f03-a4dc-4ed8-8356-12753bace9fb":
        name: "People"
        elementOrder:
        - "#/contract/types/cf837d70-9a44-4878-8209-33f7a3e58c8f"
        - "#/contract/resources/b1b8c2a5-ff06-4c77-85d5-6c5b7251441d"
        - "#/contract/resources/24f37d16-1db2-4cb1-b3ba-0c75795ef2c3"
      "78cc974b-771b-4b0e-8bc3-25cb39935868":
        name: "Starships"
        elementOrder:
        - "#/contract/types/e2466c8a-e44d-4ff3-bafd-7384c7678762"
        - "#/contract/resources/c814b4a9-6511-4d55-8e38-29675a09200a"
        - "#/contract/resources/9f2f451b-bb02-4ab6-bd47-0dfaff19c4e5"
    securitySchemes:
      "9514e1ef-0914-4b89-a1c6-53107eb2b1a5":
        name: "petstore_auth"
        type: "oauth2"
        settings:
          authorizationUri: "http://petstore.swagger.io/oauth/dialog"
          authorizationGrants:
          - "implicit"
          scopes:
            d78f82f9-ae8a-4563-bcc1-ff7b4ca27113:
              name: "write:pets"
              description: "modify pets in your account"
            c11c9b73-910e-4564-b439-efc09f6b7333:
              name: "read:pets"
              description: "read your pets"
        describedBy: {}
      "67a34a5c-50e0-4c4b-ab6c-b2a294905bca":
        name: "api_key"
        type: "custom"
        describedBy:
          headers:
            "22941292-c35d-4e98-b515-52f03ce17736":
              name: "api_key"
              type: "STRING"
    resources:
      b1b8c2a5-ff06-4c77-85d5-6c5b7251441d:
        path: "/people"
        section: "#/contract/sections/32f07f03-a4dc-4ed8-8356-12753bace9fb"
        operations:
          b4462926-ac7b-4b31-b4c3-524b4b1868b0:
            name: "Get all the people resources"
            method: "GET"
            operationId: "showPeople"
            tags:
            - "people"
            queryParameters:
              "944801fc-bd7a-42fb-82f7-a2da242faa1d":
                name: "name"
                type: "STRING"
                description: "Search by name"
            responses:
              "503c6f63-dd8f-4a88-bbbb-a9f2ba76c281":
                status: "200"
                description: "Status 200"
                bodies:
                  f0c67703-08ea-4d05-93b3-31dd0fdd499f:
                    type: "ARRAY"
                    items:
                      type: "#/contract/types/cf837d70-9a44-4878-8209-33f7a3e58c8f"
                    mediaTypes:
                    - "*/*"
      "24f37d16-1db2-4cb1-b3ba-0c75795ef2c3":
        path: "/people/{peopleId}"
        section: "#/contract/sections/32f07f03-a4dc-4ed8-8356-12753bace9fb"
        pathVariables:
          b650cf6b-aed5-4fba-854c-711b6c0db47c:
            name: "peopleId"
            type: "INTEGER"
            format: "INT64"
            description: "ID of person to return"
            required: true
        operations:
          "0b3ca94e-55c5-4fbd-b3f0-d9e44cf11a1d":
            name: "Get a specific people resource"
            method: "GET"
            description: "Returns a single people"
            tags:
            - "people"
            securedBy:
            - scheme: "#/contract/securitySchemes/67a34a5c-50e0-4c4b-ab6c-b2a294905bca"
            responses:
              c16fc5f9-7f8e-4cf8-968d-e2f77784c444:
                status: "200"
                description: "successful operation"
                bodies:
                  e1963e97-d897-4367-8a96-653d66fad2af:
                    type: "#/contract/types/cf837d70-9a44-4878-8209-33f7a3e58c8f"
                    mediaTypes:
                    - "application/json"
              c904d577-22e2-421e-9175-7fd41094349d:
                status: "400"
                reference: "#/components/responses/39fc5fee-ef90-402a-a029-410dafa2440a"
              ab27a5a3-4683-4753-8235-33f10d5fff60:
                status: "404"
                reference: "#/components/responses/85408b40-e5bc-48a1-ae19-4b5328b34d38"
      "6d37b628-f060-4c49-be55-83a3fdfb46d0":
        path: "/films"
        section: "#/contract/sections/c554ec4a-fad5-46e3-a56c-eb3a2a94f2c8"
        operations:
          "0d14188e-5ef3-4676-a8e7-b88c478ac7df":
            name: "Get all the film resources"
            method: "GET"
            operationId: "showFilms"
            tags:
            - "films"
            queryParameters:
              "85efe109-c8a7-4b28-bd76-835ff9949e85":
                name: "title"
                type: "STRING"
                description: "Search by title"
            responses:
              "3aac3cdd-84ef-436d-beb4-d1224c5511ad":
                status: "200"
                description: "Status 200"
                bodies:
                  "860a13c5-f2b4-445b-95c7-14800e1ff415":
                    type: "ARRAY"
                    items:
                      type: "#/contract/types/36b8ea32-54e0-4704-96d4-8a9f398126e9"
                    mediaTypes:
                    - "*/*"
      "486c6ddc-50fe-4230-a60f-532886fe6488":
        path: "/films/{filmId}"
        section: "#/contract/sections/c554ec4a-fad5-46e3-a56c-eb3a2a94f2c8"
        pathVariables:
          d59a6489-7ac0-4c98-a319-bb4a1227255a:
            name: "filmId"
            type: "INTEGER"
            format: "INT64"
            description: "ID of film that needs to be fetched"
            required: true
        operations:
          cc901729-d0ae-4ec5-9451-553322413136:
            name: "get a specific film resource"
            method: "GET"
            description: "Returns a specific film"
            operationId: "getFilmById"
            tags:
            - "films"
            responses:
              "9f61296b-58ec-49f2-b5f9-3fa8eb8c3929":
                status: "200"
                description: "successful operation"
                bodies:
                  "2d06f607-3879-4313-8bb5-d1ea7546817b":
                    type: "#/contract/types/36b8ea32-54e0-4704-96d4-8a9f398126e9"
                    mediaTypes:
                    - "application/json"
              "3a1c65bd-632c-412c-8054-1273965ba170":
                status: "400"
                reference: "#/components/responses/39fc5fee-ef90-402a-a029-410dafa2440a"
              b11fdcfc-1b7b-4f06-821d-6a94c106daf1:
                status: "404"
                reference: "#/components/responses/85408b40-e5bc-48a1-ae19-4b5328b34d38"
      c814b4a9-6511-4d55-8e38-29675a09200a:
        path: "/starships"
        section: "#/contract/sections/78cc974b-771b-4b0e-8bc3-25cb39935868"
        operations:
          "440a5e2a-e2d3-42af-9b68-959d433f7483":
            name: "Get all the starship resources"
            method: "GET"
            tags:
            - "starships"
            queryParameters:
              ace05f42-0fde-453c-ba67-81139e0b98c8:
                name: "model"
                type: "STRING"
                description: "Search by model"
              "04d26316-4b35-4046-a669-1fab56be2da4":
                name: "name"
                type: "STRING"
                description: "Search by name"
            bodies:
              "74a59d3b-45cc-4090-8ada-1d007a408887":
                type: "STRING"
                mediaTypes:
                - "*/*"
            responses:
              "3ae2c54c-c76b-4cdd-9229-a198c3ee82c2":
                status: "200"
                description: "Status 200"
                bodies:
                  "71e143cd-2908-45dc-b523-313ebc71f814":
                    type: "ARRAY"
                    items:
                      type: "#/contract/types/e2466c8a-e44d-4ff3-bafd-7384c7678762"
                    mediaTypes:
                    - "*/*"
      "9f2f451b-bb02-4ab6-bd47-0dfaff19c4e5":
        path: "/starships/{starshipId}"
        section: "#/contract/sections/78cc974b-771b-4b0e-8bc3-25cb39935868"
        pathVariables:
          "7e120b6c-7d3c-44ba-b572-549275a181af":
            name: "starshipId"
            type: "INTEGER"
            format: "INT64"
            description: "ID of the ship that needs to be fetched."
            required: true
        operations:
          cec6ea75-a2d7-4f1d-8d78-eaae66b1e758:
            name: "Get a specific starship resource"
            method: "GET"
            operationId: "getUserById"
            tags:
            - "starships"
            responses:
              f8bc5da0-4696-4c75-9077-45a515a6b7fb:
                status: "200"
                description: "successful operation"
                bodies:
                  aa604c4e-598a-4404-8a0d-4f34e5d3bb6e:
                    type: "#/contract/types/e2466c8a-e44d-4ff3-bafd-7384c7678762"
                    mediaTypes:
                    - "application/json"
                    - "application/xml"
              "852d5c93-0e94-483b-96ad-efb36f0e3a9a":
                status: "400"
                reference: "#/components/responses/39fc5fee-ef90-402a-a029-410dafa2440a"
              d6500d59-5802-42de-86e8-bd18faea3e7b:
                status: "404"
                reference: "#/components/responses/85408b40-e5bc-48a1-ae19-4b5328b34d38"
    types:
      cf837d70-9a44-4878-8209-33f7a3e58c8f:
        name: "People"
        type: "OBJECT"
        description: "A People resource is an individual person or character within the Star Wars universe."
        section: "#/contract/sections/32f07f03-a4dc-4ed8-8356-12753bace9fb"
        properties:
          fe0d6b0c-82e1-4d60-a87e-ac7b4bc0b903:
            name: "name"
            type: "STRING"
            description: "The name of this person."
            examples:
              "30ce9f71-b2a1-4867-99a2-6beb2f0a11d9":
                value: "Luke Skywalker"
          "722f8de2-c14f-4908-9090-1f1255119972":
            name: "birth_year"
            type: "STRING"
            description: "The birth year of the person, using the in-universe standard of `BBY` or `ABY` - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope."
            pattern: "\\d+ {BBY|ABY}"
            examples:
              "4dd033f6-86cc-4e9f-9294-e9195f15bd68":
                value: "19 BBY"
          "15923dd8-bc8c-43e3-a9b7-28122f72cc6d":
            name: "eye_color"
            type: "STRING"
            description: "The eye color of this person. Will be \"unknown\" if not known or \"n/a\" if the person does not have an eye."
            examples:
              e988427e-d4f8-415e-b313-07be6cbcc78c:
                value: "Green"
          "86f32e6f-3bd3-4014-b340-1361ed17f96c":
            name: "gender"
            type: "STRING"
            description: "The gender of this person. Either \"Male\", \"Female\" or \"unknown\", \"n/a\" if the person does not have a gender."
            enum:
            - "Male"
            - "Female"
            - "unknown"
            - "n/a"
          "7a539983-8757-4198-9303-d92fc3302a6f":
            name: "hair_color"
            type: "STRING"
            description: "The hair color of this person. Will be \"unknown\" if not known or \"n/a\" if the person does not have hair."
            examples:
              "0afd9353-ad8a-4695-beb7-2a5ca40f7d63":
                value: "blond"
          "10862c0f-5678-4e01-97f9-20f12197c40f":
            name: "height"
            type: "STRING"
            description: "The height of the person in centimeters."
          cd06bea3-1a60-43b6-8a26-ed3f8a27f74f:
            name: "mass"
            type: "STRING"
            description: "The mass of the person in kilograms."
          "6ad48e00-9de2-49ac-b084-efacccf2e079":
            name: "films"
            type: "ARRAY"
            description: "An array of film resource URLs that this person has been in."
            items:
              type: "STRING"
              description: "resource URL"
            examples:
              "609b7da3-0e1e-4871-b31a-6351f7b2804a":
                value: "[\n  \"https://swapi.dev/api/films/1/\",\n  \"https://swapi.dev/api/films/2/\"\n]"
          "62cda09c-643f-4f2c-a701-25261624e844":
            name: "starships"
            type: "ARRAY"
            description: "An array of starship resource URLs that this person has piloted."
            items:
              type: "STRING"
              description: "resource URL"
            examples:
              "49b7dac1-4858-485a-a0a1-407335fe33fb":
                value: "[\n  \"https://swapi.dev/api/starships/12/\",\n  \"https://swapi.dev/api/starships/3/\"\n]"
          af773eaf-5417-4aa3-8b09-3f634675e041:
            name: "url"
            type: "STRING"
            description: "the hypermedia URL of this resource."
            examples:
              b1e0fb5d-a129-4350-889a-4f0fa52db6ff:
                value: "https://swapi.dev/api/people/1/"
        examples:
          "57d148a4-866b-4c0c-8722-5f3358d6c3a4":
            value: "{\n    \"birth_year\": \"19 BBY\",\n    \"eye_color\": \"Blue\",\n    \"films\": [\n        \"https://swapi.dev/api/films/1/\",\n        ...\n    ],\n    \"gender\": \"Male\",\n    \"hair_color\": \"Blond\",\n    \"height\": \"172\",\n    \"homeworld\": \"https://swapi.dev/api/planets/1/\",\n    \"mass\": \"77\",\n    \"name\": \"Luke Skywalker\",\n    \"skin_color\": \"Fair\",\n    \"created\": \"2014-12-09T13:50:51.644000Z\",\n    \"edited\": \"2014-12-10T13:52:43.172000Z\",\n    \"species\": [\n        \"https://swapi.dev/api/species/1/\"\n    ],\n    \"starships\": [\n        \"https://swapi.dev/api/starships/12/\",\n        ...\n    ],\n    \"url\": \"https://swapi.dev/api/people/1/\",\n    \"vehicles\": [\n        \"https://swapi.dev/api/vehicles/14/\"\n        ...\n    ]\n}"
      "36b8ea32-54e0-4704-96d4-8a9f398126e9":
        name: "Film"
        type: "OBJECT"
        description: "A Film resource is a single film.\n"
        section: "#/contract/sections/c554ec4a-fad5-46e3-a56c-eb3a2a94f2c8"
        properties:
          "733c3557-d31c-4337-bc98-b7b364f0d031":
            name: "title"
            type: "STRING"
            description: "The title of this film"
          dce53ef1-e82c-4d12-ab2b-16cf18cfa92b:
            name: "episode_id"
            type: "INTEGER"
            format: "INT32"
            description: "The episode number of this film"
          "7e6d3434-2e6c-46ed-816b-74bc7604732d":
            name: "opening_crawl"
            type: "STRING"
            description: "The opening paragraphs at the beginning of this film."
            examples:
              "620b10eb-4e94-416e-957d-230afdbfde96":
                value: "It is a period of civil war.\\n\\nRebel spaceships, striking\\n\\nfrom a hidden base, have won\\n\\ntheir first victory against\\n\\nthe evil Galactic Empire.\\n\\n\\n\\nDuring the battle, Rebel\\n\\nspies managed to steal secret\\r\\nplans to the Empire's\\n\\nultimate weapon, the DEATH\\n\\nSTAR, an armored space\\n\\nstation with enough power\\n\\nto destroy an entire planet.\\n\\n\\n\\nPursued by the Empire's\\n\\nsinister agents, Princess\\n\\nLeia races home aboard her\\n\\nstarship, custodian of the\\n\\nstolen plans that can save her\\n\\npeople and restore\\n\\nfreedom to the galaxy...."
          "1dfc0a1e-38d0-408c-82e3-a2ed171897b1":
            name: "director"
            type: "STRING"
            description: "The name of the director of this film"
            examples:
              "03a84abf-6e3e-4451-843c-ae675118477b":
                value: "George Lucas"
          bc8da844-5e51-46ae-8512-1625fe69eeb4:
            name: "producer"
            type: "STRING"
            description: "The name(s) of the producer(s) of this film. Comma separated."
            examples:
              ef3642d7-d878-46e0-93e4-6d66bfd9c861:
                value: "Gary Kurtz, Rick McCallum"
          d1f94429-74f9-487d-8233-9fcb0328a953:
            name: "starships"
            type: "ARRAY"
            description: "An array of starship resource URLs that are in this film."
            items:
              type: "STRING"
              examples:
                e9c6031e-1d0f-48ca-a73b-fa2d28168735:
                  value: "[\n  \"https://swapi.dev/api/starships/2/\",\n  \"https://swapi.dev/api/starships/12/\"\n]"
          e9e9f884-5b40-4dcc-b953-aabf46d335f6:
            name: "characters"
            type: "ARRAY"
            description: "An array of people resource URLs that are in this film."
            items:
              type: "STRING"
              examples:
                cacf92be-a02f-403b-a412-e263fcc0a155:
                  value: "[\n  \"https://swapi.dev/api/people/1/\",\n  \"https://swapi.dev/api/people/7/\"\n]"
          d39a9b85-73f4-4b67-ad17-7614de765475:
            name: "url"
            type: "STRING"
            description: "the hypermedia URL of this resource."
            examples:
              "84d2b03b-045e-4361-b548-0f60723c40a2":
                value: "https://swapi.dev/api/films/1/"
        examples:
          e2771cea-5efa-4219-a926-92b4e85a3b76:
            value: "{\n    \"characters\": [\n        \"https://swapi.dev/api/people/1/\",\n        ...\n    ],\n    \"created\": \"2014-12-10T14:23:31.880000Z\",\n    \"director\": \"George Lucas\",\n    \"edited\": \"2014-12-12T11:24:39.858000Z\",\n    \"episode_id\": 4,\n    \"opening_crawl\": \"It is a period of civil war.\\n\\nRebel spaceships, striking\\n\\nfrom a hidden base, have won\\n\\ntheir first victory against\\n\\nthe evil Galactic Empire.\\n\\n\\n\\nDuring the battle, Rebel\\n\\nspies managed to steal secret\\r\\nplans to the Empire's\\n\\nultimate weapon, the DEATH\\n\\nSTAR, an armored space\\n\\nstation with enough power\\n\\nto destroy an entire planet.\\n\\n\\n\\nPursued by the Empire's\\n\\nsinister agents, Princess\\n\\nLeia races home aboard her\\n\\nstarship, custodian of the\\n\\nstolen plans that can save her\\n\\npeople and restore\\n\\nfreedom to the galaxy....\",\n    \"planets\": [\n        \"https://swapi.dev/api/planets/1/\",\n        ...\n    ],\n    \"producer\": \"Gary Kurtz, Rick McCallum\",\n    \"release_date\": \"1977-05-25\",\n    \"species\": [\n        \"https://swapi.dev/api/species/1/\",\n        ...\n    ],\n    \"starships\": [\n        \"https://swapi.dev/api/starships/2/\",\n        ...\n    ],\n    \"title\": \"A New Hope\",\n    \"url\": \"https://swapi.dev/api/films/1/\",\n    \"vehicles\": [\n        \"https://swapi.dev/api/vehicles/4/\",\n        ...\n    ]\n}"
      e2466c8a-e44d-4ff3-bafd-7384c7678762:
        name: "Starship"
        type: "OBJECT"
        description: "A Starship resource is a single transport craft that has hyperdrive capability."
        section: "#/contract/sections/78cc974b-771b-4b0e-8bc3-25cb39935868"
        properties:
          "1c4a94b7-8959-4e81-b224-617b7814ca09":
            name: "name"
            type: "STRING"
            description: "The name of this starship. The common name, such as \"Death Star\"."
            required: true
          "19f776d8-ac6d-4139-a278-a9e10c0c808e":
            name: "model"
            type: "STRING"
            description: "The model or official name of this starship. Such as \"T-65 X-wing\" or \"DS-1 Orbital Battle Station\"."
          a8a984c6-3c29-4443-ba13-cd4f4f9464ce:
            name: "starship_class"
            type: "STRING"
            description: "The class of this starship, such as \"Starfighter\" or \"Deep Space Mobile Battlestation\""
          "8ee610c2-7562-4b32-964d-01a998f2d416":
            name: "manufacturer"
            type: "STRING"
            description: "The manufacturer of this starship. Comma separated if more than one."
            examples:
              "9366dac3-c89b-4c94-8a54-0f4cb43d7a27":
                value: "Imperial Department of Military Research, Sienar Fleet Systems"
          "7ec19f0c-16a6-432d-9916-77d661396418":
            name: "cost_in_credits"
            type: "STRING"
            description: "The cost of this starship new, in galactic credits."
          f295d388-587e-4be7-8d23-23629794528f:
            name: "length"
            type: "STRING"
            description: "The length of this starship in meters."
          "6e3049e2-02dc-4b09-a36c-ae19a30aa39a":
            name: "crew"
            type: "STRING"
            description: "The number of personnel needed to run or pilot this starship."
          "4dcfd289-1576-4d73-ad75-8e36da8b03f5":
            name: "passengers"
            type: "STRING"
            description: "The number of non-essential people this starship can transport."
          d08e6433-bf7d-424a-b124-baa0b9af04b6:
            name: "max_atmosphering_speed"
            type: "STRING"
            description: "The maximum speed of this starship in the atmosphere. \"N/A\" if this starship is incapable of atmospheric flight."
          d7e82a89-20f9-496b-a5ee-7db898bb93d4:
            name: "hyperdrive_rating"
            type: "STRING"
            description: "The class of this starships hyperdrive."
          "8c79efe1-b780-415f-848f-14c9f359a0ae":
            name: "MGLT"
            type: "STRING"
            description: "The Maximum number of Megalights this starship can travel in a standard hour. A \"Megalight\" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth."
          "2170693c-3a2d-4a45-a626-95adf21c3a36":
            name: "cargo_capacity"
            type: "STRING"
            description: "The maximum number of kilograms that this starship can transport."
          a6851ac5-a3b5-4dee-95fa-ff2a5da4eb6e:
            name: "consumables"
            type: "STRING"
            description: "The maximum length of time that this starship can provide consumables for its entire crew without having to resupply."
          b00fb02b-6c22-4129-b241-dcf1dda2282d:
            name: "films"
            type: "ARRAY"
            description: "An array of Film URL Resources that this starship has appeared in."
            required: true
            items:
              type: "STRING"
              examples:
                "45021f20-2a2e-4f01-94de-3fb1b21bb578":
                  value: "[\n  \"https://swapi.dev/api/films/1/\"\n]"
          "88f7407c-c2ad-4e0d-9031-d3eac27bb1b3":
            name: "pilots"
            type: "ARRAY"
            description: "An array of People URL Resources that this starship has been piloted by."
            required: true
            items:
              type: "STRING"
              examples:
                f0ab93a3-7f00-468a-8d4b-c3af53080e81:
                  value: "[]"
          c6fd8cab-8f11-4bdb-a6fa-fcdb9751528c:
            name: "url"
            type: "STRING"
            description: "the hypermedia URL of this resource."
            required: true
            examples:
              "9e9f77d1-c0d2-4b79-97e6-a4e88376c6dc":
                value: "https://swapi.dev/api/starships/2/"
        examples:
          f57ab9cc-7115-4050-9176-7b0a511c3826:
            value: "{\n    \"MGLT\": \"10 MGLT\",\n    \"cargo_capacity\": \"1000000000000\",\n    \"consumables\": \"3 years\",\n    \"cost_in_credits\": \"1000000000000\",\n    \"crew\": \"342953\",\n    \"hyperdrive_rating\": \"4.0\",\n    \"length\": \"120000\",\n    \"manufacturer\": \"Imperial Department of Military Research, Sienar Fleet Systems\",\n    \"max_atmosphering_speed\": \"n/a\",\n    \"model\": \"DS-1 Orbital Battle Station\",\n    \"name\": \"Death Star\",\n    \"passengers\": \"843342\",\n    \"films\": [\n        \"https://swapi.dev/api/films/1/\"\n    ],\n    \"pilots\": [],\n    \"starship_class\": \"Deep Space Mobile Battlestation\",\n    \"url\": \"https://swapi.dev/api/starships/9/\"\n}"
  components:
    responses:
      "39fc5fee-ef90-402a-a029-410dafa2440a":
        componentName: "400 - Bad Request"
        description: "Invalid ID supplied"
      "85408b40-e5bc-48a1-ae19-4b5328b34d38":
        componentName: "404 - Not Found"
        description: "Not found"
---
