---
layout: "apiDefinition_1.0.0"
api-definition:
  specVersion: "4.0.0"
  info:
    name: "PokeAPI"
    version: "v2"
    description: "![PokeAPI](https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg)\n# Information\nThis is a **consumption-only** API — only the HTTP GET method is available on resources.\n\nNo authentication is required to access this API, and all resources are fully open and available. Since the move to static hosting in November 2018, rate limiting has been changed to a fixed limit of **100 API requests per IP address per minute** (this does not include downloading image assets like sprites, which are hosted elsewhere).\n\nIf you are going to be regularly using the API, we recommend caching data on your service or deploying your own instance of the API (jump on Slack for help with this).\n\n# Fair Use Policy\nPokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy. People not complying with the fair use policy will have their IP address permanently banned.\n\nPokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.\n\nRules:\n\nLocally cache resources and images whenever you request them.\nUse the correct user-agent header in API requests.\nBe nice and friendly to your fellow PokéAPI developers."
    license: {}
    contact: {}
  contract:
    baseUrls:
      cfcd73b7-d594-4fd1-bfb9-e39007f2c5a8:
        url: "http://pokeapi.co/api/v2"
    sections:
      bb60b3aa-1352-42cd-8d53-22400dcb0ccd:
        name: "Berries"
        elementOrder:
        - "#/contract/resources/66637ce1-f050-4d3a-a69b-1a30e357097e"
        - "#/contract/resources/f12eeeab-ecb7-49c8-9aa8-544d5c3e9ab6"
        - "#/contract/resources/78fb352a-b5f4-4ef2-bd4c-f4613df23585"
      a8f5be8d-50af-4f2a-8619-5b129e85cc43:
        name: "Contests"
        elementOrder:
        - "#/contract/resources/7c4171a6-8a62-476c-a2cc-e7ac0ae9adb9"
        - "#/contract/resources/f5bbb790-d45f-4c99-995d-77ea147060af"
        - "#/contract/resources/55c4b15f-9c26-4d8d-a9ba-143adfb0e73a"
      "344f4dad-ffc3-4fd3-a628-884929c98ee9":
        name: "Encounters"
        elementOrder:
        - "#/contract/resources/0cf09b10-f125-48d6-837f-e48b1523ae04"
        - "#/contract/resources/0122d734-e0fa-4769-9543-4475b2b62a59"
        - "#/contract/resources/6ed609dc-96e4-4179-8073-a103e03af749"
      d158613b-7064-4bb1-82ca-f593eb06c51b:
        name: "Evolution"
        elementOrder:
        - "#/contract/resources/f8206b80-fdbd-459d-83af-73184a03a685"
        - "#/contract/resources/8861c574-d1c8-4a8e-941a-e28e9ac48d89"
      "51093d4b-0a5b-4ade-8bf2-fb24d88b55da":
        name: "Games"
        elementOrder:
        - "#/contract/resources/e0fb7a6d-b872-4f95-acf7-952a7bbd5908"
        - "#/contract/resources/c2202451-62af-4495-8211-abe6e32bc530"
        - "#/contract/resources/0af40ebf-d677-4f6c-8167-badc133bd116"
        - "#/contract/resources/110bcf23-b33b-41cb-9c9c-8d42388b63a0"
      ef36b112-1eb1-4d20-bca6-2a5b645e1c77:
        name: "Items"
        elementOrder:
        - "#/contract/resources/a5ee1029-58f2-49c3-bc3a-c2f14aa00025"
        - "#/contract/resources/7b033f26-558c-4d40-9556-bf4929e8dbd8"
        - "#/contract/resources/3c85a886-eaef-4b40-94d5-cbeff08a73cd"
        - "#/contract/resources/b2f3a373-ff9f-4a3e-b1e8-7f7890dd96f7"
        - "#/contract/resources/11608e2d-2edf-467a-b20c-aa13f9e28fb3"
      f5224832-e848-4cd3-b7cc-7f2ac417307e:
        name: "Moves"
        elementOrder:
        - "#/contract/resources/f74f07e7-7987-4a62-8bf6-4e64ff94fa96"
        - "#/contract/resources/608044c4-d659-4206-af2d-c85ece6b295a"
        - "#/contract/resources/8fd2ac9c-5854-46b1-a2ba-f3ea81897f1d"
        - "#/contract/resources/8d1054be-c230-4c21-b967-224d388e3216"
        - "#/contract/resources/7cbfe0d7-1e06-4ac4-8cba-3a2b48e3f4f8"
        - "#/contract/resources/05b0d93a-0f15-47b8-9ba8-b6159fb80996"
        - "#/contract/resources/4785f0c0-3519-4653-8e1d-00905081bc8c"
      e933f50d-6a61-4070-81b1-b7010d3dfc88:
        name: "Locations"
        elementOrder:
        - "#/contract/resources/92c7e10a-4318-4dfa-801c-ca746cd6110f"
        - "#/contract/resources/86f69d4d-1b4a-4f09-9cd6-b5149b87f036"
        - "#/contract/resources/632c07ec-a6ed-4bb0-9385-588fe79e1c6a"
        - "#/contract/resources/c1ce8d75-5a2c-409d-a94f-f570cd06dc60"
      fa20e949-cb93-460a-a6fc-9391f8503ec5:
        name: "Pokemon"
        elementOrder:
        - "#/contract/types/1fdbf324-4ddd-4ea1-9dd2-d5dcedad6fe8"
        - "#/contract/types/ad020642-d54c-4b2d-8bbf-b73285f389ce"
        - "#/contract/types/ac3709eb-a2ad-4db6-9c6a-b862fd366521"
        - "#/contract/types/8dc43417-bb33-47f5-9ce5-70c4876d0872"
        - "#/contract/types/4d595ef6-da80-45d6-8b79-d8dfb56ae67b"
        - "#/contract/types/73ca7e8b-b8d2-49a6-906e-0408cec750dc"
        - "#/contract/types/a9334f58-7f33-47c7-a6ea-ff8e6da2231a"
        - "#/contract/types/3f6a1e39-ad4e-4692-8227-95b36d43d129"
        - "#/contract/types/f2ac8315-a56b-49a1-8d7f-f77be409ba82"
        - "#/contract/types/355729be-ee2b-4c13-a40e-2b94a9aaac06"
        - "#/contract/types/534566ef-95fa-4aa2-945c-bbfbae06071a"
        - "#/contract/types/8cd50067-f7da-421a-a0a9-7fe4d14e2695"
        - "#/contract/types/af56ed04-d5b8-4b19-be3f-33887c5e37e6"
        - "#/contract/types/b5471ee1-2d2d-48c7-9074-7863fcfd65c1"
        - "#/contract/types/75aa98df-0186-49ec-8309-35fe21e588ab"
        - "#/contract/resources/2ec62a6c-77bc-45f7-93ed-12e1cae02bf8"
        - "#/contract/resources/69960f25-f630-485a-a484-1a3ee0bc1069"
        - "#/contract/resources/ac02aaf9-4e2f-47da-b48c-d69389ccd551"
        - "#/contract/resources/87642a07-f3e0-42bd-a89e-b5bc1084f29a"
        - "#/contract/resources/43d85fb3-c351-4359-ab20-1f99e21d1c46"
        - "#/contract/resources/1dd90077-590d-486f-ad4a-a36687dca320"
        - "#/contract/resources/5023ddcb-4d52-405c-a9fb-321dbdbb3376"
        - "#/contract/resources/c0f1185e-4e0e-4900-978d-649c449ef552"
        - "#/contract/resources/84ff6aec-9043-4809-b461-a4c282dded20"
        - "#/contract/resources/13beb4b9-50e9-43c3-8c58-d28a646e1f16"
        - "#/contract/resources/8e129dc7-58d0-4293-aded-08035392f81a"
        - "#/contract/resources/9aff3420-19e3-4963-9a28-47e29bdcd842"
        - "#/contract/resources/010cc7f2-cd69-4cb9-9353-4b72486338d2"
        - "#/contract/resources/63278495-f97e-4fa8-9923-ff44d631bd4a"
        - "#/contract/resources/9b2ec977-fe3f-4680-b35d-3ac01a239f20"
      "22a6266d-11d9-4f60-ba92-868f5ba7d37c":
        name: "Utility"
        elementOrder:
        - "#/contract/resources/15f8986f-fb70-44f5-aebd-3e5577cf0752"
    resources:
      "66637ce1-f050-4d3a-a69b-1a30e357097e":
        path: "/berry/{param1}/"
        section: "#/contract/sections/bb60b3aa-1352-42cd-8d53-22400dcb0ccd"
        pathVariables:
          ddde828f-d0e5-4cff-b8ac-3458289304c8:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          ac3673a4-77d5-4e7e-8292-44817f30b2a2:
            name: "Berry"
            method: "GET"
            operationId: "GET_berry-param1"
            tags:
            - "Berries"
            responses:
              "5d3c47de-c0af-4b81-810c-f3645156fe09":
                status: "200"
                bodies:
                  d15fb9c5-bb54-49dd-9fe8-7ba7a9e7e9d4:
                    type: "OBJECT"
                    properties:
                      "5423f527-a235-4552-8b1d-e42d9b1fc713":
                        name: "natural_gift_power"
                        type: "INTEGER"
                        format: "INT32"
                      b81ba4ca-45b2-4e9d-a84e-9883c8189a02:
                        name: "flavors"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1e7a1252-261c-4748-8e1c-dd9436c4967e":
                              name: "flavor"
                              type: "OBJECT"
                              properties:
                                "699b23e3-4042-4bb6-a092-7e6b4f961c37":
                                  name: "url"
                                  type: "STRING"
                                "40d4344d-85fc-41ea-acfd-213115dd6de0":
                                  name: "name"
                                  type: "STRING"
                            "3802a253-befd-4a72-b3cc-a2e0e01845aa":
                              name: "potency"
                              type: "INTEGER"
                              format: "INT32"
                      "7034a383-c9d7-4106-95a5-658013d512f4":
                        name: "natural_gift_type"
                        type: "OBJECT"
                        properties:
                          c58d5d04-ba9f-4acf-b842-6089df44ae03:
                            name: "url"
                            type: "STRING"
                          "6cfc403d-174a-4805-ad43-3e4208f31d7d":
                            name: "name"
                            type: "STRING"
                      "232f91e2-41a4-47c6-83fb-8bcc45680fcc":
                        name: "name"
                        type: "STRING"
                      b60ef9e6-d8ec-4ce0-b09d-0480ef169215:
                        name: "max_harvest"
                        type: "INTEGER"
                        format: "INT32"
                      "3011c8c8-801f-4720-a0e2-7db1ad236949":
                        name: "soil_dryness"
                        type: "INTEGER"
                        format: "INT32"
                      "62ebe31d-ad9a-4267-8153-7f786de7f563":
                        name: "smoothness"
                        type: "INTEGER"
                        format: "INT32"
                      cc1491f0-a263-4d3f-8aef-0a87b6679cc3:
                        name: "item"
                        type: "OBJECT"
                        properties:
                          "2d514a72-9c05-4f10-99f2-533508e0769f":
                            name: "url"
                            type: "STRING"
                          "31d05b81-36d0-426c-b7ff-561184dfec56":
                            name: "name"
                            type: "STRING"
                      "4c85dec0-8dff-45e6-994a-9c82ebee52f4":
                        name: "firmness"
                        type: "OBJECT"
                        properties:
                          fbbf6bd1-6ed2-422b-b851-79d16db75dac:
                            name: "url"
                            type: "STRING"
                          "1cbe6d4c-242b-4936-a010-9d1c00818092":
                            name: "name"
                            type: "STRING"
                      "3a46d989-f7ec-486c-9321-e19600fe1610":
                        name: "growth_time"
                        type: "INTEGER"
                        format: "INT32"
                      "3be8bcf8-193d-416b-b073-721ad4b25e35":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      bc506f45-a2f1-44a1-99c9-81e2c56d0764:
                        name: "size"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "0dce3c87-f0fe-4ac9-9473-baeedec57245":
                        value: "{natural_gift_power=60, flavors=[{flavor={url=http://pokeapi.co/api/v2/berry-flavor/1/, name=spicy}, potency=0}], natural_gift_type={url=http://pokeapi.co/api/v2/type/11/, name=water}, name=chesto, max_harvest=5, soil_dryness=15, smoothness=25, item={url=http://pokeapi.co/api/v2/item/127/, name=chesto-berry}, firmness={url=http://pokeapi.co/api/v2/berry-firmness/5/, name=super-hard}, growth_time=3, id=2, size=80}"
                    mediaTypes:
                    - "application/json"
      f12eeeab-ecb7-49c8-9aa8-544d5c3e9ab6:
        path: "/berry-firmness/{param1}/"
        section: "#/contract/sections/bb60b3aa-1352-42cd-8d53-22400dcb0ccd"
        pathVariables:
          "0e57742f-80a7-4823-bcfa-2b95f56ecb2a":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          b40e04c6-d1ad-4bdc-8da1-edd0797b6e9d:
            name: "Berry Firmness"
            method: "GET"
            operationId: "GET_berry-firmness-param1"
            tags:
            - "Berries"
            responses:
              "2a790c66-25b0-4002-bab9-a7bdb0945de6":
                status: "200"
                bodies:
                  babab30f-f45f-4110-949e-a165721f09ac:
                    type: "OBJECT"
                    properties:
                      "7c3aa419-ab16-4a43-868b-80166e4ff73f":
                        name: "berries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            ce3f0f26-8bc8-4487-a0ee-373706c8049b:
                              name: "url"
                              type: "STRING"
                            e064d2a7-68be-429a-94f1-40dd1e7ff761:
                              name: "name"
                              type: "STRING"
                      "539d6047-45c6-4237-9d81-d79ee804b823":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            ec24270b-7084-4bed-897d-cf03a8561c8e:
                              name: "name"
                              type: "STRING"
                            bdd55a8e-86d6-48bf-af6d-08fd658aa894:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                adcd0ebb-9147-438b-8a8c-4f18064b3882:
                                  name: "url"
                                  type: "STRING"
                                "767b8db0-21ec-4651-a646-76c0e4961c46":
                                  name: "name"
                                  type: "STRING"
                      "0dfbf11d-180d-46da-a649-ffca7312f8a0":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      e43f06f7-ad38-4cc9-ae10-b9f88ec00a52:
                        name: "name"
                        type: "STRING"
                    examples:
                      "85817def-58f1-4464-92bd-a2dcabee75f1":
                        value: "{berries=[{url=http://pokeapi.co/api/v2/berry/1/, name=cheri}], names=[{name=Tendre, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=2, name=soft}"
                    mediaTypes:
                    - "application/json"
      "78fb352a-b5f4-4ef2-bd4c-f4613df23585":
        path: "/berry-flavor/{param1}/"
        section: "#/contract/sections/bb60b3aa-1352-42cd-8d53-22400dcb0ccd"
        pathVariables:
          "4d79c093-e04a-419c-9d5a-b0ed874cc88b":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          aa94ae11-3da4-4b0c-8459-513da1633280:
            name: "Berry Flavor"
            method: "GET"
            operationId: "GET_berry-flavor-param1"
            tags:
            - "Berries"
            responses:
              "1d47978c-33df-4b85-9a07-f25e775626e1":
                status: "200"
                bodies:
                  ad53e07b-1fbd-4dab-940c-d111f4d67f2f:
                    type: "OBJECT"
                    properties:
                      "5c4069d0-5322-45f4-bae7-d381a0da185b":
                        name: "berries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "5743afe0-39c4-4c9c-9c4d-1909d2d5ad89":
                              name: "potency"
                              type: "INTEGER"
                              format: "INT32"
                            "177551bf-be31-4d2a-aedb-a26b5b87b9e6":
                              name: "berry"
                              type: "OBJECT"
                              properties:
                                bdb0dc58-fb39-4b58-b51e-e14d970269b2:
                                  name: "url"
                                  type: "STRING"
                                "8b5ba380-e4da-447a-ba78-fa209cc6e58b":
                                  name: "name"
                                  type: "STRING"
                      "404c00d1-10ff-4e6d-941e-75cc773b2355":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            f1963fb7-7827-4bc2-a0ee-57399311a82b:
                              name: "name"
                              type: "STRING"
                            "2896dace-ed8a-49ee-a81e-73ee2ca36b71":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "98ea8bde-3b6b-41f6-ba54-3271ff58fabe":
                                  name: "url"
                                  type: "STRING"
                                a43105de-df81-43dd-bb29-a1866f81650e:
                                  name: "name"
                                  type: "STRING"
                      "5b24d94b-5fd6-42da-b659-abffd67f1294":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "970a1cd7-e237-45ec-9b06-d38e75a5acab":
                        name: "contest_type"
                        type: "OBJECT"
                        properties:
                          d22cab21-cb2a-4c0b-84e7-122040d2b121:
                            name: "url"
                            type: "STRING"
                          fcc11043-907d-4855-b452-ee7f0e244bed:
                            name: "name"
                            type: "STRING"
                      c79e9d50-ffa5-40e4-9682-e9465796c42d:
                        name: "name"
                        type: "STRING"
                    examples:
                      "63262477-a126-42a9-8185-ca2b247ec911":
                        value: "{berries=[{potency=10, berry={url=http://pokeapi.co/api/v2/berry/48/, name=kasib}}], names=[{name=Sec, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=2, contest_type={url=http://pokeapi.co/api/v2/contest-type/2/, name=beauty}, name=dry}"
                    mediaTypes:
                    - "application/json"
      "7c4171a6-8a62-476c-a2cc-e7ac0ae9adb9":
        path: "/contest-type/{param1}/"
        section: "#/contract/sections/a8f5be8d-50af-4f2a-8619-5b129e85cc43"
        pathVariables:
          "5fdf7b38-20a8-4604-84a9-fbc88f8a8604":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "61675f7a-c073-4413-9ae5-18e37e985790":
            name: "Contest Type"
            method: "GET"
            operationId: "GET_contest-type-param1"
            tags:
            - "Contests"
            responses:
              "78478134-f3f1-42db-989f-bfe61e1c6e5d":
                status: "200"
                bodies:
                  "72450f9f-f149-4af3-bf02-68c99621c120":
                    type: "OBJECT"
                    properties:
                      "93a78622-7561-4140-9893-3a84ae9f2d87":
                        name: "berry_flavor"
                        type: "OBJECT"
                        properties:
                          "7eae8b4d-052a-428e-af54-75a0f24e7ea6":
                            name: "url"
                            type: "STRING"
                          "30d68acb-e9a1-4ccb-89e7-7da5b0b95987":
                            name: "name"
                            type: "STRING"
                      "55ebbebb-0747-4e02-a303-020b1b9b2b73":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "20ecb8b0-bbec-41e9-bfdc-5447c5327a7f":
                              name: "color"
                              type: "STRING"
                            "263e0468-c181-45b9-8ae2-3286f20cc805":
                              name: "name"
                              type: "STRING"
                            f0ad4987-d2bf-438d-8859-3ebad4d31186:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "3b8d87d4-b471-45ec-9610-70dd1d367cce":
                                  name: "url"
                                  type: "STRING"
                                d542ba2b-7ba4-4103-995d-82239fb11ba1:
                                  name: "name"
                                  type: "STRING"
                      "77278c11-20de-47f2-bdd3-44066281ee83":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      d9bd7440-ce8c-4e5e-8526-50c1cc622830:
                        name: "name"
                        type: "STRING"
                    examples:
                      "08048e03-4823-4452-8721-54d403954c59":
                        value: "{berry_flavor={url=http://pokeapi.co/api/v2/berry-flavor/1/, name=spicy}, names=[{color=Rouge, name=Sang-froid, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=1, name=cool}"
                    mediaTypes:
                    - "application/json"
      f5bbb790-d45f-4c99-995d-77ea147060af:
        path: "/contest-effect/{param1}/"
        section: "#/contract/sections/a8f5be8d-50af-4f2a-8619-5b129e85cc43"
        pathVariables:
          "71c999a2-e22d-486a-a1b8-68e95018676c":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "7da1fdb8-fadc-4cd9-b2d4-82d19ba12415":
            name: "Contest Effect"
            method: "GET"
            operationId: "GET_contest-effect-param1"
            tags:
            - "Contests"
            responses:
              "13432fe1-56ab-410b-ab24-0556f62586db":
                status: "200"
                bodies:
                  "9e15329b-ef69-4f6a-810c-76b90ef08cd6":
                    type: "OBJECT"
                    properties:
                      "12441318-664d-4a90-aa2e-5876ef7b5327":
                        name: "effect_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            fc6dc489-b312-43ec-a267-8ffe5ab40c33:
                              name: "effect"
                              type: "STRING"
                            a2859995-59d6-485b-8342-17a42ef247c4:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                fe0b290a-6687-4030-9368-ac295e9e479e:
                                  name: "url"
                                  type: "STRING"
                                "849e45e2-13de-4001-8205-1b08e3544dc9":
                                  name: "name"
                                  type: "STRING"
                      b97bcc91-72c0-4115-930a-7dfd75682dbc:
                        name: "jam"
                        type: "INTEGER"
                        format: "INT32"
                      "94c8943b-f5bd-4705-b6c4-c2850379f701":
                        name: "appeal"
                        type: "INTEGER"
                        format: "INT32"
                      "644679d0-bf3c-4c29-a3e3-f568662b2f86":
                        name: "flavor_text_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "9ece22d1-7cf9-48ee-9b98-2ad15f5a2793":
                              name: "flavor_text"
                              type: "STRING"
                            a72060bd-cc06-44e7-b2de-6ca723809a55:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "767d2846-3f4f-4c2d-a1f2-16b090eb8039":
                                  name: "url"
                                  type: "STRING"
                                a2055df8-416b-45c6-ba9f-dbff1de07e24:
                                  name: "name"
                                  type: "STRING"
                      df52c217-cd99-4751-9c9b-529fb4a7ae70:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      aeca1c32-10b4-457e-ab8d-ffbe89165a07:
                        value: "{effect_entries=[{effect=Gives a high number of appeal points wth no other effects., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], jam=0, appeal=4, flavor_text_entries=[{flavor_text=A highly appealing move., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=1}"
                    mediaTypes:
                    - "application/json"
      "55c4b15f-9c26-4d8d-a9ba-143adfb0e73a":
        path: "/super-contest-effect/{param1}/"
        section: "#/contract/sections/a8f5be8d-50af-4f2a-8619-5b129e85cc43"
        pathVariables:
          f39da820-719c-41bc-bd56-d3c7caaa6c0c:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          aafd0d5a-14f9-4ca8-9660-861fce47f8bd:
            name: "Super Contest Effect"
            method: "GET"
            operationId: "GET_super-contest-effect-param1"
            tags:
            - "Contests"
            responses:
              fa8d84e2-b1b0-4bce-9c61-a831687b3647:
                status: "200"
                bodies:
                  "1fcd8e70-645b-4c1a-a998-f7a4e4f56e33":
                    type: "OBJECT"
                    properties:
                      c13d1d02-6ac9-4a71-9098-338d1299f64c:
                        name: "moves"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "83addb6e-2fe3-4702-9c90-31683dbeb070":
                              name: "url"
                              type: "STRING"
                            "99a90c6f-eb11-4c3e-b67d-f6ff6e4e2a24":
                              name: "name"
                              type: "STRING"
                      "1cbb3459-b62a-4279-8a6f-5a7a2051a041":
                        name: "appeal"
                        type: "INTEGER"
                        format: "INT32"
                      "2ea0c7a6-1236-429a-a653-ea3a27c6109a":
                        name: "flavor_text_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "0def917a-a9f2-4535-8cb2-96ec3fc85c10":
                              name: "flavor_text"
                              type: "STRING"
                            "96d37afd-259e-4b63-a08d-542297411ef6":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "1e05127f-f3ff-4e57-80b8-50976e1e82ef":
                                  name: "url"
                                  type: "STRING"
                                "984c470a-ec33-42ce-b1d0-abbe2c07ff3b":
                                  name: "name"
                                  type: "STRING"
                      "1f9f48d9-738f-4b8e-9aad-68f2677ed9bc":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      a59a6d5e-d2ad-438f-9fd4-b94683d42a39:
                        value: "{moves=[{url=http://pokeapi.co/api/v2/move/97/, name=agility}], appeal=2, flavor_text_entries=[{flavor_text=Enables the user to perform first in the next turn., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=1}"
                    mediaTypes:
                    - "application/json"
      "0cf09b10-f125-48d6-837f-e48b1523ae04":
        path: "/encounter-method/{param1}/"
        section: "#/contract/sections/344f4dad-ffc3-4fd3-a628-884929c98ee9"
        pathVariables:
          "411d7818-f60f-4c02-96d3-376efaab4788":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "1fc6b305-a0c1-4ae0-83b7-45008ba1475b":
            name: "Encounter Method"
            method: "GET"
            operationId: "GET_encounter-method-param1"
            tags:
            - "Encounters"
            responses:
              "95ad88ca-f78a-4549-976f-19bccca1d538":
                status: "200"
                bodies:
                  c4b065f8-ad2e-42fb-bb04-5b466708379e:
                    type: "OBJECT"
                    properties:
                      ea6a7284-e93e-4bf9-a6fa-8a1d3d46e907:
                        name: "order"
                        type: "INTEGER"
                        format: "INT32"
                      "1c73ead0-636f-4066-ac2d-09410e0343a0":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1e49f07e-d0a5-47ba-a7db-f444b84ba0bf":
                              name: "name"
                              type: "STRING"
                            "2b6a4c22-9a6d-43aa-8bd3-05fb9e492930":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                d05a4ff3-0a19-4134-84e6-9157426110ec:
                                  name: "url"
                                  type: "STRING"
                                "9f382c33-53ef-44dd-bf48-79ea52399b67":
                                  name: "name"
                                  type: "STRING"
                      b816a16c-b331-4407-9b3e-42859a102ef4:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      afb35aa4-f415-41ba-adc9-90f51fd53f77:
                        name: "name"
                        type: "STRING"
                    examples:
                      ecc5f559-d502-45b3-9408-5f84a22ae02f:
                        value: "{order=10, names=[{name=Mit einer normalen Angel angeln, language={url=http://pokeapi.co/api/v2/language/6/, name=de}}], id=2, name=old-rod}"
                    mediaTypes:
                    - "application/json"
      "0122d734-e0fa-4769-9543-4475b2b62a59":
        path: "/encounter-condition/{param1}/"
        section: "#/contract/sections/344f4dad-ffc3-4fd3-a628-884929c98ee9"
        pathVariables:
          d6a7274a-9b04-4ee1-a46a-d4d9a86d3359:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "5b1730ca-7758-47e1-bc19-e0cae392a62a":
            name: "Encounter Condition"
            method: "GET"
            operationId: "GET_encounter-condition-param1"
            tags:
            - "Encounters"
            responses:
              "956e9376-9d2b-45ff-8db9-fb025aea9e13":
                status: "200"
                bodies:
                  e13902ff-1e4c-412d-9118-e58a76904f5b:
                    type: "OBJECT"
                    properties:
                      "30aee313-5081-4d81-a4ed-4ca97bc5eec3":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "527646b5-c576-44b3-b01f-9211f3f86343":
                              name: "name"
                              type: "STRING"
                            "2ac9d0bc-2523-4491-8042-ab47bc3bac68":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "8b5b2148-fe46-46cd-90b3-1c4298952b67":
                                  name: "url"
                                  type: "STRING"
                                c025e561-ffba-4674-a578-0fc60d28a25a:
                                  name: "name"
                                  type: "STRING"
                      "9c1cf048-c28c-46d3-8346-8c083bd1a7a5":
                        name: "values"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            fb709774-0e67-48a5-882c-08708beb782b:
                              name: "url"
                              type: "STRING"
                            "6b88b1eb-3899-413e-a7e2-0b11243bbd94":
                              name: "name"
                              type: "STRING"
                      e3bd2815-ae02-438d-87f6-c076c3d6f8f3:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      d23913c1-c934-41a8-abec-2ad9271559d0:
                        name: "name"
                        type: "STRING"
                    examples:
                      "4cc972c1-9eea-44ca-a6be-f99de883bbb5":
                        value: "{names=[{name=Période horaire, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], values=[{url=http://pokeapi.co/api/v2/encounter-condition-value/3/, name=time-morning}], id=2, name=time}"
                    mediaTypes:
                    - "application/json"
      "6ed609dc-96e4-4179-8073-a103e03af749":
        path: "/encounter-condition-value/{param1}/"
        section: "#/contract/sections/344f4dad-ffc3-4fd3-a628-884929c98ee9"
        pathVariables:
          e10b5009-acef-4366-8d54-15597e9719bf:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          e0fb08f1-45d7-4fa3-95c4-207fd86a44d1:
            name: "Encounter Condition Value"
            method: "GET"
            operationId: "GET_encounter-condition-value-param1"
            tags:
            - "Encounters"
            responses:
              "993373e8-f40a-47a8-a0cd-d235afd70c3f":
                status: "200"
                bodies:
                  "53738f56-4751-41ef-ac00-fe52d87396e4":
                    type: "OBJECT"
                    properties:
                      e5ded831-3577-434b-8fd2-c90c01670f92:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            d23f84b4-d90b-4627-851e-fe46f74ac240:
                              name: "name"
                              type: "STRING"
                            "1b43ec6e-ca09-4b75-9094-eb2116cfc910":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "5f7a9d2c-d179-4b0a-aae9-2c8b2b0ea81d":
                                  name: "url"
                                  type: "STRING"
                                dd0837d9-774b-40e3-9ef3-e61342393fb8:
                                  name: "name"
                                  type: "STRING"
                      dba77ec2-7136-4adf-937e-4578ebda43df:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "0b219819-3d54-4e13-bb36-45caeb99cb56":
                        name: "condition"
                        type: "OBJECT"
                        properties:
                          "3be24409-95d9-4b37-9dee-9af3b3fb5c76":
                            name: "url"
                            type: "STRING"
                          "500c900b-05ed-45a2-b186-94ca83f9b87d":
                            name: "name"
                            type: "STRING"
                      "4911c586-bf60-4fd8-bb12-b2dc699ea84f":
                        name: "name"
                        type: "STRING"
                    examples:
                      "0c6e79e8-6e3a-4af9-a6b6-11758dd014ce":
                        value: "{names=[{name=Außerhalb eines Schwarms, language={url=http://pokeapi.co/api/v2/language/6/, name=de}}], id=2, condition={url=http://pokeapi.co/api/v2/encounter-condition/1/, name=swarm}, name=swarm-no}"
                    mediaTypes:
                    - "application/json"
      f8206b80-fdbd-459d-83af-73184a03a685:
        path: "/evolution-chain/{param1}/"
        section: "#/contract/sections/d158613b-7064-4bb1-82ca-f593eb06c51b"
        pathVariables:
          d3bf6892-3c34-4499-bc39-8373a7b8fc0c:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "3d6a367f-ce1a-45f1-87b1-7eac2bdc8d79":
            name: "Evolution Chain"
            method: "GET"
            operationId: "GET_evolution-chain-param1"
            tags:
            - "Evolutions"
            responses:
              "39f7bb3a-9c5b-4ea7-a4a2-94c7a3f304f1":
                status: "200"
                bodies:
                  f330ae5b-f7bd-41e6-9a16-74e1471345d8:
                    type: "OBJECT"
                    properties:
                      bef3697f-a2ba-4821-a340-47ba8599171b:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "93b1757e-7ae4-4e6f-aca9-f218175d7aa2":
                        name: "chain"
                        type: "OBJECT"
                        properties:
                          "8a7ceab8-2b37-4994-a6b4-35eecfeb282b":
                            name: "evolution_details"
                            type: "ARRAY"
                            items:
                              type: "OBJECT"
                          eb343983-c94c-4f92-a475-089f862fd6b9:
                            name: "evolves_to"
                            type: "ARRAY"
                            items:
                              type: "OBJECT"
                              properties:
                                ebb44a6a-3d1f-470a-b415-2e525220c88b:
                                  name: "evolution_details"
                                  type: "ARRAY"
                                  items:
                                    type: "OBJECT"
                                    properties:
                                      "47934fe9-77e1-4614-b2c9-f188c27cc325":
                                        name: "min_level"
                                        type: "INTEGER"
                                        format: "INT32"
                                      eaa0e142-137a-4cd1-9cdd-79d6e1f616f2:
                                        name: "time_of_day"
                                        type: "STRING"
                                      d9bed9ee-5187-4eea-969b-2d28a2a43ed0:
                                        name: "needs_overworld_rain"
                                        type: "BOOLEAN"
                                      d09d364d-9d1d-4f8d-a564-a0ca273a5ab6:
                                        name: "turn_upside_down"
                                        type: "BOOLEAN"
                                      "88a35891-7c79-4b82-bcfc-4978f944111f":
                                        name: "trigger"
                                        type: "OBJECT"
                                        properties:
                                          "2915bd35-7e7a-4659-a91e-89b062fc8f4a":
                                            name: "url"
                                            type: "STRING"
                                          "2d4387fc-76ce-402b-9e12-7fdc01f4944c":
                                            name: "name"
                                            type: "STRING"
                                "2f6e2a87-2046-4155-90bc-12690301da38":
                                  name: "evolves_to"
                                  type: "ARRAY"
                                  items:
                                    type: "OBJECT"
                                    properties:
                                      "40a19440-550a-4870-843f-a375bd26ed07":
                                        name: "evolution_details"
                                        type: "ARRAY"
                                        items:
                                          type: "OBJECT"
                                          properties:
                                            "0d58d0c5-5061-4f88-ac42-e6315cee4deb":
                                              name: "min_level"
                                              type: "INTEGER"
                                              format: "INT32"
                                            "29bd7b60-b6a7-42e9-98d7-dd64a2585a5c":
                                              name: "time_of_day"
                                              type: "STRING"
                                            "77bceb3b-5565-43a2-bf22-b0f43c9dbe41":
                                              name: "needs_overworld_rain"
                                              type: "BOOLEAN"
                                            "07df42f3-4277-427d-9a20-792c0b076d8d":
                                              name: "turn_upside_down"
                                              type: "BOOLEAN"
                                            dfad3bac-df58-4d84-94bb-c214b0527bde:
                                              name: "trigger"
                                              type: "OBJECT"
                                              properties:
                                                f2010d45-dac3-41f5-a1a8-ad50215dac40:
                                                  name: "url"
                                                  type: "STRING"
                                                "1d9e398d-dc57-4b9b-8057-bdb38e135f2f":
                                                  name: "name"
                                                  type: "STRING"
                                      d6dd8583-17aa-4c8e-bf57-bb91ce459d67:
                                        name: "evolves_to"
                                        type: "ARRAY"
                                        items:
                                          type: "OBJECT"
                                      b5d128ff-dcbf-4a5c-a4f8-48c0874f90c7:
                                        name: "is_baby"
                                        type: "BOOLEAN"
                                      "3c2356ef-7850-41fc-a2ec-e95ef2cdb3ae":
                                        name: "species"
                                        type: "OBJECT"
                                        properties:
                                          "55cae134-dbc9-4ec3-a35d-a691a5c03b23":
                                            name: "url"
                                            type: "STRING"
                                          "538b2a94-cacd-4e7a-814e-4b0e8a0913b8":
                                            name: "name"
                                            type: "STRING"
                                e41516af-3771-48ad-96e1-b278045ba557:
                                  name: "is_baby"
                                  type: "BOOLEAN"
                                "92933cb6-7421-4369-ba74-f94ad70e2f7f":
                                  name: "species"
                                  type: "OBJECT"
                                  properties:
                                    f0b27b68-89c5-40dd-9dcc-faf87378b7ba:
                                      name: "url"
                                      type: "STRING"
                                    d2c99f51-5521-4192-a6c2-a77cd358f598:
                                      name: "name"
                                      type: "STRING"
                          "4cab9cb9-78f1-4ae0-a5c5-bec191f754bf":
                            name: "is_baby"
                            type: "BOOLEAN"
                          eb917cc7-190d-4648-bd3d-a323efa01cd0:
                            name: "species"
                            type: "OBJECT"
                            properties:
                              "6ac7a7db-67ac-496a-b013-9a8adf0d0280":
                                name: "url"
                                type: "STRING"
                              "49a948bf-be4a-4e80-ab85-8a00692f8dd2":
                                name: "name"
                                type: "STRING"
                    examples:
                      e2c96c4a-58ea-498e-9758-9818f86c5fe9:
                        value: "{id=2, chain={evolution_details=[], evolves_to=[{evolution_details=[{min_level=16, time_of_day=, needs_overworld_rain=false, turn_upside_down=false, trigger={url=http://pokeapi.co/api/v2/evolution-trigger/1/, name=level-up}}], evolves_to=[{evolution_details=[{min_level=36, time_of_day=, needs_overworld_rain=false, turn_upside_down=false, trigger={url=http://pokeapi.co/api/v2/evolution-trigger/1/, name=level-up}}], evolves_to=[], is_baby=false, species={url=http://pokeapi.co/api/v2/pokemon-species/6/, name=charizard}}], is_baby=false, species={url=http://pokeapi.co/api/v2/pokemon-species/5/, name=charmeleon}}], is_baby=false, species={url=http://pokeapi.co/api/v2/pokemon-species/4/, name=charmander}}}"
                    mediaTypes:
                    - "application/json"
      "8861c574-d1c8-4a8e-941a-e28e9ac48d89":
        path: "/evolution-trigger/{param1}/"
        section: "#/contract/sections/d158613b-7064-4bb1-82ca-f593eb06c51b"
        pathVariables:
          e31b67eb-3a93-40ed-8b25-41f8c496398c:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "8e161594-eb42-4763-a1fe-4839989265f7":
            name: "Evolution Trigger"
            method: "GET"
            operationId: "GET_evolution-trigger-param1"
            tags:
            - "Evolutions"
            responses:
              "0acbfa48-5dfb-4712-b281-ab5ae6045ff3":
                status: "200"
                bodies:
                  fb6c0454-ee33-46d8-a23d-60fd59b21749:
                    type: "OBJECT"
                    properties:
                      "2a16e207-d943-4c08-943d-9287c715145e":
                        name: "pokemon_species"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "54306d4a-c562-4b4c-a2a0-413289751cb2":
                              name: "url"
                              type: "STRING"
                            "5398ec72-15db-4e75-a7bc-04fbd9c212cb":
                              name: "name"
                              type: "STRING"
                      "80257de8-65e6-42bb-8d90-60a895caa205":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "80e81d27-2bac-4955-bad5-640479cc3d3f":
                              name: "name"
                              type: "STRING"
                            "7ad7e87d-9a78-4b4e-98f0-13645661c23c":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                eae5a401-8ce7-498f-af41-cbdf0bcac398:
                                  name: "url"
                                  type: "STRING"
                                "89d6f8be-1a7d-4525-acee-ee48cc657300":
                                  name: "name"
                                  type: "STRING"
                      "6c790e7e-056f-4514-8f03-c29206a9db10":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      f7bb16f0-988e-49b8-abce-6b98b35e210e:
                        name: "name"
                        type: "STRING"
                    examples:
                      "1da29bd5-32a7-4154-b6d6-8e259bd70f98":
                        value: "{pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/65/, name=alakazam}], names=[{name=Échange, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=2, name=trade}"
                    mediaTypes:
                    - "application/json"
      e0fb7a6d-b872-4f95-acf7-952a7bbd5908:
        path: "/generation/{param1}/"
        section: "#/contract/sections/51093d4b-0a5b-4ade-8bf2-fb24d88b55da"
        pathVariables:
          "2b755730-0f1e-41be-9449-8bf644f8c79e":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          adcdb371-ad3e-447d-a41b-35c942d4c02b:
            name: "Generation"
            method: "GET"
            operationId: "GET_generation-param1"
            tags:
            - "Games"
            responses:
              "8cc10857-5381-4033-9812-88cfa595108b":
                status: "200"
                bodies:
                  "3b5d72cb-5b9e-4e02-9123-c40b9f4c9f4e":
                    type: "OBJECT"
                    properties:
                      f38813b5-63b6-41b4-a316-7dfab96cc60d:
                        name: "abilities"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                      "4632a3b7-0220-4455-b34a-ac8b23461470":
                        name: "name"
                        type: "STRING"
                      e263fc69-e329-4a2e-9ad4-a0bb8fd0cb3c:
                        name: "version_groups"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "119d7496-5564-45d5-9ce6-86a9e68eae70":
                              name: "url"
                              type: "STRING"
                            "32423f4f-7515-4a55-abe1-d1e08e365377":
                              name: "name"
                              type: "STRING"
                      "1e08a664-c21f-45a1-bc61-b73572dfd7fb":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "4fd0e898-c70d-4a85-956f-9cddaad6eaff":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            cd9bf88f-f09f-49e0-906e-75c38f480eec:
                              name: "name"
                              type: "STRING"
                            db3442c6-0962-4252-85ba-436f3a40d8a7:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "40455344-1713-4478-9258-45153a438e0d":
                                  name: "url"
                                  type: "STRING"
                                "32160e73-d417-4a54-806e-eaa39c9b93d8":
                                  name: "name"
                                  type: "STRING"
                      "898aba61-213b-4329-b9de-adba28167327":
                        name: "pokemon_species"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "3ce43dc7-4640-467b-95e4-cee4cebbf54c":
                              name: "url"
                              type: "STRING"
                            b9a56fb7-23de-477d-be3a-449c78d1d77a:
                              name: "name"
                              type: "STRING"
                      ffb027ff-3195-4c65-acdc-e87ae89ca5d3:
                        name: "moves"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1d2364bf-d32d-4edf-8a18-35cf2097acbb":
                              name: "url"
                              type: "STRING"
                            d99ea984-5ae3-49fa-a356-a796da5eef35:
                              name: "name"
                              type: "STRING"
                      "55d340e3-47be-4860-b231-8f96a1d01f49":
                        name: "main_region"
                        type: "OBJECT"
                        properties:
                          "8f633919-f9b7-451a-9f43-1f8d107fa93c":
                            name: "url"
                            type: "STRING"
                          "4ddccc61-d224-491a-bd21-dbb396a7c8b9":
                            name: "name"
                            type: "STRING"
                      dee20b9b-f6ab-4458-86d6-8d5ed0098065:
                        name: "types"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "36fa0281-5b93-44b4-8ddb-0ee1bcf48637":
                              name: "url"
                              type: "STRING"
                            "2257c0db-8818-4f72-a965-5a9c2fe267e8":
                              name: "name"
                              type: "STRING"
                    examples:
                      ed9fda82-2448-41d5-b24d-0a9e499e6b52:
                        value: "{abilities=[], name=generation-ii, version_groups=[{url=http://pokeapi.co/api/v2/version-group/3/, name=gold-silver}], id=2, names=[{name=Génération II, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/152/, name=chikorita}], moves=[{url=http://pokeapi.co/api/v2/move/251/, name=beat-up}], main_region={url=http://pokeapi.co/api/v2/region/2/, name=johto}, types=[{url=http://pokeapi.co/api/v2/type/9/, name=steel}]}"
                    mediaTypes:
                    - "application/json"
      c2202451-62af-4495-8211-abe6e32bc530:
        path: "/pokedex/{param1}/"
        section: "#/contract/sections/51093d4b-0a5b-4ade-8bf2-fb24d88b55da"
        pathVariables:
          "791bcf17-5435-47f5-b4c8-b47b02066e6b":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          e59bfa6b-7174-472a-98f3-9ffea08e405b:
            name: "Pokedex"
            method: "GET"
            operationId: "GET_pokedex-param1"
            tags:
            - "Games"
            responses:
              "18ebd880-1a20-4a83-84be-020f984bc66c":
                status: "200"
                bodies:
                  ea814fa2-bf04-4158-a72b-05a838336964:
                    type: "OBJECT"
                    properties:
                      "9fd677d8-6bd0-4680-a515-b5cbfb753474":
                        name: "name"
                        type: "STRING"
                      ecab7a99-319e-4ed7-bb4a-730eb1af1952:
                        name: "region"
                        type: "OBJECT"
                        properties:
                          ee7a3800-5f9c-4d68-816d-6d85abb2a16d:
                            name: "url"
                            type: "STRING"
                          dc47747e-2a17-4e56-b7bc-a8e8bb7519e5:
                            name: "name"
                            type: "STRING"
                      c84655c6-d25c-4b7a-b8b1-9cc532215715:
                        name: "version_groups"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "9528bc36-003a-4969-ac89-c254cc81b644":
                              name: "url"
                              type: "STRING"
                            ece3a6f1-8a81-43c8-bfa2-3f425d16a200:
                              name: "name"
                              type: "STRING"
                      "758a755b-33b3-4f9a-8422-fe792f9a1d26":
                        name: "is_main_series"
                        type: "BOOLEAN"
                      "1864d75e-3b87-4819-92eb-f365b318dcf3":
                        name: "descriptions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "74164a83-33b0-4450-80e8-27ebcbe1b87e":
                              name: "description"
                              type: "STRING"
                            "33ce40e9-924c-44b2-abec-f11691e0e51f":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "991e3eba-ec90-4c24-8b56-d3dfdad6729d":
                                  name: "url"
                                  type: "STRING"
                                aac2b51c-4abb-4685-995e-e64d9269aaa2:
                                  name: "name"
                                  type: "STRING"
                      cf380967-4518-403e-9649-04bbb1563cd7:
                        name: "pokemon_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "4955eb30-4c13-4166-ab2c-ebfbb93d4f77":
                              name: "entry_number"
                              type: "INTEGER"
                              format: "INT32"
                            "46e63eca-9d90-4163-a325-56d97ab8b19c":
                              name: "pokemon_species"
                              type: "OBJECT"
                              properties:
                                "47b5e83d-c717-4d63-83b5-ae262377e4d5":
                                  name: "url"
                                  type: "STRING"
                                "29193acb-fb2e-4925-a2e7-70c7df11460e":
                                  name: "name"
                                  type: "STRING"
                      b4c3fb28-abc8-4579-973a-195dac0bf7c1:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "30cf7c6c-a01e-4246-af0e-73da1f7b6be0":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            c38f2e50-18ef-4157-8b7f-e8c609ec80d7:
                              name: "name"
                              type: "STRING"
                            "9cfceb02-ee36-4dea-8ab6-9def7c9ebe33":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "67169afe-038f-4d49-ba88-e9dc3b4723ef":
                                  name: "url"
                                  type: "STRING"
                                abc8331f-68d7-4ebf-8716-31ec07f55ce1:
                                  name: "name"
                                  type: "STRING"
                    examples:
                      "3fcc2276-1fa8-49cb-bbcb-631d996a2158":
                        value: "{name=kanto, region={url=http://pokeapi.co/api/v2/region/1/, name=kanto}, version_groups=[{url=http://pokeapi.co/api/v2/version-group/1/, name=red-blue}], is_main_series=true, descriptions=[{description=Pokédex régional de Kanto dans Rouge/Bleu/Jaune, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], pokemon_entries=[{entry_number=1, pokemon_species={url=http://pokeapi.co/api/v2/pokemon-species/1/, name=bulbasaur}}], id=2, names=[{name=Kanto, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}]}"
                    mediaTypes:
                    - "application/json"
      "0af40ebf-d677-4f6c-8167-badc133bd116":
        path: "/version/{param1}/"
        section: "#/contract/sections/51093d4b-0a5b-4ade-8bf2-fb24d88b55da"
        pathVariables:
          ddff236e-ed6d-4e70-9bd8-8937243d3987:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "8b277b80-04bf-4666-8689-ba57b8fa1088":
            name: "Version"
            method: "GET"
            operationId: "GET_version-param1"
            tags:
            - "Games"
            responses:
              "1f32ab60-10d2-412d-9541-2f47de58c0e5":
                status: "200"
                bodies:
                  "48a55086-0e8a-44af-9d07-d74de83bd3e4":
                    type: "OBJECT"
                    properties:
                      "65419115-dd94-4d22-ab87-19784be2ee8a":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            b63efee3-48fe-4a6e-8d28-a9c2e4fe94db:
                              name: "name"
                              type: "STRING"
                            a6f10ad8-7713-44a4-9530-3d6c54731e06:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "7d092126-4bf9-4f26-afb8-0deca4ca0176":
                                  name: "url"
                                  type: "STRING"
                                "667dd553-b86b-4dcd-99c2-c8bf80aa8bc3":
                                  name: "name"
                                  type: "STRING"
                      f4fbf4cb-bdcf-4ef4-a9b6-6108ffad63fe:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "0153be18-c89c-46ef-936b-d42af55565f5":
                        name: "version_group"
                        type: "OBJECT"
                        properties:
                          cbbb81ab-c8a1-4d58-9184-3866f32b5717:
                            name: "url"
                            type: "STRING"
                          "39cd2fcf-d464-444c-a440-45f2e82bb62d":
                            name: "name"
                            type: "STRING"
                      "91aa28cd-d944-482e-91c5-8bc4e7aa17c9":
                        name: "name"
                        type: "STRING"
                    examples:
                      d4a768fa-44e0-45ac-91cf-14a3c6809641:
                        value: "{names=[{name=緑, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], id=2, version_group={url=http://pokeapi.co/api/v2/version-group/1/, name=red-blue}, name=blue}"
                    mediaTypes:
                    - "application/json"
      "110bcf23-b33b-41cb-9c9c-8d42388b63a0":
        path: "/version-group/{param1}/"
        section: "#/contract/sections/51093d4b-0a5b-4ade-8bf2-fb24d88b55da"
        pathVariables:
          d4314219-9807-4bd9-a89f-3dcb66b67c62:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          af4cd104-781b-4cb0-9095-89051bd4509e:
            name: "Version Group"
            method: "GET"
            operationId: "GET_version-group-param1"
            tags:
            - "Games"
            responses:
              e249cfb7-1bc7-4e5d-a9c6-1c1f0f5a3cdf:
                status: "200"
                bodies:
                  bbf5b42d-49dd-4047-82b5-5c131b3bb03f:
                    type: "OBJECT"
                    properties:
                      ef1b7c01-fd34-47c3-8950-c7c4afe9f191:
                        name: "move_learn_methods"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1aaaaff7-5d4c-41a7-9327-060de91087c9":
                              name: "url"
                              type: "STRING"
                            b910a3c8-d275-4fd8-acf9-3b3ee6a95355:
                              name: "name"
                              type: "STRING"
                      c6392cca-2523-437a-bd12-f23a54927621:
                        name: "name"
                        type: "STRING"
                      b450bf67-3ded-4a68-8b3f-d62a05a0226c:
                        name: "versions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "5ddda6f7-da3e-4e05-a19c-666520e7b445":
                              name: "url"
                              type: "STRING"
                            "42092eed-921a-4d67-8dbd-1c8df1675837":
                              name: "name"
                              type: "STRING"
                      af0f148c-00bd-4c9a-965c-658649229082:
                        name: "generation"
                        type: "OBJECT"
                        properties:
                          "69e05cee-1de3-430b-b3a4-2930092b9097":
                            name: "url"
                            type: "STRING"
                          "4165ffb5-4fb5-4442-b20a-1b0b487564be":
                            name: "name"
                            type: "STRING"
                      acf254eb-0280-4311-baa9-077a6bd063b3:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "433be3e9-3e85-4e8f-b17d-3c0f85a3a2b5":
                        name: "regions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "420bcef1-6f86-41c7-8fce-caf0b8edfc72":
                              name: "url"
                              type: "STRING"
                            "7259827c-e7da-47d6-8b00-2b724e868c06":
                              name: "name"
                              type: "STRING"
                      "08852273-7886-4c16-8a29-27dfafc48c6c":
                        name: "pokedexes"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            a0c86f93-a294-48a4-8315-34dd1c5a93e8:
                              name: "url"
                              type: "STRING"
                            d55b2114-3d9c-4e8a-9464-1d655d1748c5:
                              name: "name"
                              type: "STRING"
                      "19ac4bee-30b2-4041-8acb-012dcb6e397e":
                        name: "order"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "9b5688e2-4d13-449c-92b5-5b2ff4ea3544":
                        value: "{move_learn_methods=[{url=http://pokeapi.co/api/v2/move-learn-method/1/, name=level-up}], name=yellow, versions=[{url=http://pokeapi.co/api/v2/version/3/, name=yellow}], generation={url=http://pokeapi.co/api/v2/generation/1/, name=generation-i}, id=2, regions=[{url=http://pokeapi.co/api/v2/region/1/, name=kanto}], pokedexes=[{url=http://pokeapi.co/api/v2/pokedex/2/, name=kanto}], order=2}"
                    mediaTypes:
                    - "application/json"
      a5ee1029-58f2-49c3-bc3a-c2f14aa00025:
        path: "/item/{param1}/"
        section: "#/contract/sections/ef36b112-1eb1-4d20-bca6-2a5b645e1c77"
        pathVariables:
          d40fa6fc-cc51-4939-a46f-15652e405f6a:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "9cb311f3-14c4-45e9-8d91-e073566a50b0":
            name: "Item"
            method: "GET"
            operationId: "GET_item-param1"
            tags:
            - "Items"
            responses:
              c2b36c5b-bd08-4826-bf57-85059bca7423:
                status: "200"
                bodies:
                  "84dd8450-2db6-402b-9f67-f818049befb7":
                    type: "OBJECT"
                    properties:
                      "35120df2-d034-4362-9bbc-ab890d6c4704":
                        name: "category"
                        type: "OBJECT"
                        properties:
                          efb45ccc-62fb-40f3-b0e4-e5ea7a3e1e56:
                            name: "url"
                            type: "STRING"
                          "817f1abb-26b5-4c88-9e1d-ec4c59df390a":
                            name: "name"
                            type: "STRING"
                      "95d57c09-ed7c-4c03-8ce6-3fdaa2c1d047":
                        name: "name"
                        type: "STRING"
                      "85695e85-1e6d-44b1-a86c-1b0c19c0509e":
                        name: "effect_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "0c2bfcd9-99c6-4b48-9acd-d398f2563161":
                              name: "short_effect"
                              type: "STRING"
                            "3e896f15-f518-4bba-882e-3c7376bcc862":
                              name: "effect"
                              type: "STRING"
                            "69dfa053-714a-4612-9f30-3e3f858c4dad":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                cb2178a1-2e21-4ce0-b2fa-4bd342d63c11:
                                  name: "url"
                                  type: "STRING"
                                "4a2188c6-7f72-4ef8-bf1f-783d4734168c":
                                  name: "name"
                                  type: "STRING"
                      d86feeee-24a2-4716-8026-50390f022a00:
                        name: "held_by_pokemon"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                      "6c3160ca-4a11-428d-914c-7cb28d90bba6":
                        name: "sprites"
                        type: "OBJECT"
                        properties:
                          c6c7c80c-92ff-4a9a-823d-df11c5f775af:
                            name: "default"
                            type: "STRING"
                      "3fb40ab2-ecd1-467c-ba2c-d5d39637a888":
                        name: "game_indices"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "3ab0b97a-c45f-4cc4-9158-7610d4fde16a":
                              name: "generation"
                              type: "OBJECT"
                              properties:
                                b45c50de-4bad-4cf0-9c6d-1c6439e53b0c:
                                  name: "url"
                                  type: "STRING"
                                "62d86106-5f62-4e34-a130-8ff7b2fc9d7f":
                                  name: "name"
                                  type: "STRING"
                            "4aa318b6-da95-46d4-901f-ee11c5d8c74d":
                              name: "game_index"
                              type: "INTEGER"
                              format: "INT32"
                      "67f90a04-e66f-4ba8-b100-e8a5b002956f":
                        name: "cost"
                        type: "INTEGER"
                        format: "INT32"
                      "4af21c8c-8ea4-434b-9794-bcbcd24f9c49":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            f781c4bc-50b8-4be6-b08b-df0759fb223a:
                              name: "name"
                              type: "STRING"
                            "56ceefdc-e061-470c-986f-6c8b8fb1064d":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "41767a19-8871-4703-bc7a-7ffca010e7ec":
                                  name: "url"
                                  type: "STRING"
                                "97d7b35c-2165-4e8d-865c-0990d13f6286":
                                  name: "name"
                                  type: "STRING"
                      ed28ca22-1b78-495e-87b1-09f14f40bab0:
                        name: "attributes"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            dbc5b893-2ab9-4fa8-8254-1ba08859536b:
                              name: "url"
                              type: "STRING"
                            "358f3215-6507-4f99-9ead-52200e3821eb":
                              name: "name"
                              type: "STRING"
                      "5f0d8823-9dfe-483f-99e0-2580fd22a576":
                        name: "flavor_text_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1b1af21e-2a5f-4332-a937-66450ee7f3e7":
                              name: "text"
                              type: "STRING"
                            "6ac641dd-d969-4543-a834-720661c0ddf8":
                              name: "version_group"
                              type: "OBJECT"
                              properties:
                                bdaa0b4a-a2ed-4422-b593-4fe4d34499ce:
                                  name: "url"
                                  type: "STRING"
                                ce3ecb82-af1e-4587-bf86-8d07ba9ec916:
                                  name: "name"
                                  type: "STRING"
                            "5b031989-c851-468c-8661-55a328fd12c1":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                da2332b1-8dc8-4070-b4d6-5d9aae4b04bc:
                                  name: "url"
                                  type: "STRING"
                                "38315eaa-eadd-448b-9660-284e0b9301e4":
                                  name: "name"
                                  type: "STRING"
                      f27705d0-4612-48bb-95c2-2e460470c2b7:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "7b507997-95a9-4da9-83b0-7729f2c939db":
                        value: "{category={url=http://pokeapi.co/api/v2/item-category/34/, name=standard-balls}, name=ultra-ball, effect_entries=[{short_effect=Tries to catch a wild Pokémon.  Success rate is 2×., effect=Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 2×.\n\n    If used in a trainer battle, nothing happens and the ball is lost., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], held_by_pokemon=[], sprites={default=http://pokeapi.co/media/sprites/items/ultra-ball.png}, game_indices=[{generation={url=http://pokeapi.co/api/v2/generation/6/, name=generation-vi}, game_index=2}], cost=1200, names=[{name=Ultra Ball, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], attributes=[{url=http://pokeapi.co/api/v2/item-attribute/1/, name=countable}], flavor_text_entries=[{text=スーパーボールよりも　さらに\nポケモンを　捕まえやすくなった\nすごく　性能のいい　ボール。, version_group={url=http://pokeapi.co/api/v2/version-group/15/, name=x-y}, language={url=http://pokeapi.co/api/v2/language/11/, name=ja-kanji}}], id=2}"
                    mediaTypes:
                    - "application/json"
      "7b033f26-558c-4d40-9556-bf4929e8dbd8":
        path: "/item-attribute/{param1}/"
        section: "#/contract/sections/ef36b112-1eb1-4d20-bca6-2a5b645e1c77"
        pathVariables:
          adf50d04-717b-4881-adfc-8ea051b09315:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "85d5386a-a779-4a25-8f57-a1692eb052fa":
            name: "Item Attribute"
            method: "GET"
            operationId: "GET_item-attribute-param1"
            tags:
            - "Items"
            responses:
              ad11d2f6-ed49-47b6-a90e-f3a3082e1a9a:
                status: "200"
                bodies:
                  "5f184748-f844-43ce-8614-bdb646905923":
                    type: "OBJECT"
                    properties:
                      "3a36a7db-8954-48d2-80ef-dc8ae7302ccc":
                        name: "descriptions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "91f363e5-4b94-4419-872a-39b87d70f1b4":
                              name: "description"
                              type: "STRING"
                            "960c6428-9716-4a9e-9ff5-4df0bfdb10d2":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "0ad196fa-8d4c-48ee-8526-e2d387d65f0e":
                                  name: "url"
                                  type: "STRING"
                                ae1a15ef-d705-4946-a029-f07bfeddd19d:
                                  name: "name"
                                  type: "STRING"
                      cb7f4a59-6605-4f98-9fe3-070808b39820:
                        name: "items"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            aec23155-3370-4a65-a540-8a78aa82e29e:
                              name: "url"
                              type: "STRING"
                            bc4344d4-88e6-4d54-b7b5-0e58a07b6609:
                              name: "name"
                              type: "STRING"
                      dd99a7d1-efee-4f10-b3c8-3c739c06c840:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            c7dc7dda-ec58-4a14-b2a7-8543160e0f9b:
                              name: "name"
                              type: "STRING"
                            ae2b2b77-90b6-4b1e-8661-84d727b43b81:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "05bd16fa-6d2a-4bdb-9fb1-bb04014b6d22":
                                  name: "url"
                                  type: "STRING"
                                "6dca30a2-6327-47f8-84c1-5e6143af67bd":
                                  name: "name"
                                  type: "STRING"
                      "48066538-15c0-4558-902e-3bf35cfbe99c":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      d50c191e-951f-4441-87f0-82747b6dcc53:
                        name: "name"
                        type: "STRING"
                    examples:
                      "9cffbbc5-ef52-4dac-a65b-163868ece306":
                        value: "{descriptions=[{description=Consumed when used, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], items=[{url=http://pokeapi.co/api/v2/item/1/, name=master-ball}], names=[{name=Consumable, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=2, name=consumable}"
                    mediaTypes:
                    - "application/json"
      "3c85a886-eaef-4b40-94d5-cbeff08a73cd":
        path: "/item-category/{param1}"
        section: "#/contract/sections/ef36b112-1eb1-4d20-bca6-2a5b645e1c77"
        pathVariables:
          e88499b6-31c3-477d-8e98-c0ba285dad46:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "3d6e8cb7-e7d3-4ab4-897d-a3dcedfb8322":
            name: "Item Category"
            method: "GET"
            operationId: "GET_item-category-param1"
            tags:
            - "Items"
            responses:
              "61301a63-2887-418f-89b2-302b3cf4e024":
                status: "200"
                bodies:
                  b357b6f3-8099-4ef2-bdae-f7f64b8c62d5:
                    type: "OBJECT"
                    properties:
                      "67f5d044-d838-4828-9f08-8cab4063f575":
                        name: "pocket"
                        type: "OBJECT"
                        properties:
                          "6f0d22b3-7235-471f-b344-314b3440b0bc":
                            name: "url"
                            type: "STRING"
                          e7fe454b-d244-4c60-9638-a18c0a0b53f0:
                            name: "name"
                            type: "STRING"
                      "960599c6-c558-4340-837f-c56cd3183db0":
                        name: "items"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "7c254841-a2af-407d-9619-d2f4c478a921":
                              name: "url"
                              type: "STRING"
                            e5723ee8-3961-4c54-bb89-4bc3fbe4cb53:
                              name: "name"
                              type: "STRING"
                      c2b7dc4f-b77f-459d-abab-745de70822bd:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            e4c7f15d-eb83-42a6-9519-095c6e44b89c:
                              name: "name"
                              type: "STRING"
                            "12e52742-a2a9-473a-9ffb-a824d97c3d6f":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "905ced66-102e-4022-b586-c0adf8a0924c":
                                  name: "url"
                                  type: "STRING"
                                "691cf230-44e0-43c5-8c46-f006c544a310":
                                  name: "name"
                                  type: "STRING"
                      "5d032343-467b-46cd-91c0-87a2c0c23cdb":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      e7c6bb47-815e-4c3b-b926-a85473bca48b:
                        name: "name"
                        type: "STRING"
                    examples:
                      "66755ae6-1ec0-4398-a6a6-ea06558649c6":
                        value: "{pocket={url=http://pokeapi.co/api/v2/item-pocket/5/, name=berries}, items=[{url=http://pokeapi.co/api/v2/item/146/, name=pomeg-berry}], names=[{name=Effort drop, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=2, name=effort-drop}"
                    mediaTypes:
                    - "application/json"
      b2f3a373-ff9f-4a3e-b1e8-7f7890dd96f7:
        path: "/item-fling-effect/{param1}/"
        section: "#/contract/sections/ef36b112-1eb1-4d20-bca6-2a5b645e1c77"
        pathVariables:
          "54926baa-41d5-41bf-961e-d69dc2b35846":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "14f569ee-2aba-42a3-ab40-0d755b0eb54f":
            name: "Item Fling Effect"
            method: "GET"
            operationId: "GET_item-fling-effect-param1"
            tags:
            - "Items"
            responses:
              f692520d-0637-42d8-88ed-60855a2ce3a4:
                status: "200"
                bodies:
                  "81cfcd26-7349-4e05-a9d8-296c63d96bca":
                    type: "OBJECT"
                    properties:
                      f55486b7-10d6-4fe8-9b06-e97ea87b1d1d:
                        name: "effect_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "23078bd7-cc8d-4aa2-9d06-569ea3c7c293":
                              name: "effect"
                              type: "STRING"
                            e0fc5945-5742-4874-97ce-d7e315504e9e:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "2c0fb109-72c9-455c-8db0-c29774674164":
                                  name: "url"
                                  type: "STRING"
                                e8a8cb40-bf34-42b4-83c0-aba21f4248c4:
                                  name: "name"
                                  type: "STRING"
                      "9fa5c11b-fe8a-4f2e-9cd9-9c7c89e4d3f5":
                        name: "items"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            a081dd6f-44f2-4bb8-8183-2939ef32eafe:
                              name: "url"
                              type: "STRING"
                            d761653e-38eb-4c48-9ad9-af71cf5c7f79:
                              name: "name"
                              type: "STRING"
                      a058a6c7-e4b2-4799-adb4-0a31d3f48010:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "741765da-be53-45a2-aafa-afc71bf3e684":
                        name: "name"
                        type: "STRING"
                    examples:
                      bf6193d4-8747-4565-a8ba-6ff7b257aff4:
                        value: "{effect_entries=[{effect=Burns the target., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], items=[{url=http://pokeapi.co/api/v2/item/250/, name=flame-orb}], id=2, name=burn}"
                    mediaTypes:
                    - "application/json"
      "11608e2d-2edf-467a-b20c-aa13f9e28fb3":
        path: "/item-pocket/{param1}/"
        section: "#/contract/sections/ef36b112-1eb1-4d20-bca6-2a5b645e1c77"
        pathVariables:
          "0869baa0-35e2-473f-a53a-d3cd47376336":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "16217ea9-0dc3-4c7d-ba36-a76f54ee01ae":
            name: "Item Pocket"
            method: "GET"
            operationId: "GET_item-pocket-param1"
            tags:
            - "Items"
            responses:
              "0f4c8808-9cbe-43f1-a3f2-868a956d044b":
                status: "200"
                bodies:
                  d2bcea2f-5586-437c-b06f-772a2c93816d:
                    type: "OBJECT"
                    properties:
                      a52aff5e-fe95-4145-b346-029ff591220a:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            f13a0b88-6cc3-439c-8421-cac5b09609f7:
                              name: "name"
                              type: "STRING"
                            "0c1eee8d-07e9-4d07-8c81-e0c0abc6100f":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "6598eb70-2d68-4b9b-b0b6-bf5634e5eeb7":
                                  name: "url"
                                  type: "STRING"
                                a17990bf-e678-4dd1-8317-742eda2bf975:
                                  name: "name"
                                  type: "STRING"
                      "14e41660-df81-4a9a-a96c-a6942014d75e":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "939a145f-0dd0-4106-a521-0c2bcc3699b4":
                        name: "categories"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "6f7fda3b-15c6-4cea-8873-4f71070cd50f":
                              name: "url"
                              type: "STRING"
                            "25345b6d-7fee-4c32-92bd-74ffa003be85":
                              name: "name"
                              type: "STRING"
                      d4333d0f-3154-49d4-b87b-f1e82d12ddad:
                        name: "name"
                        type: "STRING"
                    examples:
                      d0e0f3e5-7cd1-49e9-afd3-940529b4007f:
                        value: "{names=[{name=Medicine, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=2, categories=[{url=http://pokeapi.co/api/v2/item-category/26/, name=vitamins}], name=medicine}"
                    mediaTypes:
                    - "application/json"
      f74f07e7-7987-4a62-8bf6-4e64ff94fa96:
        path: "/move/{param1}/"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          "27d55abe-2559-4e86-8d5a-2d66fc3402c9":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "223032c4-c0f9-47d2-91a3-60a2b6049211":
            name: "Move"
            method: "GET"
            operationId: "GET_move-param1"
            tags:
            - "Moves"
            responses:
              "35cd8410-1da1-452b-a307-5433898e3464":
                status: "200"
                bodies:
                  "1c826e8e-be4e-4de2-87f7-043917079075":
                    type: "OBJECT"
                    properties:
                      eb087788-d306-4f49-bc72-4672413f30b6:
                        name: "pp"
                        type: "INTEGER"
                        format: "INT32"
                      fc84dded-7fe8-4ab4-b420-2e9ee8de6fcd:
                        name: "contest_type"
                        type: "OBJECT"
                        properties:
                          "4044f12e-1029-4b29-a7b7-e5f61497e22f":
                            name: "url"
                            type: "STRING"
                          baacf591-8d5b-474b-bf36-d61bd62ec3de:
                            name: "name"
                            type: "STRING"
                      e3f448ef-3cd2-45a9-b2da-8db9568f7fac:
                        name: "contest_combos"
                        type: "OBJECT"
                        properties:
                          "78e0cf07-2d02-454d-81ec-be6e7b94f65f":
                            name: "super"
                            type: "OBJECT"
                          ceccda41-4b02-4f23-8815-121cbf071b4e:
                            name: "normal"
                            type: "OBJECT"
                            properties:
                              "04109118-1768-4705-a6be-99e295c50079":
                                name: "use_before"
                                type: "ARRAY"
                                items:
                                  type: "OBJECT"
                                  properties:
                                    c00e0c12-4b0e-40d6-a071-9ea125a35690:
                                      name: "url"
                                      type: "STRING"
                                    "0e8c3462-bc07-40fc-b873-0ef4dd38e3ca":
                                      name: "name"
                                      type: "STRING"
                      e855dc70-107c-4ca5-87d7-a900b2811430:
                        name: "name"
                        type: "STRING"
                      e9eaf35c-48af-4342-9a32-b34d7504c864:
                        name: "power"
                        type: "INTEGER"
                        format: "INT32"
                      "31f53ca3-87ed-4186-8127-ff45d74c1b94":
                        name: "effect_entries"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            ae96c4d8-25f6-4697-9092-fa385a6f3757:
                              name: "short_effect"
                              type: "STRING"
                            "41cd41b0-9956-4d84-906b-f05a876f8f1a":
                              name: "effect"
                              type: "STRING"
                            "88ddf13a-09e3-4b26-9584-02da2c823d6f":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                d7c0175e-240d-435f-af39-b2a04b676ee3:
                                  name: "url"
                                  type: "STRING"
                                "2bc3543a-798b-4044-b4ab-3c52f02ebde3":
                                  name: "name"
                                  type: "STRING"
                      "1480ceff-d35f-46bc-a926-41259423bb63":
                        name: "stat_changes"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                      "8f9a45d0-92df-48d8-b05c-f48b829c3eb1":
                        name: "past_values"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                      "8256373b-e6b5-4397-9b13-28dbe52628df":
                        name: "priority"
                        type: "INTEGER"
                        format: "INT32"
                      "82aecbb2-50b4-4383-93d2-3731f0726134":
                        name: "generation"
                        type: "OBJECT"
                        properties:
                          "33f05a93-b91b-4139-8eef-24e07789b87c":
                            name: "url"
                            type: "STRING"
                          "45371968-a097-4787-9e7d-eec67c19ef7a":
                            name: "name"
                            type: "STRING"
                      "193f95c5-b70e-4a5c-9a67-70a8a0dc21f5":
                        name: "damage_class"
                        type: "OBJECT"
                        properties:
                          d3ad0640-9393-4f26-a81e-9e62c2637dad:
                            name: "url"
                            type: "STRING"
                          "39923c55-4b81-4b92-a403-9ad38c7c7753":
                            name: "name"
                            type: "STRING"
                      e921ec67-57b8-4d20-8976-9151017f14d8:
                        name: "effect_changes"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                      cd146137-b4a7-4b63-b075-6911116f432e:
                        name: "meta"
                        type: "OBJECT"
                        properties:
                          eb56bba3-1293-408c-b419-fdfce905f714:
                            name: "category"
                            type: "OBJECT"
                            properties:
                              "9d2b5614-c3b2-47c4-9411-089559faa79d":
                                name: "url"
                                type: "STRING"
                              c2ab1235-6c03-4053-8c1e-801dd67c562e:
                                name: "name"
                                type: "STRING"
                          b59ed0c7-5938-4499-b7d9-677e212d44d3:
                            name: "healing"
                            type: "INTEGER"
                            format: "INT32"
                          "169e7056-bd27-4099-b946-505aa2d86907":
                            name: "drain"
                            type: "INTEGER"
                            format: "INT32"
                          "721eb405-7097-4f40-9c3f-fb8d080c8805":
                            name: "ailment"
                            type: "OBJECT"
                            properties:
                              "6163eea8-77d9-4e43-9fc7-2f3da14b46b1":
                                name: "url"
                                type: "STRING"
                              "03ab82fe-ddc2-40e3-b9f4-7585911cd8fe":
                                name: "name"
                                type: "STRING"
                          feec25e6-880a-4357-b7c9-872c21ad80d2:
                            name: "stat_chance"
                            type: "INTEGER"
                            format: "INT32"
                          "99b0346a-c8a1-4385-af5d-1ca2e5d49d93":
                            name: "flinch_chance"
                            type: "INTEGER"
                            format: "INT32"
                          f64e415a-5213-4716-9415-055542952b93:
                            name: "ailment_chance"
                            type: "INTEGER"
                            format: "INT32"
                          "6d4641e1-52fb-4466-8ad3-0f79aea7e436":
                            name: "crit_rate"
                            type: "INTEGER"
                            format: "INT32"
                      "8da1d321-01e4-433e-b9a3-75e655f66c03":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "393b2ff0-2ec5-4409-9df7-998fad50fb13":
                              name: "name"
                              type: "STRING"
                            "255aad6d-606e-4af7-8a23-96c964a12849":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "7e5a4207-8fbc-4d12-a513-c49814aa1904":
                                  name: "url"
                                  type: "STRING"
                                "4a5d8a74-9b66-4b89-9309-648f8d19d789":
                                  name: "name"
                                  type: "STRING"
                      c9a813d4-89f4-4c80-a3e9-e29ea1c84a48:
                        name: "target"
                        type: "OBJECT"
                        properties:
                          b6efddf3-fed2-42df-b95b-70a7501b15ae:
                            name: "url"
                            type: "STRING"
                          "2582b961-a9ce-4d7f-8246-42d37459f94b":
                            name: "name"
                            type: "STRING"
                      e4776f9e-5e07-4b31-bab3-69d06d19a046:
                        name: "super_contest_effect"
                        type: "OBJECT"
                        properties:
                          a8528de0-7e70-4b3f-a220-58c453b1772b:
                            name: "url"
                            type: "STRING"
                      f2ec1cfa-48c5-48a8-b171-f033f3658b27:
                        name: "contest_effect"
                        type: "OBJECT"
                        properties:
                          c34d9011-60e3-464f-a662-38d20ff69ab1:
                            name: "url"
                            type: "STRING"
                      "9a20c02f-8323-4427-88a5-9371133b2a64":
                        name: "type"
                        type: "OBJECT"
                        properties:
                          "353e3d5f-40cc-463d-8ac6-e2d0e85b21f4":
                            name: "url"
                            type: "STRING"
                          "8779aa64-7da9-4879-bc91-1ace1a31e6f3":
                            name: "name"
                            type: "STRING"
                      "81786128-974a-4a35-ba6f-0c622442fbad":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "2761b2ef-80e1-427b-9e39-a0295596cdc8":
                        name: "accuracy"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "879fdcb7-f360-407f-92f8-c164e4aa227a":
                        value: "{pp=35, contest_type={url=http://pokeapi.co/api/v2/contest-type/5/, name=tough}, contest_combos={super={}, normal={use_before=[{url=http://pokeapi.co/api/v2/move/3/, name=double-slap}]}}, name=pound, power=40, effect_entries=[{short_effect=Inflicts regular damage with no additional effect., effect=Inflicts regular damage., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], stat_changes=[], past_values=[], priority=0, generation={url=http://pokeapi.co/api/v2/generation/1/, name=generation-i}, damage_class={url=http://pokeapi.co/api/v2/move-damage-class/2/, name=physical}, effect_changes=[], meta={category={url=http://pokeapi.co/api/v2/move-category/0/, name=damage}, healing=0, drain=0, ailment={url=http://pokeapi.co/api/v2/move-ailment/0/, name=none}, stat_chance=0, flinch_chance=0, ailment_chance=0, crit_rate=0}, names=[{name=Pound, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], target={url=http://pokeapi.co/api/v2/move-target/10/, name=selected-pokemon}, super_contest_effect={url=http://pokeapi.co/api/v2/super-contest-effect/5/}, contest_effect={url=http://pokeapi.co/api/v2/contest-effect/1/}, type={url=http://pokeapi.co/api/v2/type/1/, name=normal}, id=1, accuracy=100}"
                    mediaTypes:
                    - "application/json"
      "608044c4-d659-4206-af2d-c85ece6b295a":
        path: "/move-ailment/{param1}/"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          a6c34666-7a9b-4b7a-abee-3f95c191b4d5:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "142b666a-6d3c-44cf-9208-184553c2c415":
            name: "Move Ailment"
            method: "GET"
            operationId: "GET_move-ailment-param1"
            tags:
            - "Moves"
            responses:
              "7bb4fd4b-29b4-4159-89b6-d796bcd3a8ef":
                status: "200"
                bodies:
                  "56b828bb-51bf-4f61-9edc-5e35e84967f2":
                    type: "OBJECT"
                    properties:
                      d825e74a-2310-40ca-9009-60e7cca47e39:
                        name: "moves"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            bb78f81c-81cd-4da1-a0ce-4465bcaf2915:
                              name: "url"
                              type: "STRING"
                            "9038ba25-1fc6-44b3-b7b3-70b748e7741f":
                              name: "name"
                              type: "STRING"
                      e9fa11d6-92b0-4176-9edc-423c08237141:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "7daf7ab5-2a40-46c0-be41-28c9ad9cd349":
                              name: "name"
                              type: "STRING"
                            "2b885f88-b709-4038-9cc9-72e12d6ef3a4":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "3fdd9d99-4ac7-4efe-b819-f1e83a1b560a":
                                  name: "url"
                                  type: "STRING"
                                "0e8551f5-f309-452f-9e77-a275bf35bd14":
                                  name: "name"
                                  type: "STRING"
                      "25bd8fd4-1e42-4e54-bfab-1bf37c32b896":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "5ec3a00b-1284-41a8-822c-07daec31ccd9":
                        name: "name"
                        type: "STRING"
                    examples:
                      "4a77a5ae-79de-4c23-a7f9-c640cebbb061":
                        value: "{moves=[{url=http://pokeapi.co/api/v2/move/9/, name=thunder-punch}], names=[{name=Paralysie, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=1, name=paralysis}"
                    mediaTypes:
                    - "application/json"
      "8fd2ac9c-5854-46b1-a2ba-f3ea81897f1d":
        path: "/move-battle-style/{param1}/"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          "61fd635c-46b3-45f9-9b52-be2f06cff4d9":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "219a4d15-80e2-43c3-ab85-6ece7dd52d20":
            name: "Move Battle Style"
            method: "GET"
            operationId: "GET_move-battle-style-param1"
            tags:
            - "Moves"
            responses:
              de0f6581-c956-4a70-b162-e3731758ea2b:
                status: "200"
                bodies:
                  "1b97c871-bf5d-4d47-ad26-53ed346fd41c":
                    type: "OBJECT"
                    properties:
                      "2f99c654-3ef5-4c85-a001-7a857a5614e9":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "39ea5277-974c-4683-aeba-a48f4cf80148":
                              name: "name"
                              type: "STRING"
                            e9323d73-aebd-4293-8f70-f27a24fa2a21:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                dc8b50f4-6d66-49a6-bc5d-76fa5706b2db:
                                  name: "url"
                                  type: "STRING"
                                "3e477e10-4bbb-4201-8eab-92452062afdc":
                                  name: "name"
                                  type: "STRING"
                      "81eb7a04-ac15-436f-8dbc-172a624ca424":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "9b81f68c-8123-491b-b967-f38451aaf0d0":
                        name: "name"
                        type: "STRING"
                    examples:
                      "7a9b295a-352d-4d8b-b5a6-33bd47f3e017":
                        value: "{names=[{name=Attaque, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=1, name=attack}"
                    mediaTypes:
                    - "application/json"
      "8d1054be-c230-4c21-b967-224d388e3216":
        path: "/move-category/{param1}/"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          "4209d856-4c01-417c-b1f5-fbed63453fb4":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          e167c222-67b9-448e-80aa-9082ac5ef1a0:
            name: "Move Category"
            method: "GET"
            operationId: "GET_move-category-param1"
            tags:
            - "Moves"
            responses:
              c1b3ae02-ff2b-46ab-8c7a-9e058803e079:
                status: "200"
                bodies:
                  "13cf3e5e-5137-4f4c-95a4-a6e43eda7e89":
                    type: "OBJECT"
                    properties:
                      "75710b0a-8351-4ebc-b4cb-e6d635161a46":
                        name: "descriptions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "76675481-d36b-4431-94dc-803b17ce8e9a":
                              name: "description"
                              type: "STRING"
                            "7c9b357d-f2b6-4cfd-af0c-1f788c988984":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "7cd4dfc3-ebd3-48b7-a1cb-e842ea2c965d":
                                  name: "url"
                                  type: "STRING"
                                "4a8d7698-fcae-49e0-91af-569a9058a2a7":
                                  name: "name"
                                  type: "STRING"
                      dd9e31a0-b4bf-49ce-ba81-18150773f174:
                        name: "moves"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            fda19be1-6763-4725-90c9-d71f1a75d4ff:
                              name: "url"
                              type: "STRING"
                            "1bb8a5fa-5185-4e31-8363-55a00a281cad":
                              name: "name"
                              type: "STRING"
                      "9d623db3-3547-43ad-b337-24c20ce5d10e":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      db98a4e4-93c0-46f1-b1f4-99c0f4484021:
                        name: "name"
                        type: "STRING"
                    examples:
                      "59294ee7-0723-4c37-89ca-a722d8df74bc":
                        value: "{descriptions=[{description=No damage; inflicts status ailment, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], moves=[{url=http://pokeapi.co/api/v2/move/47/, name=sing}], id=1, name=ailment}"
                    mediaTypes:
                    - "application/json"
      "7cbfe0d7-1e06-4ac4-8cba-3a2b48e3f4f8":
        path: "/move-damage-class/{param1}"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          "5191205f-5c35-409c-953e-5b778d6c04c2":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "1ca5b236-677c-43c0-a1a7-fde06336bb0c":
            name: "Move Damage Class"
            method: "GET"
            operationId: "GET_move-damage-class-param1"
            tags:
            - "Moves"
            responses:
              "2227e663-8847-4128-8c0f-005e2d8583d2":
                status: "200"
                bodies:
                  c09bf9f9-ba2d-442f-98f7-44175956cb7c:
                    type: "OBJECT"
                    properties:
                      "17a70bd3-58f6-4f30-b52c-37ebe4729faf":
                        name: "descriptions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "128216b0-7432-4967-a1ef-8df48077e0fa":
                              name: "description"
                              type: "STRING"
                            "2887829a-1eba-45a1-bf5d-ab74022e9005":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "7a01d764-a760-444e-b76a-c5a0c502eb0d":
                                  name: "url"
                                  type: "STRING"
                                cc5a8345-ac5d-4452-9055-19f6c058afbe:
                                  name: "name"
                                  type: "STRING"
                      "512a156e-4ead-4221-bbe3-03c650474eeb":
                        name: "moves"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            ee7e5491-6e01-4c87-b6b7-00262dfd0b3f:
                              name: "url"
                              type: "STRING"
                            dc8335bf-8745-4daa-b875-535fa65ccd3b:
                              name: "name"
                              type: "STRING"
                      "3daf2366-dd32-4024-9adf-50b0dd1eb350":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            ca7cc189-6d3e-4446-9bf1-513f4f437821:
                              name: "name"
                              type: "STRING"
                            fb85c791-915e-4d22-aea0-1eef70b2c2c3:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                ae30782e-0d2c-48a4-bfee-fb28954d01c8:
                                  name: "url"
                                  type: "STRING"
                                "156edd94-2be6-4442-9057-cea4b0e0c28b":
                                  name: "name"
                                  type: "STRING"
                      "5a353ba3-64ec-4427-8bf5-38f01716678b":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "0f2ec43e-b1cb-42a0-ad23-66305154d0f1":
                        name: "name"
                        type: "STRING"
                    examples:
                      "33811ffc-6644-452b-9592-b8a71f2aa97f":
                        value: "{descriptions=[{description=No damage, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], moves=[{url=http://pokeapi.co/api/v2/move/14/, name=swords-dance}], names=[{name=へんか, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], id=1, name=status}"
                    mediaTypes:
                    - "application/json"
      "05b0d93a-0f15-47b8-9ba8-b6159fb80996":
        path: "/move-learn-method/{param1}/"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          "6b2ab154-43f4-4c65-8d3d-33ede867476d":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "10a85f73-bf1a-436e-9d5f-c5c921a1d853":
            name: "Move Learn Method"
            method: "GET"
            operationId: "GET_move-learn-method-param1"
            tags:
            - "Moves"
            responses:
              "6f639480-bdc9-4dc0-a5b1-3478af7d613a":
                status: "200"
                bodies:
                  "93c02c24-0fab-4c7b-bc64-464755f12e7f":
                    type: "OBJECT"
                    properties:
                      "55a952fb-c2c1-499d-80b1-6651bb868f40":
                        name: "descriptions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            efc0adc7-6970-4e3b-913e-f6c1a9e930a3:
                              name: "description"
                              type: "STRING"
                            be1ca7e2-819a-4492-aee4-9e8b12e24875:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                fb4a55c4-931c-491e-ac7b-7f44b5496a57:
                                  name: "url"
                                  type: "STRING"
                                c774c03a-a7a4-4bfc-ad70-59af7634dd2d:
                                  name: "name"
                                  type: "STRING"
                      f5c49c36-05c5-4547-9c82-c97a6a602cb2:
                        name: "version_groups"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "6c4fa7e4-6558-4ca1-9088-d5b28ecc0575":
                              name: "url"
                              type: "STRING"
                            "8334d5fd-51dc-4544-afa1-a6d1b0f29fd5":
                              name: "name"
                              type: "STRING"
                      dcb11576-72ed-4feb-9b94-876937a04cf0:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1063060a-120c-4bbe-8748-885a73f527bc":
                              name: "name"
                              type: "STRING"
                            b7bdb4b1-6a4d-4647-89fb-008a40bd0014:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "6267cef5-3b2e-4d66-a0d6-8fd447295ac6":
                                  name: "url"
                                  type: "STRING"
                                c390ef40-9929-4023-843e-5da61f293633:
                                  name: "name"
                                  type: "STRING"
                      "2be93a95-ea7a-483a-9be1-e46965dc290b":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "8ccecd20-20a0-4896-b2db-9f966b539345":
                        name: "name"
                        type: "STRING"
                    examples:
                      dd6dd3e9-a3eb-4aff-8ef4-c8dcfa5246d3:
                        value: "{descriptions=[{description=Wird gelernt, wenn ein Pokémon ein bestimmtes Level erreicht., language={url=http://pokeapi.co/api/v2/language/6/, name=de}}], version_groups=[{url=http://pokeapi.co/api/v2/version-group/1/, name=red-blue}], names=[{name=Level up, language={url=http://pokeapi.co/api/v2/language/6/, name=de}}], id=1, name=level-up}"
                    mediaTypes:
                    - "application/json"
      "4785f0c0-3519-4653-8e1d-00905081bc8c":
        path: "/move-target/{param1}/"
        section: "#/contract/sections/f5224832-e848-4cd3-b7cc-7f2ac417307e"
        pathVariables:
          d6c71f0c-75f5-4e7b-aa35-a51a6811d57f:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          af70a083-0991-4eab-a404-6cf759537993:
            name: "Move Target"
            method: "GET"
            operationId: "GET_move-target-param1"
            tags:
            - "Moves"
            responses:
              "3f508105-6280-46ff-b065-309def8361e2":
                status: "200"
                bodies:
                  "72a6a2bd-c4e0-41fa-ad8d-ad380655163d":
                    type: "OBJECT"
                    properties:
                      "15ff22fa-34a1-4514-a599-c0bb335a4236":
                        name: "descriptions"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "7682d23c-512a-436e-a0f0-e36e9687cfd1":
                              name: "description"
                              type: "STRING"
                            "731c9666-29ed-4bce-9cf7-2cf5fd42768a":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "166f67aa-fa82-45a1-a469-64b654076cb0":
                                  name: "url"
                                  type: "STRING"
                                ec9106da-b5e7-4fb3-9714-8145859a2fbb:
                                  name: "name"
                                  type: "STRING"
                      "2777e808-4093-4c26-9985-95233c3a3a62":
                        name: "moves"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "76020c7a-9f84-4d86-9d52-fda07f59e55e":
                              name: "url"
                              type: "STRING"
                            "0745907d-8f5f-4ff0-aeb5-97de830721d1":
                              name: "name"
                              type: "STRING"
                      eff6edbe-b8a8-4b0c-b9ed-fb5ea452e17a:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "4aca51e8-867d-4b04-b66f-e682e179aeb5":
                              name: "name"
                              type: "STRING"
                            "8f09250c-9e35-4aef-88cf-35e177dc3ae2":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "8ac22737-ecc5-4171-b7fa-66dc76783639":
                                  name: "url"
                                  type: "STRING"
                                "18d93cda-939f-4eb5-974e-582d0599506b":
                                  name: "name"
                                  type: "STRING"
                      b2c10ca7-5bee-4716-ab7b-ed14506ce9db:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "04d0757d-5280-4d80-ba71-fce893b8229c":
                        name: "name"
                        type: "STRING"
                    examples:
                      "4bcc050c-1f2e-4144-b7c6-e75dd94516ef":
                        value: "{descriptions=[{description=Eine spezifische Fähigkeit.  Wie diese Fähigkeit genutzt wird hängt von den genutzten Fähigkeiten ab., language={url=http://pokeapi.co/api/v2/language/6/, name=de}}], moves=[{url=http://pokeapi.co/api/v2/move/68/, name=counter}], names=[{name=Spezifische Fähigkeit, language={url=http://pokeapi.co/api/v2/language/6/, name=de}}], id=1, name=specific-move}"
                    mediaTypes:
                    - "application/json"
      "92c7e10a-4318-4dfa-801c-ca746cd6110f":
        path: "/location/{param1}/"
        section: "#/contract/sections/e933f50d-6a61-4070-81b1-b7010d3dfc88"
        pathVariables:
          "49b86e09-7ff0-4cdb-9132-e3ef3b4e5467":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          bf3c699f-ecf0-41e9-a8b5-194c03e4e454:
            name: "Location"
            method: "GET"
            operationId: "GET_location-param1"
            tags:
            - "Locations"
            responses:
              ebce8e68-8dab-4243-8eda-42ec37338561:
                status: "200"
                bodies:
                  "8f12abfc-b86a-4f25-80f2-9e669d75ad4b":
                    type: "OBJECT"
                    properties:
                      "41deb327-1bab-4c54-b152-cee5758398ba":
                        name: "name"
                        type: "STRING"
                      "99fa1792-8a6c-45e5-944b-c4285342e0ee":
                        name: "region"
                        type: "OBJECT"
                        properties:
                          "3e3a36bf-ded3-4f67-9641-024063ea426f":
                            name: "url"
                            type: "STRING"
                          "58953d12-0c84-418e-a125-86a40f648270":
                            name: "name"
                            type: "STRING"
                      "16e7defb-2c94-4857-9944-7bc15a18e14c":
                        name: "game_indices"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "120df527-53ab-4145-870c-8e1909ca550f":
                              name: "generation"
                              type: "OBJECT"
                              properties:
                                "02932f84-fe6a-4da5-989b-446e614fafa1":
                                  name: "url"
                                  type: "STRING"
                                "6744c6c9-fd76-435c-a2c5-2edfaeac855f":
                                  name: "name"
                                  type: "STRING"
                            f46a8f78-e8f5-48a2-9212-8a23d1e82883:
                              name: "game_index"
                              type: "INTEGER"
                              format: "INT32"
                      c99fca97-ae3b-4e17-bf39-81c10d358282:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            eceff7fa-a3f4-486d-859b-3f29bf18725f:
                              name: "name"
                              type: "STRING"
                            "77054b98-8145-4997-99e7-41be0c78b580":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "0d874a3f-8cc3-4d97-b9b1-8972cd45d083":
                                  name: "url"
                                  type: "STRING"
                                "69995fe0-7a80-469f-ae56-07b7d9efa6e7":
                                  name: "name"
                                  type: "STRING"
                      e376eb85-3c64-446c-8dce-4eedff940811:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      f217e8e8-df26-4983-9745-6953dc4dc5ae:
                        name: "areas"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1a6be27f-6151-4153-94da-2a33f261af7e":
                              name: "url"
                              type: "STRING"
                            "13bf5b33-f69b-429c-9a0c-3d3f8bb71709":
                              name: "name"
                              type: "STRING"
                    examples:
                      "9a9dad30-51ef-4140-b2d9-0f032073c7fb":
                        value: "{name=canalave-city, region={url=http://pokeapi.co/api/v2/region/4/, name=sinnoh}, game_indices=[{generation={url=http://pokeapi.co/api/v2/generation/4/, name=generation-iv}, game_index=7}], names=[{name=Canalave City, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=1, areas=[{url=http://pokeapi.co/api/v2/location-area/1/, name=canalave-city-area}]}"
                    mediaTypes:
                    - "application/json"
      "86f69d4d-1b4a-4f09-9cd6-b5149b87f036":
        path: "/location-area/{param1}/"
        section: "#/contract/sections/e933f50d-6a61-4070-81b1-b7010d3dfc88"
        pathVariables:
          dbb0dec6-7765-4296-bb5b-6af14ff2b4b7:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "9e3aceaf-7111-4ed2-9d03-5a9354969794":
            name: "Location Area"
            method: "GET"
            operationId: "GET_location-area-param1"
            tags:
            - "Locations"
            responses:
              acde8d8b-0a29-4185-8054-846c5e368a1d:
                status: "200"
                bodies:
                  d221c105-66e7-440f-b2d9-eb09acb0870f:
                    type: "OBJECT"
                    properties:
                      d54e5444-9485-493b-9fec-a99ca86e6cfe:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "85b8c01c-24d5-4103-8b66-1be3979c5baf":
                              name: "name"
                              type: "STRING"
                            "00727eb3-4da7-4585-9d4a-a80d8b521a00":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "529b8c5e-0be8-4083-91ce-3049174aca16":
                                  name: "url"
                                  type: "STRING"
                                "0023a3ac-97e5-487f-a34e-e96f9e8673f1":
                                  name: "name"
                                  type: "STRING"
                      eb3ddb32-0e09-494f-b926-07d861fcc71d:
                        name: "name"
                        type: "STRING"
                      "756fe8f0-0c8f-4c32-93c8-4c4814e79850":
                        name: "encounter_method_rates"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            d0f968c0-b16b-479f-8cb3-3d9922823a81:
                              name: "encounter_method"
                              type: "OBJECT"
                              properties:
                                "2e90f4da-438f-4165-a699-a97afa7b4c18":
                                  name: "url"
                                  type: "STRING"
                                a40b5d89-16e4-4447-9bfc-d13b8dd2551b:
                                  name: "name"
                                  type: "STRING"
                            "25e40994-3827-4fbc-bd23-8ff1efdce0a7":
                              name: "version_details"
                              type: "ARRAY"
                              items:
                                type: "OBJECT"
                                properties:
                                  "87e92e56-cc04-4403-8281-ed3b9a3d370a":
                                    name: "rate"
                                    type: "INTEGER"
                                    format: "INT32"
                                  "8eeb4476-1b46-4b3d-a349-bf2bcdc070e1":
                                    name: "version"
                                    type: "OBJECT"
                                    properties:
                                      "9343d36b-040f-409b-b72e-789e802f5406":
                                        name: "url"
                                        type: "STRING"
                                      "86bb3c36-df3d-4a0e-ad9c-d993053c1c4c":
                                        name: "name"
                                        type: "STRING"
                      "5c62e3da-4052-4ad6-8979-69ad34bde493":
                        name: "location"
                        type: "OBJECT"
                        properties:
                          "575aedf1-f7c7-4758-80f7-e02b3a5bc72f":
                            name: "url"
                            type: "STRING"
                          "6524ef23-70d1-4cff-bd6e-3cfded35a438":
                            name: "name"
                            type: "STRING"
                      b631c4da-3d21-4d3a-b0cb-75d9b011319c:
                        name: "pokemon_encounters"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            a6ca081e-2442-47a9-9126-fb5c39f9bed5:
                              name: "version_details"
                              type: "ARRAY"
                              items:
                                type: "OBJECT"
                                properties:
                                  "36e13c09-f21e-413c-b69e-7f6e26f05c06":
                                    name: "max_chance"
                                    type: "INTEGER"
                                    format: "INT32"
                                  "8095ca2c-6271-4864-9887-5f966863d274":
                                    name: "version"
                                    type: "OBJECT"
                                    properties:
                                      fc86684d-f948-4354-96e5-dc91a95f98f4:
                                        name: "url"
                                        type: "STRING"
                                      "63b7f2d2-4959-448b-9d77-153334c3e618":
                                        name: "name"
                                        type: "STRING"
                                  "7e725239-f4d0-4e2a-b564-fe3ff8aeb8cf":
                                    name: "encounter_details"
                                    type: "ARRAY"
                                    items:
                                      type: "OBJECT"
                                      properties:
                                        "44d03a88-afe3-4f20-b9f3-46b4d34f4667":
                                          name: "min_level"
                                          type: "INTEGER"
                                          format: "INT32"
                                        "2287e974-d626-4677-8905-1cca6f34ed07":
                                          name: "max_level"
                                          type: "INTEGER"
                                          format: "INT32"
                                        a19c6a1f-c2a3-4364-aa2c-3578ef60e930:
                                          name: "condition_values"
                                          type: "ARRAY"
                                          items:
                                            type: "OBJECT"
                                        "7118be31-e9ee-4973-ac64-0aaf36b975cb":
                                          name: "chance"
                                          type: "INTEGER"
                                          format: "INT32"
                                        "97d99407-83da-449a-8917-faa5b0ad771b":
                                          name: "method"
                                          type: "OBJECT"
                                          properties:
                                            a1b3e51f-04b7-4d82-8b25-f4f3565e545a:
                                              name: "url"
                                              type: "STRING"
                                            "23730ec7-30b7-45d1-a267-23c81655d4de":
                                              name: "name"
                                              type: "STRING"
                            bbebbef3-e474-4acd-8eb2-4b715cd94ffc:
                              name: "pokemon"
                              type: "OBJECT"
                              properties:
                                a2461f28-749d-486e-a6d2-461bf373fcb4:
                                  name: "url"
                                  type: "STRING"
                                "050ffdc2-dbec-4f70-bf89-6551976a236e":
                                  name: "name"
                                  type: "STRING"
                      fed82ce4-e196-4d44-a4d2-253ca3c3ec5f:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "62a4bc5c-663a-4c24-9981-887b130c3e4e":
                        name: "game_index"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "49f51a5d-b652-4873-9b2f-5abef72b7863":
                        value: "{names=[{name=, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], name=canalave-city-area, encounter_method_rates=[{encounter_method={url=http://pokeapi.co/api/v2/encounter-method/2/, name=old-rod}, version_details=[{rate=25, version={url=http://pokeapi.co/api/v2/version/14/, name=platinum}}]}], location={url=http://pokeapi.co/api/v2/location/1/, name=canalave-city}, pokemon_encounters=[{version_details=[{max_chance=60, version={url=http://pokeapi.co/api/v2/version/12/, name=diamond}, encounter_details=[{min_level=20, max_level=30, condition_values=[], chance=60, method={url=http://pokeapi.co/api/v2/encounter-method/5/, name=surf}}]}], pokemon={url=http://pokeapi.co/api/v2/pokemon/72/, name=tentacool}}], id=1, game_index=1}"
                    mediaTypes:
                    - "application/json"
      "632c07ec-a6ed-4bb0-9385-588fe79e1c6a":
        path: "/pal-park-area/{param1}/"
        section: "#/contract/sections/e933f50d-6a61-4070-81b1-b7010d3dfc88"
        pathVariables:
          "84ca9ba7-7f0c-44b6-b7ff-b0d50f4bed0b":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "4f0dafaf-f5b2-46da-8946-9c77873e44de":
            name: "Pal Park Area"
            method: "GET"
            operationId: "GET_pal-park-area-param1"
            tags:
            - "Locations"
            responses:
              "37edc46e-e978-482f-aa6b-61ec40ddee0b":
                status: "200"
                bodies:
                  a013077d-dcec-4661-ba4e-48ed9fe8d553:
                    type: "OBJECT"
                    properties:
                      "54594b8d-b73e-4aff-801e-caf489ea9859":
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "2828ff31-18d7-4a8e-a5cd-34a5087f5551":
                              name: "name"
                              type: "STRING"
                            "4ee5a395-0445-450d-bb58-80dd9eb6c928":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "11d88ee3-1680-4f88-8bed-18319a32a8b0":
                                  name: "url"
                                  type: "STRING"
                                "6485481a-acb4-41f9-bfd3-acddd6b5183b":
                                  name: "name"
                                  type: "STRING"
                      "718ac2b0-d3c4-4196-a62f-e6b28fefba5d":
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                      "0a975675-f136-4f62-b059-c34f71bf32f9":
                        name: "pokemon_encounters"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "1dfe961c-8288-4dd5-b12c-7932736c0b80":
                              name: "rate"
                              type: "INTEGER"
                              format: "INT32"
                            "30dc27cc-8326-49f1-9113-0719f0924f4e":
                              name: "pokemon_species"
                              type: "OBJECT"
                              properties:
                                "32114bae-31a3-4e0e-9cbb-97f71e3d70aa":
                                  name: "url"
                                  type: "STRING"
                                f2ad3871-6055-4716-8553-ca08611ee1be:
                                  name: "name"
                                  type: "STRING"
                            e1523d35-1e42-4788-8459-9726de1b420d:
                              name: "base_score"
                              type: "INTEGER"
                              format: "INT32"
                      e2a0455c-0ebc-4c12-bfd6-c80cb5919ac0:
                        name: "name"
                        type: "STRING"
                    examples:
                      "6e9ee517-50fa-4c2d-8978-823bfe570abb":
                        value: "{names=[{name=Forêt, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=1, pokemon_encounters=[{rate=50, pokemon_species={url=http://pokeapi.co/api/v2/pokemon-species/10/, name=caterpie}, base_score=30}], name=forest}"
                    mediaTypes:
                    - "application/json"
      c1ce8d75-5a2c-409d-a94f-f570cd06dc60:
        path: "/region/{param1}/"
        section: "#/contract/sections/e933f50d-6a61-4070-81b1-b7010d3dfc88"
        pathVariables:
          e4d1cfa6-6128-46a5-8f9a-655b77e98c02:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          d9678ef8-ab46-4f24-ae76-c4fb96e15ec3:
            name: "Region"
            method: "GET"
            operationId: "GET_region-param1"
            tags:
            - "Locations"
            responses:
              "6c4d88f1-df97-493f-a04a-c03966db2490":
                status: "200"
                bodies:
                  "2f307e72-f42f-4f26-8c3d-464e2e67fd31":
                    type: "OBJECT"
                    properties:
                      "64183365-f7eb-401f-a288-6ba8907a0214":
                        name: "name"
                        type: "STRING"
                      c2b5220b-68d4-44a0-9389-89b68d9456df:
                        name: "locations"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "56cf3d12-fb2c-45ca-998f-7f80843638a2":
                              name: "url"
                              type: "STRING"
                            cb96eb0b-8f39-4882-8880-fe63e8a767d5:
                              name: "name"
                              type: "STRING"
                      "197baa4d-27fb-4dc7-90e1-a01e3f6d2832":
                        name: "version_groups"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "0380497a-c350-4c6a-a54d-e6c9872c3834":
                              name: "url"
                              type: "STRING"
                            d3e2f830-b055-45fa-9100-e18b97a5cbdd:
                              name: "name"
                              type: "STRING"
                      efc03173-16b4-4d44-8c9a-446577f9bb43:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "81d4779b-0000-4ec6-a7a0-76688b5b19a2":
                              name: "name"
                              type: "STRING"
                            "2580ab40-91e3-46c3-81cb-4d11ca40d700":
                              name: "language"
                              type: "OBJECT"
                              properties:
                                d4ea0888-c9e4-4712-901b-ae1a711013ec:
                                  name: "url"
                                  type: "STRING"
                                "9f1ff4c4-2ef8-43c1-99bb-d5058586b0f4":
                                  name: "name"
                                  type: "STRING"
                      be046439-0062-40a2-815d-3e495f8ca1f2:
                        name: "main_generation"
                        type: "OBJECT"
                        properties:
                          "72e8e92e-9790-47a6-b07a-1e423485f440":
                            name: "url"
                            type: "STRING"
                          aa954e7f-e22a-4d69-8844-2f48782a68e0:
                            name: "name"
                            type: "STRING"
                      b6d7f513-ed72-40a8-a527-48df422d30e5:
                        name: "pokedexes"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            f256911b-bcf6-4837-bee9-dfee53a87d2e:
                              name: "url"
                              type: "STRING"
                            "1c49c646-c3ca-4d0a-922c-623518f71bc5":
                              name: "name"
                              type: "STRING"
                      af2d9a62-0bdd-4c9a-b74c-1f389b519877:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "3bf8731e-8489-4ce0-89ec-773e95ad2ab6":
                        value: "{name=kanto, locations=[{url=http://pokeapi.co/api/v2/location/67/, name=celadon-city}], version_groups=[{url=http://pokeapi.co/api/v2/version-group/1/, name=red-blue}], names=[{name=カントー地方, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], main_generation={url=http://pokeapi.co/api/v2/generation/1/, name=generation-i}, pokedexes=[{url=http://pokeapi.co/api/v2/pokedex/2/, name=kanto}], id=1}"
                    mediaTypes:
                    - "application/json"
      "2ec62a6c-77bc-45f7-93ed-12e1cae02bf8":
        path: "/type/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "5c9bd7f7-ad6d-443b-bdb2-7206fab4e48a":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          ccb1e4ff-f055-46c3-a048-933e7f607dd8:
            name: "Type"
            method: "GET"
            operationId: "GET_type-param1"
            tags:
            - "Pokemon"
            responses:
              "68faa88d-0555-4865-9a90-913d421b82ac":
                status: "200"
                bodies:
                  c80870b7-72dd-4e0a-b839-8d112bc36119:
                    type: "#/contract/types/1fdbf324-4ddd-4ea1-9dd2-d5dcedad6fe8"
                    mediaTypes:
                    - "application/json"
      "69960f25-f630-485a-a484-1a3ee0bc1069":
        path: "/stat/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "008030ac-049c-470e-a705-40303d4be4bd":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "2f19092d-7cfa-46b7-b106-49142f3804d2":
            name: "Stat"
            method: "GET"
            operationId: "GET_stat-param1"
            tags:
            - "Pokemon"
            responses:
              fbd7069d-b516-465f-b66d-4303e9fde2c9:
                status: "200"
                bodies:
                  c7426fb5-7a04-4d5e-b4bc-9862b1f9387e:
                    type: "#/contract/types/ad020642-d54c-4b2d-8bbf-b73285f389ce"
                    mediaTypes:
                    - "application/json"
      ac02aaf9-4e2f-47da-b48c-d69389ccd551:
        path: "/pokemon-species/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          cddbe306-e195-4021-b690-690bd10debdb:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          acdd5b83-3bd3-47cc-a73e-aa058bbb71eb:
            name: "Pokemon Species"
            method: "GET"
            operationId: "GET_pokemon-species-param1"
            tags:
            - "Pokemon"
            responses:
              "5159d661-1734-477e-8632-7011b73888cb":
                status: "200"
                bodies:
                  "0280eb9e-e601-401d-a925-74c2ddfd6a95":
                    type: "#/contract/types/ac3709eb-a2ad-4db6-9c6a-b862fd366521"
                    mediaTypes:
                    - "application/json"
      "87642a07-f3e0-42bd-a89e-b5bc1084f29a":
        path: "/pokemon-shape/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          ed5bb59a-c36f-4da4-9ffb-2f4616e59da7:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "3d38b8b1-85a6-4caf-bad7-14b485da7b36":
            name: "Pokemon Shape"
            method: "GET"
            operationId: "GET_pokemon-shape-param1"
            tags:
            - "Pokemon"
            responses:
              "3dbf107e-07db-453b-b2b1-f769068f03b1":
                status: "200"
                bodies:
                  "062e9a66-5463-4d95-a1b7-40c1b56050d7":
                    type: "#/contract/types/8dc43417-bb33-47f5-9ce5-70c4876d0872"
                    mediaTypes:
                    - "application/json"
      "43d85fb3-c351-4359-ab20-1f99e21d1c46":
        path: "/pokemon-habitat/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          f8b0f8f5-a491-4de8-bc65-fd85496f7d01:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "4ed7f666-e202-4b98-9065-4934bbf4f6e4":
            name: "Pokemon Habitat"
            method: "GET"
            operationId: "GET_pokemon-habitat-param1"
            tags:
            - "Pokemon"
            responses:
              "35d83c01-90bf-4cad-a279-bbbed41be10b":
                status: "200"
                bodies:
                  "7b5b374d-4957-4d69-b222-3018a80586ce":
                    type: "#/contract/types/4d595ef6-da80-45d6-8b79-d8dfb56ae67b"
                    mediaTypes:
                    - "application/json"
      "1dd90077-590d-486f-ad4a-a36687dca320":
        path: "/pokemon-form/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          c52b5aae-0f99-42bd-9c72-62b295062c81:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          d4b865e7-ae7c-4856-b13e-88a2724b1686:
            name: "Pokemon Form"
            method: "GET"
            operationId: "GET_pokemon-form-param1"
            tags:
            - "Pokemon"
            responses:
              "2132251e-7e27-4ac1-a2b5-0e070823bd28":
                status: "200"
                bodies:
                  "04e44a09-94a3-4a0e-8f63-34897db396ba":
                    type: "#/contract/types/73ca7e8b-b8d2-49a6-906e-0408cec750dc"
                    mediaTypes:
                    - "application/json"
      "5023ddcb-4d52-405c-a9fb-321dbdbb3376":
        path: "/pokemon-color/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "918459f4-3d50-41c7-b615-5a7be16728f8":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "5968c91f-862d-472e-9355-81027d3ba327":
            name: "Pokemon Color"
            method: "GET"
            operationId: "GET_pokemon-color-param1"
            tags:
            - "Pokemon"
            responses:
              "4847940a-3716-46af-b588-2a28b16016fb":
                status: "200"
                bodies:
                  aa7c9b7f-2ab8-48ad-b4fe-f1f9c39160f2:
                    type: "#/contract/types/a9334f58-7f33-47c7-a6ea-ff8e6da2231a"
                    mediaTypes:
                    - "application/json"
      c0f1185e-4e0e-4900-978d-649c449ef552:
        path: "/pokemon/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          e35b7179-2243-4509-9337-3b8f526de191:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "5761e335-7bc2-4431-b9ef-18cf54708594":
            name: "Pokemon"
            method: "GET"
            operationId: "GET_pokemon-param1"
            tags:
            - "Pokemon"
            responses:
              "0481590d-9e27-482f-a7c0-767a532b89cd":
                status: "200"
                description: "Status 200"
                bodies:
                  b540c4cd-6992-4427-beb0-b171a32ee7b6:
                    type: "#/contract/types/3f6a1e39-ad4e-4692-8227-95b36d43d129"
                    mediaTypes:
                    - "application/json"
      "84ff6aec-9043-4809-b461-a4c282dded20":
        path: "/pokeathlon-stat/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "4d8d02bf-338b-47ba-8cc0-47b1303151bd":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "9854508c-7f11-4911-921e-04420d7e74e4":
            name: "Pokeathlon Stat"
            method: "GET"
            operationId: "GET_pokeathlon-stat-param1"
            tags:
            - "Pokemon"
            responses:
              e89040c9-531f-4c66-9b5d-b900e735b0e3:
                status: "200"
                bodies:
                  c7abc94d-9529-425a-80b2-4ab07c2c5067:
                    type: "#/contract/types/f2ac8315-a56b-49a1-8d7f-f77be409ba82"
                    mediaTypes:
                    - "application/json"
      "13beb4b9-50e9-43c3-8c58-d28a646e1f16":
        path: "/nature/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          ec1df594-1488-44cb-8601-28a268da519c:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "7df26313-e0a6-4d0b-8a2b-71672f7e0712":
            name: "Nature"
            method: "GET"
            operationId: "GET_nature-param1"
            tags:
            - "Pokemon"
            responses:
              "8d4cc87e-b8ee-4036-a9c1-952b385b1d80":
                status: "200"
                bodies:
                  "10e4a2ef-3c5a-44f1-a825-73806a9ef632":
                    type: "#/contract/types/355729be-ee2b-4c13-a40e-2b94a9aaac06"
                    mediaTypes:
                    - "application/json"
      "8e129dc7-58d0-4293-aded-08035392f81a":
        path: "/growth-rate/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "24e08485-6ff5-4c61-9fc4-40ffa2ad97cf":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "18f295e5-7134-4d6c-a578-a0743cad7b6b":
            name: "Growth Rate"
            method: "GET"
            operationId: "GET_growth-rate-param1"
            tags:
            - "Pokemon"
            responses:
              "45e943cc-5032-4c94-b5ae-cb6a58c44032":
                status: "200"
                bodies:
                  "44c811c6-17ec-4615-b811-a83f3a0442d6":
                    type: "#/contract/types/534566ef-95fa-4aa2-945c-bbfbae06071a"
                    mediaTypes:
                    - "application/json"
      "9aff3420-19e3-4963-9a28-47e29bdcd842":
        path: "/gender/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "16c4c31e-acee-4c51-95f0-276167422282":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "07bdc3d3-9320-427e-b577-43ac1e07b8b9":
            name: "Gender"
            method: "GET"
            operationId: "GET_gender-param1"
            tags:
            - "Pokemon"
            responses:
              cd5ee03f-24ec-43fb-80db-c7f2d8937f47:
                status: "200"
                bodies:
                  "95042eb7-dbb2-4d46-b485-51d30215cb43":
                    type: "#/contract/types/8cd50067-f7da-421a-a0a9-7fe4d14e2695"
                    mediaTypes:
                    - "application/json"
      "010cc7f2-cd69-4cb9-9353-4b72486338d2":
        path: "/egg-group/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "005f4785-4387-46bf-96e7-a24034ccf56f":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "90df3a9e-c548-4622-b6ef-2859af7af135":
            name: "Egg Group"
            method: "GET"
            operationId: "GET_egg-group-param1"
            tags:
            - "Pokemon"
            responses:
              "4673b8c7-7847-4c6f-96cc-02d822c2e730":
                status: "200"
                bodies:
                  f8972df4-0e64-43ad-af84-f942a5fee638:
                    type: "#/contract/types/af56ed04-d5b8-4b19-be3f-33887c5e37e6"
                    mediaTypes:
                    - "application/json"
      "63278495-f97e-4fa8-9923-ff44d631bd4a":
        path: "/characteristic/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          "653fb10c-7652-474f-845f-178200a7dad0":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "493c04fd-297c-4c88-84f5-d3098453ae47":
            name: "Characteristic"
            method: "GET"
            operationId: "GET_characteristic-param1"
            tags:
            - "Pokemon"
            responses:
              fde33baa-fe57-420e-9c48-8f3dfdddbba5:
                status: "200"
                bodies:
                  "1204b28a-fc17-42f3-a332-9e2d4a79ac63":
                    type: "#/contract/types/b5471ee1-2d2d-48c7-9074-7863fcfd65c1"
                    mediaTypes:
                    - "application/json"
      "9b2ec977-fe3f-4680-b35d-3ac01a239f20":
        path: "/ability/{param1}/"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        pathVariables:
          fa3ddde1-977b-4333-b35a-9a5a4b81f741:
            name: "param1"
            type: "STRING"
            required: true
        operations:
          "0b4942cb-bf85-494d-aaa2-5044dea09b75":
            name: "Ability"
            method: "GET"
            operationId: "GET_ability-param1"
            tags:
            - "Pokemon"
            responses:
              "6af98b8c-311b-4ec1-b704-2da4a54b5852":
                status: "200"
                bodies:
                  fdd7beb8-a27e-4ef0-bc93-c63020d23332:
                    type: "#/contract/types/75aa98df-0186-49ec-8309-35fe21e588ab"
                    mediaTypes:
                    - "application/json"
      "15f8986f-fb70-44f5-aebd-3e5577cf0752":
        path: "/language/{param1}/"
        section: "#/contract/sections/22a6266d-11d9-4f60-ba92-868f5ba7d37c"
        pathVariables:
          "853ca204-06f1-426b-8f7f-43d30d3a9085":
            name: "param1"
            type: "STRING"
            required: true
        operations:
          df03dc59-3446-48b9-925a-19ec4797351b:
            name: "Language"
            method: "GET"
            operationId: "GET_language-param1"
            tags:
            - "Utilities"
            responses:
              "3d39b63e-4c8a-42a5-bf88-d316ae1d48eb":
                status: "200"
                bodies:
                  "9905e0bc-2b87-4ab2-a56f-ad44d6667989":
                    type: "OBJECT"
                    properties:
                      "0381d72e-afbe-4a1e-91e7-b0dd64bd584b":
                        name: "iso639"
                        type: "STRING"
                      ce1609fa-1df4-452d-a3fb-8b8b89f27516:
                        name: "name"
                        type: "STRING"
                      b7ca2373-fcce-4ba3-acb4-cb0b5e8ef86c:
                        name: "official"
                        type: "BOOLEAN"
                      f2f4b3ca-3ab6-4738-8ede-9f6810c00305:
                        name: "names"
                        type: "ARRAY"
                        items:
                          type: "OBJECT"
                          properties:
                            "265c30c2-d325-4ade-91c9-4875cfd938e9":
                              name: "name"
                              type: "STRING"
                            ade50ae9-725b-46fe-807e-a5e074aa2e44:
                              name: "language"
                              type: "OBJECT"
                              properties:
                                "83159c8a-fe70-4aea-a4fc-3172829790a1":
                                  name: "url"
                                  type: "STRING"
                                f8560726-0a25-42d2-8dea-171d79ec97c3:
                                  name: "name"
                                  type: "STRING"
                      "62817349-b2e3-4a91-bc35-9f4dbbd668f6":
                        name: "iso3166"
                        type: "STRING"
                      fe2181a7-519a-461f-87c0-dde6eb2f2b8d:
                        name: "id"
                        type: "INTEGER"
                        format: "INT32"
                    examples:
                      "0cd14e1a-7495-4487-ae01-f7da88d9f8f6":
                        value: "{iso639=ja, name=ja, official=true, names=[{name=日本語, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], iso3166=jp, id=1}"
                    mediaTypes:
                    - "application/json"
    types:
      "1fdbf324-4ddd-4ea1-9dd2-d5dcedad6fe8":
        name: "Type"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "71bda773-46ba-4bd6-8782-6cf7db7db451":
            name: "name"
            type: "STRING"
          "25fbb97a-c2f9-4ce9-9436-f46095764c25":
            name: "generation"
            type: "OBJECT"
            properties:
              b8bbf418-1f49-4738-9ef3-68c24ee4a58e:
                name: "url"
                type: "STRING"
              "2fa3531a-d5cb-4014-8b67-239041fa2c5c":
                name: "name"
                type: "STRING"
          "389dc4c8-4230-4014-906b-9d61c790b806":
            name: "damage_relations"
            type: "OBJECT"
            properties:
              cc4e2ad1-07c3-43f3-b2d5-b0e52a2da57e:
                name: "half_damage_from"
                type: "ARRAY"
                items:
                  type: "OBJECT"
              a76f32de-826e-4f09-8139-83f5a1375df6:
                name: "no_damage_from"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    "2f5301c1-f46b-400e-9db9-63db7e941206":
                      name: "url"
                      type: "STRING"
                    "8a241837-4845-494d-bf8a-9be0a13b1a9c":
                      name: "name"
                      type: "STRING"
              "21f6d4cc-5864-411d-ab51-f9e828268605":
                name: "half_damage_to"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    b633ecb8-b2cf-4754-a847-02e91b23b376:
                      name: "url"
                      type: "STRING"
                    "8e7827fc-576c-4560-96d2-24a1fceb20d5":
                      name: "name"
                      type: "STRING"
              "1e0d1a3c-3b39-4d18-800c-149ae3f335f2":
                name: "double_damage_from"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    "4158b70c-ee95-431f-bfc7-2567a40fd769":
                      name: "url"
                      type: "STRING"
                    a3483a65-8721-465a-9b82-14a0d266ea6d:
                      name: "name"
                      type: "STRING"
              "04a4f99c-005f-4971-9bfa-13123dcc3c84":
                name: "no_damage_to"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    "55700429-9cbb-4678-b8a0-29e05f373528":
                      name: "url"
                      type: "STRING"
                    "3dbe4961-aaac-4222-a57b-7ac7eb94c673":
                      name: "name"
                      type: "STRING"
              aad293cd-1c16-4884-b1e2-0ee7b1918bdf:
                name: "double_damage_to"
                type: "ARRAY"
                items:
                  type: "OBJECT"
          "040aef49-090d-43e7-b25c-b33c9fb11e21":
            name: "game_indices"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "41860ee9-4d23-4a48-bc9a-39fab302bdf4":
                  name: "generation"
                  type: "OBJECT"
                  properties:
                    "7f5ec2bb-8431-4835-830c-464f7847424c":
                      name: "url"
                      type: "STRING"
                    "367da11c-04e6-48f2-90ae-13971dc6835e":
                      name: "name"
                      type: "STRING"
                fde112a8-7da2-4c05-a80e-a0c7eabfceae:
                  name: "game_index"
                  type: "INTEGER"
                  format: "INT32"
          "54ca64d5-8a56-44ef-93f8-53cdc64f944a":
            name: "move_damage_class"
            type: "OBJECT"
            properties:
              "04de432a-9a93-45a7-b5f3-470f1c8054c1":
                name: "url"
                type: "STRING"
              "5ca7a519-ce3e-4823-9f91-53178a832d48":
                name: "name"
                type: "STRING"
          "857d3d17-2a98-4f2c-a478-94ba7f374c43":
            name: "moves"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "12766db0-6c7c-44e8-8050-4900edb7201c":
                  name: "url"
                  type: "STRING"
                "3b415012-0b84-4970-a15c-567b52cdbd1d":
                  name: "name"
                  type: "STRING"
          b63efddc-2594-44b7-bf5e-84b8bf9c3dc1:
            name: "pokemon"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "6ff270c6-bb4f-46ed-b774-7856f7c5d7b1":
                  name: "slot"
                  type: "INTEGER"
                  format: "INT32"
                "833de100-5eb5-495d-94a9-9e7ea3d41233":
                  name: "pokemon"
                  type: "OBJECT"
                  properties:
                    c7d71941-9fda-41e2-ba15-5b05626f84d3:
                      name: "url"
                      type: "STRING"
                    "96777173-a235-4586-8810-03b789900668":
                      name: "name"
                      type: "STRING"
          "699231f7-834c-434e-820a-38085a37498e":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "6f02afa9-5398-4860-a2da-2de01adc0d71":
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                ab9ce155-0756-4ce8-a22a-016f99138b58:
                  name: "name"
                  type: "STRING"
                "2dc2b0c9-120c-4d62-a6e0-93e6c5f45766":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "649196be-a35a-46a3-a27c-cb85a384cc11":
                      name: "url"
                      type: "STRING"
                    "5333bf71-60f2-42ac-9c75-3a37306b4443":
                      name: "name"
                      type: "STRING"
        examples:
          d29ad757-be0a-467e-a595-cf5bc29ebfea:
            value: "{\n  \"name\": \"normal\",\n  \"generation\": {\n    \"url\": \"http://pokeapi.co/api/v2/generation/1/\",\n    \"name\": \"generation-i\"\n  },\n  \"damage_relations\": {\n    \"half_damage_from\": [],\n    \"no_damage_from\": [\n      {\n        \"url\": \"http://pokeapi.co/api/v2/type/8/\",\n        \"name\": \"ghost\"\n      }\n    ],\n    \"half_damage_to\": [\n      {\n        \"url\": \"http://pokeapi.co/api/v2/type/6/\",\n        \"name\": \"rock\"\n      }\n    ],\n    \"double_damage_from\": [\n      {\n        \"url\": \"http://pokeapi.co/api/v2/type/2/\",\n        \"name\": \"fighting\"\n      }\n    ],\n    \"no_damage_to\": [\n      {\n        \"url\": \"http://pokeapi.co/api/v2/type/8/\",\n        \"name\": \"ghost\"\n      }\n    ],\n    \"double_damage_to\": []\n  },\n  \"game_indices\": [\n    {\n      \"generation\": {\n        \"url\": \"http://pokeapi.co/api/v2/generation/1/\",\n        \"name\": \"generation-i\"\n      },\n      \"game_index\": 0\n    }\n  ],\n  \"move_damage_class\": {\n    \"url\": \"http://pokeapi.co/api/v2/move-damage-class/2/\",\n    \"name\": \"physical\"\n  },\n  \"moves\": [\n    {\n      \"url\": \"http://pokeapi.co/api/v2/move/1/\",\n      \"name\": \"pound\"\n    }\n  ],\n  \"pokemon\": [\n    {\n      \"slot\": 1,\n      \"pokemon\": {\n        \"url\": \"http://pokeapi.co/api/v2/pokemon/16/\",\n        \"name\": \"pidgey\"\n      }\n    }\n  ],\n  \"id\": 1,\n  \"names\": [\n    {\n      \"name\": \"ノーマル\",\n      \"language\": {\n        \"url\": \"http://pokeapi.co/api/v2/language/1/\",\n        \"name\": \"ja\"\n      }\n    }\n  ]\n}"
      ad020642-d54c-4b2d-8bbf-b73285f389ce:
        name: "Stat"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "953bf7c4-9c04-48a5-9de0-846f1953dade":
            name: "is_battle_only"
            type: "BOOLEAN"
          "09c9970b-aa63-47cc-a2d1-7b1c1499c96f":
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "660bcbf1-206d-43ee-ae14-62d55b61b7d6":
                  name: "name"
                  type: "STRING"
                d40fa159-63cb-4114-94c9-00fb559e89b7:
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "7984a545-a22e-4af4-9e35-2261eb60872c":
                      name: "url"
                      type: "STRING"
                    "3f250af9-f7f0-4562-b6d9-0ff23471c814":
                      name: "name"
                      type: "STRING"
          cfba072e-dda6-4fdf-9604-e774a1a29459:
            name: "affecting_natures"
            type: "OBJECT"
            properties:
              f1fd0c80-5e67-48e0-9dd6-69f31211a8b2:
                name: "increase"
                type: "ARRAY"
                items:
                  type: "OBJECT"
              bb8849a7-2dae-409c-8ad1-638e7eff7a76:
                name: "decrease"
                type: "ARRAY"
                items:
                  type: "OBJECT"
          d6e4b2c1-b510-4738-b8df-91c190620082:
            name: "characteristics"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "0641af98-9fe8-4ee7-87c4-c9aff0d8bc48":
                  name: "url"
                  type: "STRING"
          "5d60f5d7-075d-46c4-8008-5243b65be22e":
            name: "affecting_moves"
            type: "OBJECT"
            properties:
              dda4bde2-bb47-4e83-98e8-f99cde6be82e:
                name: "increase"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    e6d1fa97-067b-4ef1-9170-cb26ec7a32c3:
                      name: "move"
                      type: "OBJECT"
                      properties:
                        "3fc7bb78-c0fb-45ba-b49e-0f7aed733f2e":
                          name: "url"
                          type: "STRING"
                        "57e14f87-f9f7-4456-92f5-02209d80268d":
                          name: "name"
                          type: "STRING"
                    e318f0ff-c964-4822-a01d-7d6437ab2b26:
                      name: "change"
                      type: "INTEGER"
                      format: "INT32"
              "76fec8d9-0ea0-4689-8577-c60f0751a6b0":
                name: "decrease"
                type: "ARRAY"
                items:
                  type: "OBJECT"
          "019d1b04-6ed6-4cef-9681-78870cfef927":
            name: "game_index"
            type: "INTEGER"
            format: "INT32"
          f45d341b-e69f-4d37-a6ad-8678510c4322:
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "71f3517e-1609-4b64-acbc-dd73548bc583":
            name: "name"
            type: "STRING"
        examples:
          f7db1184-52b1-47f6-87f1-3ce54d86b167:
            value: "{is_battle_only=false, names=[{name=HP, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], affecting_natures={increase=[], decrease=[]}, characteristics=[{url=http://pokeapi.co/api/v2/characteristic/1/}], affecting_moves={increase=[{move={url=http://pokeapi.co/api/v2/move/246/, name=ancient-power}, change=1}], decrease=[]}, game_index=1, id=1, name=hp}"
      ac3709eb-a2ad-4db6-9c6a-b862fd366521:
        name: "Species"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "3a63ffcb-66f3-447c-a7db-675c70e7c208":
            name: "capture_rate"
            type: "INTEGER"
            format: "INT32"
          fe703fb0-e641-43fb-94ab-d2a369a00b6f:
            name: "habitat"
            type: "OBJECT"
            properties:
              d9dfaddd-2eab-4876-8122-94c3c6c3873d:
                name: "url"
                type: "STRING"
              fe8f86f0-b1b1-49a7-9984-f4f20f29785e:
                name: "name"
                type: "STRING"
          b8c8320a-710a-4dd5-bdd5-82bbda5ebfbd:
            name: "color"
            type: "OBJECT"
            properties:
              "5a41111b-55f9-4064-985c-4eda5f219c65":
                name: "url"
                type: "STRING"
              "35ea7179-4148-4f58-be77-9f8e32e80578":
                name: "name"
                type: "STRING"
          "81b3fd84-3774-49ac-af04-6a64501116d9":
            name: "forms_switchable"
            type: "BOOLEAN"
          "5ef853b4-5624-4676-a45c-4a292bd2cfef":
            name: "shape"
            type: "OBJECT"
            properties:
              e6ebf7c1-eebf-4e1e-8371-2d1d2eb32fef:
                name: "url"
                type: "STRING"
              dc607762-2688-47ab-8cb2-c0b33421d880:
                name: "name"
                type: "STRING"
          "76fdd685-5abd-433f-bc2a-6aef26f5bc18":
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                cafe10a0-78bd-4480-a5bc-e5b1a5c20496:
                  name: "name"
                  type: "STRING"
                "91bc9bda-e67e-4b41-a649-c7cea4ad11a3":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "15f793b5-5182-4d5e-9173-2856a60296be":
                      name: "url"
                      type: "STRING"
                    "0ac67423-9c30-4887-807f-6d1e4c007651":
                      name: "name"
                      type: "STRING"
          da5da57e-e76c-453a-859b-d27e23a5b6ea:
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "8ffdb112-d9ca-4a1f-8d9a-d645d7480fb8":
            name: "egg_groups"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                f5e978dc-d61f-4217-a3f6-de4276cb52a7:
                  name: "url"
                  type: "STRING"
                "5fdd8f94-e4fc-4ab4-93a5-46cb5eec1b59":
                  name: "name"
                  type: "STRING"
          e651cc05-596c-4b87-b1ad-529db6a8be4f:
            name: "base_happiness"
            type: "INTEGER"
            format: "INT32"
          "3416e1f5-1d1c-41cd-bd7b-39a2d4634b20":
            name: "generation"
            type: "OBJECT"
            properties:
              bd3f7480-2e03-4f9e-9424-24e27cab41eb:
                name: "url"
                type: "STRING"
              dfb80a6e-c548-42ad-8569-d936d8ba4976:
                name: "name"
                type: "STRING"
          a6df50c5-7564-4bf8-bee8-2e4a9d4c24d5:
            name: "flavor_text_entries"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "09367359-ffb5-4234-8d1f-b1ae2a123e93":
                  name: "version"
                  type: "OBJECT"
                  properties:
                    "5cda9cc1-67ba-4960-bdcd-b22954ad2d51":
                      name: "url"
                      type: "STRING"
                    "6a562fdd-b4e0-4019-bc44-060aaced693f":
                      name: "name"
                      type: "STRING"
                "220096e1-a964-4d71-a54a-2dae1414c477":
                  name: "flavor_text"
                  type: "STRING"
                af6d970f-891b-4e23-a455-3733f9d5b41a:
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "638f9690-75b6-40e3-9363-cc20970fc3e4":
                      name: "url"
                      type: "STRING"
                    "1ce865c0-b2bf-44dd-ac6d-d8926b2886d5":
                      name: "name"
                      type: "STRING"
          "78133c15-3ae9-44b1-b354-ac5cea2d5df6":
            name: "growth_rate"
            type: "OBJECT"
            properties:
              "30515edd-6b23-4467-b263-ff320875d997":
                name: "url"
                type: "STRING"
              "7529b072-feac-46b4-9388-fa30df3c9336":
                name: "name"
                type: "STRING"
          febef868-ee5c-4006-88b0-f8617a8183c1:
            name: "hatch_counter"
            type: "INTEGER"
            format: "INT32"
          "2acd641c-3745-4322-9eed-b2130327f027":
            name: "genera"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "4628685f-cf45-4f3c-acf3-c8ef3e0ac542":
                  name: "genus"
                  type: "STRING"
                "13a76716-6283-4938-ad5a-e200c8b37d00":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "70cd12bc-f76c-4bba-a11e-2132f4a4d33a":
                      name: "url"
                      type: "STRING"
                    "9923d2d4-af91-4c76-ad34-38d2f4ae07a7":
                      name: "name"
                      type: "STRING"
          "648fa7fe-2877-4199-990b-b1a5a20a0627":
            name: "form_descriptions"
            type: "ARRAY"
            items:
              type: "OBJECT"
          c9cd53be-3ae6-41c8-9cc7-8b79fb20f6cc:
            name: "varieties"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "231b635f-825b-4ac6-a20f-35bff677f91c":
                  name: "is_default"
                  type: "BOOLEAN"
                b6140d28-4353-4768-82a7-6d1e65fd998c:
                  name: "pokemon"
                  type: "OBJECT"
                  properties:
                    f5eab763-6fa5-43a1-b5ce-27743e6b0487:
                      name: "url"
                      type: "STRING"
                    cb4ea112-1e1e-432e-a12c-d3c7b6d0406e:
                      name: "name"
                      type: "STRING"
          "0ddc05e9-f699-4d86-834c-cf7edbf6de39":
            name: "name"
            type: "STRING"
          e3eea083-6377-4d62-8b7c-8686b0877335:
            name: "evolution_chain"
            type: "OBJECT"
            properties:
              "737a7f5e-a34d-4887-ab5b-56de6c39edfb":
                name: "url"
                type: "STRING"
          "8f37a4b1-749b-460e-b137-79d18d35349b":
            name: "has_gender_differences"
            type: "BOOLEAN"
          f7bad5b8-e0a8-462b-80d0-cbc9ab6478e0:
            name: "is_baby"
            type: "BOOLEAN"
          dac556ff-e412-4471-97ce-9f3d4d56e7de:
            name: "gender_rate"
            type: "INTEGER"
            format: "INT32"
          abf137d1-5f65-4d43-aaf8-370c1b7d02e3:
            name: "pal_park_encounters"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                e5615bfa-3893-4be2-a7c3-b2a6da5f11aa:
                  name: "rate"
                  type: "INTEGER"
                  format: "INT32"
                ca3f817e-5d3a-4aa2-a704-420ed0bc6c96:
                  name: "base_score"
                  type: "INTEGER"
                  format: "INT32"
                c6e228f2-fe79-4f2c-b799-269559379f3e:
                  name: "area"
                  type: "OBJECT"
                  properties:
                    be690f70-873a-42ec-a745-d53bbbcd22eb:
                      name: "url"
                      type: "STRING"
                    "62179c49-6a46-4054-a3de-56b3166b4c88":
                      name: "name"
                      type: "STRING"
          ddab3897-b143-42dc-bff7-a044116c6d77:
            name: "order"
            type: "INTEGER"
            format: "INT32"
          "3d138508-8810-40c4-9f3b-55a9f168ea02":
            name: "pokedex_numbers"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                d8d0b0d2-506d-47f4-8789-7bb0349291f1:
                  name: "entry_number"
                  type: "INTEGER"
                  format: "INT32"
                "547bf702-f70e-49ef-a88e-a9e209bf8b2c":
                  name: "pokedex"
                  type: "OBJECT"
                  properties:
                    "7d70803c-5193-4c91-979a-031375630cc3":
                      name: "url"
                      type: "STRING"
                    "124df4ab-9ed7-4777-96d3-0972d8862523":
                      name: "name"
                      type: "STRING"
        examples:
          f2c2dccc-4615-47c3-95d8-e51ac40024e8:
            value: "{capture_rate=45, habitat={url=http://pokeapi.co/api/v2/pokemon-habitat/3/, name=grassland}, color={url=http://pokeapi.co/api/v2/pokemon-color/5/, name=green}, forms_switchable=false, shape={url=http://pokeapi.co/api/v2/pokemon-shape/8/, name=quadruped}, names=[{name=Bulbasaur, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=1, egg_groups=[{url=http://pokeapi.co/api/v2/egg-group/7/, name=plant}], base_happiness=70, generation={url=http://pokeapi.co/api/v2/generation/1/, name=generation-i}, flavor_text_entries=[{version={url=http://pokeapi.co/api/v2/version/26/, name=alpha-sapphire}, flavor_text=日なたで　昼寝を　する　姿を　見かける。\n太陽の　光を　いっぱい　浴びることで\n背中の　タネが　大きく　育つのだ。, language={url=http://pokeapi.co/api/v2/language/11/, name=ja-kanji}}], growth_rate={url=http://pokeapi.co/api/v2/growth-rate/4/, name=medium-slow}, hatch_counter=20, genera=[{genus=Seed, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], form_descriptions=[], varieties=[{is_default=true, pokemon={url=http://pokeapi.co/api/v2/pokemon/1/, name=bulbasaur}}], name=bulbasaur, evolution_chain={url=http://pokeapi.co/api/v2/evolution-chain/1/}, has_gender_differences=false, is_baby=false, gender_rate=1, pal_park_encounters=[{rate=30, base_score=50, area={url=http://pokeapi.co/api/v2/pal-park-area/2/, name=field}}], order=1, pokedex_numbers=[{entry_number=80, pokedex={url=http://pokeapi.co/api/v2/pokedex/12/, name=kalos-central}}]}"
      "8dc43417-bb33-47f5-9ce5-70c4876d0872":
        name: "Shape"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "699fe5ea-98bc-4e0e-89a8-88355b94652c":
            name: "pokemon_species"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "5c5a6ced-fc12-44e3-b70c-8eaaf7dcf4bc":
                  name: "url"
                  type: "STRING"
                "4c3ddb76-48ee-4195-bd7e-56ca7ba6771c":
                  name: "name"
                  type: "STRING"
          "3fa8fbfb-a03b-4c92-80b9-9d5198e064af":
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                c3ba68ac-e50f-4d7c-9045-de3e552cf650:
                  name: "name"
                  type: "STRING"
                "0a3a679c-6e29-4006-b370-6d76170917a8":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "61d017eb-aad0-41df-b1dc-655e0254449f":
                      name: "url"
                      type: "STRING"
                    "22157915-f06c-4fda-ba25-968130dfe4cf":
                      name: "name"
                      type: "STRING"
          "8c2d96e9-e858-49ba-a216-274c26428916":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "7ae46217-e2ab-4537-94ae-08655910953c":
            name: "awesome_names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "70781036-90a5-495f-b1ff-bb7a2e1574f9":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "73dfa657-9ec8-4139-b0a7-76cf48f63431":
                      name: "url"
                      type: "STRING"
                    "9424596a-091d-4303-8799-e2ea5b83d975":
                      name: "name"
                      type: "STRING"
                c2ca4966-aa6b-4ac8-b39b-c004b4c24af6:
                  name: "awesome_name"
                  type: "STRING"
          "292236e3-7bbb-4a58-a3c1-811bf9b4bf8c":
            name: "name"
            type: "STRING"
        examples:
          fb01f7d1-ac9b-4c10-a899-9cd6047b29ff:
            value: "{pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/90/, name=shellder}], names=[{name=Ball, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], id=1, awesome_names=[{language={url=http://pokeapi.co/api/v2/language/9/, name=en}, awesome_name=Pomaceous}], name=ball}"
      "4d595ef6-da80-45d6-8b79-d8dfb56ae67b":
        name: "Habitat"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          d86c25f3-b222-418e-a6a0-b444c9128712:
            name: "pokemon_species"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "5e8ada9c-1d70-45b3-a319-acb2b7dce1c5":
                  name: "url"
                  type: "STRING"
                a76e950e-6256-41ec-8a44-ec982c7d4b23:
                  name: "name"
                  type: "STRING"
          c9b31819-7c7c-4dc1-8615-77a890cf706a:
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                e4da0b22-a570-4476-bfef-b36c4e550909:
                  name: "name"
                  type: "STRING"
                "7c5dda24-b795-4ace-8a45-fd07284dafe3":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    c03719af-4129-421f-81ee-117e05737445:
                      name: "url"
                      type: "STRING"
                    "996398ab-7880-4b2a-9d0b-a309c0f8260f":
                      name: "name"
                      type: "STRING"
          e8f46609-feef-4b9e-bfbe-dd9fba2c7bc1:
            name: "id"
            type: "INTEGER"
            format: "INT32"
          a84a8499-bfb1-41c3-9e10-20d5b8824b3c:
            name: "name"
            type: "STRING"
        examples:
          "65825525-9e11-4599-acbb-29b44d4fa1de":
            value: "{pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/41/, name=zubat}], names=[{name=grottes, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], id=1, name=cave}"
      "73ca7e8b-b8d2-49a6-906e-0408cec750dc":
        name: "Form"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "63b33aa8-dd5d-44e5-9a9c-a9157893c85d":
            name: "is_battle_only"
            type: "BOOLEAN"
          "45ec619d-094d-40d9-ab15-53802843da28":
            name: "sprites"
            type: "OBJECT"
            properties:
              "347b6efb-be7e-4ccf-a611-29811bd0809d":
                name: "front_default"
                type: "STRING"
              "533cebf5-edef-4f27-a2bb-3b0293fb0333":
                name: "back_default"
                type: "STRING"
              "49df4c51-1ffe-47e3-abf4-6e9ca94a966c":
                name: "front_shiny"
                type: "STRING"
              "821db8d3-0548-48a1-ac96-6c34843bf091":
                name: "back_shiny"
                type: "STRING"
          fdb354bb-ec49-4a71-8e6a-59f73d4ca03f:
            name: "version_group"
            type: "OBJECT"
            properties:
              bd35f271-65fa-4c7f-8f1e-ab035bfa5213:
                name: "url"
                type: "STRING"
              "6fd21259-82e5-4964-9cfa-39cd269635b4":
                name: "name"
                type: "STRING"
          c8a5ec31-ff65-4f70-9ab7-c2f8b782c3fa:
            name: "form_order"
            type: "INTEGER"
            format: "INT32"
          "10d749f3-8ff6-4794-80cb-709fc04a32ae":
            name: "is_mega"
            type: "BOOLEAN"
          "4dedb323-dea6-43f5-984f-93ada6307967":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "063bf7f0-4a1c-4389-966b-a4f6bfec0f05":
            name: "is_default"
            type: "BOOLEAN"
          "707dfcd2-da06-4173-9857-e0d3bb33c4ff":
            name: "form_name"
            type: "STRING"
          c06ab89c-5f53-4e70-a366-ba7e889bd2a7:
            name: "pokemon"
            type: "OBJECT"
            properties:
              a524ebd3-55f9-4924-b1a5-a02e85f20ca6:
                name: "url"
                type: "STRING"
              "58d68a48-86cc-4072-93f9-adefc625965a":
                name: "name"
                type: "STRING"
          c3051c94-39f0-4220-b23f-7d34b7a86e0f:
            name: "order"
            type: "INTEGER"
            format: "INT32"
          "80e59132-a162-4d7b-ab7f-b130530b5d38":
            name: "name"
            type: "STRING"
        examples:
          "4db76445-a53e-477e-9172-ae18d4dde9f2":
            value: "{is_battle_only=false, sprites={front_default=http://pokeapi.co/media/sprites/pokemon/1.png, back_default=http://pokeapi.co/media/sprites/pokemon/back/1.png, front_shiny=http://pokeapi.co/media/sprites/pokemon/shiny/1.png, back_shiny=http://pokeapi.co/media/sprites/pokemon/back/shiny/1.png}, version_group={url=http://pokeapi.co/api/v2/version-group/1/, name=red-blue}, form_order=1, is_mega=false, id=1, is_default=true, form_name=, pokemon={url=http://pokeapi.co/api/v2/pokemon/1/, name=bulbasaur}, order=1, name=bulbasaur}"
      a9334f58-7f33-47c7-a6ea-ff8e6da2231a:
        name: "Color"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "2b32d0de-96e4-43f5-9035-08ebf0153bb9":
            name: "pokemon_species"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "41e87e88-ca53-45b4-b79d-c35211f16cf9":
                  name: "url"
                  type: "STRING"
                "1c1f2c86-6a15-43ca-b541-ec04df7cf503":
                  name: "name"
                  type: "STRING"
          b7a51989-9440-4589-a5df-c0c1caad9b78:
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "9f01a006-f4b6-476d-8160-bdaeedfb87e8":
                  name: "name"
                  type: "STRING"
                a2dfdb16-fba8-4279-b1af-caf0e6e1d108:
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "9621ae4a-79e2-4d07-8958-ee905f954bbe":
                      name: "url"
                      type: "STRING"
                    e8377b45-a07e-4cb6-a974-59462fa879bf:
                      name: "name"
                      type: "STRING"
          "36cf4011-f1ba-4af1-9c6b-7e6b3781bc4f":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "4923ca9d-fdb2-426d-bdfb-c1fa5d039339":
            name: "name"
            type: "STRING"
        examples:
          "97573357-3356-417a-b67b-2a4dc60661c2":
            value: "{pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/143/, name=snorlax}], names=[{name=黒い, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], id=1, name=black}"
      "3f6a1e39-ad4e-4692-8227-95b36d43d129":
        name: "Pokemon"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "08531896-41ab-4ee7-854f-22f7ccfa539d":
            name: "forms"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "1c4fd45e-9d3d-4110-98a7-d616c7e53e83":
                  name: "url"
                  type: "STRING"
                "2f3729eb-c051-439d-bcca-4c3dcbafaee6":
                  name: "name"
                  type: "STRING"
          "5f05b511-e984-4e80-82dd-0e30368aef95":
            name: "abilities"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                b1583038-4e75-46ff-a805-d96c9e3c7514:
                  name: "slot"
                  type: "INTEGER"
                  format: "INT32"
                f9ecc989-5389-4e54-9d2b-3760a8878660:
                  name: "is_hidden"
                  type: "BOOLEAN"
                c7a7d9da-48a6-4921-8d98-db65d3f58b52:
                  name: "ability"
                  type: "OBJECT"
                  properties:
                    "225151f7-3468-4811-b77b-cceddf6cad3a":
                      name: "url"
                      type: "STRING"
                    "52555b63-cf4d-4855-b230-139ed3b70129":
                      name: "name"
                      type: "STRING"
          "42a3fc2a-400d-435f-8f0a-6f22b047e4a6":
            name: "stats"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "5f5259c9-c4ff-401d-97b5-9500a227f96c":
                  name: "stat"
                  type: "OBJECT"
                  properties:
                    d1533f0f-1bb3-4259-9bf7-a6f6c52107a3:
                      name: "url"
                      type: "STRING"
                    c5e6dd4d-c54d-4fc3-9912-2d5f81772b1c:
                      name: "name"
                      type: "STRING"
                "9d0bc84a-c7a3-4609-a1c7-7f062cc2fcb8":
                  name: "effort"
                  type: "INTEGER"
                  format: "INT32"
                "0d0a685d-d9f2-480f-b152-2ccf0eed1dfa":
                  name: "base_stat"
                  type: "INTEGER"
                  format: "INT32"
          b47b062f-1e74-4a86-954b-5187d11e1479:
            name: "name"
            type: "STRING"
          b08c6cb1-036f-4bf7-9982-e233cd7b01a6:
            name: "weight"
            type: "INTEGER"
            format: "INT32"
          "0e66270c-d7d7-456e-9dbc-645366d7b054":
            name: "moves"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                d48963d7-2b1e-4558-8ba8-8a4f8a6638ba:
                  name: "version_group_details"
                  type: "ARRAY"
                  items:
                    type: "OBJECT"
                    properties:
                      a39edc05-2b30-4bcc-a046-3db1708b811a:
                        name: "move_learn_method"
                        type: "OBJECT"
                        properties:
                          acfd2546-d0d4-4164-96f2-0df97f753089:
                            name: "url"
                            type: "STRING"
                          "6765d103-1f8c-4c17-bf01-242e9f885674":
                            name: "name"
                            type: "STRING"
                      ec6bc660-3d98-4d2e-88a0-e47ca42fc9cf:
                        name: "level_learned_at"
                        type: "INTEGER"
                        format: "INT32"
                      "25c63f0a-7493-4383-a38c-35a7af8c62b2":
                        name: "version_group"
                        type: "OBJECT"
                        properties:
                          f1419669-45d7-4cd1-b0ba-cd4c7c5f7579:
                            name: "url"
                            type: "STRING"
                          "6cd31cd5-647b-4f57-94f8-6606293c4dad":
                            name: "name"
                            type: "STRING"
                "719b82b3-6e1b-4442-9e85-4f2080d53295":
                  name: "move"
                  type: "OBJECT"
                  properties:
                    "4be29e55-9afb-4599-83c3-48fcd844441b":
                      name: "url"
                      type: "STRING"
                    d3ae294a-413b-44b1-899f-4cb9d35c7089:
                      name: "name"
                      type: "STRING"
          "2fd2503d-c08d-4b26-a91c-355fefae9deb":
            name: "sprites"
            type: "OBJECT"
            properties:
              "998542b8-3eac-483d-89bd-278cd175ad29":
                name: "back_default"
                type: "STRING"
              "723d7854-cef6-4cd3-8051-d6375184bcf4":
                name: "back_shiny"
                type: "STRING"
              c210931e-b5d4-4e1a-be17-690ef5bfe5e2:
                name: "front_default"
                type: "STRING"
              "1d8f00a9-5c93-4d85-8192-7c1c813cadc4":
                name: "front_shiny"
                type: "STRING"
          "4546e6d8-e37a-4bd2-b7ea-f9b145a73050":
            name: "held_items"
            type: "ARRAY"
            items:
              type: "OBJECT"
          e774d67a-ebd2-4474-899b-3851984d6a0d:
            name: "location_area_encounters"
            type: "STRING"
          "155dc3a3-53a0-4635-9f08-93133c574019":
            name: "height"
            type: "INTEGER"
            format: "INT32"
          f6da37ad-1a8c-4991-8f4e-7c0207d15410:
            name: "is_default"
            type: "BOOLEAN"
          be6793ce-d893-4c1c-8124-fa071cec946a:
            name: "species"
            type: "OBJECT"
            properties:
              "55bc619c-f42d-45f4-8eca-ce0c69eb51dc":
                name: "url"
                type: "STRING"
              "2f36a6be-dfe7-4299-a533-601acdbecc1b":
                name: "name"
                type: "STRING"
          a05d3be0-94f4-4f62-92fa-5b0216967549:
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "7968c76d-5001-4b74-8a93-a6b450881369":
            name: "order"
            type: "INTEGER"
            format: "INT32"
          "70249ae6-d301-4506-a2f8-fe9175480c53":
            name: "game_indices"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "2ed3c77c-ed62-41b9-a101-0706ad3ca214":
                  name: "version"
                  type: "OBJECT"
                  properties:
                    b5e96bf7-c172-4bb3-9f8e-30a5e9391afe:
                      name: "url"
                      type: "STRING"
                    "6eb9db6c-3ce6-42a8-ad74-d444b61ab608":
                      name: "name"
                      type: "STRING"
                "3ef04d33-b411-4d59-bdb0-f3d5e91be55c":
                  name: "game_index"
                  type: "INTEGER"
                  format: "INT32"
          "0ab01344-46f8-464f-9d29-37e137b99e83":
            name: "base_experience"
            type: "INTEGER"
            format: "INT32"
          "48f0e6c7-5704-4d92-b1f7-cd4be6c03b3e":
            name: "types"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                fa3ca8e3-7e5f-41a5-a3ee-2442c16a4515:
                  name: "slot"
                  type: "INTEGER"
                  format: "INT32"
                "79a969f0-7953-441f-941c-93f3c74179c8":
                  name: "type"
                  type: "OBJECT"
                  properties:
                    "9da7b73c-95c3-4f99-ba61-754416b0f0ea":
                      name: "url"
                      type: "STRING"
                    "8d7a9ec5-f212-45a5-af40-ad53ebcac5b2":
                      name: "name"
                      type: "STRING"
        examples:
          "0ca65ca5-ea83-4ea3-b6d4-058b67c86c54":
            value: "{forms=[{url=http://pokeapi.co/api/v2/pokemon-form/1/, name=bulbasaur}], abilities=[{slot=3, is_hidden=true, ability={url=http://pokeapi.co/api/v2/ability/34/, name=chlorophyll}}], stats=[{stat={url=http://pokeapi.co/api/v2/stat/6/, name=speed}, effort=0, base_stat=45}], name=bulbasaur, weight=69, moves=[{version_group_details=[{move_learn_method={url=http://pokeapi.co/api/v2/move-learn-method/2/, name=egg}, level_learned_at=0, version_group={url=http://pokeapi.co/api/v2/version-group/3/, name=gold-silver}}], move={url=http://pokeapi.co/api/v2/move/13/, name=razor-wind}}], sprites={back_default=http://pokeapi.co/media/sprites/pokemon/back/1.png, back_shiny=http://pokeapi.co/media/sprites/pokemon/back/shiny/1.png, front_default=http://pokeapi.co/media/sprites/pokemon/1.png, front_shiny=http://pokeapi.co/media/sprites/pokemon/shiny/1.png}, held_items=[], location_area_encounters=/api/v2/pokemon/1/encounters, height=7, is_default=true, species={url=http://pokeapi.co/api/v2/pokemon-species/1/, name=bulbasaur}, id=1, order=1, game_indices=[{version={url=http://pokeapi.co/api/v2/version/22/, name=white-2}, game_index=1}], base_experience=64, types=[{slot=2, type={url=http://pokeapi.co/api/v2/type/4/, name=poison}}]}"
      f2ac8315-a56b-49a1-8d7f-f77be409ba82:
        name: "Pokeathlon Stat"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          d03a50a5-2d6d-49e6-beb6-08082e490295:
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "44be5c9d-7f2d-42f3-997f-77af390e36bd":
                  name: "name"
                  type: "STRING"
                "1798a81d-fe26-4b43-bdec-ca8bba6d83b4":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "499773af-cb82-4a5e-a93c-e0be212e36e5":
                      name: "url"
                      type: "STRING"
                    "8c21af62-80aa-429a-a959-325bacdfd4e6":
                      name: "name"
                      type: "STRING"
          "47405351-a6bf-422f-9dba-54ebccedb1cd":
            name: "affecting_natures"
            type: "OBJECT"
            properties:
              "9a3e6c9b-25b8-4e16-aaa1-e976d2032daa":
                name: "increase"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    "6dd6649c-cb79-46fc-b90f-1d7cf2b5f38c":
                      name: "nature"
                      type: "OBJECT"
                      properties:
                        a7db93a0-e53c-4080-b100-33b216af7f81:
                          name: "url"
                          type: "STRING"
                        f009e104-fb56-48b6-a8d6-5244b8d38eff:
                          name: "name"
                          type: "STRING"
                    "5e33fc4b-2600-4979-bfee-ca76433688bd":
                      name: "max_change"
                      type: "INTEGER"
                      format: "INT32"
              "5458f98a-9933-4d8f-abca-985c1059db11":
                name: "decrease"
                type: "ARRAY"
                items:
                  type: "OBJECT"
                  properties:
                    "95346052-bd07-48b5-9037-cdc9fe381cfa":
                      name: "nature"
                      type: "OBJECT"
                      properties:
                        "287d1797-bbc3-48ae-bc80-878b42c45545":
                          name: "url"
                          type: "STRING"
                        f1b9ebe1-b2af-441f-a49e-fd55fe9c4027:
                          name: "name"
                          type: "STRING"
                    "8353266c-4a7e-469d-9f09-2f159b265336":
                      name: "max_change"
                      type: "INTEGER"
                      format: "INT32"
          "53dd6ad2-3700-4e86-9d68-9188a3695d17":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "4c5351c1-edef-4afa-8741-35214019ba46":
            name: "name"
            type: "STRING"
        examples:
          e2351bd5-b356-4abf-98c0-af4ceaf93468:
            value: "{names=[{name=Vitesse, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], affecting_natures={increase=[{nature={url=http://pokeapi.co/api/v2/nature/5/, name=timid}, max_change=2}], decrease=[{nature={url=http://pokeapi.co/api/v2/nature/1/, name=hardy}, max_change=-1}]}, id=1, name=speed}"
      "355729be-ee2b-4c13-a40e-2b94a9aaac06":
        name: "Nature"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "41d33c2a-4919-4d8f-b63d-f3fad4b6b18e":
            name: "name"
            type: "STRING"
          fcde116b-df42-4582-b6e9-8384cf062caf:
            name: "pokeathlon_stat_changes"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "35dd8e05-594f-46a8-b1db-ba5194879cf8":
                  name: "pokeathlon_stat"
                  type: "OBJECT"
                  properties:
                    "3654f956-057b-48e2-aadc-139921c040e2":
                      name: "url"
                      type: "STRING"
                    "529ec126-fe73-42da-a70c-18df3704de36":
                      name: "name"
                      type: "STRING"
                eb737e32-0b1c-4eb2-8418-feaeef84b0b7:
                  name: "max_change"
                  type: "INTEGER"
                  format: "INT32"
          bcb5446f-15d8-4657-8a29-1a51a6e345fb:
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                c4898b2e-8591-40d5-a603-e88ff26925c2:
                  name: "name"
                  type: "STRING"
                d5e33281-87d3-4416-a4b9-e0321ed3aa10:
                  name: "language"
                  type: "OBJECT"
                  properties:
                    fe911d8d-3178-4a09-8b22-1301277499eb:
                      name: "url"
                      type: "STRING"
                    c6d17024-395d-4706-95f0-dd559f4a0c02:
                      name: "name"
                      type: "STRING"
          "4db149df-8a6b-493a-a983-457e45c82f07":
            name: "move_battle_style_preferences"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "76d98f28-df94-4911-afa0-84ff90fd7aa4":
                  name: "high_hp_preference"
                  type: "INTEGER"
                  format: "INT32"
                "4d2f4339-36e4-4a34-9cb4-f3c47cf96db9":
                  name: "low_hp_preference"
                  type: "INTEGER"
                  format: "INT32"
                a533f054-0a9f-45b9-a4c4-9a5ceb335e79:
                  name: "move_battle_style"
                  type: "OBJECT"
                  properties:
                    "9e4edf4d-4566-4315-9b41-8e942f3aae48":
                      name: "url"
                      type: "STRING"
                    eded99ab-8945-4759-9454-0cd9a3b9343b:
                      name: "name"
                      type: "STRING"
          bdffae88-1e61-4d5d-9f3d-e1111c67d354:
            name: "id"
            type: "INTEGER"
            format: "INT32"
        examples:
          "041ee3ff-d180-47df-bcfb-3fed0973080f":
            value: "{name=hardy, pokeathlon_stat_changes=[{pokeathlon_stat={url=http://pokeapi.co/api/v2/pokeathlon-stat/1/, name=speed}, max_change=-1}], names=[{name=がんばりや, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], move_battle_style_preferences=[{high_hp_preference=61, low_hp_preference=61, move_battle_style={url=http://pokeapi.co/api/v2/move-battle-style/1/, name=attack}}], id=1}"
      "534566ef-95fa-4aa2-945c-bbfbae06071a":
        name: "Growth Rate"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          e1c95361-6ac2-4254-8630-749b0ac06b22:
            name: "name"
            type: "STRING"
          "222709fa-219c-402a-954e-016efbdd5ff6":
            name: "levels"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "837ba90b-3395-483a-8811-32fa6b085f4d":
                  name: "experience"
                  type: "INTEGER"
                  format: "INT32"
                dc1464d8-e33d-41f1-8d50-184f6a7c911b:
                  name: "level"
                  type: "INTEGER"
                  format: "INT32"
          "5418cc56-edc7-4972-a98e-2fd2f1c6588e":
            name: "descriptions"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                beaeda65-1673-4d1b-b461-e17e9e4fa781:
                  name: "description"
                  type: "STRING"
                "77569fb7-f062-49f6-af6a-a2e68a7a8f9e":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "26086af4-b096-45bd-bdfb-7c14d8718aaa":
                      name: "url"
                      type: "STRING"
                    "7b4d6577-e077-4f27-b832-a65cfcb1e25a":
                      name: "name"
                      type: "STRING"
          afba2ce0-4d2f-4c99-9203-63fcb8ac3f98:
            name: "pokemon_species"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                c17a6603-50b3-4bcd-9040-eee37b10a8d8:
                  name: "url"
                  type: "STRING"
                "1fcb1448-c44f-4dec-b3bc-01acb102fc18":
                  name: "name"
                  type: "STRING"
          "376a6de7-cc69-4352-ac52-104173196f07":
            name: "formula"
            type: "STRING"
          bc3d22ea-b6e2-457a-9a92-a122c353ee3b:
            name: "id"
            type: "INTEGER"
            format: "INT32"
        examples:
          "1f4b1dfe-2e5e-4eaa-b8a2-a18aaff7fe88":
            value: "{name=slow, levels=[{experience=1250000, level=100}], descriptions=[{description=slow, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/58/, name=growlithe}], formula=\\frac{5x^3}{4}, id=1}"
      "8cd50067-f7da-421a-a0a9-7fe4d14e2695":
        name: "Gender"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          ba705721-04bc-4a8d-9b13-12bcd509d098:
            name: "pokemon_species_details"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "37003c2f-08ef-4776-b6f2-6ece63caec31":
                  name: "rate"
                  type: "INTEGER"
                  format: "INT32"
                fa934973-e11d-494c-85a5-db84e06f21f9:
                  name: "pokemon_species"
                  type: "OBJECT"
                  properties:
                    "4fdd2f86-d364-48b3-8c0b-754310285191":
                      name: "url"
                      type: "STRING"
                    b168b284-1cf3-4f4f-90a4-447465e6c558:
                      name: "name"
                      type: "STRING"
          "56f278c4-ce6d-44da-baca-510e78cc34c3":
            name: "required_for_evolution"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                c25f54bb-bb30-432f-82a9-10dbfc7aee2c:
                  name: "url"
                  type: "STRING"
                a817387a-b757-4289-a537-35c686c788fc:
                  name: "name"
                  type: "STRING"
          b1f0e0c0-1ce8-4c86-8543-6e1fa0de25f1:
            name: "id"
            type: "INTEGER"
            format: "INT32"
          acbbe9fd-887c-41b0-9bf7-b7fd2de95659:
            name: "name"
            type: "STRING"
        examples:
          "6f6754c4-c098-4189-a2ad-1b3e0d02311d":
            value: "{pokemon_species_details=[{rate=1, pokemon_species={url=http://pokeapi.co/api/v2/pokemon-species/1/, name=bulbasaur}}], required_for_evolution=[{url=http://pokeapi.co/api/v2/pokemon-species/413/, name=wormadam}], id=1, name=female}"
      af56ed04-d5b8-4b19-be3f-33887c5e37e6:
        name: "Egg Group"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          a73c94cc-d78f-4b1c-8ff0-cb8e0008add5:
            name: "pokemon_species"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                c01cedfd-7b4b-462a-b99a-b4a9f2b23e43:
                  name: "url"
                  type: "STRING"
                c69cd64e-b8f1-4eeb-8004-ed950763e6a6:
                  name: "name"
                  type: "STRING"
          "23bbc755-2a22-4345-bbb9-283776ae6be3":
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                cf74ce5e-24f4-40bd-988a-6d4acc447c37:
                  name: "name"
                  type: "STRING"
                "3234e359-2fcd-4e6b-bc11-56933fbbc4c7":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "35568500-4547-4df1-917a-60eb6a00bbcb":
                      name: "url"
                      type: "STRING"
                    "1abe3416-1088-4c33-b8d3-1c0f321e9404":
                      name: "name"
                      type: "STRING"
          "7169f707-6685-42ad-8cb1-af3297caf297":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "5236e11a-34fa-4004-9d47-7cec53855274":
            name: "name"
            type: "STRING"
        examples:
          b71dfb36-a047-4c06-bc30-eecb3e995dd4:
            value: "{pokemon_species=[{url=http://pokeapi.co/api/v2/pokemon-species/1/, name=bulbasaur}], names=[{name=かいじゅう, language={url=http://pokeapi.co/api/v2/language/1/, name=ja}}], id=1, name=monster}"
      b5471ee1-2d2d-48c7-9074-7863fcfd65c1:
        name: "Characteristic"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "675e35cc-3770-4b92-add0-5d18ea2aff76":
            name: "highest_stat"
            type: "OBJECT"
            properties:
              ec02ed2e-4ac5-4858-819f-c1e761910deb:
                name: "url"
                type: "STRING"
              ece970d0-c72a-4f74-b001-20eb70dd1290:
                name: "name"
                type: "STRING"
          b894def2-fd5f-4183-b327-bc6c64f6a880:
            name: "possible_values"
            type: "ARRAY"
            items:
              type: "INTEGER"
              format: "INT32"
          "38d60787-8a14-458d-b899-1e46b0c32f31":
            name: "id"
            type: "INTEGER"
            format: "INT32"
          "4a72410b-6195-476d-a282-24f861da739e":
            name: "descriptions"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                a6296dfe-7641-4eb3-bb78-5441a499e2c6:
                  name: "description"
                  type: "STRING"
                ab7d718d-a264-4aa2-b720-d3ddaf15fd01:
                  name: "language"
                  type: "OBJECT"
                  properties:
                    eb8f108e-d4fa-4524-9e5f-ad7dc673d0cb:
                      name: "url"
                      type: "STRING"
                    "17768ec7-eab5-4db9-8172-e8e8436421b3":
                      name: "name"
                      type: "STRING"
          d8a8a104-d7f5-49bb-88d1-720269855f41:
            name: "gene_modulo"
            type: "INTEGER"
            format: "INT32"
        examples:
          "5398f2bc-7409-4ce1-a3ed-7bb2182714c4":
            value: "{highest_stat={url=http://pokeapi.co/api/v2/stat/1/, name=hp}, possible_values=[0], id=1, descriptions=[{description=Adore manger, language={url=http://pokeapi.co/api/v2/language/5/, name=fr}}], gene_modulo=0}"
      "75aa98df-0186-49ec-8309-35fe21e588ab":
        name: "Ability"
        type: "OBJECT"
        section: "#/contract/sections/fa20e949-cb93-460a-a6fc-9391f8503ec5"
        properties:
          "03b6ed78-3c83-47c4-bb89-70facfdcf412":
            name: "effect_changes"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                baa0ec0a-ed47-418c-85ba-2b8bef0cdc1a:
                  name: "effect_entries"
                  type: "ARRAY"
                  items:
                    type: "OBJECT"
                    properties:
                      "2e285454-83ec-4734-87c5-a9ca2f94aee5":
                        name: "effect"
                        type: "STRING"
                      "59ef3cac-2fee-4a85-baef-5a65b1ff5ced":
                        name: "language"
                        type: "OBJECT"
                        properties:
                          "24f2f7e4-1eb1-4de2-b8bf-dcbab812dd35":
                            name: "url"
                            type: "STRING"
                          "88f5b90f-bbd9-4f0d-a4f1-ae0202ce07dc":
                            name: "name"
                            type: "STRING"
                fa613c19-ed79-4a51-9a20-6c65f4061f63:
                  name: "version_group"
                  type: "OBJECT"
                  properties:
                    "9a0fce29-c16b-4aa3-951f-49b136020435":
                      name: "url"
                      type: "STRING"
                    "62d2e13d-6227-4b95-b9a4-5c69d1f17216":
                      name: "name"
                      type: "STRING"
          "03b6d9e8-a3de-44cc-abfd-ac46032a6326":
            name: "name"
            type: "STRING"
          "50bb02c0-1e86-485c-b8f0-12fd1464e037":
            name: "generation"
            type: "OBJECT"
            properties:
              "4f768b85-9708-420e-85d8-392a69ecc61c":
                name: "url"
                type: "STRING"
              cea982bf-2f7e-45f0-a082-27e433183e09:
                name: "name"
                type: "STRING"
          "29ac5057-7c4e-40f3-8062-1135906730ce":
            name: "pokemon"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "6f2b9f80-3998-44a5-8761-677066aab718":
                  name: "slot"
                  type: "INTEGER"
                  format: "INT32"
                a6e4a6f3-dded-4032-a208-b0b5a150dbbb:
                  name: "is_hidden"
                  type: "BOOLEAN"
                bc65e710-86ff-46b0-b36f-2f98d8ff838d:
                  name: "pokemon"
                  type: "OBJECT"
                  properties:
                    ab0144c6-2963-4394-bf10-8a6cf21e433c:
                      name: "url"
                      type: "STRING"
                    "22444d19-32f0-4b16-baea-9689a26e8f2e":
                      name: "name"
                      type: "STRING"
          "8b5a0c96-6dfa-453e-b126-be3d567b96b9":
            name: "is_main_series"
            type: "BOOLEAN"
          "2ffc652f-bc78-4a76-999c-b3febec0d95b":
            name: "effect_entries"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                f072e367-d74b-4eb9-98a3-c3f08d30b77e:
                  name: "short_effect"
                  type: "STRING"
                bffe9b55-d5a6-4edf-9884-e1fee7640459:
                  name: "effect"
                  type: "STRING"
                "64190b61-7cd1-4bdb-bb89-522940027b9d":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    c65b92a7-bb12-473e-b826-4bc8d89765bd:
                      name: "url"
                      type: "STRING"
                    "38ad1450-8a26-436b-9904-989f1dfe8fb3":
                      name: "name"
                      type: "STRING"
          d7822b7d-0623-41cd-b9e6-32b9b709f00c:
            name: "names"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                b1c483c4-ef3e-434a-b39e-b982226796c1:
                  name: "name"
                  type: "STRING"
                d146b44d-05b2-4c3a-9c7a-2ea0bbf3977d:
                  name: "language"
                  type: "OBJECT"
                  properties:
                    ceae3ca7-336e-4953-9177-6d61644ff6ee:
                      name: "url"
                      type: "STRING"
                    "31ef4261-33a6-4c9c-9177-098537f9a0ea":
                      name: "name"
                      type: "STRING"
          a0a03167-b65f-4e7e-9189-4abd77d1f787:
            name: "flavor_text_entries"
            type: "ARRAY"
            items:
              type: "OBJECT"
              properties:
                "8bbf96d6-65ad-47d0-8362-c7643ea63842":
                  name: "flavor_text"
                  type: "STRING"
                "36e475e5-3b48-4802-aa1f-ccb8e7b8fe6f":
                  name: "language"
                  type: "OBJECT"
                  properties:
                    "17fdb8a2-2231-4ea9-823b-ca84b8f23977":
                      name: "url"
                      type: "STRING"
                    c92e45d8-0b6c-49dd-9a97-793a4264f5a3:
                      name: "name"
                      type: "STRING"
                "7a3870c6-2bb9-488d-b7da-7685d237552b":
                  name: "version_group"
                  type: "OBJECT"
                  properties:
                    "8bf1fe1d-a8c2-40eb-94ce-9c92c26d29cc":
                      name: "url"
                      type: "STRING"
                    "110ab83a-8ba3-42e6-bef8-60aee30b41ba":
                      name: "name"
                      type: "STRING"
          cf259f9e-bd71-4dfe-9716-abdc4dea11b3:
            name: "id"
            type: "INTEGER"
            format: "INT32"
        examples:
          "3dd55c6b-6a28-4ba2-9e89-9dd74f7297be":
            value: "{effect_changes=[{effect_entries=[{effect=Has no effect in battle., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], version_group={url=http://pokeapi.co/api/v2/version-group/11/, name=black-white}}], name=stench, generation={url=http://pokeapi.co/api/v2/generation/3/, name=generation-iii}, pokemon=[{slot=3, is_hidden=true, pokemon={url=http://pokeapi.co/api/v2/pokemon/44/, name=gloom}}], is_main_series=true, effect_entries=[{short_effect=Has a 10% chance of making target Pokémon flinch with each hit., effect=This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party., language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], names=[{name=Stench, language={url=http://pokeapi.co/api/v2/language/9/, name=en}}], flavor_text_entries=[{flavor_text=臭くて　相手が\nひるむ　ことがある。, language={url=http://pokeapi.co/api/v2/language/11/, name=ja-kanji}, version_group={url=http://pokeapi.co/api/v2/version-group/16/, name=omega-ruby-alpha-sapphire}}], id=1}"
  components: {}
---
