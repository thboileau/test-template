---
layout: apiDefinition_1.0.0
api-definition:
  specVersion: "4.0.0"
  info:
    name: "text"
    version: "1.0.0"
    description: "No description"
    license: {}
    contact: {}
  contract:
    mediaTypes:
    - "application/json"
    sections:
      "9d32ef57-114a-43cf-be00-d9a0e6857316":
        name: "This is my section"
        description: "**My** *section*"
        elementOrder:
        - "#/contract/texts/0186d974-e402-4661-9470-57d20e23cddc"
    unsortedElementOrder:
    - "#/contract/texts/c6e85def-d98b-4acd-ab25-5553bf1d9df3"
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
    texts:
      c6e85def-d98b-4acd-ab25-5553bf1d9df3:
        title: "Text in unsorted section"
        content: "# Quiche aux poireaux\n\n## Préparation\n* Temps Total : 1h10\n* Préparation : 30 min\n* Cuisson : 40 min\n\n\nLavez et coupez les blancs de poireaux en tronçons.\nFaites-les cuire dans une sauteuse couverte avec le beurre\net un peu d'eau environ 20 minutes.\nUne fois cuits, travaillez-les en purée à la fourchette.\nEtalez la pâte dans un moule, piquez-la à la fourchette.\nSaupoudrez de chapelure et étalez la purée de poireaux.\nBattez les oeufs avec la crème et le lait, sel, poivre et une pincée de muscade.\nVersez sur les poireaux et saupoudrez de chapelure.\nFaites cuire 40 min au four préchauffé à 220°C (thermostat 7-8)."
      "0186d974-e402-4661-9470-57d20e23cddc":
        title: "text in section"
        content: "# Les Nems de ma grand-mère\n\n## Préparation\n\n* Temps Total : 1h45\n* Préparation : 15 min\n* Repos : 1h10\n* Cuisson : 20 min\n\n### Préparation de la farce\n\nFaites tremper les champignons parfumés dans de l'eau froide pendant 1 h (l'odeur peut vous paraître un peu forte mais ils donnent un goût extra à la farce).\nFaites tremper les vermicelles dans de l'eau froide pendant 10 min.\nMixez et mélangez le porc, l'oignon, la carotte, les champigons, les vermicelles, les germes de soja et les oeufs. Rajoutez un peu de poivre et le nuoc mam pour l'assaisonnement.\n\n### Pour rouler les nems\n\nTrempez une galette de riz dans l'eau et étalez-la sur un chiffon en coton. Laissez ramollir pendant 30 secondes. (si elle n'est pas assez molle, vous pouvez l'humidifier de quelques gouttes d'eau supplémentaires).\nDéposez une cuillère à soupe de farce sur un bord et rouler la galette. Secret de grand mère : il ne faut pas trop serrer le nem sinon il éclate lors de la cuisson).\n\nGardez les nems, séparés les uns des autres, sur un chiffon car ils sont très collants à ce stade !\n\n###La cuisson\n\nFaites frire à feu moyen jusqu'à ce qu'ils soient bien dorés. Vous pouvez ajouter deux gousses d'ail dans l'huile de friture, ça donne un parfum très doux aux nems.\nEt voila, le tour est joué ! Servez les nems avec des feuilles de salade, de menthe et de coriandre. On peux tremper les nems dans de la sauce pour nems : mélange de nuoc mam, d'eau, de jus de citron et de purée de piments."
        section: "#/contract/sections/9d32ef57-114a-43cf-be00-d9a0e6857316"
  components: {}
---