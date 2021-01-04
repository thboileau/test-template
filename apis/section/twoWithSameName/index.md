---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "section"
    version: "twoWithSameName"
    description: "Check the ID of the sections: they should be different"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    sections:
      "0":
        name: "This is my section"
        description: "ID should be section_this-is-my-section"
      "1":
        name: "This is my section"
        description: "ID should be section_this-is-my-section_2"
    securitySchemes:
      "1bee81fc-7129-4a76-be9f-9fd04ba3c6a0":
        name: "Basic authentication"
        type: "basic"
        describedBy:
          queryParameters:
            "2469dcc2-2141-4e73-9557-3c8030501e6b":
              name: "dsds"
              type: "OBJECT"
              required: false
              properties:
                "5328b71f-5007-48c4-a863-e6999345f92d":
                  name: "dsds"
                  type: "STRING"
                  required: false
  components: {}
---