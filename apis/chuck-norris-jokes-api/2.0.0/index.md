---
layout: "apiDefinition_1.0.0"
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Chuck Norris Jokes API"
    version: "2.0.0"
    description: "chucknorris.io is a free JSON API for hand curated Chuck Norris facts.\n\nChuck Norris facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet phenomenon and as a result have become widespread in popular culture. The 'facts' are normally absurd hyperbolic claims about Norris' toughness, attitude, virility, sophistication, and masculinity.\n\nChuck Norris facts have spread around the world, leading not only to translated versions, but also spawning localized versions mentioning country-specific advertisements and other Internet phenomena. Allusions are also sometimes made to his use of roundhouse kicks to perform seemingly any task, his large amount of body hair with specific regard to his beard, and his role in the action television series Walker, Texas Ranger."
    license:
      name: "GNU General Public License v3.0"
      url: "https://github.com/chucknorris-io/chuck-api/blob/master/LICENSE"
    contact:
      name: "Mathias Schilling"
      email: "m@matchilling.com"
      url: "https://www.matchilling.com"
    termsOfService: "https://api.chucknorris.io/"
  contract:
    baseUrls:
      cdf26f83-1fee-4bf6-a2cf-36d28ba93eeb:
        url: "http://api.chucknorris.io/"
    sections:
      cf8f0e0a-d390-49e9-ac91-99aca167dd2d:
        name: "Jokes"
        elementOrder:
        - "#/contract/types/33e3cc66-fe7f-47bd-8d3a-5e7684b588e1"
        - "#/contract/types/4b510def-d05e-47a4-a0a5-d597136fb296"
        - "#/contract/resources/03ec0b5f-f019-4a56-b115-561547cd1fc2"
        - "#/contract/resources/79715ed7-bb51-48d3-a6fa-67e71ead75e1"
        - "#/contract/resources/0681a6c2-bc18-410a-a6cb-ac66169bfbd8"
        - "#/contract/resources/79155bfa-d970-4206-b7b8-695ee9649569"
      "08c262d2-95c1-4f9b-b0ce-81f7717885fa":
        name: "Feed"
        elementOrder:
        - "#/contract/types/90f482c8-dc29-4a24-bb71-f30fee874c20"
        - "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
        - "#/contract/types/7efedc4f-a223-407d-aacb-9827d5242d9d"
        - "#/contract/types/2e3266e5-0bfb-457e-b3ae-a2e71d472fc1"
        - "#/contract/types/b6096c3c-8299-486f-8efa-6383347edf26"
        - "#/contract/types/cbd735ce-9d8f-41ca-9b1d-9e36a3af1d60"
        - "#/contract/resources/af7a7373-7c2e-4c67-aa1e-89f9b6f6d11b"
        - "#/contract/resources/cceefe5b-b541-4458-8f59-7e13f7b8a429"
        - "#/contract/resources/3c5edbd4-6e8b-46d7-aae5-485281ab7f1a"
        - "#/contract/resources/b1b8863e-bfa6-47ee-8c25-80c03e8a51e0"
      "3b52ae6c-edc7-490a-8956-8b38ebb03c71":
        name: "Slack"
        elementOrder:
        - "#/contract/types/2d3313dc-78bf-4aed-9cfe-516ec8f44480"
        - "#/contract/types/adccd7d1-5e84-4e52-a6c9-57acf67f509a"
        - "#/contract/resources/1498eb2a-0e00-4786-a35b-03d4b65e7574"
    resources:
      "03ec0b5f-f019-4a56-b115-561547cd1fc2":
        path: "/jokes/categories"
        section: "#/contract/sections/cf8f0e0a-d390-49e9-ac91-99aca167dd2d"
        operations:
          fe34672c-9b44-4618-8311-0a1ad781a4d9:
            name: "Retrieve a list of available categories"
            method: "GET"
            operationId: "getCategoryValuesUsingGET"
            tags:
            - "joke-controller"
            responses:
              "444ee564-b945-4d0a-abb3-89c6c5f63c90":
                status: "200"
                description: "OK"
                bodies:
                  c3c5f607-7239-422a-8921-c15ff044a273:
                    type: "ARRAY"
                    items:
                      type: "STRING"
                    examples:
                      a46d59d1-93b6-4e35-a8b2-1fd7a5cc2564:
                        value: "[\"animal\",\"career\",\"celebrity\",\"dev\",\"explicit\",\"fashion\",\"food\",\"history\",\"money\",\"movie\",\"music\",\"political\",\"religion\",\"science\",\"sport\",\"travel\"]"
                    mediaTypes:
                    - "application/json"
                  "72a51d00-4b03-421c-bb00-06a95abf5b79":
                    type: "ARRAY"
                    items:
                      type: "STRING"
                    examples:
                      "1b7592b1-9a68-4835-83c2-03e11a5bc7bc":
                        value: "[\"animal\",\"career\",\"celebrity\",\"dev\",\"explicit\",\"fashion\",\"food\",\"history\",\"money\",\"movie\",\"music\",\"political\",\"religion\",\"science\",\"sport\",\"travel\"]"
                    mediaTypes:
                    - "text/plain"
              c1cd6d75-6ef4-4a1a-a663-b0dfdb1ba810:
                status: "401"
                description: "Unauthorized"
              "2be72e32-5fa0-45c4-ab18-0cc627730998":
                status: "403"
                description: "Forbidden"
              b16364c6-5014-40ec-8ac1-5b9cb4a4256d:
                status: "404"
                description: "Not Found"
      "79715ed7-bb51-48d3-a6fa-67e71ead75e1":
        path: "/jokes/random"
        section: "#/contract/sections/cf8f0e0a-d390-49e9-ac91-99aca167dd2d"
        operations:
          "5ea42186-a0b6-4b62-a6e4-12f53863dad5":
            name: "Retrieve a random chuck joke"
            method: "GET"
            operationId: "getRandomJokeValueUsingGET"
            tags:
            - "joke-controller"
            queryParameters:
              f2e75719-6179-4f3b-b28b-e344f6d93121:
                name: "category"
                type: "STRING"
                description: "Retrieve a random chuck norris joke from a given category."
            responses:
              "91c5304a-d4c6-45c9-865d-a7781c71e356":
                status: "200"
                description: "OK"
                bodies:
                  "729b561d-d56b-43fd-b4f8-556da43751f4":
                    type: "#/contract/types/33e3cc66-fe7f-47bd-8d3a-5e7684b588e1"
                    mediaTypes:
                    - "application/json"
              b5a9052e-eb21-4ffd-b201-7b88f19bb824:
                status: "401"
                description: "Unauthorized"
              "7cbb1bc6-81b5-4a98-9fa3-d426f5957f03":
                status: "403"
                description: "Forbidden"
              "406a9d5f-a6b9-4550-b4a3-4d48f9cc1259":
                status: "404"
                description: "Not Found"
      "0681a6c2-bc18-410a-a6cb-ac66169bfbd8":
        path: "/jokes/{id}"
        section: "#/contract/sections/cf8f0e0a-d390-49e9-ac91-99aca167dd2d"
        pathVariables:
          ee3729bf-5edc-417b-bfb6-c61b3d82e551:
            name: "id"
            type: "STRING"
            description: "id"
            required: true
        operations:
          "85539b4a-6e68-4d8d-9acd-3ef56ac370e0":
            name: "Retrieve a joke by its id"
            method: "GET"
            operationId: "getJokeValueUsingGET"
            tags:
            - "joke-controller"
            responses:
              "625e7bd8-40b7-45c5-8ecd-b62aebd896b1":
                status: "200"
                description: "OK"
                bodies:
                  "13a40a44-30ad-498d-9fdd-739ba47385d3":
                    type: "#/contract/types/33e3cc66-fe7f-47bd-8d3a-5e7684b588e1"
                    mediaTypes:
                    - "application/json"
              b90ab422-21ea-4799-9d7b-6280866319e0:
                status: "401"
                description: "Unauthorized"
              b6929ffb-aa11-4571-8b3e-89d4752908b4:
                status: "403"
                description: "Forbidden"
              "62c6e8eb-6d13-48bb-92bc-fb7a48ee49a7":
                status: "404"
                description: "Not Found"
      "79155bfa-d970-4206-b7b8-695ee9649569":
        path: "/jokes/search"
        section: "#/contract/sections/cf8f0e0a-d390-49e9-ac91-99aca167dd2d"
        operations:
          "6118ff52-181c-4dd8-b6b2-655e2fc96566":
            name: "Free text search"
            method: "GET"
            operationId: "searchUsingGET"
            tags:
            - "joke-controller"
            queryParameters:
              "582db880-dc98-4d4a-97f6-fc2c16097f16":
                name: "query"
                type: "STRING"
                description: "query"
                required: true
            responses:
              "98f43bff-6182-4fce-9233-b9145171d987":
                status: "200"
                description: "OK"
                bodies:
                  "3ee9d01c-c023-4e3f-a787-e5b1e999134f":
                    type: "#/contract/types/4b510def-d05e-47a4-a0a5-d597136fb296"
                    mediaTypes:
                    - "application/json"
              ab6aa9e1-c931-42e7-808a-c77235ced262:
                status: "401"
                description: "Unauthorized"
              bee21639-eaa6-47e7-8a91-39aa3eeb27f6:
                status: "403"
                description: "Forbidden"
              e5ba34a2-4e4b-492b-a0b4-74d7cec403c9:
                status: "404"
                description: "Not Found"
      af7a7373-7c2e-4c67-aa1e-89f9b6f6d11b:
        path: "/feed/daily-chuck"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        operations:
          "6ef5b378-a190-4b6c-b68d-6cc3316aa3b5":
            name: "dailyChuckRss"
            method: "GET"
            operationId: "dailyChuckRssUsingGET"
            tags:
            - "feed-controller"
            responses:
              "1e673422-2239-4e5b-8b02-f6df5b28f67c":
                status: "200"
                description: "OK"
                bodies:
                  "55a922ec-33d8-44a0-8381-eccb4918cb54":
                    type: "#/contract/types/cbd735ce-9d8f-41ca-9b1d-9e36a3af1d60"
                    mediaTypes:
                    - "text/xml"
                    - "application/rss+xml"
              eba2a2ed-81fa-4ae6-a96e-b5d26f94be92:
                status: "401"
                description: "Unauthorized"
              fb40c5b3-e174-4f7b-9ad5-cac05ccecd9f:
                status: "403"
                description: "Forbidden"
              ff45069b-51cb-4f3b-a22b-20766c503003:
                status: "404"
                description: "Not Found"
      cceefe5b-b541-4458-8f59-7e13f7b8a429:
        path: "/feed/daily-chuck.json"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        operations:
          "9020d29c-cdd1-4df9-868c-2f89b7c6c7fe":
            name: "dailyChuckJson"
            method: "GET"
            operationId: "dailyChuckJsonUsingGET_1"
            tags:
            - "feed-controller"
            responses:
              afebc32f-bff2-4ae9-b807-b79792a07f07:
                status: "200"
                description: "OK"
                bodies:
                  "8feb723a-f39e-4678-bf54-d52054f5db27":
                    type: "#/contract/types/7efedc4f-a223-407d-aacb-9827d5242d9d"
                    mediaTypes:
                    - "application/json"
              "3fd441e3-d29b-47ec-97d0-e7d453ded818":
                status: "401"
                description: "Unauthorized"
              "91f711f3-1d8a-4c79-a93e-5600d79290ec":
                status: "403"
                description: "Forbidden"
              "04b7aa59-80de-4e7d-9e39-7bc85686abd4":
                status: "404"
                description: "Not Found"
      "3c5edbd4-6e8b-46d7-aae5-485281ab7f1a":
        path: "/feed/daily-chuck.xml"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        operations:
          "99adfad6-62c4-47cb-ab79-00dad67e98a2":
            name: "dailyChuckRss"
            method: "GET"
            operationId: "dailyChuckRssUsingGET_1"
            tags:
            - "feed-controller"
            responses:
              e1e90a4a-d080-41f8-938b-986d8b385688:
                status: "200"
                description: "OK"
                bodies:
                  "05f19251-6bec-427b-8dce-46fb90d357a4":
                    type: "#/contract/types/cbd735ce-9d8f-41ca-9b1d-9e36a3af1d60"
                    mediaTypes:
                    - "text/xml"
                    - "application/rss+xml"
              "894f5083-4e96-4e02-a4d3-8e8d8bac2554":
                status: "401"
                description: "Unauthorized"
              f2c2e59e-ebda-4bcc-9233-d9f7bc26831e:
                status: "403"
                description: "Forbidden"
              b4c4fc51-bd9d-402f-b178-1d011fe69358:
                status: "404"
                description: "Not Found"
      b1b8863e-bfa6-47ee-8c25-80c03e8a51e0:
        path: "/feed/daily-chuck/stats"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        operations:
          fbfff29f-d0e6-420e-8098-80af1d903336:
            name: "dailyChuckStats"
            method: "GET"
            operationId: "dailyChuckStatsUsingGET"
            tags:
            - "feed-controller"
            responses:
              "9cc8b0a7-8da2-4c50-a5fa-34527e72b1d3":
                status: "200"
                description: "OK"
                bodies:
                  "272ae8bd-a2a4-4f72-a64f-ca22bf27f9d5":
                    type: "#/contract/types/b6096c3c-8299-486f-8efa-6383347edf26"
                    mediaTypes:
                    - "application/json"
              "05ed8871-a66f-43c3-a531-96fa069f635e":
                status: "401"
                description: "Unauthorized"
              "3c5e0c8c-e83e-4905-9f4b-44b44b2fad95":
                status: "403"
                description: "Forbidden"
              a25fb797-9846-43ed-81f5-6b7d11f68bc8:
                status: "404"
                description: "Not Found"
      "1498eb2a-0e00-4786-a35b-03d4b65e7574":
        path: "/jokes/slack"
        section: "#/contract/sections/3b52ae6c-edc7-490a-8956-8b38ebb03c71"
        operations:
          "6041463d-9a5d-49be-833e-596d72543782":
            name: "command"
            method: "POST"
            operationId: "commandUsingPOST"
            tags:
            - "slack-controller"
            bodies:
              c8315140-70d6-4462-a059-f2f08e56108e:
                type: "OBJECT"
                properties:
                  "15731eb8-f346-4475-adcc-250a21edd673":
                    name: "channelId"
                    type: "STRING"
                  e04d64ea-5e29-44de-95c1-a65f6757d9d3:
                    name: "channelName"
                    type: "STRING"
                  "4c4d1708-2d6d-44c7-aebf-4cf36b876a29":
                    name: "command"
                    type: "STRING"
                  a9dd61f6-d28d-46ac-a450-ceeb2e7aa2ce:
                    name: "enterpriseId"
                    type: "STRING"
                  "00e1b52d-b01f-4f6b-b014-8165f8448d37":
                    name: "enterpriseName"
                    type: "STRING"
                  a8c56ab1-0e3e-4886-ae6f-ae1f97912b6a:
                    name: "responseUrl"
                    type: "STRING"
                  "29519a41-755a-4d2d-9b77-e86349fab5fd":
                    name: "teamDomain"
                    type: "STRING"
                  a947ee71-0885-4728-83dc-45197daef5ae:
                    name: "teamId"
                    type: "STRING"
                  d244489a-c491-4cab-b249-2131a67550b9:
                    name: "text"
                    type: "STRING"
                  "471b978e-981c-4d0e-82d3-0311a67a59cb":
                    name: "token"
                    type: "STRING"
                  "922003cb-bdce-4a78-93cb-d3df9a3f28ca":
                    name: "triggerId"
                    type: "STRING"
                  "8a6738e2-c9cb-45fa-8ecf-67c0bc69f6fa":
                    name: "userId"
                    type: "STRING"
                  "4480e146-d680-4078-b374-35618f7aeac4":
                    name: "userName"
                    type: "STRING"
                mediaTypes:
                - "application/x-www-form-urlencoded"
            responses:
              "9c69c563-827c-4caa-8b4b-210275fe0e04":
                status: "200"
                description: "OK"
                bodies:
                  "39c863a0-0d4f-4f1f-adea-1dc457ef7505":
                    type: "#/contract/types/2d3313dc-78bf-4aed-9cfe-516ec8f44480"
                    mediaTypes:
                    - "application/json"
              "91c5d8a4-3d4c-4b99-9192-bd0c805790c1":
                status: "201"
                description: "Created"
              "65e374f3-56e0-49de-80e4-bad2a54ed2f9":
                status: "401"
                description: "Unauthorized"
              "9cc2ad54-b3d2-40df-8d15-8ba60460dca8":
                status: "403"
                description: "Forbidden"
              "5873184d-82ba-4344-b8cf-04f62896baac":
                status: "404"
                description: "Not Found"
    types:
      "33e3cc66-fe7f-47bd-8d3a-5e7684b588e1":
        name: "Joke"
        type: "OBJECT"
        section: "#/contract/sections/cf8f0e0a-d390-49e9-ac91-99aca167dd2d"
        properties:
          "6c2a795f-7787-4fd4-8810-f0021e5157e8":
            name: "categories"
            type: "ARRAY"
            description: "MailingList of categories."
            items:
              type: "STRING"
          "82196087-13b6-4edb-b403-8d6af13ae555":
            name: "created_at"
            type: "STRING"
            description: "Timestamp when the joke was created."
            examples:
              "939e0b82-9b29-408f-9ccd-fa7781cec007":
                value: "2019-06-02 08:47:39.408742"
          bb461f92-91df-4bfa-a203-9e7fe2e48223:
            name: "icon_url"
            type: "STRING"
            description: "Absolute URL of the Chuck Norris icon."
            examples:
              e838790d-ae6d-4f61-8cf9-adc379207c0f:
                value: "nzf46249t8cf7wgz3rf_rg"
          e7723f54-0a6b-4c28-b4a6-6433901cc816:
            name: "id"
            type: "STRING"
            description: "URL-safe Base64-encoded UUID for a joke."
            examples:
              "2bc4537a-dbdf-46e6-87be-0d8ff12f1b18":
                value: "nzf46249t8cf7wgz3rf_rg"
          "0272ed22-64df-4d6c-a50c-eb950165e590":
            name: "updated_at"
            type: "STRING"
            description: "Timestamp when the joke was updated."
            examples:
              "793530fc-0424-4abb-acc8-2728aa7871d8":
                value: "2019-06-02 08:47:39.408742"
          "03727ec9-d47a-4a42-9986-965826aef7cb":
            name: "url"
            type: "STRING"
            description: "Absolute URL of the joke."
            examples:
              "7d70b8dd-4653-4126-a7c0-04d8db1d8b7b":
                value: "https://api.chucknorris.io/jokes/nzf46249t8cf7wgz3rf_rg"
          be3c6969-cb8e-42c8-bd5c-9fc94979e382:
            name: "value"
            type: "STRING"
            description: "The contents of an incredible funny joke."
            required: true
            examples:
              "2736fde3-4790-4298-a30e-250f1613685d":
                value: "Chuck Norris doesn't have disk latency because the hard drive knows to hurry the hell up."
        examples:
          bfaa4dbe-85c9-4eba-8c83-d4de15b820e1:
            value: "{\n  \"categories\": [],\n  \"created_at\": \"2020-01-05 13:42:23.880601\",\n  \"icon_url\": \"https://assets.chucknorris.host/img/avatar/chuck-norris.png\",\n  \"id\": \"NTqo9-UpSiSh5LUsNxsX2Q\",\n  \"updated_at\": \"2020-01-05 13:42:23.880601\",\n  \"url\": \"https://api.chucknorris.io/jokes/NTqo9-UpSiSh5LUsNxsX2Q\",\n  \"value\": \"Cucumbers aren't nearly as cool as Chuck Norris.\"\n}"
      "4b510def-d05e-47a4-a0a5-d597136fb296":
        name: "JokeSearchResult"
        type: "OBJECT"
        section: "#/contract/sections/cf8f0e0a-d390-49e9-ac91-99aca167dd2d"
        properties:
          "82be2880-4ffd-4f6c-8bae-c9681ae97763":
            name: "result"
            type: "ARRAY"
            items:
              type: "#/contract/types/33e3cc66-fe7f-47bd-8d3a-5e7684b588e1"
          "9a1e187f-1d89-4416-9f8f-5cb45eeeec1b":
            name: "total"
            type: "INTEGER"
            format: "INT32"
      "90f482c8-dc29-4a24-bb71-f30fee874c20":
        name: "AtomicDouble"
        type: "OBJECT"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
      c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2:
        name: "AtomicInteger"
        type: "OBJECT"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        properties:
          "5000b1a9-bd6a-45f4-a00f-f1ee94598741":
            name: "and_decrement"
            type: "INTEGER"
            format: "INT32"
          "45e031ad-09a4-4492-8573-c37387fc398c":
            name: "and_increment"
            type: "INTEGER"
            format: "INT32"
      "7efedc4f-a223-407d-aacb-9827d5242d9d":
        name: "DailyChuck"
        type: "OBJECT"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        properties:
          af0232e6-eb95-488e-bf6c-14f7f78037bb:
            name: "issue_number"
            type: "INTEGER"
            format: "INT64"
          f5b41c34-89c5-4457-955a-d78de2ee869b:
            name: "issues"
            type: "ARRAY"
            items:
              type: "#/contract/types/2e3266e5-0bfb-457e-b3ae-a2e71d472fc1"
      "2e3266e5-0bfb-457e-b3ae-a2e71d472fc1":
        name: "DailyChuckIssue"
        type: "OBJECT"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        properties:
          "5b2e23e2-b81e-457d-b32d-314bf1d70c7f":
            name: "date"
            type: "DATETIME"
            format: "RFC3339"
          c6452b95-89d0-4be0-b6c4-0bb185ac3eb1:
            name: "joke_id"
            type: "STRING"
      b6096c3c-8299-486f-8efa-6383347edf26:
        name: "MailingListStatistic"
        type: "OBJECT"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        properties:
          "4c76cb18-1506-438f-a4c6-d81a2436f126":
            name: "avg_sub_rate"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          "7fafc8d1-0593-4374-93ae-de30a39a6a3b":
            name: "avg_unsub_rate"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          "6d4ab0b2-0466-4e1a-b0be-7bb7cb25201a":
            name: "campaign_count"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          c4e8aace-c5f7-424a-bd23-5ec98daee8b4:
            name: "campaign_last_sent"
            type: "DATETIME"
            format: "RFC3339"
          "41caa021-401d-430d-86dc-6bfba20daf04":
            name: "cleaned_count"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          "3d1d939a-2bd0-4a8b-9d3b-290e73646a63":
            name: "cleaned_count_since_send"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          b6e509ef-f312-4df6-be45-bafc4f7027e0:
            name: "click_rate"
            type: "#/contract/types/90f482c8-dc29-4a24-bb71-f30fee874c20"
          fda15672-2849-4a2a-9af6-b973ddf00524:
            name: "last_sub_date"
            type: "DATETIME"
            format: "RFC3339"
          "8becb03e-6b90-49f7-a294-fe1f6d6fb22d":
            name: "last_unsub_date"
            type: "DATETIME"
            format: "RFC3339"
          a933b315-ef42-4f1c-bfb6-58f5f6a209a0:
            name: "member_count"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          dcd12a12-e3fd-4787-bf56-1dbb62386f38:
            name: "member_count_since_send"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          ccab147f-d755-4240-97f1-9a0735ee2afa:
            name: "merge_field_count"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          "2e5345e0-e475-4614-ba39-7b50d9ec400d":
            name: "open_rate"
            type: "#/contract/types/90f482c8-dc29-4a24-bb71-f30fee874c20"
          "1738636c-403d-4ce5-8a7f-c07ad47e8f01":
            name: "target_sub_rate"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          e4137312-12a3-45c4-86b1-fd950a16efdc:
            name: "unsubscribe_count"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
          e96ee84c-c5a6-4d6b-970d-7470a37237e0:
            name: "unsubscribe_count_since_send"
            type: "#/contract/types/c264a65f-6f8c-4c52-ac7f-e9f5c4757bc2"
      cbd735ce-9d8f-41ca-9b1d-9e36a3af1d60:
        name: "View"
        type: "OBJECT"
        section: "#/contract/sections/08c262d2-95c1-4f9b-b0ce-81f7717885fa"
        properties:
          "70f67689-699d-41f3-998d-9b3e59fbbd9d":
            name: "content_type"
            type: "STRING"
      "2d3313dc-78bf-4aed-9cfe-516ec8f44480":
        name: "SlackCommandResponse"
        type: "OBJECT"
        section: "#/contract/sections/3b52ae6c-edc7-490a-8956-8b38ebb03c71"
        properties:
          dd193fee-f853-4bcb-a0ac-e21a2c5d18c6:
            name: "attachments"
            type: "ARRAY"
            items:
              type: "#/contract/types/adccd7d1-5e84-4e52-a6c9-57acf67f509a"
          a46d872f-1c4a-4e6a-8e49-dabf26829d71:
            name: "icon_url"
            type: "STRING"
          "5f494ebd-b8c0-4b44-917f-9f3edc0f0ae7":
            name: "response_type"
            type: "STRING"
          a748b96a-5bd3-4846-976a-4e7d542816d8:
            name: "text"
            type: "STRING"
      adccd7d1-5e84-4e52-a6c9-57acf67f509a:
        name: "SlackCommandResponseAttachment"
        type: "OBJECT"
        section: "#/contract/sections/3b52ae6c-edc7-490a-8956-8b38ebb03c71"
        properties:
          "58e7fa18-6378-4cef-8496-c74143c2cae9":
            name: "fallback"
            type: "STRING"
          "8c172e3c-5c89-4b2d-a036-3845768b46e8":
            name: "mrkdown_in"
            type: "ARRAY"
            items:
              type: "STRING"
          a550c090-1417-4561-872f-82afcf519500:
            name: "text"
            type: "STRING"
          "753d9d54-91d5-410c-b60b-5866bce93881":
            name: "title"
            type: "STRING"
          "231c4834-3c22-43fb-b296-5a50bd59892e":
            name: "title_link"
            type: "STRING"
  components: {}
---
