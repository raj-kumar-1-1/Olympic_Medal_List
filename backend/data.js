const sampleData = [
    {
    
  "countryName": "India",
  "flag": "Indian-flag.png",
  "description": "India’s Summer Olympic performance from 2000–2024",
  "olympics": {
    "2000": {
      "gold": { "count": 0, "sports": [] },
      "silver": { "count": 0, "sports": [] },
      "bronze": {
        "count": 1,
        "sports": [
          {
            "sportName": "Weightlifting",
            "player": { "playerName": "Karnam Malleswari", "playerImage": "karnam_malleswari.png" }
          }
        ]
      }
    },
    "2004": {
      "gold": { "count": 0, "sports": [] },
      "silver": {
        "count": 1,
        "sports": [
          {
            "sportName": "Shooting",
            "player": { "playerName": "Rajyavardhan Singh Rathore", "playerImage": "rathore.png" }
          }
        ]
      },
      "bronze": { "count": 0, "sports": [] }
    },
    "2008": {
      "gold": {
        "count": 1,
        "sports": [
          {
            "sportName": "Shooting",
            "player": { "playerName": "Abhinav Bindra", "playerImage": "bindra.png" }
          }
        ]
      },
      "silver": { "count": 0, "sports": [] },
      "bronze": {
        "count": 2,
        "sports": [
          {
            "sportName": "Boxing",
            "player": { "playerName": "Vijender Singh", "playerImage": "vijender.png" }
          },
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Sushil Kumar", "playerImage": "sushil.png" }
          }
        ]
      }
    },
    "2012": {
      "gold": { "count": 0, "sports": [] },
      "silver": {
        "count": 2,
        "sports": [
          {
            "sportName": "Shooting",
            "player": { "playerName": "Vijay Kumar", "playerImage": "vijay_kumar.png" }
          },
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Sushil Kumar", "playerImage": "sushil.png" }
          }
        ]
      },
      "bronze": {
        "count": 4,
        "sports": [
          {
            "sportName": "Badminton",
            "player": { "playerName": "Saina Nehwal", "playerImage": "saina.png" }
          },
          {
            "sportName": "Boxing",
            "player": { "playerName": "Mary Kom", "playerImage": "mary_kom.png" }
          },
          {
            "sportName": "Shooting",
            "player": { "playerName": "Gagan Narang", "playerImage": "gagan.png" }
          },
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Yogeshwar Dutt", "playerImage": "yogeshwar.png" }
          }
        ]
      }
    },
    "2016": {
      "gold": { "count": 0, "sports": [] },
      "silver": {
        "count": 1,
        "sports": [
          {
            "sportName": "Badminton",
            "player": { "playerName": "P. V. Sindhu", "playerImage": "pv_sindhu.png" }
          }
        ]
      },
      "bronze": {
        "count": 1,
        "sports": [
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Sakshi Malik", "playerImage": "sakshi.png" }
          }
        ]
      }
    },
    "2020": {
      "gold": {
        "count": 1,
        "sports": [
          {
            "sportName": "Athletics",
            "player": { "playerName": "Neeraj Chopra", "playerImage": "neeraj.png" }
          }
        ]
      },
      "silver": {
        "count": 2,
        "sports": [
          {
            "sportName": "Weightlifting",
            "player": { "playerName": "Saikhom Mirabai Chanu", "playerImage": "mirabai.png" }
          },
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Ravi Kumar Dahiya", "playerImage": "ravi.png" }
          }
        ]
      },
      "bronze": {
        "count": 4,
        "sports": [
          {
            "sportName": "Badminton",
            "player": { "playerName": "P. V. Sindhu", "playerImage": "pv_sindhu.png" }
          },
          {
            "sportName": "Boxing",
            "player": { "playerName": "Lovlina Borgohain", "playerImage": "lovlina.png" }
          },
          {
            "sportName": "Hockey",
            "player": { "playerName": "Indian men’s hockey team", "playerImage": "hockey_team.png" }
          },
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Bajrang Punia", "playerImage": "bajrang.png" }
          }
        ]
      }
    },
    "2024": {
      "gold": { "count": 0, "sports": [] },
      "silver": {
        "count": 1,
        "sports": [
          {
            "sportName": "Athletics",
            "player": { "playerName": "Neeraj Chopra", "playerImage": "neeraj.png" }
          }
        ]
      },
      "bronze": {
        "count": 5,
        "sports": [
          {
            "sportName": "Shooting",
            "player": { "playerName": "Manu Bhaker", "playerImage": "manu.png" }
          },
          {
            "sportName": "Shooting",
            "player": { "playerName": "Manu Bhaker & Sarabjot Singh (mixed team)", "playerImage": "manu_sarabjot.png" }
          },
          {
            "sportName": "Shooting",
            "player": { "playerName": "Swapnil Kusale", "playerImage": "swapnil.png" }
          },
          {
            "sportName": "Hockey",
            "player": { "playerName": "Indian men’s hockey team", "playerImage": "hockey_team.png" }
          },
          {
            "sportName": "Wrestling",
            "player": { "playerName": "Aman Sehrawat", "playerImage": "aman.png" }
          }
        ]
      }
    }
  }
},
{
  "countryName": "United States",
  "flag": "USA-flag.png",
  "description": "Team USA’s Summer Olympic performance from 2000–2024",
  "olympics": {
    "2000": {
      "gold": { "count": 37, "sports": [
        { "sportName": "Swimming", "player": { "playerName": "Multiple (e.g. Michael Phelps debut)", "playerImage": "swimming_team.png" } },
        { "sportName": "Athletics", "player": { "playerName": "Track & field stars", "playerImage": "athletics.png" } }
      ]},
      "silver": { "count": 34, "sports": [] },
      "bronze": { "count": 32, "sports": [] }
    },
    "2004": {
      "gold": { "count": 36, "sports": [{ "sportName": "Swimming", "player": { "playerName": "Multiple champions", "playerImage": "swimmers.png" } }] },
      "silver": { "count": 39, "sports": [] },
      "bronze": { "count": 26, "sports": [] }
    },
    "2008": {
      "gold": { "count": 36, "sports": [{ "sportName": "Swimming", "player": { "playerName": "Michael Phelps", "playerImage": "phelps.png" } }] },
      "silver": { "count": 39, "sports": [] },
      "bronze": { "count": 37, "sports": [] }
    },
    "2012": {
      "gold": { "count": 48, "sports": [{ "sportName": "Swimming", "player": { "playerName": "Michael Phelps, Missy Franklin", "playerImage": "phelps_franklin.png" } }] },
      "silver": { "count": 26, "sports": [] },
      "bronze": { "count": 30, "sports": [] }
    },
    "2016": {
  "gold": { "count": 46, "sports": [
    { "sportName": "Swimming", "player": { "playerName": "Michael Phelps, Katie Ledecky & team", "playerImage": "swimming_rio.png" } },
    { "sportName": "Athletics", "player": { "playerName": "Brianna Rollins, long jump stars, etc.", "playerImage": "athletics_rio.png" } },
    { "sportName": "Gymnastics", "player": { "playerName": "Simone Biles & U.S. women’s team", "playerImage": "gymnastics_rio.png" } },
    { "sportName": "Cycling (Track & Road)", "player": { "playerName": "U.S. cycling medalists", "playerImage": "cycling_rio.png" } },
    { "sportName": "Wrestling", "player": { "playerName": "Men’s & women’s wrestlers", "playerImage": "wrestling_rio.png" } },
    { "sportName": "Basketball", "player": { "playerName": "Men’s & Women’s Teams", "playerImage": "basketball_rio.png" } },
    { "sportName": "Boxing", "player": { "playerName": "U.S. boxing medalists", "playerImage": "boxing_rio.png" } },
    { "sportName": "Tennis", "player": { "playerName": "U.S. tennis medalists", "playerImage": "tennis_rio.png" } },
    { "sportName": "Judo", "player": { "playerName": "Kayla Harrison & team", "playerImage": "judo_rio.png" } },
    { "sportName": "Rowing", "player": { "playerName": "U.S. rowing medalists", "playerImage": "rowing_rio.png" } },
    { "sportName": "Shooting", "player": { "playerName": "U.S. shooting medalists", "playerImage": "shooting_rio.png" } },
    { "sportName": "Triathlon", "player": { "playerName": "U.S. triathlon ", "playerImage": "triathlon_rio.png" } },
    { "sportName": "Water Polo", "player": { "playerName": "Women's water polo team", "playerImage": "waterpolo_rio.png" } }
  ]},
  "silver": { "count": 37, "sports": [
    { "sportName": "Athletics", "player": { "playerName": "Women’s hurdles sweep & others", "playerImage": "athletics_silver_rio.png" } },
    { "sportName": "Gymnastics", "player": { "playerName": "U.S. women’s gymnastics individuals", "playerImage": "gymnastics_silver_rio.png" } },
    { "sportName": "Swimming", "player": { "playerName": "U.S. swimmers in relay & individual", "playerImage": "swimming_silver_rio.png" } },
    { "sportName": "Cycling", "player": { "playerName": "U.S. cycling silvers", "playerImage": "cycling_silver_rio.png" } },
    { "sportName": "Boxing", "player": { "playerName": "U.S. boxer ", "playerImage": "boxing_silver_rio.png" } },
    { "sportName": "Tennis", "player": { "playerName": "U.S. tennis ", "playerImage": "tennis_silver_rio.png" } },
    { "sportName": "Judo", "player": { "playerName": "Judo silver medallist", "playerImage": "judo_silver_rio.png" } },
    { "sportName": "Rowing", "player": { "playerName": "U.S. rowing silver team", "playerImage": "rowing_silver_rio.png" } },
    { "sportName": "Fencing", "player": { "playerName": "U.S. fencing team silvers", "playerImage": "fencing_silver_rio.png" } },
    { "sportName": "Diving", "player": { "playerName": "Diving silver medallists", "playerImage": "diving_silver_rio.png" } },
    { "sportName": "Equestrian", "player": { "playerName": "Equestrian silver medallist", "playerImage": "equine_silver_rio.png" } },
    { "sportName": "Archery", "player": { "playerName": "Archery silver team", "playerImage": "archery_silver_rio.png" } }
  ]},
  "bronze": { "count": 38, "sports": [
    { "sportName": "Swimming", "player": { "playerName": "U.S. swimmers bronze medallists", "playerImage": "swimming_bronze_rio.png" } },
    { "sportName": "Athletics", "player": { "playerName": "Relay & sprint bronzes", "playerImage": "athletics_bronze_rio.png" } },
    { "sportName": "Gymnastics", "player": { "playerName": "Individual gymnastics bronzes", "playerImage": "gymnastics_bronze_rio.png" } },
    { "sportName": "Wrestling", "player": { "playerName": "Wrestling bronze", "playerImage": "wrestling_bronze_rio.png" } },
    { "sportName": "Boxing", "player": { "playerName": "Boxing bronze medallist", "playerImage": "boxing_bronze_rio.png" } },
    { "sportName": "Tennis", "player": { "playerName": "Tennis bronze medallist", "playerImage": "tennis_bronze_rio.png" } },
    { "sportName": "Shooting", "player": { "playerName": "U.S. shooter bronzes", "playerImage": "shooting_bronze_rio.png" } },
    { "sportName": "Fencing", "player": { "playerName": "Fencing bronzes", "playerImage": "fencing_bronze_rio.png" } },
    { "sportName": "Diving", "player": { "playerName": "Diving bronze medallist", "playerImage": "diving_bronze_rio.png" } },
    { "sportName": "Equestrian", "player": { "playerName": "Equestrian bronzes", "playerImage": "equine_bronze_rio.png" } },
    { "sportName": "Archery", "player": { "playerName": "Archery bronze", "playerImage": "archery_bronze_rio.png" } },
    { "sportName": "Volleyball", "player": { "playerName": "Indoor volleyball bronze team", "playerImage": "volleyball_bronze_rio.png" } },
    { "sportName": "Golf", "player": { "playerName": "Golf bronze medallist", "playerImage": "golf_bronze_rio.png" } },
    { "sportName": "Sailing", "player": { "playerName": "Sailing bronze medallist", "playerImage": "sailing_bronze_rio.png" } },
    { "sportName": "Taekwondo", "player": { "playerName": "Taekwondo bronze", "playerImage": "taekwondo_bronze_rio.png" } },
    { "sportName": "Weightlifting", "player": { "playerName": "Weightlifting bronze", "playerImage": "weightlifting_bronze_rio.png" } }
  ]}
}
,
   "2020": {
  "gold": {
    "count": 39,
    "sports": [
      { "sportName": "Swimming", "player": { "playerName": "Caeleb Dressel & Katie Ledecky", "playerImage": "swimming_tokyo.png" } },
      { "sportName": "Athletics", "player": { "playerName": "Allyson Felix, others", "playerImage": "athletics_tokyo.png" } },
      { "sportName": "Basketball", "player": { "playerName": "Men’s & Women’s Teams", "playerImage": "basketball_tokyo.png" } },
      { "sportName": "Fencing", "player": { "playerName": "Lee Kiefer", "playerImage": "fencing_tokyo.png" } },
      { "sportName": "Shooting", "player": { "playerName": "William Shaner, U.S. shooters", "playerImage": "shooting_tokyo.png" } },
      { "sportName": "Surfing", "player": { "playerName": "Carissa Moore", "playerImage": "surfing_tokyo.png" } }
    ]
  },
  "silver": {
    "count": 41,
    "sports": [
      { "sportName": "Gymnastics", "player": { "playerName": "U.S. Women’s Team", "playerImage": "gym_silver_tokyo.png" } },
      { "sportName": "Athletics", "player": { "playerName": "Women’s & Relay events", "playerImage": "athletics_silver_tokyo.png" } },
      { "sportName": "Swimming", "player": { "playerName": "Relay & individual swimmers", "playerImage": "swimming_silver_tokyo.png" } },
      { "sportName": "Fencing", "player": { "playerName": "U.S. fencing team", "playerImage": "fencing_silver_tokyo.png" } },
      { "sportName": "Shooting", "player": { "playerName": "Additional U.S. shooters", "playerImage": "shooting_silver_tokyo.png" } },
      { "sportName": "Weightlifting/Taekwondo etc.", "player": { "playerName": "Other silvers", "playerImage": "others_silver_tokyo.png" } }
    ]
  },
  "bronze": {
    "count": 33,
    "sports": [
      { "sportName": "Gymnastics", "player": { "playerName": "Simone Biles (Beam)", "playerImage": "gym_bronze_tokyo.png" } },
      { "sportName": "Swimming", "player": { "playerName": "Additional swimmers", "playerImage": "swimming_bronze_tokyo.png" } },
      { "sportName": "Athletics", "player": { "playerName": "Relay & sprint "bronze" medals", "playerImage": "athletics_bronze_tokyo.png" } },
      { "sportName": "Weightlifting/Taekwondo etc.", "player": { "playerName": "Other "bronze" medals", "playerImage": "others_bronze_tokyo.png" } }
    ]
  }
},

  "2024": {
  "gold": { "count": 40, "sports": [
    { "sportName": "Athletics", "player": { "playerName": "Noah Lyles & athletics stars", "playerImage": "athletics.png" } },
    { "sportName": "Swimming", "player": { "playerName": "Katie Ledecky & Torri Huske", "playerImage": "swimming.png" } },
    { "sportName": "Artistic Gymnastics", "player": { "playerName": "Simone Biles & team", "playerImage": "gymnastics.png" } },
    { "sportName": "Basketball", "player": { "playerName": "Men’s & Women’s Teams", "playerImage": "basketball.png" } },
    { "sportName": "Cycling Track", "player": { "playerName": "Jennifer Valente & team", "playerImage": "cycling_track.png" } },
    { "sportName": "Cycling Road", "player": { "playerName": "Road cycling stars", "playerImage": "cycling_road.png" } },
    { "sportName": "Rowing", "player": { "playerName": "Men’s Four team (Nick Mead etc.)", "playerImage": "rowing.png" } },
    { "sportName": "Weightlifting", "player": { "playerName": "Olivia Reeves", "playerImage": "weightlifting.png" } },
    { "sportName": "Surfing", "player": { "playerName": "Women’s Surfing champion", "playerImage": "surfing.png" } },
    { "sportName": "Shooting", "player": { "playerName": "U.S. shooting medalists", "playerImage": "shooting.png" } }
  ]},
  "silver": { "count": 44, "sports": [
    { "sportName": "Athletics", "player": { "playerName": "Gabrielle Thomas, relay squads", "playerImage": "athletics_silver.png" } },
    { "sportName": "Swimming", "player": { "playerName": "Torri Huske, Regan Smith", "playerImage": "swimming_silver.png" } },
    { "sportName": "Shooting", "player": { "playerName": "Multiple U.S. shooters", "playerImage": "shooting_silver.png" } },
    { "sportName": "Fencing", "player": { "playerName": "U.S. fencing medallists", "playerImage": "fencing_silver.png" } },
    { "sportName": "Skateboarding", "player": { "playerName": "Skateboarding silvers", "playerImage": "skateboarding_silver.png" } },
    { "sportName": "Canoe Sprint", "player": { "playerName": "U.S. canoe sprint team", "playerImage": "canoe_silver.png" } },
    { "sportName": "Diving", "player": { "playerName": "U.S. diver", "playerImage": "diving_silver.png" } },
    { "sportName": "Equestrian", "player": { "playerName": "U.S. equestrian team", "playerImage": "equestrian_silver.png" } }
  ]},
  "bronze": { "count": 42, "sports": [
    { "sportName": "Athletics", "player": { "playerName": "Sha’Carri Richardson, others", "playerImage": "athletics_bronze.png" } },
    { "sportName": "Swimming", "player": { "playerName": "Caeleb Dressel, Carson Foster", "playerImage": "swimming_bronze.png" } },
    { "sportName": "Artistic Gymnastics", "player": { "playerName": "Women’s and men’s team", "playerImage": "gymnastics_bronze.png" } },
    { "sportName": "Skateboarding", "player": { "playerName": "U.S. skateboard "bronze"", "playerImage": "skateboarding_bronze.png" } },
    { "sportName": "Shooting", "player": { "playerName": "U.S. shooter "bronze"", "playerImage": "shooting_bronze.png" } },
    { "sportName": "Tennis", "player": { "playerName": "U.S. tennis medallist", "playerImage": "tennis_bronze.png" } },
    { "sportName": "Volleyball", "player": { "playerName": "U.S. volleyball "bronze" team", "playerImage": "volleyball_bronze.png" } },
    { "sportName": "Rugby Sevens", "player": { "playerName": "U.S. rugby team", "playerImage": "rugby_bronze.png" } },
    { "sportName": "Weightlifting", "player": { "playerName": "U.S. weightlifting "bronze"", "playerImage": "weightlifting_bronze.png" } },
    { "sportName": "Fencing", "player": { "playerName": "U.S. fencing "bronze"", "playerImage": "fencing_bronze.png" } }
  ]}
}

  }
},


];

