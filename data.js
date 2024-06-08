var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-lycee",
      "name": "Entrée lycee",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.9159206738463865,
        "pitch": -0.045668951916411515,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 1.9073191205478395,
          "pitch": 0.3475451715531577,
          "rotation": 0,
          "target": "1-prau"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9554126214785317,
          "pitch": 0.03416067723914651,
          "title": "Parking deux roue intérieur<br>",
          "text": "Text"
        },
        {
          "yaw": 0.6231738034705891,
          "pitch": 0.06247374698016017,
          "title": "Parking deux roues extérieur<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-prau",
      "name": "Préau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8800714010500386,
          "pitch": 0.36185893414755554,
          "rotation": 0,
          "target": "0-entre-lycee"
        },
        {
          "yaw": -1.2510097868698402,
          "pitch": 0.3292100094966166,
          "rotation": 0,
          "target": "2-accueil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-accueil",
      "name": "Accueil",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6000383448929263,
        "pitch": 0.0035129963012607845,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.18655451704398374,
          "pitch": 0.2169193585705429,
          "rotation": 0,
          "target": "19-acces-infirmerie"
        },
        {
          "yaw": -3.130296647224032,
          "pitch": 0.24227549323095232,
          "rotation": 0,
          "target": "11-espace-casier"
        },
        {
          "yaw": -2.444688606305421,
          "pitch": 0.11397917419048653,
          "rotation": 0,
          "target": "29-cafeteria"
        },
        {
          "yaw": -1.7232709379180644,
          "pitch": 0.15659948138933544,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.18440936959795806,
          "pitch": 0.026189150189281918,
          "title": "Accueil",
          "text": "Text"
        },
        {
          "yaw": 3.045165957098831,
          "pitch": -0.06703399902711915,
          "title": "Administration",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6048583925395157,
        "pitch": 0.11768537609229668,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.4726616284622231,
          "pitch": 0.3208333291989707,
          "rotation": 0,
          "target": "4-vie-scolaire"
        },
        {
          "yaw": -2.834352949225421,
          "pitch": 0.15866023352802294,
          "rotation": 0,
          "target": "11-espace-casier"
        },
        {
          "yaw": 2.4664367873949846,
          "pitch": 0.12858644953621656,
          "rotation": 0,
          "target": "29-cafeteria"
        },
        {
          "yaw": 1.7094169684001201,
          "pitch": 0.29974410770815396,
          "rotation": 0,
          "target": "2-accueil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-vie-scolaire",
      "name": "Vie scolaire",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6732317443014306,
        "pitch": 0.021156630873310434,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 0.6537835975111506,
          "pitch": 0.21425572471098953,
          "rotation": 0,
          "target": "28-foyer"
        },
        {
          "yaw": 1.5934794522929385,
          "pitch": 0.27288341102296343,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -1.5693844055758959,
          "pitch": 0.25335268729994453,
          "rotation": 0,
          "target": "5-alle-centrale-01"
        },
        {
          "yaw": -2.6107998664908916,
          "pitch": 0.23532962922995004,
          "rotation": 0,
          "target": "30-cour-01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2667534673639906,
          "pitch": 0.042228547921498105,
          "title": "Vie scolaire<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-alle-centrale-01",
      "name": "Allée centrale 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.390776373034207,
        "pitch": 0.14319159050042884,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.7070187868734976,
          "pitch": 0.264609972004882,
          "rotation": 0,
          "target": "4-vie-scolaire"
        },
        {
          "yaw": -2.853175959432411,
          "pitch": 0.24327138349595678,
          "rotation": 0,
          "target": "27-sortie-restauration"
        },
        {
          "yaw": 2.472500803015148,
          "pitch": 0.34849342222492297,
          "rotation": 0,
          "target": "6-alle-centrale-02"
        },
        {
          "yaw": 0.8663730353099286,
          "pitch": 0.2801177570441453,
          "rotation": 0,
          "target": "30-cour-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-alle-centrale-02",
      "name": "Allée centrale 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.529853023854873,
        "pitch": -0.17058449227862837,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.6398171317718777,
          "pitch": 0.16450035482580638,
          "rotation": 0,
          "target": "5-alle-centrale-01"
        },
        {
          "yaw": 0.9440973376717334,
          "pitch": 0.14809817348279708,
          "rotation": 0,
          "target": "31-cour-02"
        },
        {
          "yaw": 2.507745295890831,
          "pitch": 0.18222413832416606,
          "rotation": 0,
          "target": "7-alle-centrale-03"
        },
        {
          "yaw": -1.6618796352881038,
          "pitch": 0.24188097017904298,
          "rotation": 0,
          "target": "27-sortie-restauration"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-alle-centrale-03",
      "name": "Allée centrale 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.6116644431303637,
        "pitch": 0.03432646852288457,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 0.8816354811827445,
          "pitch": 0.20319668507305266,
          "rotation": 0,
          "target": "32-cour-03"
        },
        {
          "yaw": -0.6785339390035379,
          "pitch": 0.1982844046816865,
          "rotation": 0,
          "target": "6-alle-centrale-02"
        },
        {
          "yaw": 2.4479818440736274,
          "pitch": 0.12998317799801917,
          "rotation": 0,
          "target": "8-batiment-h"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-batiment-h",
      "name": "Batiment H",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8077675780003233,
          "pitch": 0.2642942038822085,
          "rotation": 0,
          "target": "33-espace-vert-n"
        },
        {
          "yaw": -2.1136495752291147,
          "pitch": 0.10619783601116062,
          "rotation": 0,
          "target": "34-espace-vert-s"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-rotonde",
      "name": "Rotonde",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06908758971980511,
          "pitch": 0.11753456406749052,
          "rotation": 0,
          "target": "10-sep"
        },
        {
          "yaw": 3.111192692655065,
          "pitch": 0.10354969399276825,
          "rotation": 0,
          "target": "16-alle-4"
        },
        {
          "yaw": 1.6882608494347018,
          "pitch": 0.13225683512514763,
          "rotation": 0,
          "target": "32-cour-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sep",
      "name": "SEP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.802085204909826,
        "pitch": -0.19353342738208568,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 1.420693371992101,
          "pitch": 0.2038164345434339,
          "rotation": 0,
          "target": "9-rotonde"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7563126050546352,
          "pitch": -0.0048307767925166445,
          "title": "La Section d'Enseignement Professionnel (SEP)",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-espace-casier",
      "name": "Espace casier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.447333840323795,
        "pitch": 0.21825185505493394,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.26554468393481834,
          "pitch": 0.47396180261783094,
          "rotation": 0,
          "target": "12-allee-01"
        },
        {
          "yaw": -2.3693181772756002,
          "pitch": 0.1723364831349521,
          "rotation": 0,
          "target": "2-accueil"
        },
        {
          "yaw": 2.238555702120345,
          "pitch": 0.45971370074632567,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-allee-01",
      "name": "Allee 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.134066964617123,
        "pitch": 0.09941986370642653,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -2.782112096894009,
          "pitch": 0.38144914500665017,
          "rotation": 0,
          "target": "13-allee-02"
        },
        {
          "yaw": -1.2354092701333848,
          "pitch": 0.24866723296017312,
          "rotation": 0,
          "target": "11-espace-casier"
        },
        {
          "yaw": -1.7376310935913128,
          "pitch": 0.3277893176798976,
          "rotation": 0,
          "target": "17-entree-cdi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-allee-02",
      "name": "Allee 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.4526414931562401,
        "pitch": 0.20324064166300637,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 3.0733131572667043,
          "pitch": 0.3467657527305228,
          "rotation": 0,
          "target": "17-entree-cdi"
        },
        {
          "yaw": -1.7717360624080722,
          "pitch": 0.20368261913207775,
          "rotation": 0,
          "target": "12-allee-01"
        },
        {
          "yaw": 1.3819200729782608,
          "pitch": 0.4171943028406204,
          "rotation": 0,
          "target": "15-alle-3b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-alle-3a",
      "name": "Allée 3A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.396025349381455,
          "pitch": 0.26887592654310666,
          "rotation": 0,
          "target": "13-allee-02"
        },
        {
          "yaw": 2.6292274769907458,
          "pitch": 0.21425460540507046,
          "rotation": 0,
          "target": "15-alle-3b"
        },
        {
          "yaw": 1.5185217493784702,
          "pitch": 0.3791467470362342,
          "rotation": 0,
          "target": "16-alle-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-alle-3b",
      "name": "Allée 3B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.1345408691642724,
        "pitch": 0.019321479656944973,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 0.2973645504874689,
          "pitch": 0.30308746985037516,
          "rotation": 0,
          "target": "13-allee-02"
        },
        {
          "yaw": 2.9684936729208413,
          "pitch": 0.29111032602520126,
          "rotation": 0,
          "target": "16-alle-4"
        },
        {
          "yaw": 1.5786278904610196,
          "pitch": 0.3870513753120832,
          "rotation": 0,
          "target": "14-alle-3a"
        },
        {
          "yaw": -1.5394042655262048,
          "pitch": 0.3772131885611447,
          "rotation": 0,
          "target": "30-cour-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-alle-4",
      "name": "Allée 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.52783437597658,
          "pitch": 0.0755294204771424,
          "rotation": 0,
          "target": "31-cour-02"
        },
        {
          "yaw": -0.046583665054127366,
          "pitch": 0.06785719471321983,
          "rotation": 0,
          "target": "9-rotonde"
        },
        {
          "yaw": 3.117085485731888,
          "pitch": 0.1886293660170697,
          "rotation": 0,
          "target": "15-alle-3b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-entree-cdi",
      "name": "Entree CDI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.5625330435274112,
        "pitch": -0.036886190086523385,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.0256985043639624,
          "pitch": 0.40134884551777006,
          "rotation": 0,
          "target": "18-cdi"
        },
        {
          "yaw": 0.8232144143647862,
          "pitch": 0.3074344134705207,
          "rotation": 0,
          "target": "11-espace-casier"
        },
        {
          "yaw": -2.4177323039095207,
          "pitch": 0.3901479724407402,
          "rotation": 0,
          "target": "13-allee-02"
        },
        {
          "yaw": 2.0488835039877378,
          "pitch": 0.4108961205342645,
          "rotation": 0,
          "target": "12-allee-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cdi",
      "name": "CDI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3080095437285522,
          "pitch": 0.48702494359980797,
          "rotation": 0,
          "target": "17-entree-cdi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-acces-infirmerie",
      "name": "Acces infirmerie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6017084477198615,
        "pitch": 0.19305203102133817,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.2933869238657483,
          "pitch": 0.35365451572628004,
          "rotation": 0,
          "target": "2-accueil"
        },
        {
          "yaw": 1.477254494571448,
          "pitch": 0.31041198227550915,
          "rotation": 0,
          "target": "20-acces-restauration"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.639432512440214,
          "pitch": 0.0995517562244661,
          "title": "Infirmerie",
          "text": "Text"
        }
      ]
    },
    {
      "id": "20-acces-restauration",
      "name": "Acces restauration",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.5856393710188943,
        "pitch": -0.005267358632604413,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.5624120120429374,
          "pitch": 0.2397204460476452,
          "rotation": 0,
          "target": "19-acces-infirmerie"
        },
        {
          "yaw": 1.6337886397461734,
          "pitch": 0.4794601277605981,
          "rotation": 0,
          "target": "21-restauration-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-restauration-01",
      "name": "Restauration 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 0.006661524246226236,
          "pitch": 0.3294955812674747,
          "rotation": 0,
          "target": "22-restauration-02"
        },
        {
          "yaw": 3.1276938689253235,
          "pitch": 0.409031014362629,
          "rotation": 0,
          "target": "20-acces-restauration"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.160126891391318,
          "pitch": 0.17260467322660134,
          "title": "Toilettes",
          "text": "Text"
        }
      ]
    },
    {
      "id": "22-restauration-02",
      "name": "Restauration 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.9520836403075084,
        "pitch": 0.031616966711364825,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 0.473956925570965,
          "pitch": 0.28448686538217594,
          "rotation": 0,
          "target": "21-restauration-01"
        },
        {
          "yaw": -1.663686710103283,
          "pitch": 0.4878448570571443,
          "rotation": 0,
          "target": "23-restauration-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-restauration-03",
      "name": "Restauration 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.30591339578180055,
        "pitch": -0.030493351957559867,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.13681631730916166,
          "pitch": 0.21863129261737413,
          "rotation": 0,
          "target": "24-restauration-04"
        },
        {
          "yaw": -2.736539354103133,
          "pitch": 0.439475145378152,
          "rotation": 0,
          "target": "22-restauration-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-restauration-04",
      "name": "Restauration 04",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6336898914169247,
        "pitch": 0.14911309326554267,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.361920428377612,
          "pitch": 0.3248347817726529,
          "rotation": 0,
          "target": "25-restauration-05"
        },
        {
          "yaw": 2.4296833228534798,
          "pitch": 0.28299884093240024,
          "rotation": 0,
          "target": "23-restauration-03"
        },
        {
          "yaw": -2.447543790595546,
          "pitch": 0.27214439401160107,
          "rotation": 0,
          "target": "27-sortie-restauration"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-restauration-05",
      "name": "Restauration 05",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.6325176327056905,
        "pitch": 0.39473303894186174,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.1385043056833482,
          "pitch": 0.26296435193797585,
          "rotation": 0,
          "target": "26-restauration-06"
        },
        {
          "yaw": 1.902034371316244,
          "pitch": 0.4006256436158928,
          "rotation": 0,
          "target": "24-restauration-04"
        },
        {
          "yaw": 2.772299578473678,
          "pitch": 0.21533742789213228,
          "rotation": 0,
          "target": "27-sortie-restauration"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-restauration-06",
      "name": "Restauration 06",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06716813870607652,
          "pitch": 0.5341143622803717,
          "rotation": 0,
          "target": "25-restauration-05"
        },
        {
          "yaw": -2.982677563810336,
          "pitch": 0.5849486141394191,
          "rotation": 0,
          "target": "34-espace-vert-s"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-sortie-restauration",
      "name": "Sortie Restauration",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.7720158336791982,
        "pitch": 0.0193781035930769,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -0.5875208737034754,
          "pitch": 0.23393493961340894,
          "rotation": 0,
          "target": "5-alle-centrale-01"
        },
        {
          "yaw": 1.7910298113351812,
          "pitch": 0.5194153963417403,
          "rotation": 0,
          "target": "25-restauration-05"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.254708341093922,
        "pitch": 0.11282138700929067,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.986603516868966,
          "pitch": 0.37512877496220653,
          "rotation": 0,
          "target": "4-vie-scolaire"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-cafeteria",
      "name": "Cafeteria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "30-cour-01",
      "name": "Cour 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.11233544028169,
          "pitch": 0.20921332114626345,
          "rotation": 0,
          "target": "4-vie-scolaire"
        },
        {
          "yaw": -2.15233781951226,
          "pitch": 0.19252520209873758,
          "rotation": 0,
          "target": "5-alle-centrale-01"
        },
        {
          "yaw": 2.6360224336962093,
          "pitch": 0.2752985356411308,
          "rotation": 0,
          "target": "31-cour-02"
        },
        {
          "yaw": 1.083048729441213,
          "pitch": 0.1912161902807039,
          "rotation": 0,
          "target": "15-alle-3b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-cour-02",
      "name": "Cour 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9191717791699787,
          "pitch": 0.1472386166414985,
          "rotation": 0,
          "target": "16-alle-4"
        },
        {
          "yaw": -0.6568793339813652,
          "pitch": 0.1855819669153007,
          "rotation": 0,
          "target": "30-cour-01"
        },
        {
          "yaw": -2.2114904521604846,
          "pitch": 0.23444119894021753,
          "rotation": 0,
          "target": "6-alle-centrale-02"
        },
        {
          "yaw": 2.497056755555775,
          "pitch": 0.23056869237461797,
          "rotation": 0,
          "target": "32-cour-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-cour-03",
      "name": "Cour 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.996181663928617,
        "pitch": 0.07201642417588161,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -2.2667842662928663,
          "pitch": 0.22290838491978704,
          "rotation": 0,
          "target": "7-alle-centrale-03"
        },
        {
          "yaw": -0.7933697842644527,
          "pitch": 0.24330368369595234,
          "rotation": 0,
          "target": "31-cour-02"
        },
        {
          "yaw": 0.8808219049237476,
          "pitch": 0.30646451772529737,
          "rotation": 0,
          "target": "9-rotonde"
        },
        {
          "yaw": 2.3997494964558417,
          "pitch": 0.35128890216493147,
          "rotation": 0,
          "target": "33-espace-vert-n"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-espace-vert-n",
      "name": "Espace vert N",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.9599622707304505,
        "pitch": -0.027492834383524567,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -1.2797333094782353,
          "pitch": 0.1782367415652928,
          "rotation": 0,
          "target": "32-cour-03"
        },
        {
          "yaw": -2.771931407992774,
          "pitch": 0.12963124062223486,
          "rotation": 0,
          "target": "8-batiment-h"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-espace-vert-s",
      "name": "Espace vert S",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4804480412487564,
          "pitch": 0.16369277063615684,
          "rotation": 0,
          "target": "26-restauration-06"
        },
        {
          "yaw": 1.1819036753564465,
          "pitch": 0.19099327841563962,
          "rotation": 0,
          "target": "8-batiment-h"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
