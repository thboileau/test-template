---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Security schemes"
    version: "all"
    description: "No description"
  contract:
    securitySchemes:
      "7e1551d2-dbec-44e6-8974-a561eeb84a1c":
        name: "HTTP_BASIC"
        type: "basic"
        description: "All GET methods are public, meaning that *you can read all the data*. Write operations require authentication and therefore are forbidden to the general public."
        describedBy: {}
      dad0dc49-d453-42a5-ae1c-a9867f748727:
        name: "Bearer authentication"
        type: "bearer"
        description: "This is a *Bearer* authentication"
        settings:
          bearerFormat: "dsds"
        describedBy:
          headers:
            e06c0cfb-e534-48b8-9ebb-ab704ca0a7e5:
              name: "header1"
              type: "STRING"
              description: "dsdsf"
              required: true
              examples:
                b2517b60-d943-4bf0-b942-e5656cb42694:
                  value: "fds"
            "6ff8a6aa-489f-42e4-b03a-c6ea34544e9e":
              name: "dsfdsf"
              type: "STRING"
              description: "dsfs"
              required: false
          queryParameters:
            a6711ded-ab10-46e2-9b97-3224db16a0df:
              name: "queryparam1"
              type: "STRING"
              description: "This a *query param*"
              required: true
              examples:
                f89bfa64-9f65-4110-84dd-717db288111f:
                  value: "example"
            "327d4cae-43ee-4fba-ab47-497240ae2cb1":
              name: "queryParam2"
              type: "STRING"
              description: "ds"
              required: false
              examples:
                c666f81a-491c-41d0-bad9-cca478bdce3e:
                  value: "ds"
      cc8c9363-a9ba-4bc3-8145-31fb06e9a4f0:
        name: "Digest authentication"
        type: "digest"
        description: "dsdd"
        describedBy:
          queryParameters:
            "6ea3bb66-0ed7-4961-bf5c-e7c6c0e94ba3":
              name: "sds"
              type: "STRING"
              description: "dsds"
              required: false
      "379ec3be-3394-444b-86b3-833a1a2b0a67":
        name: "OAuth1"
        type: "oauth1"
        description: "dsds"
        describedBy:
          queryParameters:
            "2e39c53d-061b-4f2b-a048-262d5257ec55":
              name: "dsds"
              type: "STRING"
              description: "dsds"
              required: false
              examples:
                "9841b74b-fb14-438a-9aa2-b07a6f09fd74":
                  value: "dsd"
      "52bbf1d9-56bf-41d0-a84c-657d877357d3":
        name: "OAuth2"
        type: "oauth2"
        description: "dsds"
        settings:
          authorizationUri: "http://authorization.uri"
          accessTokenUri: "http://access.token.uri"
          authorizationGrants:
          - "authorizationCode"
          - "implicit"
          - "password"
          - "clientCredentials"
          scopes:
            "940017ee-b309-44de-b10c-40a8d48269cd":
              name: "sdds"
              description: "sdsd"
            "6c3765e9-d8e0-4d42-83f6-190c8eb1e6cb":
              name: "dssdds"
              description: "sds"
        describedBy:
          queryParameters:
            "9d21afec-079b-4c08-b3fe-33b90f54441c":
              name: "ds"
              type: "STRING"
              description: "ds"
              required: false
              examples:
                fc979b2a-df1a-415c-a722-316230b27057:
                  value: "ds"
      d354d145-9698-43fc-9186-8d8ac9d046ef:
        name: "OpenID Connect"
        type: "openId"
        description: "ds"
        settings:
          openIdConnectUrl: "http://open.id"
        describedBy: {}
      "4d0505e1-135b-48c2-94d4-b848a773da2d":
        name: "Custom"
        type: "custom"
        description: "sd"
        describedBy: {}
      "95bf9756-b81e-4b11-abfa-01f7be637c32":
        name: "Pass-through"
        type: "passThrough"
        description: "s"
        describedBy: {}
---