export const deshUmfrageData = {
    pages: [
        {
            elements: [
                {
                    "type": "checkbox",
                    "name": "produktionsbereiche",
                    "title": "Unser Betrieb hat folgende Produktionsbereiche",
                    "isRequired": false,
                    "colCount": 4,
                    "choices": [
                        "Schnittholz",
                        "KVH/MH",
                        "BSH",
                        "BSP",
                        "Paletten",
                        "Hobelware",
                        "Pellets",
                        "Massivholzplatten",
                        "Gartenholz",
                        "Strom"
                    ]
                },
                {
                    "type": "matrix",
                    "name": "Rundholzeinschnitt",
                    "title": "Rundholzeinschnitt pro Jahr in Festmetern",
                    "columns": [
                        {
                            "value": 5,
                            "text": "<5.000"
                        },
                        {
                            "value": 4,
                            "text": "5.001-25.000"
                        },
                        {
                            "value": 3,
                            "text": "5.001-100.000"
                        },
                        {
                            "value": 2,
                            "text": "100.001-500.00"
                        }, {
                            "value": 1,
                            "text": ">500.001"
                        }
                    ],
                    "rows": [
                        {
                            "value": "Nadelholz	",
                            "text": "Nadelholz	"
                        }, {
                            "value": "Laubholz",
                            "text": "Laubholz"
                        },
                    ],
                },
                {
                    "type": "matrix",
                    "name": "Schnittholzzukauf",
                    "title": "Schnittholzzukauf pro Jahr in Kubikmetern",
                    "columns": [
                        {
                            "value": 5,
                            "text": "<5.000"
                        },
                        {
                            "value": 4,
                            "text": "5.001-25.000"
                        },
                        {
                            "value": 3,
                            "text": "5.001-100.000"
                        },
                        {
                            "value": 2,
                            "text": "100.001-500.00"
                        }, {
                            "value": 1,
                            "text": ">500.001"
                        }
                    ],
                    "rows": [
                        {
                            "value": "Nadelholz	",
                            "text": "Nadelholz	"
                        }, {
                            "value": "Laubholz",
                            "text": "Laubholz"
                        },
                    ],
                }
            ],
            "name": "grunddaten",
            "title": "Grunddaten"
        }, {
            "name": "Markttendenzen",
            "title": "Angaben zu aktuellen Markttendenzen 3. Quartal 2022",
            elements: [
                {
                    "type": "html",
                    "name": "info",
                    "html": "<p>Erläuterung zu den Kriterien:<br>Gut – die Ziele/Erwartungen wurden übertroffen<br>Befriedigend – die Ziele/Erwartungen wurden erreicht<br>Ausreichend – die Ziele/Erwartungen wurden nicht ganz erreicht, die Ertragslage war jedoch noch auskömmlich<br>Schlecht – die Ziele/Erwartungen wurden deutlich verfehlt</p>"
                },
                {
                    "type": "matrix",
                    "name": "Geschäftslage ",
                    "title": "Geschäftslage (Vergleich zum Vorjahreszeitraum)",
                    "columns": [
                        {
                            "value": 5,
                            "text": "gut"
                        },
                        {
                            "value": 4,
                            "text": "befriedigend"
                        },
                        {
                            "value": 3,
                            "text": "ausreichend"
                        },
                        {
                            "value": 2,
                            "text": "schlecht"
                        },
                    ],
                    "rows": [
                        {
                            "value": "Nadelholz	",
                            "text": "Nadelholz	"
                        }, {
                            "value": "Laubholz",
                            "text": "Laubholz"
                        },
                    ],
                },
                {
                    "type": "matrix",
                    "name": "Auftragsstatus",
                    "title": "Auftragsstatus (Vergleich zum Vorjahreszeitraum)",
                    "columns": [
                        {
                            "value": 5,
                            "text": "gut"
                        },
                        {
                            "value": 4,
                            "text": "befriedigend"
                        },
                        {
                            "value": 3,
                            "text": "ausreichend"
                        },
                        {
                            "value": 2,
                            "text": "schlecht"
                        },
                    ],
                    "rows": [
                        {
                            "value": "Nadelholz	",
                            "text": "Nadelholz	"
                        }, {
                            "value": "Laubholz",
                            "text": "Laubholz"
                        },
                    ],
                },
                {
                    "type": "matrix",
                    "name": "Versorgungslage-Rohholz",
                    "title": "Versorgungslage Rohholz",
                    "columns": [
                        {
                            "value": 5,
                            "text": "gut"
                        },
                        {
                            "value": 4,
                            "text": "befriedigend"
                        },
                        {
                            "value": 3,
                            "text": "ausreichend"
                        },
                        {
                            "value": 2,
                            "text": "schlecht"
                        },
                    ],
                    "rows": [
                        {
                            "value": "nadelholz",
                            "text": "Nadelholz (Vergleich zum Vorquartal)"
                        }, {
                            "value": "laubholz",
                            "text": "Laubholz (Vergleich zum Vorjahr)"
                        },
                    ],
                },
            ]
        }, {
            name: "Schlussfragen",
            title: "Schlussfragen",
            elements: [
                {
                    "type": "checkbox",
                    "name": "Marktumfragen",
                    "title": "An welchen Marktumfragen bzw. Preisabfragen der Presse nehmen Sie regelmäßig teil",
                    "showNoneItem": true,
                    "colCount": 1,
                    "choices": [
                        "Statistisches Bundesamt",
                        "Holzzentralbaltt",
                        "Euwid",
                        "Holzjournal",
                        "HPE",
                        "IFO Institut",
                        "Holzkurier",
                    ],
                    showOtherItem: true
                },
                {
                    type: "comment",
                    name: "suggestions",
                    title: "Kommentare"
                }
            ],
        },
    ],
    "showProgressBar": "top",
    "showQuestionNumbers": "on",
    "title": "Marktumfrage III/2022"
};