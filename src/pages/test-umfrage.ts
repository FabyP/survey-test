export const testUmfrageData = {
  "showProgressBar": "top",
  "showQuestionNumbers": "on",
  "title": "Testumfrage",
  "pages": [
    /* Seite 1 */
    {
      "name": "page_1",
      "title": "Fragen-Elemente",
      "elements": [
        // Text und Überschrift -> HTML
        {
          "type": "html",
          "name": "info",
          "html": "<div><h1>Text und Überschrift</h1><p>Text und Überschirft als einfaches HTML</p></div>",
          "title": "test"
        },
        // Input Felder
        {
          "type": "panel",
          "name": "panel1",
          "title": "Textfelder in Panel mit Validation",
          "elements": [
            //Normales Textfeld
            {
              "name": "name",
              "type": "text",
              "title": "Normales Textfeld mit Placeholder",
              "placeHolder": "Jon Snow",
              "isRequired": true,
              "autoComplete": "name"
            },
            //Datepicker (optional)
            {
              "name": "birthdate",
              "type": "text",
              "inputType": "date",
              "title": "Datepicker (optional)",
              "isRequired": false,
              "autoComplete": "bdate"
            },
            //colorpicker (optional)
            {
              "name": "color",
              "type": "text",
              "inputType": "color",
              "title": "Color Picker (optional)"
            },
            //validation
            {
              "name": "email",
              "type": "text",
              "inputType": "email",
              "title": "e-mail:",
              "placeHolder": "jon.snow@nightwatch.org",
              "isRequired": true,
              "autoComplete": "email",
              "validators": [
                {
                  "type": "email"
                }
              ]
            },
            //Zahl
            {
              "name": "number",
              "type": "text",
              "inputType": "number",
              "title": "Anzahl Haustier-Wölfe",
              "isRequired": false,
              "validators": [
                {
                  "type": "regex",
                  "text": "Nur ganze Zahlen erlaubt",
                  "regex": "^[0-9]*$"
                }
              ]
            },
            //Fließkomma
            {
              "name": "floatingNumber",
              "type": "text",
              "inputType": "number",
              "title": "Irgendeine Fließkommazahl",
              "isRequired": false,
            },
            //Euro
            {
              "name": "euro",
              "type": "text",
              /* "inputType": "number", */
              "inputMask": "currency",
              "title": "Gehalt bei Nachtwache",
              "description": "in EUR",
              /* "validators": [
                {
                  "type": "regex",
                  "text": "Geldbeträge mit zwei Nachkommastellen",
                  "regex": "\d+[.]\d{2}"
                }
              ] */
            },
          ]
        }
      ]
    },
    {
      "name": "page_2",
      "title": "Auswahl-Elemente",
      "elements": [
        {
          "type": "radiogroup",
          "name": "sibling",
          "title": "Lieblings-Schwester/Bruder",
          "colCount": 4,
          "choices": [
            {
              value: 0,
              text: "Bran"
            },
            {
              value: 1,
              text: "Arya"
            },
            {
              value: 2,
              text: "Sansa"
            },
            {
              value: 3,
              text: "Rickon"
            },
            {
              value: 4,
              text: "Rob"
            },
          ],
          "choicesOrder": "none",
          "showOtherItem": false
        },
        {
          "type": "checkbox",
          "name": "dragons",
          "title": "Gesehene Drachen",
          "colCount": 0,
          "choices": [
            {
              value: 0,
              text: "Drogon"
            }, {
              value: 1,
              text: "Viserion"
            },
            {
              value: 2,
              text: "Rhaegal"
            },
          ],
          showNoneItem: true,
          showSelectAllItem: true,
          choicesOrder: "asc",
          showOtherItem: true
        }
      ]
    },
    // Kreuztabellen
    {
      "name": "page_3",
      "title": "Kreuztabellen",
      "elements": [
        //Kreuztabelle: ja/nein
        {
          "type": "matrix",
          "name": "yes-no_matrix",
          "title": "Wer hat das Potential den eisernen Thron zu besteigen? (Kreuztabelle: ja/nein)",
          "columns": [
            {
              "value": 0,
              "text": "Nein"
            },
            {
              "value": 1,
              "text": "Ja"
            },
          ],
          "rows": [
            {
              "value": 0,
              "text": "Rob"
            }, {
              "value": 1,
              "text": "Daenerys"
            }, {
              "value": 1,
              "text": "Jon"
            },
          ]
        },
        // 
        /* {
          "type": "matrix",
          "name": "yes-no_matrix",
          "title": "number_matrix",
        } */
      ]
    }, {
      "name": "page_4",
      "title": "Conditions",
      "elements": [
        {
          "type": "radiogroup",
          "name": "watched",
          "title": "Hast du Game of Thones gesehen?",
          "isRequired": false,
          "choices": [
            {
              "value": 1,
              "text": "Ja"
            }, {
              "value": 0,
              "text": "Nein"
            },
          ],
          "colCount": 0
        },
        {
          "type": "dropdown",
          "name": "season",
          "title": "Bis zu welcher Staffel hast du GoT gesehen?",
          "visibleIf": "{watched}=1",
          "isRequired": false,
          "choices": [
            1,
            2,
            3,
            4,
            5,
            6,
            7, 
            8
          ]
        },
        {
          "type": "panel",
          "name": "panel1",
          "title": "Bitte bewerten Sie die einzelnen Staffeln",
          "visibleIf": "{watched}=1 and {season} >= 1",
          "elements": [
            {
              "type": "rating",
              "name": "satisfaction_s1",
              "title": "Staffel 1",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 1",
            },
            {
              "type": "rating",
              "name": "satisfaction_s2",
              "title": "Staffel 2",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 2",
            },
            {
              "type": "rating",
              "name": "satisfaction_s3",
              "title": "Staffel 3",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 3",
            },
            {
              "type": "rating",
              "name": "satisfaction_s4",
              "title": "Staffel 4",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 4",
            },
            {
              "type": "rating",
              "name": "satisfaction_s5",
              "title": "Staffel 5",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 5",
            },
            {
              "type": "rating",
              "name": "satisfaction_s6",
              "title": "Staffel 6",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 6",
            },
            {
              "type": "rating",
              "name": "satisfaction_s7",
              "title": "Staffel 7",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >=7",
            },
            {
              "type": "rating",
              "name": "satisfaction_s8",
              "title": "Staffel 8",
              "minRateDescription": "Not Satisfied",
              "maxRateDescription": "Completely satisfied",
              "visibleIf": "{watched}=1 and {season} >= 8",
            },
          ]
        }

      ],
    }
  ]
}