---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "Security schemes"
    version: "secured by with scopes"
    description: "No description"
  contract:
    unsortedElementOrder:
    - "#/contract/resources/eb3a8140-3cd7-43fe-9918-fe0d1948da34"
    securedBy:
    - scheme: "#/contract/securitySchemes/52bbf1d9-56bf-41d0-a84c-657d877357d3"
      scopes:
      - "#/contract/securitySchemes/52bbf1d9-56bf-41d0-a84c-657d877357d3/settings/scopes/940017ee-b309-44de-b10c-40a8d48269cd"
      - "#/contract/securitySchemes/52bbf1d9-56bf-41d0-a84c-657d877357d3/settings/scopes/6c3765e9-d8e0-4d42-83f6-190c8eb1e6cb"
    securitySchemes:
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
              name: "write:id"
              description: "This is the **description** of **write:id**"
            "6c3765e9-d8e0-4d42-83f6-190c8eb1e6cb":
              name: "read:id"
              description: "This is the **description** of **read:id**"
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
    resources:
      eb3a8140-3cd7-43fe-9918-fe0d1948da34:
        name: "name"
        path: "/security"
        operations:
          "54117857-4d79-435f-b4fa-6910609fa99c":
            name: "get"
            method: "GET"
            securedBy:
            - scheme: "#/contract/securitySchemes/52bbf1d9-56bf-41d0-a84c-657d877357d3"
              scopes:
              - "#/contract/securitySchemes/52bbf1d9-56bf-41d0-a84c-657d877357d3/settings/scopes/6c3765e9-d8e0-4d42-83f6-190c8eb1e6cb"
---