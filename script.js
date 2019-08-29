(function(){
    var script = { "definitions": [
 {
  "id": "camera_B90CD670_C534_DB14_41B9_052CDA67E1D6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 76.38,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9589707_C534_DAFC_41E0_39EF47A277F5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 101.7,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BF977953_C534_A914_41D7_B1A2282923B9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -28.31,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
  "label": "3d-13_21_05",
  "adjacentPanoramas": [
   {
    "panorama": {
     "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
     "label": "3d-13_22_13",
     "adjacentPanoramas": [
      {
       "panorama": {
        "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
        "label": "3d-13_50_22",
        "adjacentPanoramas": [
         {
          "panorama": {
           "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
           "label": "3d-13_51_34",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
             "backwardYaw": 42.02,
             "yaw": -144.89,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7",
              "label": "3d-13_54_53",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
                "backwardYaw": 108.69,
                "yaw": -109.14,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "hfovMax": 130,
              "overlays": [
               {
                "id": "overlay_E060FE33_DD54_EB14_41D6_17DE8E550ED3",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 37,
                     "height": 16,
                     "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0_HS_0_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 24.5,
                  "yaw": -109.14,
                  "pitch": -20.13,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 24.5,
                  "image": {
                   "frameCount": 24,
                   "frameDuration": 41,
                   "levels": [
                    {
                     "width": 1220,
                     "height": 780,
                     "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0_HS_0_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "AnimatedImageResource",
                   "colCount": 4,
                   "rowCount": 6
                  },
                  "distance": 50,
                  "pitch": -20.13,
                  "yaw": -109.14
                 }
                ],
                "data": {
                 "label": "Circle Arrow 01b Right-Up"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "2nd Floor Public Works South Wing",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_B9D0A5B7_C534_D91C_41E3_AADCDEB0DDE1); this.mainPlayList.set('selectedIndex', 30)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_tcap0",
                "angle": 0,
                "class": "TripodCapPanoramaOverlay",
                "rotate": true,
                "inertia": false,
                "hfov": 45,
                "distance": 50,
                "image": {
                 "levels": [
                  {
                   "width": 850,
                   "height": 850,
                   "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "pitch": 0,
              "mapLocations": [
               {
                "x": 511.31,
                "angle": -146.87,
                "y": 1355.61,
                "class": "PanoramaMapLocation",
                "map": {
                 "id": "map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF",
                 "fieldOfViewOverlayInsideOpacity": 0.1,
                 "fieldOfViewOverlayOutsideColor": "#000000",
                 "height": 1604,
                 "fieldOfViewOverlayInsideColor": "#CC0000",
                 "initialZoomFactor": 1,
                 "label": "BTC_ReferenceMap",
                 "overlays": [
                  {
                   "id": "overlay_BAAC161D_ABA0_2C94_41E0_7D1F3B335827",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 228.49,
                    "height": 43.24,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 638.82,
                    "offsetY": 0,
                    "y": 721.05,
                    "image": {
                     "levels": [
                      {
                       "width": 115,
                       "height": 22,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Main Entrance"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 0)",
                     "mapColor": "#FF0000",
                     "toolTip": "Main Entrance",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 228.49,
                    "height": 43.24,
                    "y": 720.58,
                    "class": "HotspotMapOverlayImage",
                    "x": 638.53,
                    "image": {
                     "levels": [
                      {
                       "width": 230,
                       "height": 45,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACE61D_ABA0_2C94_41E2_3AABEDEB8946",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 115.11,
                    "height": 71.14,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 1053.76,
                    "offsetY": 0,
                    "y": 266.88,
                    "image": {
                     "levels": [
                      {
                       "width": 58,
                       "height": 36,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_1_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "North Entrance"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 9)",
                     "mapColor": "#FF0000",
                     "toolTip": "North Entrance",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 115.11,
                    "height": 71.14,
                    "y": 260.37,
                    "class": "HotspotMapOverlayImage",
                    "x": 1047.54,
                    "image": {
                     "levels": [
                      {
                       "width": 117,
                       "height": 73,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_1.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACF61D_ABA0_2C97_41DE_E840601F8009",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 47,
                    "height": 43.5,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 718.08,
                    "offsetY": 0,
                    "y": 568.19,
                    "image": {
                     "levels": [
                      {
                       "width": 24,
                       "height": 22,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_2_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "1st Floor Meeting Room"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 6)",
                     "mapColor": "#FF0000",
                     "toolTip": "Shared building 1st Floor Meeting Room (1 of 3)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 47,
                    "height": 43.5,
                    "y": 567.91,
                    "class": "HotspotMapOverlayImage",
                    "x": 717.73,
                    "image": {
                     "levels": [
                      {
                       "width": 49,
                       "height": 45,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_2.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACE61E_ABA0_2C94_4174_57C93DEB6516",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 20,
                    "height": 17,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 774.57,
                    "offsetY": 0,
                    "y": 600.58,
                    "image": {
                     "levels": [
                      {
                       "width": 11,
                       "height": 9,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_3_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Hall Lobby"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 5)",
                     "mapColor": "#FF0000",
                     "toolTip": "Hall Lobby",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 20,
                    "height": 17,
                    "y": 596.95,
                    "class": "HotspotMapOverlayImage",
                    "x": 770.82,
                    "image": {
                     "levels": [
                      {
                       "width": 22,
                       "height": 19,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_3.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACF61E_ABA0_2C94_41D4_FD2239E17158",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 30.5,
                    "height": 21.5,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 730.89,
                    "offsetY": 0,
                    "y": 637.92,
                    "image": {
                     "levels": [
                      {
                       "width": 16,
                       "height": 11,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_4_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Main Staircase"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 2)",
                     "mapColor": "#FF0000",
                     "toolTip": "Main Staircase",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 30.5,
                    "height": 21.5,
                    "y": 637.69,
                    "class": "HotspotMapOverlayImage",
                    "x": 730.52,
                    "image": {
                     "levels": [
                      {
                       "width": 32,
                       "height": 23,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_4.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACC61E_ABA0_2C94_41DE_B87116947DD4",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 100.78,
                    "height": 100.88,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 854.93,
                    "offsetY": 0,
                    "y": 407.27,
                    "image": {
                     "levels": [
                      {
                       "width": 51,
                       "height": 51,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_5_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Courtyard"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 7)",
                     "mapColor": "#FF0000",
                     "toolTip": "Courtyard (Ping Pong, Corn Hole, putting green)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 100.78,
                    "height": 100.88,
                    "y": 407.03,
                    "class": "HotspotMapOverlayImage",
                    "x": 854.44,
                    "image": {
                     "levels": [
                      {
                       "width": 102,
                       "height": 102,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_5.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACD61E_ABA0_2C94_41E2_08339D404948",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 79.41,
                    "height": 55.59,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 267.87,
                    "offsetY": 0,
                    "y": 515.26,
                    "image": {
                     "levels": [
                      {
                       "width": 40,
                       "height": 28,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_6_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Outdoor Lounge"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 8)",
                     "mapColor": "#FF0000",
                     "toolTip": "Outdoor Lounge",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 79.41,
                    "height": 55.59,
                    "y": 514.97,
                    "class": "HotspotMapOverlayImage",
                    "x": 267.57,
                    "image": {
                     "levels": [
                      {
                       "width": 81,
                       "height": 57,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_6.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACA61E_ABA0_2C94_41BE_DC7F0327E450",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 26.42,
                    "height": 23.86,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 762.88,
                    "offsetY": 0,
                    "y": 664.5,
                    "image": {
                     "levels": [
                      {
                       "width": 14,
                       "height": 12,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_7_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Staircase Lobby"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 1)",
                     "mapColor": "#FF0000",
                     "toolTip": "Staircase Lobby",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 26.42,
                    "height": 23.86,
                    "y": 664.23,
                    "class": "HotspotMapOverlayImage",
                    "x": 762.52,
                    "image": {
                     "levels": [
                      {
                       "width": 28,
                       "height": 25,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_7.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAACB61E_ABA0_2C94_41B0_442F5B971978",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 86.61,
                    "height": 39.47,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 717.14,
                    "offsetY": 0,
                    "y": 1364.96,
                    "image": {
                     "levels": [
                      {
                       "width": 44,
                       "height": 20,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_8_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "2nd Floor Foyer"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 3)",
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Foyer",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 86.61,
                    "height": 39.47,
                    "y": 1364.75,
                    "class": "HotspotMapOverlayImage",
                    "x": 716.83,
                    "image": {
                     "levels": [
                      {
                       "width": 88,
                       "height": 41,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_8.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAAC861E_ABA0_2C94_41E4_E5933D9496E0",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 65.78,
                    "height": 38.37,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 726.86,
                    "offsetY": 0,
                    "y": 1308.62,
                    "image": {
                     "levels": [
                      {
                       "width": 33,
                       "height": 20,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_9_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Gym"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 4)",
                     "mapColor": "#FF0000",
                     "toolTip": "Building Gym",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 65.78,
                    "height": 38.37,
                    "y": 1308.37,
                    "class": "HotspotMapOverlayImage",
                    "x": 726.57,
                    "image": {
                     "levels": [
                      {
                       "width": 67,
                       "height": 40,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_9.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAD6CE91_ABE0_3C6C_41E4_7978DC74D3A1",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 26,
                    "height": 24.21,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 827.66,
                    "offsetY": 0,
                    "y": 1370.88,
                    "image": {
                     "levels": [
                      {
                       "width": 14,
                       "height": 13,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_10_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 1"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 11)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 26,
                    "height": 24.21,
                    "y": 1370.58,
                    "class": "HotspotMapOverlayImage",
                    "x": 827.42,
                    "image": {
                     "levels": [
                      {
                       "width": 28,
                       "height": 26,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_10.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B90C45E7_ABE0_EFB4_41DE_4A54C5B39F27",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 25.47,
                    "height": 21.37,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 872.5,
                    "offsetY": 0,
                    "y": 1355.05,
                    "image": {
                     "levels": [
                      {
                       "width": 13,
                       "height": 11,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_11_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 2"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 12)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 25.47,
                    "height": 21.37,
                    "y": 1354.74,
                    "class": "HotspotMapOverlayImage",
                    "x": 872.19,
                    "image": {
                     "levels": [
                      {
                       "width": 27,
                       "height": 23,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_11.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BFA3E90E_ABE0_6474_41E4_997674AEAE74",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 30.87,
                    "height": 23.74,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 975.65,
                    "offsetY": 0,
                    "y": 1419.66,
                    "image": {
                     "levels": [
                      {
                       "width": 16,
                       "height": 12,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_12_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 3"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 13)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 30.87,
                    "height": 23.74,
                    "y": 1413.56,
                    "class": "HotspotMapOverlayImage",
                    "x": 970.18,
                    "image": {
                     "levels": [
                      {
                       "width": 32,
                       "height": 25,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_12.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BF9DE7D3_ABA0_6BEC_41A8_B829F98CE962",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 28.49,
                    "height": 28.49,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 1088.64,
                    "offsetY": 0,
                    "y": 1321.29,
                    "image": {
                     "levels": [
                      {
                       "width": 15,
                       "height": 15,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_13_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 4"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 14)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 28.49,
                    "height": 28.49,
                    "y": 1315.42,
                    "class": "HotspotMapOverlayImage",
                    "x": 1082.14,
                    "image": {
                     "levels": [
                      {
                       "width": 30,
                       "height": 30,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_13.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B894419E_ABA0_27A3_41D2_1E377213CB44",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 28.49,
                    "height": 28.49,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 1075.4,
                    "offsetY": 0,
                    "y": 1216.67,
                    "image": {
                     "levels": [
                      {
                       "width": 15,
                       "height": 15,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_14_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 5"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 17)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 28.49,
                    "height": 28.49,
                    "y": 1210.5,
                    "class": "HotspotMapOverlayImage",
                    "x": 1069.2,
                    "image": {
                     "levels": [
                      {
                       "width": 30,
                       "height": 30,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_14.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B8A7E06C_ABA0_24B4_41D6_55B06BFFCCCA",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 30.87,
                    "height": 27.31,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 966.12,
                    "offsetY": 0,
                    "y": 1270.11,
                    "image": {
                     "levels": [
                      {
                       "width": 16,
                       "height": 14,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_15_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 6"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 15)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing Breakroom Kitchenette",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 30.87,
                    "height": 27.31,
                    "y": 1264.07,
                    "class": "HotspotMapOverlayImage",
                    "x": 960.17,
                    "image": {
                     "levels": [
                      {
                       "width": 32,
                       "height": 29,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_15.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BF01B3EB_ABA0_2BBC_41E3_956E103AF495",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 29.68,
                    "height": 24.93,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 1021.91,
                    "offsetY": 0,
                    "y": 1173.59,
                    "image": {
                     "levels": [
                      {
                       "width": 15,
                       "height": 13,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_16_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW North Wing 7"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 16)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 29.68,
                    "height": 24.93,
                    "y": 1167.98,
                    "class": "HotspotMapOverlayImage",
                    "x": 1015.53,
                    "image": {
                     "levels": [
                      {
                       "width": 31,
                       "height": 26,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_16.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_A47560B6_ABF9_DABD_41DD_2D0C0924596A",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 25.43,
                    "height": 22.38,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 1039.26,
                    "offsetY": 0,
                    "y": 1066.47,
                    "image": {
                     "levels": [
                      {
                       "width": 13,
                       "height": 12,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_17_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "2nd Floor North Stairwell"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 18)",
                     "mapColor": "#FF0000",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 25.43,
                    "height": 22.38,
                    "y": 1064.97,
                    "class": "HotspotMapOverlayImage",
                    "x": 1037.98,
                    "image": {
                     "levels": [
                      {
                       "width": 27,
                       "height": 24,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_17.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BAB1F8E2_ABF9_CAD5_41A2_8EE4FE8AAA41",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 33,
                    "height": 34.34,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 831.67,
                    "offsetY": 0,
                    "y": 1173.61,
                    "image": {
                     "levels": [
                      {
                       "width": 17,
                       "height": 18,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_18_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "CTM Area 2"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 20)",
                     "mapColor": "#FF0000",
                     "toolTip": "CTM Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 33,
                    "height": 34.34,
                    "y": 1173.28,
                    "class": "HotspotMapOverlayImage",
                    "x": 831.19,
                    "image": {
                     "levels": [
                      {
                       "width": 35,
                       "height": 36,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_18.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_BB64108C_ABEF_F96D_41B2_BEAF0EF18985",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 22.38,
                    "height": 21.48,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 793.26,
                    "offsetY": 0,
                    "y": 1270.43,
                    "image": {
                     "levels": [
                      {
                       "width": 12,
                       "height": 11,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_19_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "CTM Entrance 1"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 21)",
                     "mapColor": "#FF0000",
                     "toolTip": "CTM Area Entrance",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 22.38,
                    "height": 21.48,
                    "y": 1270.06,
                    "class": "HotspotMapOverlayImage",
                    "x": 793.01,
                    "image": {
                     "levels": [
                      {
                       "width": 24,
                       "height": 23,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_19.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_A2CE0BCB_BCE8_CEFB_41E3_862D6281510A",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 21,
                    "height": 19.21,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 973.72,
                    "offsetY": 0,
                    "y": 318.95,
                    "image": {
                     "levels": [
                      {
                       "width": 11,
                       "height": 10,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_20_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "North Staircase"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 10)",
                     "mapColor": "#FF0000",
                     "toolTip": "North Staircase",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 21,
                    "height": 19.21,
                    "y": 315.05,
                    "class": "HotspotMapOverlayImage",
                    "x": 970,
                    "image": {
                     "levels": [
                      {
                       "width": 23,
                       "height": 21,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_20.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_A389B1C1_B4AF_DAD7_41C5_947F63A91024",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 33.14,
                    "height": 33.14,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 736.56,
                    "offsetY": 0,
                    "y": 989.93,
                    "image": {
                     "levels": [
                      {
                       "width": 17,
                       "height": 17,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_21_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "CTM Area 5"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 19)",
                     "mapColor": "#FF0000",
                     "toolTip": "CTM Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 33.14,
                    "height": 33.14,
                    "y": 989.47,
                    "class": "HotspotMapOverlayImage",
                    "x": 736.33,
                    "image": {
                     "levels": [
                      {
                       "width": 35,
                       "height": 35,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_21.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B461ADDE_BAA7_EBC6_41C1_202025AB3165",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 34.06,
                    "height": 34.06,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 743.44,
                    "offsetY": 0,
                    "y": 1083.15,
                    "image": {
                     "levels": [
                      {
                       "width": 18,
                       "height": 18,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_22_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "CTM Area 4"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 22)",
                     "mapColor": "#FF0000",
                     "toolTip": "CTM Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 34.06,
                    "height": 34.06,
                    "y": 1083.15,
                    "class": "HotspotMapOverlayImage",
                    "x": 743.44,
                    "image": {
                     "levels": [
                      {
                       "width": 36,
                       "height": 36,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_22.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B4791A54_BAA9_A8DA_41C7_B7E23EB688DD",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 33.21,
                    "height": 33.39,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 880.04,
                    "offsetY": 0,
                    "y": 1043.37,
                    "image": {
                     "levels": [
                      {
                       "width": 17,
                       "height": 17,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_23_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Public Works 2"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 25)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 33.21,
                    "height": 33.39,
                    "y": 1043.19,
                    "class": "HotspotMapOverlayImage",
                    "x": 879.56,
                    "image": {
                     "levels": [
                      {
                       "width": 35,
                       "height": 35,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_23.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B57DE6F9_BAA8_99CA_41C9_4213AF977D65",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 32.05,
                    "height": 33.39,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 837.92,
                    "offsetY": 0,
                    "y": 997.99,
                    "image": {
                     "levels": [
                      {
                       "width": 17,
                       "height": 17,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_24_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Public Works 3"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 23)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 32.05,
                    "height": 33.39,
                    "y": 997.5,
                    "class": "HotspotMapOverlayImage",
                    "x": 837.55,
                    "image": {
                     "levels": [
                      {
                       "width": 34,
                       "height": 35,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_24.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B5A0DA01_BAAB_A83A_41C6_840BAC2DEB23",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 36.39,
                    "height": 36.39,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 881.44,
                    "offsetY": 0,
                    "y": 1169.17,
                    "image": {
                     "levels": [
                      {
                       "width": 19,
                       "height": 19,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_25_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "CTM Area 1"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 24)",
                     "mapColor": "#FF0000",
                     "toolTip": "CTM Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 36.39,
                    "height": 36.39,
                    "y": 1168.87,
                    "class": "HotspotMapOverlayImage",
                    "x": 880.97,
                    "image": {
                     "levels": [
                      {
                       "width": 38,
                       "height": 38,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_25.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B49C43CD_BAC2_4260_41DA_C65981F80FB3",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 30.16,
                    "height": 30.16,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 925.2,
                    "offsetY": 0,
                    "y": 1085.36,
                    "image": {
                     "levels": [
                      {
                       "width": 16,
                       "height": 16,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_26_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Public Works 1"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 26)",
                     "mapColor": "#FF0000",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 30.16,
                    "height": 30.16,
                    "y": 1085.01,
                    "class": "HotspotMapOverlayImage",
                    "x": 924.9,
                    "image": {
                     "levels": [
                      {
                       "width": 32,
                       "height": 32,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_26.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B4755088_BACE_7EE0_41B4_6629D9A3FD46",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 30.52,
                    "height": 30.52,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 791.64,
                    "offsetY": 0,
                    "y": 1041.5,
                    "image": {
                     "levels": [
                      {
                       "width": 16,
                       "height": 16,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_27_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "CTM Area 3"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 27)",
                     "mapColor": "#FF0000",
                     "toolTip": "CTM Area",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 30.52,
                    "height": 30.52,
                    "y": 1041.29,
                    "class": "HotspotMapOverlayImage",
                    "x": 791.19,
                    "image": {
                     "levels": [
                      {
                       "width": 32,
                       "height": 32,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_27.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B5453DE1_BB74_6934_41BD_2C5617B96D61",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 25.47,
                    "height": 20.54,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 679.8,
                    "offsetY": 0,
                    "y": 1372.49,
                    "image": {
                     "levels": [
                      {
                       "width": 13,
                       "height": 11,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_28_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South 1"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 28)",
                     "mapColor": "#FF0000",
                     "toolTip": "PW South Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 25.47,
                    "height": 20.54,
                    "y": 1372.3,
                    "class": "HotspotMapOverlayImage",
                    "x": 679.55,
                    "image": {
                     "levels": [
                      {
                       "width": 27,
                       "height": 22,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_28.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B6F14996_BB74_691C_416B_14A27C42A08B",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 24.65,
                    "height": 22.19,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 614.21,
                    "offsetY": 0,
                    "y": 1372.56,
                    "image": {
                     "levels": [
                      {
                       "width": 13,
                       "height": 12,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_29_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South 2"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 29)",
                     "mapColor": "#FF0000",
                     "toolTip": "PW South Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 24.65,
                    "height": 22.19,
                    "y": 1372.26,
                    "class": "HotspotMapOverlayImage",
                    "x": 613.72,
                    "image": {
                     "levels": [
                      {
                       "width": 26,
                       "height": 24,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_29.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B51FFE06_BB74_AAFC_41CC_1F9CC1EED789",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 24.65,
                    "height": 18.9,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 519.63,
                    "offsetY": 0,
                    "y": 1414.6,
                    "image": {
                     "levels": [
                      {
                       "width": 13,
                       "height": 10,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_30_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South 3"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 30)",
                     "mapColor": "#FF0000",
                     "toolTip": "PW South Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 24.65,
                    "height": 18.9,
                    "y": 1414.31,
                    "class": "HotspotMapOverlayImage",
                    "x": 519.37,
                    "image": {
                     "levels": [
                      {
                       "width": 26,
                       "height": 20,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_30.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B6F4F60D_BB75_FB0C_41D7_C9CC3E2B7182",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 26.3,
                    "height": 20.54,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 445.53,
                    "offsetY": 0,
                    "y": 1379.02,
                    "image": {
                     "levels": [
                      {
                       "width": 14,
                       "height": 11,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_31_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South 4"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 31)",
                     "mapColor": "#FF0000",
                     "toolTip": "PW South Wing",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 26.3,
                    "height": 20.54,
                    "y": 1378.69,
                    "class": "HotspotMapOverlayImage",
                    "x": 445.04,
                    "image": {
                     "levels": [
                      {
                       "width": 28,
                       "height": 22,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_31.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B51335D2_BB74_D914_41CD_159B140B8F24",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 37,
                    "height": 37,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 493.02,
                    "offsetY": 0,
                    "y": 1337.35,
                    "image": {
                     "levels": [
                      {
                       "width": 19,
                       "height": 19,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_32_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South Kitchen"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 34)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works South Wing Breakroom Kitchenette",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 37,
                    "height": 37,
                    "y": 1337.11,
                    "class": "HotspotMapOverlayImage",
                    "x": 492.81,
                    "image": {
                     "levels": [
                      {
                       "width": 39,
                       "height": 39,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_32.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B6FEB85C_BB73_B70C_41B1_107FD237D5E8",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 34.51,
                    "height": 24.65,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 451.74,
                    "offsetY": 0,
                    "y": 1312.13,
                    "image": {
                     "levels": [
                      {
                       "width": 18,
                       "height": 13,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_33_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South Office"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 32)",
                     "mapColor": "#FF0000",
                     "toolTip": "PW South Wing Office",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 34.51,
                    "height": 24.65,
                    "y": 1311.66,
                    "class": "HotspotMapOverlayImage",
                    "x": 451.25,
                    "image": {
                     "levels": [
                      {
                       "width": 36,
                       "height": 26,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_33.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_B51E6811_BB7C_B714_41E5_94B47309257C",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 26.3,
                    "height": 49.31,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 396.86,
                    "offsetY": 0,
                    "y": 1362.02,
                    "image": {
                     "levels": [
                      {
                       "width": 14,
                       "height": 25,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_34_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "PW South Meeting Room"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 33)",
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works South Wing Meeting Room",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 26.3,
                    "height": 49.31,
                    "y": 1361.83,
                    "class": "HotspotMapOverlayImage",
                    "x": 396.66,
                    "image": {
                     "levels": [
                      {
                       "width": 28,
                       "height": 51,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_34.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  },
                  {
                   "id": "overlay_86E157C1_C5F5_D974_41C0_CAE9BC647EB7",
                   "rollOverDisplay": false,
                   "map": {
                    "width": 21.6,
                    "height": 18.19,
                    "offsetX": 0,
                    "class": "HotspotMapOverlayMap",
                    "x": 781.6,
                    "offsetY": 0,
                    "y": 492.21,
                    "image": {
                     "levels": [
                      {
                       "width": 11,
                       "height": 10,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_35_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "data": {
                    "label": "Coffee Kiosk"
                   },
                   "areas": [
                    {
                     "click": "this.mainPlayList.set('selectedIndex', 35)",
                     "mapColor": "#FF0000",
                     "toolTip": "Coffee Kiosk",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "useHandCursor": true,
                   "image": {
                    "width": 21.6,
                    "height": 18.19,
                    "y": 492.07,
                    "class": "HotspotMapOverlayImage",
                    "x": 781.48,
                    "image": {
                     "levels": [
                      {
                       "width": 23,
                       "height": 20,
                       "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_35.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  }
                 ],
                 "fieldOfViewOverlayRadiusScale": 0.3,
                 "scaleMode": "fit_to_height",
                 "maximumZoomFactor": 1.2,
                 "minimumZoomFactor": 0.5,
                 "class": "Map",
                 "thumbnailUrl": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_t.jpg",
                 "width": 1350,
                 "fieldOfViewOverlayOutsideOpacity": 0,
                 "image": {
                  "levels": [
                   {
                    "width": 1350,
                    "height": 1604,
                    "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF.jpeg",
                    "class": "ImageResourceLevel"
                   },
                   {
                    "width": 234,
                    "tags": "preload",
                    "height": 279,
                    "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_lq.jpeg",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               }
              ],
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_t.jpg",
              "partial": false,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "stereoCube": {
                 "levels": [
                  {
                   "width": 30720,
                   "colCount": 60,
                   "tags": "ondemand",
                   "rowCount": 5,
                   "height": 2560,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/0/{row}_{column}.jpg"
                  },
                  {
                   "width": 18432,
                   "colCount": 36,
                   "tags": "ondemand",
                   "rowCount": 3,
                   "height": 1536,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/1/{row}_{column}.jpg"
                  },
                  {
                   "width": 12288,
                   "colCount": 24,
                   "tags": "ondemand",
                   "rowCount": 2,
                   "height": 1024,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/2/{row}_{column}.jpg"
                  },
                  {
                   "width": 6144,
                   "colCount": 12,
                   "tags": [
                    "ondemand",
                    "preload"
                   ],
                   "rowCount": 1,
                   "height": 512,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/3/{row}_{column}.jpg"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_t.jpg"
               }
              ]
             },
             "backwardYaw": -109.14,
             "yaw": 108.69,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
              "label": "3d-13_52_46",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265",
                 "label": "3d-13_53_57",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
                   "backwardYaw": 109.79,
                   "yaw": -145.73,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMax": 130,
                 "overlays": [
                  {
                   "id": "overlay_E13CF3B8_DD34_5914_41CA_3EE5B25399B6",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 37,
                        "height": 16,
                        "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0_HS_1_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 20.42,
                     "yaw": -145.73,
                     "pitch": -35.05,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 20.42,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1220,
                        "height": 780,
                        "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0_HS_1_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 50,
                     "pitch": -35.05,
                     "yaw": -145.73
                    }
                   ],
                   "data": {
                    "label": "Circle Arrow 01b Left-Up"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Public Works South Wing",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_B9E5B577_C534_D91C_41E0_BF9A1CC9013B); this.mainPlayList.set('selectedIndex', 31)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_tcap0",
                   "angle": 0,
                   "class": "TripodCapPanoramaOverlay",
                   "rotate": true,
                   "inertia": false,
                   "hfov": 45,
                   "distance": 50,
                   "image": {
                    "levels": [
                     {
                      "width": 850,
                      "height": 850,
                      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 409.81,
                   "angle": 291.06,
                   "y": 1386.48,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_t.jpg",
                 "partial": false,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "stereoCube": {
                    "levels": [
                     {
                      "width": 30720,
                      "colCount": 60,
                      "tags": "ondemand",
                      "rowCount": 5,
                      "height": 2560,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/0/{row}_{column}.jpg"
                     },
                     {
                      "width": 18432,
                      "colCount": 36,
                      "tags": "ondemand",
                      "rowCount": 3,
                      "height": 1536,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/1/{row}_{column}.jpg"
                     },
                     {
                      "width": 12288,
                      "colCount": 24,
                      "tags": "ondemand",
                      "rowCount": 2,
                      "height": 1024,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/2/{row}_{column}.jpg"
                     },
                     {
                      "width": 6144,
                      "colCount": 12,
                      "tags": [
                       "ondemand",
                       "preload"
                      ],
                      "rowCount": 1,
                      "height": 512,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/3/{row}_{column}.jpg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_t.jpg"
                  }
                 ]
                },
                "backwardYaw": -145.73,
                "yaw": 109.79,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814",
                 "label": "3d-13_53_23",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
                   "backwardYaw": -103.99,
                   "yaw": 96.65,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMax": 130,
                 "overlays": [
                  {
                   "id": "overlay_FEDEE52C_DD33_D90C_41E5_666F5F809E06",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 37,
                        "height": 16,
                        "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0_HS_0_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 21.82,
                     "yaw": 96.65,
                     "pitch": -28.22,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 21.82,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1220,
                        "height": 780,
                        "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0_HS_0_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 100,
                     "pitch": -28.22,
                     "yaw": 96.65
                    }
                   ],
                   "data": {
                    "label": "Circle Arrow 01b"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Public Works South Wing",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_B85CD3ED_C534_D90C_4191_9D790A31C6A4); this.mainPlayList.set('selectedIndex', 31)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814_tcap0",
                   "angle": 0,
                   "class": "TripodCapPanoramaOverlay",
                   "rotate": true,
                   "inertia": false,
                   "hfov": 45,
                   "distance": 50,
                   "image": {
                    "levels": [
                     {
                      "width": 850,
                      "height": 850,
                      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 468.51,
                   "angle": 110.3,
                   "y": 1323.99,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_t.jpg",
                 "partial": false,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "stereoCube": {
                    "levels": [
                     {
                      "width": 30720,
                      "colCount": 60,
                      "tags": "ondemand",
                      "rowCount": 5,
                      "height": 2560,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/0/{row}_{column}.jpg"
                     },
                     {
                      "width": 18432,
                      "colCount": 36,
                      "tags": "ondemand",
                      "rowCount": 3,
                      "height": 1536,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/1/{row}_{column}.jpg"
                     },
                     {
                      "width": 12288,
                      "colCount": 24,
                      "tags": "ondemand",
                      "rowCount": 2,
                      "height": 1024,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/2/{row}_{column}.jpg"
                     },
                     {
                      "width": 6144,
                      "colCount": 12,
                      "tags": [
                       "ondemand",
                       "preload"
                      ],
                      "rowCount": 1,
                      "height": 512,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/3/{row}_{column}.jpg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_t.jpg"
                  }
                 ]
                },
                "backwardYaw": 96.65,
                "yaw": -103.99,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
                "backwardYaw": 62.58,
                "yaw": 8.37,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "hfovMax": 130,
              "overlays": [
               {
                "id": "overlay_E062B18B_DD4C_79F4_41D5_6AD5BA90FA4B",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 37,
                     "height": 16,
                     "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_0_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 22.61,
                  "yaw": -103.99,
                  "pitch": -16.81,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 22.61,
                  "image": {
                   "frameCount": 24,
                   "frameDuration": 41,
                   "levels": [
                    {
                     "width": 1220,
                     "height": 780,
                     "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_0_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "AnimatedImageResource",
                   "colCount": 4,
                   "rowCount": 6
                  },
                  "distance": 100,
                  "pitch": -16.81,
                  "yaw": -103.99
                 }
                ],
                "data": {
                 "label": "Circle Arrow 01b"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "Office",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814, this.camera_BEF1B811_C534_D714_41B2_EF749B536B67); this.mainPlayList.set('selectedIndex', 32)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "overlay_E1E82C4B_DD4C_AF74_41E0_85735B7227DC",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 37,
                     "height": 16,
                     "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_1_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 24,
                  "yaw": 109.79,
                  "pitch": -14.67,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 24,
                  "image": {
                   "frameCount": 24,
                   "frameDuration": 41,
                   "levels": [
                    {
                     "width": 1220,
                     "height": 780,
                     "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_1_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "AnimatedImageResource",
                   "colCount": 4,
                   "rowCount": 6
                  },
                  "distance": 50,
                  "pitch": -14.67,
                  "yaw": 109.79
                 }
                ],
                "data": {
                 "label": "Circle Arrow 01b Right-Up"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "Office",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265, this.camera_BE8347FF_C534_D90C_41E1_0B681E45CA95); this.mainPlayList.set('selectedIndex', 33)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "overlay_E0092DC0_DD4C_A974_41B8_8EA6C384ED7D",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 37,
                     "height": 16,
                     "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_2_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 22.8,
                  "yaw": 8.37,
                  "pitch": -9.52,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 22.8,
                  "image": {
                   "frameCount": 24,
                   "frameDuration": 41,
                   "levels": [
                    {
                     "width": 1220,
                     "height": 780,
                     "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_2_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "AnimatedImageResource",
                   "colCount": 4,
                   "rowCount": 6
                  },
                  "distance": 100,
                  "pitch": -9.52,
                  "yaw": 8.37
                 }
                ],
                "data": {
                 "label": "Circle Arrow 01b"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "2nd Floor Public Works South Wing",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_BEE4A824_C534_D73C_41E1_3EF287EBC44E); this.mainPlayList.set('selectedIndex', 30)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_tcap0",
                "angle": 0,
                "class": "TripodCapPanoramaOverlay",
                "rotate": true,
                "inertia": false,
                "hfov": 45,
                "distance": 50,
                "image": {
                 "levels": [
                  {
                   "width": 850,
                   "height": 850,
                   "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "pitch": 0,
              "mapLocations": [
               {
                "x": 458.19,
                "angle": 109.41,
                "y": 1388.97,
                "class": "PanoramaMapLocation",
                "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
               }
              ],
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_t.jpg",
              "partial": false,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "stereoCube": {
                 "levels": [
                  {
                   "width": 30720,
                   "colCount": 60,
                   "tags": "ondemand",
                   "rowCount": 5,
                   "height": 2560,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/0/{row}_{column}.jpg"
                  },
                  {
                   "width": 18432,
                   "colCount": 36,
                   "tags": "ondemand",
                   "rowCount": 3,
                   "height": 1536,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/1/{row}_{column}.jpg"
                  },
                  {
                   "width": 12288,
                   "colCount": 24,
                   "tags": "ondemand",
                   "rowCount": 2,
                   "height": 1024,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/2/{row}_{column}.jpg"
                  },
                  {
                   "width": 6144,
                   "colCount": 12,
                   "tags": [
                    "ondemand",
                    "preload"
                   ],
                   "rowCount": 1,
                   "height": 512,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/3/{row}_{column}.jpg"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_t.jpg"
               }
              ]
             },
             "backwardYaw": 8.37,
             "yaw": 62.58,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "hfovMax": 130,
           "overlays": [
            {
             "id": "overlay_E37F2C5B_DD5D_AF14_41E8_F5A5D4559BE9",
             "maps": [
              {
               "image": {
                "levels": [
                 {
                  "width": 37,
                  "height": 16,
                  "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_0_0_0_map.gif",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "hfov": 23.85,
               "yaw": 108.69,
               "pitch": -10.96,
               "class": "HotspotPanoramaOverlayMap"
              }
             ],
             "rollOverDisplay": false,
             "class": "HotspotPanoramaOverlay",
             "items": [
              {
               "class": "HotspotPanoramaOverlayImage",
               "hfov": 23.85,
               "image": {
                "frameCount": 24,
                "frameDuration": 41,
                "levels": [
                 {
                  "width": 1220,
                  "height": 780,
                  "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_0_0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "AnimatedImageResource",
                "colCount": 4,
                "rowCount": 6
               },
               "distance": 50,
               "pitch": -10.96,
               "yaw": 108.69
              }
             ],
             "data": {
              "label": "Circle Arrow 01b Right-Up"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "toolTip": "Breakroom Kitchenette",
               "class": "HotspotPanoramaOverlayArea",
               "displayTooltipInTouchScreens": true,
               "click": "this.startPanoramaWithCamera(this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7, this.camera_BECB184D_C534_D70C_41D3_F6BE0AA1793D); this.mainPlayList.set('selectedIndex', 34)"
              }
             ],
             "useHandCursor": true,
             "enabledInCardboard": true
            },
            {
             "id": "overlay_E3551545_DD54_597C_41E3_F16D9D976741",
             "maps": [
              {
               "image": {
                "levels": [
                 {
                  "width": 37,
                  "height": 16,
                  "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_1_0_0_map.gif",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "hfov": 23.28,
               "yaw": -144.89,
               "pitch": -13.69,
               "class": "HotspotPanoramaOverlayMap"
              }
             ],
             "rollOverDisplay": false,
             "class": "HotspotPanoramaOverlay",
             "items": [
              {
               "class": "HotspotPanoramaOverlayImage",
               "hfov": 23.28,
               "image": {
                "frameCount": 24,
                "frameDuration": 41,
                "levels": [
                 {
                  "width": 1220,
                  "height": 780,
                  "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_1_0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "AnimatedImageResource",
                "colCount": 4,
                "rowCount": 6
               },
               "distance": 50,
               "pitch": -13.69,
               "yaw": -144.89
              }
             ],
             "data": {
              "label": "Circle Arrow 01b Right-Up"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "toolTip": "2nd Floor Public Works South Wing",
               "class": "HotspotPanoramaOverlayArea",
               "displayTooltipInTouchScreens": true,
               "click": "this.startPanoramaWithCamera(this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF, this.camera_BED56837_C534_D71C_41C6_57C22AC58B9B); this.mainPlayList.set('selectedIndex', 29)"
              }
             ],
             "useHandCursor": true,
             "enabledInCardboard": true
            },
            {
             "id": "overlay_E3128B30_DD54_6914_41DB_3250C26A37F5",
             "maps": [
              {
               "image": {
                "levels": [
                 {
                  "width": 37,
                  "height": 16,
                  "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_2_0_0_map.gif",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "hfov": 23.81,
               "yaw": 62.58,
               "pitch": -8.93,
               "class": "HotspotPanoramaOverlayMap"
              }
             ],
             "rollOverDisplay": false,
             "class": "HotspotPanoramaOverlay",
             "items": [
              {
               "class": "HotspotPanoramaOverlayImage",
               "hfov": 23.81,
               "image": {
                "frameCount": 24,
                "frameDuration": 41,
                "levels": [
                 {
                  "width": 1220,
                  "height": 780,
                  "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_2_0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "AnimatedImageResource",
                "colCount": 4,
                "rowCount": 6
               },
               "distance": 50,
               "pitch": -8.93,
               "yaw": 62.58
              }
             ],
             "data": {
              "label": "Circle Arrow 01b Right-Up"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "toolTip": "2nd Floor Public Works South Wing",
               "class": "HotspotPanoramaOverlayArea",
               "displayTooltipInTouchScreens": true,
               "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_BE3EC860_C534_D734_41E8_5EEAFC30A7D1); this.mainPlayList.set('selectedIndex', 31)"
              }
             ],
             "useHandCursor": true,
             "enabledInCardboard": true
            },
            {
             "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_tcap0",
             "angle": 0,
             "class": "TripodCapPanoramaOverlay",
             "rotate": true,
             "inertia": false,
             "hfov": 45,
             "distance": 50,
             "image": {
              "levels": [
               {
                "width": 850,
                "height": 850,
                "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "pitch": 0,
           "mapLocations": [
            {
             "x": 531.7,
             "angle": -156.7,
             "y": 1423.76,
             "class": "PanoramaMapLocation",
             "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
            }
           ],
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_t.jpg",
           "partial": false,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "stereoCube": {
              "levels": [
               {
                "width": 30720,
                "colCount": 60,
                "tags": "ondemand",
                "rowCount": 5,
                "height": 2560,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/0/{row}_{column}.jpg"
               },
               {
                "width": 18432,
                "colCount": 36,
                "tags": "ondemand",
                "rowCount": 3,
                "height": 1536,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/1/{row}_{column}.jpg"
               },
               {
                "width": 12288,
                "colCount": 24,
                "tags": "ondemand",
                "rowCount": 2,
                "height": 1024,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/2/{row}_{column}.jpg"
               },
               {
                "width": 6144,
                "colCount": 12,
                "tags": [
                 "ondemand",
                 "preload"
                ],
                "rowCount": 1,
                "height": 512,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/3/{row}_{column}.jpg"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_t.jpg"
            }
           ]
          },
          "backwardYaw": -144.89,
          "yaw": 42.02,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080",
           "label": "3d-13_49_13",
           "adjacentPanoramas": [
            {
             "panorama": {
              "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
              "label": "3d-13_13_46",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
                 "label": "3d-13_16_54",
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
                    "label": "3d-13_18_05",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
                      "backwardYaw": 135.03,
                      "yaw": -51.79,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": {
                       "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
                       "label": "3d-13_19_18",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
                         "backwardYaw": 170.98,
                         "yaw": 13.13,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
                         "backwardYaw": -69.52,
                         "yaw": 120.16,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "hfovMax": 130,
                       "overlays": [
                        {
                         "id": "overlay_F7780DCF_DCF5_A90C_41DE_66EF2B03F993",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 37,
                              "height": 16,
                              "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_0_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 20.96,
                           "yaw": 13.13,
                           "pitch": -12.12,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 20.96,
                           "image": {
                            "frameCount": 24,
                            "frameDuration": 41,
                            "levels": [
                             {
                              "width": 1220,
                              "height": 780,
                              "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_0_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "AnimatedImageResource",
                            "colCount": 4,
                            "rowCount": 6
                           },
                           "distance": 50,
                           "pitch": -12.12,
                           "yaw": 13.13
                          }
                         ],
                         "data": {
                          "label": "Circle Arrow 01b Left-Up"
                         },
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "toolTip": "2nd Floor Public Works North Wing",
                           "class": "HotspotPanoramaOverlayArea",
                           "displayTooltipInTouchScreens": true,
                           "click": "this.startPanoramaWithCamera(this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67, this.camera_BE4E3900_C534_D6F4_41BA_D0001C7D2BE2); this.mainPlayList.set('selectedIndex', 12)"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        },
                        {
                         "id": "overlay_F95FE6EB_DCF3_DB34_41E1_F617D3342B9C",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 37,
                              "height": 16,
                              "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_1_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 20.43,
                           "yaw": 120.16,
                           "pitch": -10.84,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 20.43,
                           "image": {
                            "frameCount": 24,
                            "frameDuration": 41,
                            "levels": [
                             {
                              "width": 1220,
                              "height": 780,
                              "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_1_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "AnimatedImageResource",
                            "colCount": 4,
                            "rowCount": 6
                           },
                           "distance": 100,
                           "pitch": -10.84,
                           "yaw": 120.16
                          }
                         ],
                         "data": {
                          "label": "Circle Arrow 01b"
                         },
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "toolTip": "2nd Floor Public Works North Wing",
                           "class": "HotspotPanoramaOverlayArea",
                           "displayTooltipInTouchScreens": true,
                           "click": "this.startPanoramaWithCamera(this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532, this.camera_BFBD4914_C534_A91C_41C8_CC72726CF9A0); this.mainPlayList.set('selectedIndex', 14)"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        },
                        {
                         "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_tcap0",
                         "angle": 0,
                         "class": "TripodCapPanoramaOverlay",
                         "rotate": true,
                         "inertia": false,
                         "hfov": 45,
                         "distance": 50,
                         "image": {
                          "levels": [
                           {
                            "width": 850,
                            "height": 850,
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 985.61,
                         "angle": -60.15,
                         "y": 1425.43,
                         "class": "PanoramaMapLocation",
                         "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                        }
                       ],
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_t.jpg",
                       "partial": false,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "stereoCube": {
                          "levels": [
                           {
                            "width": 30720,
                            "colCount": 60,
                            "tags": "ondemand",
                            "rowCount": 5,
                            "height": 2560,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/0/{row}_{column}.jpg"
                           },
                           {
                            "width": 18432,
                            "colCount": 36,
                            "tags": "ondemand",
                            "rowCount": 3,
                            "height": 1536,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/1/{row}_{column}.jpg"
                           },
                           {
                            "width": 12288,
                            "colCount": 24,
                            "tags": "ondemand",
                            "rowCount": 2,
                            "height": 1024,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/2/{row}_{column}.jpg"
                           },
                           {
                            "width": 6144,
                            "colCount": 12,
                            "tags": [
                             "ondemand",
                             "preload"
                            ],
                            "rowCount": 1,
                            "height": 512,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/3/{row}_{column}.jpg"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_t.jpg"
                        }
                       ]
                      },
                      "backwardYaw": 13.13,
                      "yaw": 170.98,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "hfovMax": 130,
                    "overlays": [
                     {
                      "id": "overlay_8D3CE9EE_DB4F_E90C_41C9_9576EFB634D8",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 30,
                           "height": 16,
                           "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_2_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 16.42,
                        "yaw": -51.79,
                        "pitch": -4.54,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 16.42,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1200,
                           "height": 930,
                           "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_2_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 100,
                        "pitch": -4.54,
                        "yaw": -51.79
                       }
                      ],
                      "data": {
                       "label": "Circle Point 02b"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "2nd Floor Public Works North Wing",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C, this.camera_B9466756_C534_D91C_41C7_5636EE6241F8); this.mainPlayList.set('selectedIndex', 11)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "overlay_8DB93129_DB4C_5934_41C8_B0AA961BBFD7",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 30,
                           "height": 16,
                           "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_3_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 14.58,
                        "yaw": 170.98,
                        "pitch": -5.99,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 14.58,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1200,
                           "height": 930,
                           "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_3_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 100,
                        "pitch": -5.99,
                        "yaw": 170.98
                       }
                      ],
                      "data": {
                       "label": "Circle Point 02b"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "2nd Floor Public Works North Wing",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856, this.camera_BEBE2771_C534_D914_41DE_33A7C4DB9D42); this.mainPlayList.set('selectedIndex', 13)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_tcap0",
                      "angle": 0,
                      "class": "TripodCapPanoramaOverlay",
                      "rotate": true,
                      "inertia": false,
                      "hfov": 45,
                      "distance": 50,
                      "image": {
                       "levels": [
                        {
                         "width": 850,
                         "height": 850,
                         "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 884.93,
                      "angle": 303.19,
                      "y": 1365.42,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                     }
                    ],
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_t.jpg",
                    "partial": false,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "stereoCube": {
                       "levels": [
                        {
                         "width": 30720,
                         "colCount": 60,
                         "tags": "ondemand",
                         "rowCount": 5,
                         "height": 2560,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/0/{row}_{column}.jpg"
                        },
                        {
                         "width": 18432,
                         "colCount": 36,
                         "tags": "ondemand",
                         "rowCount": 3,
                         "height": 1536,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/1/{row}_{column}.jpg"
                        },
                        {
                         "width": 12288,
                         "colCount": 24,
                         "tags": "ondemand",
                         "rowCount": 2,
                         "height": 1024,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/2/{row}_{column}.jpg"
                        },
                        {
                         "width": 6144,
                         "colCount": 12,
                         "tags": [
                          "ondemand",
                          "preload"
                         ],
                         "rowCount": 1,
                         "height": 512,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/3/{row}_{column}.jpg"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_t.jpg"
                     }
                    ]
                   },
                   "backwardYaw": -51.79,
                   "yaw": 135.03,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
                   "backwardYaw": 38.45,
                   "yaw": -25.7,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMax": 130,
                 "overlays": [
                  {
                   "id": "overlay_FBC5763E_DCCD_FB0C_41D6_66D33197C836",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 37,
                        "height": 16,
                        "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_0_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 22.76,
                     "yaw": -25.7,
                     "pitch": -15.61,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 22.76,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1220,
                        "height": 780,
                        "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_0_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 100,
                     "pitch": -15.61,
                     "yaw": -25.7
                    }
                   ],
                   "data": {
                    "label": "Circle Arrow 01b"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "Public Works North Wing Entrance",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_B857B41A_C534_DF14_41DF_AC798189D809); this.mainPlayList.set('selectedIndex', 3)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "overlay_8D5BFB54_DB4C_691C_41D4_796EDB8312A3",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 30,
                        "height": 16,
                        "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_2_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 16.74,
                     "yaw": 135.03,
                     "pitch": -9.65,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 16.74,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1200,
                        "height": 930,
                        "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_2_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 100,
                     "pitch": -9.65,
                     "yaw": 135.03
                    }
                   ],
                   "data": {
                    "label": "Circle Point 02b"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Public Works North Wing",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67, this.camera_B8583404_C534_DEFC_41BF_AF46BB322908); this.mainPlayList.set('selectedIndex', 12)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_tcap0",
                   "angle": 0,
                   "class": "TripodCapPanoramaOverlay",
                   "rotate": true,
                   "inertia": false,
                   "hfov": 45,
                   "distance": 50,
                   "image": {
                    "levels": [
                     {
                      "width": 850,
                      "height": 850,
                      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 840.42,
                   "angle": -52.16,
                   "y": 1382.69,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_t.jpg",
                 "partial": false,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "stereoCube": {
                    "levels": [
                     {
                      "width": 30720,
                      "colCount": 60,
                      "tags": "ondemand",
                      "rowCount": 5,
                      "height": 2560,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/0/{row}_{column}.jpg"
                     },
                     {
                      "width": 18432,
                      "colCount": 36,
                      "tags": "ondemand",
                      "rowCount": 3,
                      "height": 1536,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/1/{row}_{column}.jpg"
                     },
                     {
                      "width": 12288,
                      "colCount": 24,
                      "tags": "ondemand",
                      "rowCount": 2,
                      "height": 1024,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/2/{row}_{column}.jpg"
                     },
                     {
                      "width": 6144,
                      "colCount": 12,
                      "tags": [
                       "ondemand",
                       "preload"
                      ],
                      "rowCount": 1,
                      "height": 512,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/3/{row}_{column}.jpg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_t.jpg"
                  }
                 ]
                },
                "backwardYaw": -25.7,
                "yaw": 38.45,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
                 "label": "3d-13_47_43",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
                   "backwardYaw": 21.79,
                   "yaw": 148.25,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": {
                    "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
                    "label": "3d-13_47_05",
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
                       "label": "3d-13_37_30",
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
                          "label": "3d-13_29_17",
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
                             "label": "3d-13_31_14",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
                               "backwardYaw": -163.58,
                               "yaw": 21.46,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
                                "label": "3d-13_30_39",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
                                  "backwardYaw": -31.18,
                                  "yaw": 158.26,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
                                   "label": "3d-13_36_26",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
                                      "label": "3d-13_27_36",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
                                        "backwardYaw": -20.36,
                                        "yaw": 157.9,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
                                        "backwardYaw": 32.25,
                                        "yaw": 37.97,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "overlays": [
                                       {
                                        "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_tcap0",
                                        "angle": 0,
                                        "class": "TripodCapPanoramaOverlay",
                                        "rotate": true,
                                        "inertia": false,
                                        "hfov": 45,
                                        "distance": 50,
                                        "image": {
                                         "levels": [
                                          {
                                           "width": 850,
                                           "height": 850,
                                           "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       },
                                       {
                                        "id": "overlay_8FA69E67_CD4C_AB3C_41D9_CB991DE56E91",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 30,
                                             "height": 16,
                                             "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_0_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 17.45,
                                          "yaw": 157.9,
                                          "pitch": -12.17,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 17.45,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1200,
                                             "height": 930,
                                             "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_0_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 100,
                                          "pitch": -12.17,
                                          "yaw": 157.9
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Point 02b"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor Public Works Area",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_B931260C_C534_DB0C_41E8_1C9506C68011); this.mainPlayList.set('selectedIndex', 25)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       },
                                       {
                                        "id": "overlay_811457F6_CD54_591C_41A0_89496D53657A",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 37,
                                             "height": 16,
                                             "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_1_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 19.62,
                                          "yaw": 37.97,
                                          "pitch": -10.66,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 19.62,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1220,
                                             "height": 780,
                                             "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_1_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 100,
                                          "pitch": -10.66,
                                          "yaw": 37.97
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Arrow 01b"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor Hallway Courtyard View",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237, this.camera_B92FC61F_C534_DB0C_41E8_112CE5818608); this.mainPlayList.set('selectedIndex', 24)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       }
                                      ],
                                      "pitch": 0,
                                      "mapLocations": [
                                       {
                                        "x": 939.98,
                                        "angle": 162.37,
                                        "y": 1100.09,
                                        "class": "PanoramaMapLocation",
                                        "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                       }
                                      ],
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_t.jpg",
                                      "partial": false,
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "stereoCube": {
                                         "levels": [
                                          {
                                           "width": 30720,
                                           "colCount": 60,
                                           "tags": "ondemand",
                                           "rowCount": 5,
                                           "height": 2560,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/0/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 18432,
                                           "colCount": 36,
                                           "tags": "ondemand",
                                           "rowCount": 3,
                                           "height": 1536,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/1/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 12288,
                                           "colCount": 24,
                                           "tags": "ondemand",
                                           "rowCount": 2,
                                           "height": 1024,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/2/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 6144,
                                           "colCount": 12,
                                           "tags": [
                                            "ondemand",
                                            "preload"
                                           ],
                                           "rowCount": 1,
                                           "height": 512,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/3/{row}_{column}.jpg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_t.jpg"
                                       }
                                      ]
                                     },
                                     "backwardYaw": 157.9,
                                     "yaw": -20.36,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
                                      "label": "3d-13_31_54",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
                                        "backwardYaw": -84.04,
                                        "yaw": 93.99,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
                                        "backwardYaw": 152.85,
                                        "yaw": -32.24,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
                                        "backwardYaw": -115.25,
                                        "yaw": 55.04,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "overlays": [
                                       {
                                        "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_tcap0",
                                        "angle": 0,
                                        "class": "TripodCapPanoramaOverlay",
                                        "rotate": true,
                                        "inertia": false,
                                        "hfov": 45,
                                        "distance": 50,
                                        "image": {
                                         "levels": [
                                          {
                                           "width": 850,
                                           "height": 850,
                                           "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       },
                                       {
                                        "id": "overlay_867809AB_CCCC_6934_41D4_DBCB2B60CE9E",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 30,
                                             "height": 16,
                                             "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_0_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 17.16,
                                          "yaw": -32.24,
                                          "pitch": -0.51,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 17.16,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1200,
                                             "height": 930,
                                             "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_0_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 100,
                                          "pitch": -0.51,
                                          "yaw": -32.24
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Point 02b"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor Public Works Area",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_BF748A31_C534_AB14_41DD_8943E9240BED); this.mainPlayList.set('selectedIndex', 25)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       },
                                       {
                                        "id": "overlay_86477B04_CCCC_AAFC_41E5_1958E260784A",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 30,
                                             "height": 16,
                                             "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_1_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 17.72,
                                          "yaw": 55.04,
                                          "pitch": -5.65,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 17.72,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1200,
                                             "height": 930,
                                             "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_1_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 100,
                                          "pitch": -5.65,
                                          "yaw": 55.04
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Point 02b"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor CTM Area",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_BF64CA44_C534_AB7C_41B3_53F0959593BA); this.mainPlayList.set('selectedIndex', 27)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       },
                                       {
                                        "id": "overlay_80BA5B74_CCD5_A91C_41E9_B0B180FEDDB7",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 30,
                                             "height": 16,
                                             "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_2_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 17.07,
                                          "yaw": 93.99,
                                          "pitch": -5.68,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 17.07,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1200,
                                             "height": 930,
                                             "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_2_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 100,
                                          "pitch": -5.68,
                                          "yaw": 93.99
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Point 02b"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor CTM Area",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_BF06BA1D_C534_AB0C_41D3_9D36C46CB228); this.mainPlayList.set('selectedIndex', 19)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       }
                                      ],
                                      "pitch": 0,
                                      "mapLocations": [
                                       {
                                        "x": 853.57,
                                        "angle": 167.78,
                                        "y": 1014.2,
                                        "class": "PanoramaMapLocation",
                                        "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                       }
                                      ],
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_t.jpg",
                                      "partial": false,
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "stereoCube": {
                                         "levels": [
                                          {
                                           "width": 30720,
                                           "colCount": 60,
                                           "tags": "ondemand",
                                           "rowCount": 5,
                                           "height": 2560,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/0/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 18432,
                                           "colCount": 36,
                                           "tags": "ondemand",
                                           "rowCount": 3,
                                           "height": 1536,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/1/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 12288,
                                           "colCount": 24,
                                           "tags": "ondemand",
                                           "rowCount": 2,
                                           "height": 1024,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/2/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 6144,
                                           "colCount": 12,
                                           "tags": [
                                            "ondemand",
                                            "preload"
                                           ],
                                           "rowCount": 1,
                                           "height": 512,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/3/{row}_{column}.jpg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_t.jpg"
                                       }
                                      ]
                                     },
                                     "backwardYaw": -32.24,
                                     "yaw": 152.85,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
                                     "backwardYaw": -78.46,
                                     "yaw": 104.43,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "hfovMax": 130,
                                   "overlays": [
                                    {
                                     "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_tcap0",
                                     "angle": 0,
                                     "class": "TripodCapPanoramaOverlay",
                                     "rotate": true,
                                     "inertia": false,
                                     "hfov": 45,
                                     "distance": 50,
                                     "image": {
                                      "levels": [
                                       {
                                        "width": 850,
                                        "height": 850,
                                        "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    },
                                    {
                                     "id": "overlay_8359CFB3_CCD4_E914_41E3_C722AAA8076C",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 30,
                                          "height": 16,
                                          "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_0_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 16.99,
                                       "yaw": -20.36,
                                       "pitch": -7.01,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 16.99,
                                       "image": {
                                        "frameCount": 24,
                                        "frameDuration": 41,
                                        "levels": [
                                         {
                                          "width": 1200,
                                          "height": 930,
                                          "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_0_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "AnimatedImageResource",
                                        "colCount": 4,
                                        "rowCount": 6
                                       },
                                       "distance": 100,
                                       "pitch": -7.01,
                                       "yaw": -20.36
                                      }
                                     ],
                                     "data": {
                                      "label": "Circle Point 02b"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "2nd Floor Public Works Area",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F, this.camera_BE10A899_C534_D714_41D2_DC5FA528D8D9); this.mainPlayList.set('selectedIndex', 26)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    },
                                    {
                                     "id": "overlay_8BE39F15_CCDC_691C_41CD_16F218EB105F",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 30,
                                          "height": 16,
                                          "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_1_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 21.65,
                                       "yaw": 152.85,
                                       "pitch": -12.91,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 21.65,
                                       "image": {
                                        "frameCount": 24,
                                        "frameDuration": 41,
                                        "levels": [
                                         {
                                          "width": 1200,
                                          "height": 930,
                                          "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_1_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "AnimatedImageResource",
                                        "colCount": 4,
                                        "rowCount": 6
                                       },
                                       "distance": 100,
                                       "pitch": -12.91,
                                       "yaw": 152.85
                                      }
                                     ],
                                     "data": {
                                      "label": "Circle Point 02b"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "2nd Floor Public Works Area",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_BE0788AF_C534_D70C_4184_918F1D04DB64); this.mainPlayList.set('selectedIndex', 23)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    },
                                    {
                                     "id": "overlay_83E7977F_CD73_B90C_41D8_752493A076BC",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 30,
                                          "height": 16,
                                          "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_2_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 16.97,
                                       "yaw": 104.43,
                                       "pitch": -3.53,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 16.97,
                                       "image": {
                                        "frameCount": 24,
                                        "frameDuration": 41,
                                        "levels": [
                                         {
                                          "width": 1200,
                                          "height": 930,
                                          "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_2_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "AnimatedImageResource",
                                        "colCount": 4,
                                        "rowCount": 6
                                       },
                                       "distance": 100,
                                       "pitch": -3.53,
                                       "yaw": 104.43
                                      }
                                     ],
                                     "data": {
                                      "label": "Circle Point 02b"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "2nd Floor CTM Area",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_BE7428C2_C534_D774_41E6_3D0BB1100A2F); this.mainPlayList.set('selectedIndex', 27)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    }
                                   ],
                                   "pitch": 0,
                                   "mapLocations": [
                                    {
                                     "x": 896.17,
                                     "angle": 159.07,
                                     "y": 1059.89,
                                     "class": "PanoramaMapLocation",
                                     "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_t.jpg",
                                   "partial": false,
                                   "frames": [
                                    {
                                     "class": "CubicPanoramaFrame",
                                     "stereoCube": {
                                      "levels": [
                                       {
                                        "width": 30720,
                                        "colCount": 60,
                                        "tags": "ondemand",
                                        "rowCount": 5,
                                        "height": 2560,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/0/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 18432,
                                        "colCount": 36,
                                        "tags": "ondemand",
                                        "rowCount": 3,
                                        "height": 1536,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/1/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 12288,
                                        "colCount": 24,
                                        "tags": "ondemand",
                                        "rowCount": 2,
                                        "height": 1024,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/2/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 6144,
                                        "colCount": 12,
                                        "tags": [
                                         "ondemand",
                                         "preload"
                                        ],
                                        "rowCount": 1,
                                        "height": 512,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/3/{row}_{column}.jpg"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_t.jpg"
                                    }
                                   ]
                                  },
                                  "backwardYaw": 104.43,
                                  "yaw": -78.46,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
                                  "backwardYaw": -120.81,
                                  "yaw": 60.53,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
                                  "backwardYaw": 55.04,
                                  "yaw": -115.25,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "hfovMax": 130,
                                "overlays": [
                                 {
                                  "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_tcap0",
                                  "angle": 0,
                                  "class": "TripodCapPanoramaOverlay",
                                  "rotate": true,
                                  "inertia": false,
                                  "hfov": 45,
                                  "distance": 50,
                                  "image": {
                                   "levels": [
                                    {
                                     "width": 850,
                                     "height": 850,
                                     "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 },
                                 {
                                  "id": "overlay_8D3BCBB5_CD54_A91C_41CF_5755E33BD1A3",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 30,
                                       "height": 16,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_0_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 17.74,
                                    "yaw": 158.26,
                                    "pitch": -7.58,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 17.74,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1200,
                                       "height": 930,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_0_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 100,
                                    "pitch": -7.58,
                                    "yaw": 158.26
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Point 02b"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "2nd Floor CTM Area",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_BF85E966_C534_A93C_41CB_A7B5A8A08833); this.mainPlayList.set('selectedIndex', 19)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "overlay_8F522B1B_CD54_6914_41E2_67366406B83A",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 30,
                                       "height": 16,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_1_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 17.02,
                                    "yaw": -115.25,
                                    "pitch": -5.09,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 17.02,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1200,
                                       "height": 930,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_1_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 100,
                                    "pitch": -5.09,
                                    "yaw": -115.25
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Point 02b"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "2nd Floor Public Works Area",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_BFDC59A4_C534_A93C_41D4_92A2F615CAC8); this.mainPlayList.set('selectedIndex', 23)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "overlay_8E1D4AB2_CD5C_6B14_41E9_9C05C7FE03F1",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 30,
                                       "height": 16,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_2_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 15.57,
                                    "yaw": -78.46,
                                    "pitch": -1.96,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 15.57,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1200,
                                       "height": 930,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_2_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 100,
                                    "pitch": -1.96,
                                    "yaw": -78.46
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Point 02b"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "2nd Floor Public Works Area",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_BFF8F97B_C534_A914_41AE_0901DBE38F36); this.mainPlayList.set('selectedIndex', 25)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "overlay_828B816F_CD5F_D90C_41E9_9C3319952191",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 30,
                                       "height": 16,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_3_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 17.34,
                                    "yaw": 60.53,
                                    "pitch": -3.63,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 17.34,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1200,
                                       "height": 930,
                                       "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_3_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 100,
                                    "pitch": -3.63,
                                    "yaw": 60.53
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Point 02b"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "2nd Floor CTM Area",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_BFE96990_C534_A914_41E8_8BFD290673EF); this.mainPlayList.set('selectedIndex', 22)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 }
                                ],
                                "pitch": 0,
                                "mapLocations": [
                                 {
                                  "x": 806.45,
                                  "angle": 155.97,
                                  "y": 1056.55,
                                  "class": "PanoramaMapLocation",
                                  "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                 }
                                ],
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_t.jpg",
                                "partial": false,
                                "frames": [
                                 {
                                  "class": "CubicPanoramaFrame",
                                  "stereoCube": {
                                   "levels": [
                                    {
                                     "width": 30720,
                                     "colCount": 60,
                                     "tags": "ondemand",
                                     "rowCount": 5,
                                     "height": 2560,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/0/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 18432,
                                     "colCount": 36,
                                     "tags": "ondemand",
                                     "rowCount": 3,
                                     "height": 1536,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/1/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 12288,
                                     "colCount": 24,
                                     "tags": "ondemand",
                                     "rowCount": 2,
                                     "height": 1024,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/2/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 6144,
                                     "colCount": 12,
                                     "tags": [
                                      "ondemand",
                                      "preload"
                                     ],
                                     "rowCount": 1,
                                     "height": 512,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/3/{row}_{column}.jpg"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_t.jpg"
                                 }
                                ]
                               },
                               "backwardYaw": 158.26,
                               "yaw": -31.18,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
                               "backwardYaw": 93.99,
                               "yaw": -84.04,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "hfovMax": 130,
                             "overlays": [
                              {
                               "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_tcap0",
                               "angle": 0,
                               "class": "TripodCapPanoramaOverlay",
                               "rotate": true,
                               "inertia": false,
                               "hfov": 45,
                               "distance": 50,
                               "image": {
                                "levels": [
                                 {
                                  "width": 850,
                                  "height": 850,
                                  "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              },
                              {
                               "id": "overlay_9C9A0F5F_CBCC_E90C_41DD_2736FD05FF6C",
                               "maps": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 30,
                                    "height": 16,
                                    "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_0_0_0_map.gif",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "hfov": 18.01,
                                 "yaw": -31.18,
                                 "pitch": -3.8,
                                 "class": "HotspotPanoramaOverlayMap"
                                }
                               ],
                               "rollOverDisplay": false,
                               "class": "HotspotPanoramaOverlay",
                               "items": [
                                {
                                 "class": "HotspotPanoramaOverlayImage",
                                 "hfov": 18.01,
                                 "image": {
                                  "frameCount": 24,
                                  "frameDuration": 41,
                                  "levels": [
                                   {
                                    "width": 1200,
                                    "height": 930,
                                    "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_0_0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "AnimatedImageResource",
                                  "colCount": 4,
                                  "rowCount": 6
                                 },
                                 "distance": 100,
                                 "pitch": -3.8,
                                 "yaw": -31.18
                                }
                               ],
                               "data": {
                                "label": "Circle Point 02b"
                               },
                               "areas": [
                                {
                                 "mapColor": "#FF0000",
                                 "toolTip": "2nd Floor CTM Area",
                                 "class": "HotspotPanoramaOverlayArea",
                                 "displayTooltipInTouchScreens": true,
                                 "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_B9F5B550_C534_D914_41D8_34BDC4F7A85A); this.mainPlayList.set('selectedIndex', 27)"
                                }
                               ],
                               "useHandCursor": true,
                               "enabledInCardboard": true
                              },
                              {
                               "id": "overlay_81BDF5FD_CBCC_590C_41AD_C9081E514F86",
                               "maps": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 30,
                                    "height": 16,
                                    "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_1_0_0_map.gif",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "hfov": 17.73,
                                 "yaw": 21.46,
                                 "pitch": -1.43,
                                 "class": "HotspotPanoramaOverlayMap"
                                }
                               ],
                               "rollOverDisplay": false,
                               "class": "HotspotPanoramaOverlay",
                               "items": [
                                {
                                 "class": "HotspotPanoramaOverlayImage",
                                 "hfov": 17.73,
                                 "image": {
                                  "frameCount": 24,
                                  "frameDuration": 41,
                                  "levels": [
                                   {
                                    "width": 1200,
                                    "height": 930,
                                    "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_1_0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "AnimatedImageResource",
                                  "colCount": 4,
                                  "rowCount": 6
                                 },
                                 "distance": 100,
                                 "pitch": -1.43,
                                 "yaw": 21.46
                                }
                               ],
                               "data": {
                                "label": "Circle Point 02b"
                               },
                               "areas": [
                                {
                                 "mapColor": "#FF0000",
                                 "toolTip": "2nd Floor CTM Area",
                                 "class": "HotspotPanoramaOverlayArea",
                                 "displayTooltipInTouchScreens": true,
                                 "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_B9FF1539_C534_D914_41C2_4E5E40AF5840); this.mainPlayList.set('selectedIndex', 22)"
                                }
                               ],
                               "useHandCursor": true,
                               "enabledInCardboard": true
                              },
                              {
                               "id": "overlay_9D62C916_CBCC_691D_41E7_61C409C0A16D",
                               "maps": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 30,
                                    "height": 16,
                                    "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_2_0_0_map.gif",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "hfov": 17.39,
                                 "yaw": -84.04,
                                 "pitch": -3.26,
                                 "class": "HotspotPanoramaOverlayMap"
                                }
                               ],
                               "rollOverDisplay": false,
                               "class": "HotspotPanoramaOverlay",
                               "items": [
                                {
                                 "class": "HotspotPanoramaOverlayImage",
                                 "hfov": 17.39,
                                 "image": {
                                  "frameCount": 24,
                                  "frameDuration": 41,
                                  "levels": [
                                   {
                                    "width": 1200,
                                    "height": 930,
                                    "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_2_0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "AnimatedImageResource",
                                  "colCount": 4,
                                  "rowCount": 6
                                 },
                                 "distance": 100,
                                 "pitch": -3.26,
                                 "yaw": -84.04
                                }
                               ],
                               "data": {
                                "label": "Circle Point 02b"
                               },
                               "areas": [
                                {
                                 "mapColor": "#FF0000",
                                 "toolTip": "2nd Floor Public Works Area",
                                 "class": "HotspotPanoramaOverlayArea",
                                 "displayTooltipInTouchScreens": true,
                                 "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_B9EDB563_C534_D934_41E7_CA35755E731C); this.mainPlayList.set('selectedIndex', 23)"
                                }
                               ],
                               "useHandCursor": true,
                               "enabledInCardboard": true
                              }
                             ],
                             "pitch": 0,
                             "mapLocations": [
                              {
                               "x": 752.9,
                               "angle": -201.5,
                               "y": 1006.04,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                              }
                             ],
                             "class": "Panorama",
                             "hfov": 360,
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_t.jpg",
                             "partial": false,
                             "frames": [
                              {
                               "class": "CubicPanoramaFrame",
                               "stereoCube": {
                                "levels": [
                                 {
                                  "width": 30720,
                                  "colCount": 60,
                                  "tags": "ondemand",
                                  "rowCount": 5,
                                  "height": 2560,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/0/{row}_{column}.jpg"
                                 },
                                 {
                                  "width": 18432,
                                  "colCount": 36,
                                  "tags": "ondemand",
                                  "rowCount": 3,
                                  "height": 1536,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/1/{row}_{column}.jpg"
                                 },
                                 {
                                  "width": 12288,
                                  "colCount": 24,
                                  "tags": "ondemand",
                                  "rowCount": 2,
                                  "height": 1024,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/2/{row}_{column}.jpg"
                                 },
                                 {
                                  "width": 6144,
                                  "colCount": 12,
                                  "tags": [
                                   "ondemand",
                                   "preload"
                                  ],
                                  "rowCount": 1,
                                  "height": 512,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/3/{row}_{column}.jpg"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_t.jpg"
                              }
                             ]
                            },
                            "backwardYaw": 21.46,
                            "yaw": -163.58,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
                            "backwardYaw": 150.8,
                            "yaw": -20.01,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
                            "backwardYaw": 60.53,
                            "yaw": -120.81,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "hfovMax": 130,
                          "overlays": [
                           {
                            "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_tcap0",
                            "angle": 0,
                            "class": "TripodCapPanoramaOverlay",
                            "rotate": true,
                            "inertia": false,
                            "hfov": 45,
                            "distance": 50,
                            "image": {
                             "levels": [
                              {
                               "width": 850,
                               "height": 850,
                               "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           },
                           {
                            "id": "overlay_8744D04C_CCF4_570C_41CA_541F08C256CA",
                            "maps": [
                             {
                              "image": {
                               "levels": [
                                {
                                 "width": 30,
                                 "height": 16,
                                 "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_0_0_0_map.gif",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "hfov": 17.46,
                              "yaw": -120.81,
                              "pitch": -8.29,
                              "class": "HotspotPanoramaOverlayMap"
                             }
                            ],
                            "rollOverDisplay": false,
                            "class": "HotspotPanoramaOverlay",
                            "items": [
                             {
                              "class": "HotspotPanoramaOverlayImage",
                              "hfov": 17.46,
                              "image": {
                               "frameCount": 24,
                               "frameDuration": 41,
                               "levels": [
                                {
                                 "width": 1200,
                                 "height": 930,
                                 "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_0_0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "AnimatedImageResource",
                               "colCount": 4,
                               "rowCount": 6
                              },
                              "distance": 100,
                              "pitch": -8.29,
                              "yaw": -120.81
                             }
                            ],
                            "data": {
                             "label": "Circle Point 02b"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "toolTip": "2nd Floor CTM Area",
                              "class": "HotspotPanoramaOverlayArea",
                              "displayTooltipInTouchScreens": true,
                              "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_B9B56499_C534_DF14_41C1_3582A23AF2D1); this.mainPlayList.set('selectedIndex', 27)"
                             }
                            ],
                            "useHandCursor": true,
                            "enabledInCardboard": true
                           },
                           {
                            "id": "overlay_85885EC9_CCF3_EB74_41E3_FA5DED0A80D9",
                            "maps": [
                             {
                              "image": {
                               "levels": [
                                {
                                 "width": 30,
                                 "height": 16,
                                 "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_1_0_0_map.gif",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "hfov": 17.94,
                              "yaw": -163.58,
                              "pitch": -8.03,
                              "class": "HotspotPanoramaOverlayMap"
                             }
                            ],
                            "rollOverDisplay": false,
                            "class": "HotspotPanoramaOverlay",
                            "items": [
                             {
                              "class": "HotspotPanoramaOverlayImage",
                              "hfov": 17.94,
                              "image": {
                               "frameCount": 24,
                               "frameDuration": 41,
                               "levels": [
                                {
                                 "width": 1200,
                                 "height": 930,
                                 "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_1_0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "AnimatedImageResource",
                               "colCount": 4,
                               "rowCount": 6
                              },
                              "distance": 100,
                              "pitch": -8.03,
                              "yaw": -163.58
                             }
                            ],
                            "data": {
                             "label": "Circle Point 02b"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "toolTip": "2nd Floor CTM Area",
                              "class": "HotspotPanoramaOverlayArea",
                              "displayTooltipInTouchScreens": true,
                              "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_B840C46E_C534_DF0C_41D7_9372D3B7F1B6); this.mainPlayList.set('selectedIndex', 19)"
                             }
                            ],
                            "useHandCursor": true,
                            "enabledInCardboard": true
                           },
                           {
                            "id": "overlay_8508E24C_C5DC_7B0C_41D9_1DA426602696",
                            "maps": [
                             {
                              "image": {
                               "levels": [
                                {
                                 "width": 30,
                                 "height": 16,
                                 "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_2_0_0_map.gif",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "hfov": 15.63,
                              "yaw": -20.01,
                              "pitch": -3.18,
                              "class": "HotspotPanoramaOverlayMap"
                             }
                            ],
                            "rollOverDisplay": false,
                            "class": "HotspotPanoramaOverlay",
                            "items": [
                             {
                              "class": "HotspotPanoramaOverlayImage",
                              "hfov": 15.63,
                              "image": {
                               "frameCount": 24,
                               "frameDuration": 41,
                               "levels": [
                                {
                                 "width": 1200,
                                 "height": 930,
                                 "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_2_0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "AnimatedImageResource",
                               "colCount": 4,
                               "rowCount": 6
                              },
                              "distance": 100,
                              "pitch": -3.18,
                              "yaw": -20.01
                             }
                            ],
                            "data": {
                             "label": "Circle Point 02b"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "toolTip": "2nd Floor CTM Area",
                              "class": "HotspotPanoramaOverlayArea",
                              "displayTooltipInTouchScreens": true,
                              "click": "this.startPanoramaWithCamera(this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C, this.camera_B9BEE485_C534_DFFC_41E4_770A38C7445B); this.mainPlayList.set('selectedIndex', 20)"
                             }
                            ],
                            "useHandCursor": true,
                            "enabledInCardboard": true
                           }
                          ],
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "x": 760.47,
                            "angle": -197.67,
                            "y": 1100.17,
                            "class": "PanoramaMapLocation",
                            "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                           }
                          ],
                          "class": "Panorama",
                          "hfov": 360,
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_t.jpg",
                          "partial": false,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "stereoCube": {
                             "levels": [
                              {
                               "width": 30720,
                               "colCount": 60,
                               "tags": "ondemand",
                               "rowCount": 5,
                               "height": 2560,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/0/{row}_{column}.jpg"
                              },
                              {
                               "width": 18432,
                               "colCount": 36,
                               "tags": "ondemand",
                               "rowCount": 3,
                               "height": 1536,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/1/{row}_{column}.jpg"
                              },
                              {
                               "width": 12288,
                               "colCount": 24,
                               "tags": "ondemand",
                               "rowCount": 2,
                               "height": 1024,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/2/{row}_{column}.jpg"
                              },
                              {
                               "width": 6144,
                               "colCount": 12,
                               "tags": [
                                "ondemand",
                                "preload"
                               ],
                               "rowCount": 1,
                               "height": 512,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/3/{row}_{column}.jpg"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_t.jpg"
                           }
                          ]
                         },
                         "backwardYaw": -20.01,
                         "yaw": 150.8,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "hfovMax": 130,
                       "overlays": [
                        {
                         "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_tcap0",
                         "angle": 0,
                         "class": "TripodCapPanoramaOverlay",
                         "rotate": true,
                         "inertia": false,
                         "hfov": 45,
                         "distance": 50,
                         "image": {
                          "levels": [
                           {
                            "width": 850,
                            "height": 850,
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        },
                        {
                         "id": "overlay_9EFFE8D6_CBFC_D71C_41CB_AD532CDE8F8E",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 30,
                              "height": 16,
                              "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_0_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 15.49,
                           "yaw": -53.66,
                           "pitch": -7.77,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 15.49,
                           "image": {
                            "frameCount": 24,
                            "frameDuration": 41,
                            "levels": [
                             {
                              "width": 1200,
                              "height": 930,
                              "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_0_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "AnimatedImageResource",
                            "colCount": 4,
                            "rowCount": 6
                           },
                           "distance": 100,
                           "pitch": -7.77,
                           "yaw": -53.66
                          }
                         ],
                         "data": {
                          "label": "Circle Point 02b"
                         },
                         "areas": [
                          {
                           "displayTooltipInTouchScreens": true,
                           "mapColor": "#FF0000",
                           "toolTip": "2nd Floor Hallway Courtyard View",
                           "class": "HotspotPanoramaOverlayArea"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        },
                        {
                         "id": "overlay_9EF0F62B_CBF5_BB34_41CE_CD3D767BFDFB",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 30,
                              "height": 16,
                              "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_1_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 18.28,
                           "yaw": 150.8,
                           "pitch": -2.72,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 18.28,
                           "image": {
                            "frameCount": 24,
                            "frameDuration": 41,
                            "levels": [
                             {
                              "width": 1200,
                              "height": 930,
                              "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_1_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "AnimatedImageResource",
                            "colCount": 4,
                            "rowCount": 6
                           },
                           "distance": 100,
                           "pitch": -2.72,
                           "yaw": 150.8
                          }
                         ],
                         "data": {
                          "label": "Circle Point 02b"
                         },
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "toolTip": "2nd Floor CTM Area",
                           "class": "HotspotPanoramaOverlayArea",
                           "displayTooltipInTouchScreens": true,
                           "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_BF3089E1_C534_A934_41E8_D40272B66123); this.mainPlayList.set('selectedIndex', 22)"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        },
                        {
                         "id": "overlay_9DFC42FD_CBF4_7B0C_41EA_2E47922618D2",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 30,
                              "height": 16,
                              "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_2_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 18.09,
                           "yaw": -120.33,
                           "pitch": -3.06,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 18.09,
                           "image": {
                            "frameCount": 24,
                            "frameDuration": 41,
                            "levels": [
                             {
                              "width": 1200,
                              "height": 930,
                              "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_2_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "AnimatedImageResource",
                            "colCount": 4,
                            "rowCount": 6
                           },
                           "distance": 100,
                           "pitch": -3.06,
                           "yaw": -120.33
                          }
                         ],
                         "data": {
                          "label": "Circle Point 02b"
                         },
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "toolTip": "2nd Floor Public Works Area",
                           "class": "HotspotPanoramaOverlayArea",
                           "displayTooltipInTouchScreens": true,
                           "click": "this.mainPlayList.set('selectedIndex', 26)"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        }
                       ],
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 847.69,
                         "angle": -189.8,
                         "y": 1190.45,
                         "class": "PanoramaMapLocation",
                         "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                        }
                       ],
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_t.jpg",
                       "partial": false,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "stereoCube": {
                          "levels": [
                           {
                            "width": 30720,
                            "colCount": 60,
                            "tags": "ondemand",
                            "rowCount": 5,
                            "height": 2560,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/0/{row}_{column}.jpg"
                           },
                           {
                            "width": 18432,
                            "colCount": 36,
                            "tags": "ondemand",
                            "rowCount": 3,
                            "height": 1536,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/1/{row}_{column}.jpg"
                           },
                           {
                            "width": 12288,
                            "colCount": 24,
                            "tags": "ondemand",
                            "rowCount": 2,
                            "height": 1024,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/2/{row}_{column}.jpg"
                           },
                           {
                            "width": 6144,
                            "colCount": 12,
                            "tags": [
                             "ondemand",
                             "preload"
                            ],
                            "rowCount": 1,
                            "height": 512,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/3/{row}_{column}.jpg"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
                      "backwardYaw": -27.71,
                      "yaw": -103.62,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
                      "backwardYaw": 37.97,
                      "yaw": 32.25,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "hfovMax": 130,
                    "overlays": [
                     {
                      "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_tcap0",
                      "angle": 0,
                      "class": "TripodCapPanoramaOverlay",
                      "rotate": true,
                      "inertia": false,
                      "hfov": 45,
                      "distance": 50,
                      "image": {
                       "levels": [
                        {
                         "width": 850,
                         "height": 850,
                         "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     },
                     {
                      "id": "overlay_9EBF5847_CBDC_F77C_41BF_44C89D9CD85E",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 30,
                           "height": 16,
                           "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_0_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 16.15,
                        "yaw": -45.71,
                        "pitch": -4.47,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 16.15,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1200,
                           "height": 930,
                           "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_0_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 100,
                        "pitch": -4.47,
                        "yaw": -45.71
                       }
                      ],
                      "data": {
                       "label": "Circle Point 02b"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "2nd Floor CTM Area",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.mainPlayList.set('selectedIndex', 20)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "overlay_9FDE0217_CBDC_BB1C_41D5_7827D4680D8D",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 30,
                           "height": 16,
                           "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_1_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 15,
                        "yaw": 32.25,
                        "pitch": -1.1,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 15,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1200,
                           "height": 930,
                           "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_1_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 100,
                        "pitch": -1.1,
                        "yaw": 32.25
                       }
                      ],
                      "data": {
                       "label": "Circle Point 02b"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "2nd Floor Public Works Area",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F, this.camera_BE8C07EC_C534_D90C_41C5_1E59E45794D9); this.mainPlayList.set('selectedIndex', 26)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "overlay_9D07DBDE_CBF4_690C_41E8_C8BD6208D196",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 37,
                           "height": 16,
                           "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_2_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 18.71,
                        "yaw": -103.62,
                        "pitch": -12.01,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 18.71,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1220,
                           "height": 780,
                           "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_2_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 50,
                        "pitch": -12.01,
                        "yaw": -103.62
                       }
                      ],
                      "data": {
                       "label": "Circle Arrow 01b Left-Up"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "2nd Floor CTM Area Entrance",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171, this.camera_BE9EF7D5_C534_D91C_41A8_04B3367353C6); this.mainPlayList.set('selectedIndex', 21)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     }
                    ],
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 899.17,
                      "angle": -19.91,
                      "y": 1187.06,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                     }
                    ],
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_t.jpg",
                    "partial": false,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "stereoCube": {
                       "levels": [
                        {
                         "width": 30720,
                         "colCount": 60,
                         "tags": "ondemand",
                         "rowCount": 5,
                         "height": 2560,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/0/{row}_{column}.jpg"
                        },
                        {
                         "width": 18432,
                         "colCount": 36,
                         "tags": "ondemand",
                         "rowCount": 3,
                         "height": 1536,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/1/{row}_{column}.jpg"
                        },
                        {
                         "width": 12288,
                         "colCount": 24,
                         "tags": "ondemand",
                         "rowCount": 2,
                         "height": 1024,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/2/{row}_{column}.jpg"
                        },
                        {
                         "width": 6144,
                         "colCount": 12,
                         "tags": [
                          "ondemand",
                          "preload"
                         ],
                         "rowCount": 1,
                         "height": 512,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/3/{row}_{column}.jpg"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_t.jpg"
                     }
                    ]
                   },
                   "backwardYaw": -103.62,
                   "yaw": -27.71,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMax": 130,
                 "overlays": [
                  {
                   "id": "overlay_EBFDBC34_C7D4_AF1C_41B5_9E6B9D81C4D2",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 37,
                        "height": 16,
                        "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_1_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 21.3,
                     "yaw": -27.71,
                     "pitch": -14.54,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 21.3,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1220,
                        "height": 780,
                        "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_1_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 100,
                     "pitch": -14.54,
                     "yaw": -27.71
                    }
                   ],
                   "data": {
                    "label": "Circle Arrow 01b"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Hallway Courtyard View",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237, this.camera_B90CD670_C534_DB14_41B9_052CDA67E1D6); this.mainPlayList.set('selectedIndex', 24)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "overlay_878C3B1E_DB3C_A90C_41E9_40AB17E397B4",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 16,
                        "height": 16,
                        "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_2_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 11.48,
                     "yaw": 148.25,
                     "pitch": -1.05,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 11.48,
                     "image": {
                      "levels": [
                       {
                        "width": 244,
                        "height": 244,
                        "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_2_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "distance": 50,
                     "pitch": -1.05,
                     "yaw": 148.25
                    }
                   ],
                   "data": {
                    "label": "Image"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Foyer",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_B914A657_C534_DB1C_41E2_DF0849BFBAB6); this.mainPlayList.set('selectedIndex', 3)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_tcap0",
                   "angle": 0,
                   "class": "TripodCapPanoramaOverlay",
                   "rotate": true,
                   "inertia": false,
                   "hfov": 45,
                   "distance": 50,
                   "image": {
                    "levels": [
                     {
                      "width": 850,
                      "height": 850,
                      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 804.2,
                   "angle": 84.61,
                   "y": 1280.8,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_t.jpg",
                 "partial": false,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "stereoCube": {
                    "levels": [
                     {
                      "width": 30720,
                      "colCount": 60,
                      "tags": "ondemand",
                      "rowCount": 5,
                      "height": 2560,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/0/{row}_{column}.jpg"
                     },
                     {
                      "width": 18432,
                      "colCount": 36,
                      "tags": "ondemand",
                      "rowCount": 3,
                      "height": 1536,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/1/{row}_{column}.jpg"
                     },
                     {
                      "width": 12288,
                      "colCount": 24,
                      "tags": "ondemand",
                      "rowCount": 2,
                      "height": 1024,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/2/{row}_{column}.jpg"
                     },
                     {
                      "width": 6144,
                      "colCount": 12,
                      "tags": [
                       "ondemand",
                       "preload"
                      ],
                      "rowCount": 1,
                      "height": 512,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/3/{row}_{column}.jpg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_t.jpg"
                  }
                 ]
                },
                "backwardYaw": 148.25,
                "yaw": 21.79,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
                 "label": "PIC_2019_07_26_13_01_52_20190813103026",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
                   "backwardYaw": 166.8,
                   "yaw": -140.23,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": {
                    "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
                    "label": "PIC_2019_07_26_13_00_34_20190813103031",
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
                       "label": "PIC_2019_07_26_13_01_18_20190813103029",
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
                          "label": "PIC_2019_07_26_13_58_47_20190813102957",
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
                            "backwardYaw": 104.53,
                            "yaw": 27.89,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": {
                             "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
                             "label": "PIC_2019_07_26_12_59_53_20190813103033",
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
                                "label": "PIC_2019_07_26_13_02_57_20190813103023",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
                                  "backwardYaw": -25.79,
                                  "yaw": -78.3,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
                                   "label": "PIC_2019_07_26_12_59_08_20190813103036",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
                                      "label": "3d-13_26_03",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
                                        "backwardYaw": 34.39,
                                        "yaw": 88.53,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
                                         "label": "3d-13_25_22",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
                                           "backwardYaw": 88.95,
                                           "yaw": 147.83,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": {
                                            "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
                                            "label": "3d-13_23_24",
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
                                              "backwardYaw": -15.74,
                                              "yaw": -89.41,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
                                              "backwardYaw": -65.76,
                                              "yaw": -65.58,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "hfovMax": 130,
                                            "overlays": [
                                             {
                                              "id": "overlay_F4C6E88F_DB35_B70C_41A6_E5B7540A978D",
                                              "maps": [
                                               {
                                                "image": {
                                                 "levels": [
                                                  {
                                                   "width": 37,
                                                   "height": 16,
                                                   "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_0_0_0_map.gif",
                                                   "class": "ImageResourceLevel"
                                                  }
                                                 ],
                                                 "class": "ImageResource"
                                                },
                                                "hfov": 18.76,
                                                "yaw": -89.41,
                                                "pitch": -20.63,
                                                "class": "HotspotPanoramaOverlayMap"
                                               }
                                              ],
                                              "rollOverDisplay": false,
                                              "class": "HotspotPanoramaOverlay",
                                              "items": [
                                               {
                                                "class": "HotspotPanoramaOverlayImage",
                                                "hfov": 18.76,
                                                "image": {
                                                 "frameCount": 24,
                                                 "frameDuration": 41,
                                                 "levels": [
                                                  {
                                                   "width": 1220,
                                                   "height": 780,
                                                   "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_0_0.png",
                                                   "class": "ImageResourceLevel"
                                                  }
                                                 ],
                                                 "class": "AnimatedImageResource",
                                                 "colCount": 4,
                                                 "rowCount": 6
                                                },
                                                "distance": 50,
                                                "pitch": -20.63,
                                                "yaw": -89.41
                                               }
                                              ],
                                              "data": {
                                               "label": "Circle Arrow 01b Left-Up"
                                              },
                                              "areas": [
                                               {
                                                "mapColor": "#FF0000",
                                                "toolTip": "2nd Floor Public Works North Wing",
                                                "class": "HotspotPanoramaOverlayArea",
                                                "displayTooltipInTouchScreens": true,
                                                "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_BF2089F5_C534_A91C_41DC_909C5C6010AE); this.mainPlayList.set('selectedIndex', 16)"
                                               }
                                              ],
                                              "useHandCursor": true,
                                              "enabledInCardboard": true
                                             },
                                             {
                                              "id": "overlay_F379F50A_DB34_DEF5_41E7_624647E26E55",
                                              "maps": [
                                               {
                                                "image": {
                                                 "levels": [
                                                  {
                                                   "width": 37,
                                                   "height": 16,
                                                   "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_1_0_0_map.gif",
                                                   "class": "ImageResourceLevel"
                                                  }
                                                 ],
                                                 "class": "ImageResource"
                                                },
                                                "hfov": 19.22,
                                                "yaw": -65.58,
                                                "pitch": -18.77,
                                                "class": "HotspotPanoramaOverlayMap"
                                               }
                                              ],
                                              "rollOverDisplay": false,
                                              "class": "HotspotPanoramaOverlay",
                                              "items": [
                                               {
                                                "class": "HotspotPanoramaOverlayImage",
                                                "hfov": 19.22,
                                                "image": {
                                                 "frameCount": 24,
                                                 "frameDuration": 41,
                                                 "levels": [
                                                  {
                                                   "width": 1220,
                                                   "height": 780,
                                                   "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_1_0.png",
                                                   "class": "ImageResourceLevel"
                                                  }
                                                 ],
                                                 "class": "AnimatedImageResource",
                                                 "colCount": 4,
                                                 "rowCount": 6
                                                },
                                                "distance": 100,
                                                "pitch": -18.77,
                                                "yaw": -65.58
                                               }
                                              ],
                                              "data": {
                                               "label": "Circle Arrow 01b"
                                              },
                                              "areas": [
                                               {
                                                "mapColor": "#FF0000",
                                                "toolTip": "2nd Floor Public Works North Wing",
                                                "class": "HotspotPanoramaOverlayArea",
                                                "displayTooltipInTouchScreens": true,
                                                "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_BF112A0A_C534_AAF5_41C5_33140A77FF53); this.mainPlayList.set('selectedIndex', 17)"
                                               }
                                              ],
                                              "useHandCursor": true,
                                              "enabledInCardboard": true
                                             },
                                             {
                                              "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_tcap0",
                                              "angle": 0,
                                              "class": "TripodCapPanoramaOverlay",
                                              "rotate": true,
                                              "inertia": false,
                                              "hfov": 45,
                                              "distance": 50,
                                              "image": {
                                               "levels": [
                                                {
                                                 "width": 850,
                                                 "height": 850,
                                                 "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                                 "class": "ImageResourceLevel"
                                                }
                                               ],
                                               "class": "ImageResource"
                                              }
                                             }
                                            ],
                                            "pitch": 0,
                                            "mapLocations": [
                                             {
                                              "x": 975.6,
                                              "angle": 126.75,
                                              "y": 1277.73,
                                              "class": "PanoramaMapLocation",
                                              "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                             }
                                            ],
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_t.jpg",
                                            "partial": false,
                                            "frames": [
                                             {
                                              "class": "CubicPanoramaFrame",
                                              "stereoCube": {
                                               "levels": [
                                                {
                                                 "width": 30720,
                                                 "colCount": 60,
                                                 "tags": "ondemand",
                                                 "rowCount": 5,
                                                 "height": 2560,
                                                 "class": "TiledImageResourceLevel",
                                                 "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/0/{row}_{column}.jpg"
                                                },
                                                {
                                                 "width": 18432,
                                                 "colCount": 36,
                                                 "tags": "ondemand",
                                                 "rowCount": 3,
                                                 "height": 1536,
                                                 "class": "TiledImageResourceLevel",
                                                 "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/1/{row}_{column}.jpg"
                                                },
                                                {
                                                 "width": 12288,
                                                 "colCount": 24,
                                                 "tags": "ondemand",
                                                 "rowCount": 2,
                                                 "height": 1024,
                                                 "class": "TiledImageResourceLevel",
                                                 "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/2/{row}_{column}.jpg"
                                                },
                                                {
                                                 "width": 6144,
                                                 "colCount": 12,
                                                 "tags": [
                                                  "ondemand",
                                                  "preload"
                                                 ],
                                                 "rowCount": 1,
                                                 "height": 512,
                                                 "class": "TiledImageResourceLevel",
                                                 "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/3/{row}_{column}.jpg"
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "thumbnailUrl": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_t.jpg"
                                             }
                                            ]
                                           },
                                           "backwardYaw": -89.41,
                                           "yaw": -15.74,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "hfovMax": 130,
                                         "overlays": [
                                          {
                                           "id": "overlay_F610CEB6_DCDC_6B1C_41E8_A359129394BC",
                                           "maps": [
                                            {
                                             "image": {
                                              "levels": [
                                               {
                                                "width": 37,
                                                "height": 16,
                                                "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_0_0_0_map.gif",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "hfov": 18.8,
                                             "yaw": 147.83,
                                             "pitch": -31.85,
                                             "class": "HotspotPanoramaOverlayMap"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "class": "HotspotPanoramaOverlay",
                                           "items": [
                                            {
                                             "class": "HotspotPanoramaOverlayImage",
                                             "hfov": 18.8,
                                             "image": {
                                              "frameCount": 24,
                                              "frameDuration": 41,
                                              "levels": [
                                               {
                                                "width": 1220,
                                                "height": 780,
                                                "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_0_0.png",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "AnimatedImageResource",
                                              "colCount": 4,
                                              "rowCount": 6
                                             },
                                             "distance": 100,
                                             "pitch": -31.85,
                                             "yaw": 147.83
                                            }
                                           ],
                                           "data": {
                                            "label": "Circle Arrow 01b"
                                           },
                                           "areas": [
                                            {
                                             "mapColor": "#FF0000",
                                             "toolTip": "North Staircase",
                                             "class": "HotspotPanoramaOverlayArea",
                                             "displayTooltipInTouchScreens": true,
                                             "click": "this.startPanoramaWithCamera(this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB, this.camera_BE2F0873_C534_D714_41D4_2902CE57C4F4); this.mainPlayList.set('selectedIndex', 18)"
                                            }
                                           ],
                                           "useHandCursor": true,
                                           "enabledInCardboard": true
                                          },
                                          {
                                           "id": "overlay_F6CB96EF_DCD5_DB0C_41E4_DFFD50D9AD45",
                                           "maps": [
                                            {
                                             "image": {
                                              "levels": [
                                               {
                                                "width": 37,
                                                "height": 16,
                                                "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_1_0_0_map.gif",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "hfov": 21.77,
                                             "yaw": -15.74,
                                             "pitch": -4.94,
                                             "class": "HotspotPanoramaOverlayMap"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "class": "HotspotPanoramaOverlay",
                                           "items": [
                                            {
                                             "class": "HotspotPanoramaOverlayImage",
                                             "hfov": 21.77,
                                             "image": {
                                              "frameCount": 24,
                                              "frameDuration": 41,
                                              "levels": [
                                               {
                                                "width": 1220,
                                                "height": 780,
                                                "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_1_0.png",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "AnimatedImageResource",
                                              "colCount": 4,
                                              "rowCount": 6
                                             },
                                             "distance": 50,
                                             "pitch": -4.94,
                                             "yaw": -15.74
                                            }
                                           ],
                                           "data": {
                                            "label": "Circle Arrow 01b Right-Up"
                                           },
                                           "areas": [
                                            {
                                             "mapColor": "#FF0000",
                                             "toolTip": "Breakroom Kitchenette",
                                             "class": "HotspotPanoramaOverlayArea",
                                             "displayTooltipInTouchScreens": true,
                                             "click": "this.startPanoramaWithCamera(this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA, this.camera_BE239887_C534_D7FC_41E0_D98C6E633E06); this.mainPlayList.set('selectedIndex', 15)"
                                            }
                                           ],
                                           "useHandCursor": true,
                                           "enabledInCardboard": true
                                          },
                                          {
                                           "id": "overlay_8AADA53A_DB34_5914_41C7_C37D932D358D",
                                           "maps": [
                                            {
                                             "image": {
                                              "levels": [
                                               {
                                                "width": 30,
                                                "height": 16,
                                                "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_3_0_0_map.gif",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "hfov": 14.49,
                                             "yaw": -69.35,
                                             "pitch": -5.58,
                                             "class": "HotspotPanoramaOverlayMap"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "class": "HotspotPanoramaOverlay",
                                           "items": [
                                            {
                                             "class": "HotspotPanoramaOverlayImage",
                                             "hfov": 14.49,
                                             "image": {
                                              "frameCount": 24,
                                              "frameDuration": 41,
                                              "levels": [
                                               {
                                                "width": 1200,
                                                "height": 930,
                                                "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_3_0.png",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "AnimatedImageResource",
                                              "colCount": 4,
                                              "rowCount": 6
                                             },
                                             "distance": 100,
                                             "pitch": -5.58,
                                             "yaw": -69.35
                                            }
                                           ],
                                           "data": {
                                            "label": "Circle Point 02b"
                                           },
                                           "areas": [
                                            {
                                             "mapColor": "#FF0000",
                                             "toolTip": "2nd Floor Public Works North Wing",
                                             "class": "HotspotPanoramaOverlayArea",
                                             "displayTooltipInTouchScreens": true,
                                             "click": "this.mainPlayList.set('selectedIndex', 17)"
                                            }
                                           ],
                                           "useHandCursor": true,
                                           "enabledInCardboard": true
                                          },
                                          {
                                           "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_tcap0",
                                           "angle": 0,
                                           "class": "TripodCapPanoramaOverlay",
                                           "rotate": true,
                                           "inertia": false,
                                           "hfov": 45,
                                           "distance": 50,
                                           "image": {
                                            "levels": [
                                             {
                                              "width": 850,
                                              "height": 850,
                                              "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "pitch": 0,
                                         "mapLocations": [
                                          {
                                           "x": 1030.37,
                                           "angle": -152.24,
                                           "y": 1180.44,
                                           "class": "PanoramaMapLocation",
                                           "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                          }
                                         ],
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "vfov": 180,
                                         "thumbnailUrl": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_t.jpg",
                                         "partial": false,
                                         "frames": [
                                          {
                                           "class": "CubicPanoramaFrame",
                                           "stereoCube": {
                                            "levels": [
                                             {
                                              "width": 30720,
                                              "colCount": 60,
                                              "tags": "ondemand",
                                              "rowCount": 5,
                                              "height": 2560,
                                              "class": "TiledImageResourceLevel",
                                              "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/0/{row}_{column}.jpg"
                                             },
                                             {
                                              "width": 18432,
                                              "colCount": 36,
                                              "tags": "ondemand",
                                              "rowCount": 3,
                                              "height": 1536,
                                              "class": "TiledImageResourceLevel",
                                              "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/1/{row}_{column}.jpg"
                                             },
                                             {
                                              "width": 12288,
                                              "colCount": 24,
                                              "tags": "ondemand",
                                              "rowCount": 2,
                                              "height": 1024,
                                              "class": "TiledImageResourceLevel",
                                              "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/2/{row}_{column}.jpg"
                                             },
                                             {
                                              "width": 6144,
                                              "colCount": 12,
                                              "tags": [
                                               "ondemand",
                                               "preload"
                                              ],
                                              "rowCount": 1,
                                              "height": 512,
                                              "class": "TiledImageResourceLevel",
                                              "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/3/{row}_{column}.jpg"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "thumbnailUrl": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_t.jpg"
                                          }
                                         ]
                                        },
                                        "backwardYaw": 147.83,
                                        "yaw": 88.95,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "overlays": [
                                       {
                                        "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_tcap0",
                                        "angle": 0,
                                        "class": "TripodCapPanoramaOverlay",
                                        "rotate": true,
                                        "inertia": false,
                                        "hfov": 45,
                                        "distance": 50,
                                        "image": {
                                         "levels": [
                                          {
                                           "width": 850,
                                           "height": 850,
                                           "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       },
                                       {
                                        "id": "overlay_8B4159AC_DB34_690C_41E3_CDE222A725F5",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 16,
                                             "height": 16,
                                             "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_1_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 8.84,
                                          "yaw": 88.95,
                                          "pitch": -2.03,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 8.84,
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 188,
                                             "height": 188,
                                             "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_1_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "distance": 50,
                                          "pitch": -2.03,
                                          "yaw": 88.95
                                         }
                                        ],
                                        "data": {
                                         "label": "Image"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor Public Works North Wing  Staircase Entrance",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_B86183D8_C534_D914_41D2_35163F8160DE); this.mainPlayList.set('selectedIndex', 16)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       },
                                       {
                                        "id": "overlay_87B3BE15_DB4C_EB1C_41D7_C141EDFA2B7E",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 37,
                                             "height": 16,
                                             "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_2_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 15.45,
                                          "yaw": 146.99,
                                          "pitch": -12.38,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 15.45,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1220,
                                             "height": 780,
                                             "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_2_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 100,
                                          "pitch": -12.38,
                                          "yaw": 146.99
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Arrow 01b"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "2nd Floor Hallway Courtyard View",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.mainPlayList.set('selectedIndex', 24)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       },
                                       {
                                        "id": "overlay_874CC225_DB3C_5B3C_41DD_4B12D212E31D",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 37,
                                             "height": 16,
                                             "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_3_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 20.03,
                                          "yaw": 88.53,
                                          "pitch": -10.75,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 20.03,
                                          "image": {
                                           "frameCount": 24,
                                           "frameDuration": 41,
                                           "levels": [
                                            {
                                             "width": 1220,
                                             "height": 780,
                                             "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_3_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "AnimatedImageResource",
                                           "colCount": 4,
                                           "rowCount": 6
                                          },
                                          "distance": 50,
                                          "pitch": -10.75,
                                          "yaw": 88.53
                                         }
                                        ],
                                        "data": {
                                         "label": "Circle Arrow 01b Right"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "Head down North Staircase",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_B86503C6_C534_D97C_41E0_447AEF675856); this.mainPlayList.set('selectedIndex', 10)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       }
                                      ],
                                      "pitch": 0,
                                      "mapLocations": [
                                       {
                                        "x": 1050.7,
                                        "angle": 91.64,
                                        "y": 1076.15,
                                        "class": "PanoramaMapLocation",
                                        "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                       }
                                      ],
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_t.jpg",
                                      "partial": false,
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "stereoCube": {
                                         "levels": [
                                          {
                                           "width": 30720,
                                           "colCount": 60,
                                           "tags": "ondemand",
                                           "rowCount": 5,
                                           "height": 2560,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/0/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 18432,
                                           "colCount": 36,
                                           "tags": "ondemand",
                                           "rowCount": 3,
                                           "height": 1536,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/1/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 12288,
                                           "colCount": 24,
                                           "tags": "ondemand",
                                           "rowCount": 2,
                                           "height": 1024,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/2/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 6144,
                                           "colCount": 12,
                                           "tags": [
                                            "ondemand",
                                            "preload"
                                           ],
                                           "rowCount": 1,
                                           "height": 512,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/3/{row}_{column}.jpg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_t.jpg"
                                       }
                                      ]
                                     },
                                     "backwardYaw": 88.53,
                                     "yaw": 34.39,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
                                     "backwardYaw": -60.93,
                                     "yaw": 162.98,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2",
                                      "label": "PIC_2019_07_26_12_57_52_20190813103040",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
                                        "backwardYaw": -32.33,
                                        "yaw": 151.69,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "overlays": [
                                       {
                                        "id": "overlay_8D960CF1_DB57_EF14_41B8_A520AA01C5E1",
                                        "maps": [
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 16,
                                             "height": 16,
                                             "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0_HS_1_0_0_map.gif",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "hfov": 11.46,
                                          "yaw": 151.69,
                                          "pitch": 3.54,
                                          "class": "HotspotPanoramaOverlayMap"
                                         }
                                        ],
                                        "rollOverDisplay": false,
                                        "class": "HotspotPanoramaOverlay",
                                        "items": [
                                         {
                                          "class": "HotspotPanoramaOverlayImage",
                                          "hfov": 11.46,
                                          "image": {
                                           "levels": [
                                            {
                                             "width": 244,
                                             "height": 244,
                                             "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0_HS_1_0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "distance": 50,
                                          "pitch": 3.54,
                                          "yaw": 151.69
                                         }
                                        ],
                                        "data": {
                                         "label": "Image"
                                        },
                                        "areas": [
                                         {
                                          "mapColor": "#FF0000",
                                          "toolTip": "Enter North Entrance",
                                          "class": "HotspotPanoramaOverlayArea",
                                          "displayTooltipInTouchScreens": true,
                                          "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_B9050683_C534_DBF4_41D2_0132154B5DEE); this.mainPlayList.set('selectedIndex', 10)"
                                         }
                                        ],
                                        "useHandCursor": true,
                                        "enabledInCardboard": true
                                       },
                                       {
                                        "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_tcap0",
                                        "angle": 0,
                                        "class": "TripodCapPanoramaOverlay",
                                        "rotate": true,
                                        "inertia": false,
                                        "hfov": 45,
                                        "distance": 50,
                                        "image": {
                                         "levels": [
                                          {
                                           "width": 850,
                                           "height": 850,
                                           "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "pitch": 0,
                                      "mapLocations": [
                                       {
                                        "x": 1112.01,
                                        "angle": 119.87,
                                        "y": 303.06,
                                        "class": "PanoramaMapLocation",
                                        "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                       }
                                      ],
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_t.jpg",
                                      "partial": false,
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "stereoCube": {
                                         "levels": [
                                          {
                                           "width": 30720,
                                           "colCount": 60,
                                           "tags": "ondemand",
                                           "rowCount": 5,
                                           "height": 2560,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/0/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 18432,
                                           "colCount": 36,
                                           "tags": "ondemand",
                                           "rowCount": 3,
                                           "height": 1536,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/1/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 12288,
                                           "colCount": 24,
                                           "tags": "ondemand",
                                           "rowCount": 2,
                                           "height": 1024,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/2/{row}_{column}.jpg"
                                          },
                                          {
                                           "width": 6144,
                                           "colCount": 12,
                                           "tags": [
                                            "ondemand",
                                            "preload"
                                           ],
                                           "rowCount": 1,
                                           "height": 512,
                                           "class": "TiledImageResourceLevel",
                                           "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/3/{row}_{column}.jpg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_t.jpg"
                                       }
                                      ]
                                     },
                                     "backwardYaw": 151.69,
                                     "yaw": -32.33,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "hfovMax": 130,
                                   "overlays": [
                                    {
                                     "id": "overlay_E67D1710_C7FC_5914_41E3_355C4A5B07F5",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 37,
                                          "height": 16,
                                          "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_0_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 19.11,
                                       "yaw": 162.98,
                                       "pitch": -19.53,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 19.11,
                                       "image": {
                                        "frameCount": 24,
                                        "frameDuration": 41,
                                        "levels": [
                                         {
                                          "width": 1220,
                                          "height": 780,
                                          "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_0_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "AnimatedImageResource",
                                        "colCount": 4,
                                        "rowCount": 6
                                       },
                                       "distance": 100,
                                       "pitch": -19.53,
                                       "yaw": 162.98
                                      }
                                     ],
                                     "data": {
                                      "label": "Circle Arrow 01b"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "Jump to Courtyard",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16, this.camera_BFA0293C_C534_A90C_41DE_D47FD672E7E7); this.mainPlayList.set('selectedIndex', 7)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    },
                                    {
                                     "id": "overlay_8CC93C58_DB55_AF14_41E6_1271C30D079D",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 16,
                                          "height": 16,
                                          "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_2_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 11.48,
                                       "yaw": -32.33,
                                       "pitch": 0.48,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 11.48,
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 244,
                                          "height": 244,
                                          "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_2_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "distance": 50,
                                       "pitch": 0.48,
                                       "yaw": -32.33
                                      }
                                     ],
                                     "data": {
                                      "label": "Image"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "Exit North Entrance",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2, this.camera_BF977953_C534_A914_41D7_B1A2282923B9); this.mainPlayList.set('selectedIndex', 9)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    },
                                    {
                                     "id": "overlay_9AFD85F4_C4CC_591C_41D0_6F625183D969",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 26,
                                          "height": 16,
                                          "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_3_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 13.69,
                                       "yaw": 34.39,
                                       "pitch": 25.71,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 13.69,
                                       "image": {
                                        "frameCount": 24,
                                        "frameDuration": 41,
                                        "levels": [
                                         {
                                          "width": 1220,
                                          "height": 1110,
                                          "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_3_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "AnimatedImageResource",
                                        "colCount": 4,
                                        "rowCount": 6
                                       },
                                       "distance": 100,
                                       "pitch": 25.71,
                                       "yaw": 34.39
                                      }
                                     ],
                                     "data": {
                                      "label": "Circle Arrow 01a"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "Head up North Staircase",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB, this.camera_BFB3A928_C534_A934_41E0_624301F2A7A2); this.mainPlayList.set('selectedIndex', 18)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    },
                                    {
                                     "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_tcap0",
                                     "angle": 0,
                                     "class": "TripodCapPanoramaOverlay",
                                     "rotate": true,
                                     "inertia": false,
                                     "hfov": 45,
                                     "distance": 50,
                                     "image": {
                                      "levels": [
                                       {
                                        "width": 850,
                                        "height": 850,
                                        "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "pitch": 0,
                                   "mapLocations": [
                                    {
                                     "x": 980.5,
                                     "angle": 74.57,
                                     "y": 324.66,
                                     "class": "PanoramaMapLocation",
                                     "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_t.jpg",
                                   "partial": false,
                                   "frames": [
                                    {
                                     "class": "CubicPanoramaFrame",
                                     "stereoCube": {
                                      "levels": [
                                       {
                                        "width": 30720,
                                        "colCount": 60,
                                        "tags": "ondemand",
                                        "rowCount": 5,
                                        "height": 2560,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/0/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 18432,
                                        "colCount": 36,
                                        "tags": "ondemand",
                                        "rowCount": 3,
                                        "height": 1536,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/1/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 12288,
                                        "colCount": 24,
                                        "tags": "ondemand",
                                        "rowCount": 2,
                                        "height": 1024,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/2/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 6144,
                                        "colCount": 12,
                                        "tags": [
                                         "ondemand",
                                         "preload"
                                        ],
                                        "rowCount": 1,
                                        "height": 512,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/3/{row}_{column}.jpg"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_t.jpg"
                                    }
                                   ]
                                  },
                                  "backwardYaw": 162.98,
                                  "yaw": -60.93,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "hfovMax": 130,
                                "overlays": [
                                 {
                                  "id": "overlay_E26707FE_C5D4_D90C_41C7_D02D347E4F6D",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 37,
                                       "height": 16,
                                       "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_0_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 21.78,
                                    "yaw": -78.3,
                                    "pitch": -12.7,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 21.78,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1220,
                                       "height": 780,
                                       "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_0_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 50,
                                    "pitch": -12.7,
                                    "yaw": -78.3
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Arrow 01b Left-Up"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "Jump to Coffee Kiosk",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_B968F6D6_C534_DB1C_41C2_367E7C3E7FB3); this.mainPlayList.set('selectedIndex', 35)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "overlay_E38E4D16_C5D7_E91C_41E1_3EF9446C5F30",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 37,
                                       "height": 16,
                                       "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_1_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 21.38,
                                    "yaw": -60.93,
                                    "pitch": -12.61,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 21.38,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1220,
                                       "height": 780,
                                       "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_1_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 50,
                                    "pitch": -12.61,
                                    "yaw": -60.93
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Arrow 01b Right-Up"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "Jump to North Entrance",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_B960F6EF_C534_DB0C_41E0_C4EEF58CB94B); this.mainPlayList.set('selectedIndex', 10)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_tcap0",
                                  "angle": 0,
                                  "class": "TripodCapPanoramaOverlay",
                                  "rotate": true,
                                  "inertia": false,
                                  "hfov": 45,
                                  "distance": 50,
                                  "image": {
                                   "levels": [
                                    {
                                     "width": 850,
                                     "height": 850,
                                     "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "pitch": 0,
                                "mapLocations": [
                                 {
                                  "x": 904.64,
                                  "angle": 20.7,
                                  "y": 456.62,
                                  "class": "PanoramaMapLocation",
                                  "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                 }
                                ],
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_t.jpg",
                                "partial": false,
                                "frames": [
                                 {
                                  "class": "CubicPanoramaFrame",
                                  "stereoCube": {
                                   "levels": [
                                    {
                                     "width": 30720,
                                     "colCount": 60,
                                     "tags": "ondemand",
                                     "rowCount": 5,
                                     "height": 2560,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/0/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 18432,
                                     "colCount": 36,
                                     "tags": "ondemand",
                                     "rowCount": 3,
                                     "height": 1536,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/1/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 12288,
                                     "colCount": 24,
                                     "tags": "ondemand",
                                     "rowCount": 2,
                                     "height": 1024,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/2/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 6144,
                                     "colCount": 12,
                                     "tags": [
                                      "ondemand",
                                      "preload"
                                     ],
                                     "rowCount": 1,
                                     "height": 512,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/3/{row}_{column}.jpg"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_t.jpg"
                                 }
                                ]
                               },
                               "backwardYaw": -78.3,
                               "yaw": -25.79,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
                               "backwardYaw": -80.28,
                               "yaw": -161.64,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
                                "label": "PIC_2019_07_26_13_07_56_20190813103016",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07",
                                   "label": "PIC_2019_07_26_13_04_58_20190813103018",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
                                     "backwardYaw": -41.64,
                                     "yaw": -11.51,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "hfovMax": 130,
                                   "overlays": [
                                    {
                                     "id": "overlay_E47BAC2A_C5DC_AF34_4175_139F9A9ED1FE",
                                     "maps": [
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "width": 37,
                                          "height": 16,
                                          "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0_HS_0_0_0_map.gif",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "hfov": 23.16,
                                       "yaw": -11.51,
                                       "pitch": -17.71,
                                       "class": "HotspotPanoramaOverlayMap"
                                      }
                                     ],
                                     "rollOverDisplay": false,
                                     "class": "HotspotPanoramaOverlay",
                                     "items": [
                                      {
                                       "class": "HotspotPanoramaOverlayImage",
                                       "hfov": 23.16,
                                       "image": {
                                        "frameCount": 24,
                                        "frameDuration": 41,
                                        "levels": [
                                         {
                                          "width": 1220,
                                          "height": 780,
                                          "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0_HS_0_0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "AnimatedImageResource",
                                        "colCount": 4,
                                        "rowCount": 6
                                       },
                                       "distance": 100,
                                       "pitch": -17.71,
                                       "yaw": -11.51
                                      }
                                     ],
                                     "data": {
                                      "label": "Circle Arrow 01b"
                                     },
                                     "areas": [
                                      {
                                       "mapColor": "#FF0000",
                                       "toolTip": "Main Lobby",
                                       "class": "HotspotPanoramaOverlayArea",
                                       "displayTooltipInTouchScreens": true,
                                       "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_B8538431_C534_DF14_41C1_55712189E8AE); this.mainPlayList.set('selectedIndex', 5)"
                                      }
                                     ],
                                     "useHandCursor": true,
                                     "enabledInCardboard": true
                                    },
                                    {
                                     "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_tcap0",
                                     "angle": 0,
                                     "class": "TripodCapPanoramaOverlay",
                                     "rotate": true,
                                     "inertia": false,
                                     "hfov": 45,
                                     "distance": 50,
                                     "image": {
                                      "levels": [
                                       {
                                        "width": 850,
                                        "height": 850,
                                        "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "pitch": 0,
                                   "mapLocations": [
                                    {
                                     "x": 741.35,
                                     "angle": 140.08,
                                     "y": 590.17,
                                     "class": "PanoramaMapLocation",
                                     "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_t.jpg",
                                   "partial": false,
                                   "frames": [
                                    {
                                     "class": "CubicPanoramaFrame",
                                     "stereoCube": {
                                      "levels": [
                                       {
                                        "width": 30720,
                                        "colCount": 60,
                                        "tags": "ondemand",
                                        "rowCount": 5,
                                        "height": 2560,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/0/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 18432,
                                        "colCount": 36,
                                        "tags": "ondemand",
                                        "rowCount": 3,
                                        "height": 1536,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/1/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 12288,
                                        "colCount": 24,
                                        "tags": "ondemand",
                                        "rowCount": 2,
                                        "height": 1024,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/2/{row}_{column}.jpg"
                                       },
                                       {
                                        "width": 6144,
                                        "colCount": 12,
                                        "tags": [
                                         "ondemand",
                                         "preload"
                                        ],
                                        "rowCount": 1,
                                        "height": 512,
                                        "class": "TiledImageResourceLevel",
                                        "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/3/{row}_{column}.jpg"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_t.jpg"
                                    }
                                   ]
                                  },
                                  "backwardYaw": -11.51,
                                  "yaw": -41.64,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
                                  "backwardYaw": 89,
                                  "yaw": -3.44,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
                                  "backwardYaw": 177.18,
                                  "yaw": 155.81,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "hfovMax": 130,
                                "overlays": [
                                 {
                                  "id": "overlay_E0BA82D0_C5F3_DB14_41DF_FD2457E25DE9",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 37,
                                       "height": 16,
                                       "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_1_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 18.72,
                                    "yaw": -41.64,
                                    "pitch": -12.53,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 18.72,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1220,
                                       "height": 780,
                                       "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_1_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 50,
                                    "pitch": -12.53,
                                    "yaw": -41.64
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Arrow 01b Left-Up"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "Shared Building Meeting Room (1 of 3)",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07, this.camera_B97D169B_C534_DB14_41DE_B6F8E06B8292); this.mainPlayList.set('selectedIndex', 6)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "overlay_E0DAC8C9_C5FC_7774_41BE_CA759112717F",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 37,
                                       "height": 16,
                                       "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_2_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 18.2,
                                    "yaw": -3.44,
                                    "pitch": -11.51,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 18.2,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1220,
                                       "height": 780,
                                       "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_2_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 100,
                                    "pitch": -11.51,
                                    "yaw": -3.44
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Arrow 01b"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "Coffee Kiosk",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_B97A66AE_C534_DB0C_41E5_C7545FBCD40C); this.mainPlayList.set('selectedIndex', 35)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "overlay_E023939C_C5FC_590C_41B0_53B98B7CE40E",
                                  "maps": [
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "width": 37,
                                       "height": 16,
                                       "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_3_0_0_map.gif",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "hfov": 16.97,
                                    "yaw": 155.81,
                                    "pitch": -17.27,
                                    "class": "HotspotPanoramaOverlayMap"
                                   }
                                  ],
                                  "rollOverDisplay": false,
                                  "class": "HotspotPanoramaOverlay",
                                  "items": [
                                   {
                                    "class": "HotspotPanoramaOverlayImage",
                                    "hfov": 16.97,
                                    "image": {
                                     "frameCount": 24,
                                     "frameDuration": 41,
                                     "levels": [
                                      {
                                       "width": 1220,
                                       "height": 780,
                                       "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_3_0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "AnimatedImageResource",
                                     "colCount": 4,
                                     "rowCount": 6
                                    },
                                    "distance": 100,
                                    "pitch": -17.27,
                                    "yaw": 155.81
                                   }
                                  ],
                                  "data": {
                                   "label": "Circle Arrow 01b"
                                  },
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "toolTip": "Main Entrance",
                                    "class": "HotspotPanoramaOverlayArea",
                                    "displayTooltipInTouchScreens": true,
                                    "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_B97266C2_C534_DB74_41DE_101046696807); this.mainPlayList.set('selectedIndex', 1)"
                                   }
                                  ],
                                  "useHandCursor": true,
                                  "enabledInCardboard": true
                                 },
                                 {
                                  "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_tcap0",
                                  "angle": 0,
                                  "class": "TripodCapPanoramaOverlay",
                                  "rotate": true,
                                  "inertia": false,
                                  "hfov": 45,
                                  "distance": 50,
                                  "image": {
                                   "levels": [
                                    {
                                     "width": 850,
                                     "height": 850,
                                     "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "pitch": 0,
                                "mapLocations": [
                                 {
                                  "x": 787.45,
                                  "angle": 18.76,
                                  "y": 612.19,
                                  "class": "PanoramaMapLocation",
                                  "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                                 }
                                ],
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_t.jpg",
                                "partial": false,
                                "frames": [
                                 {
                                  "class": "CubicPanoramaFrame",
                                  "stereoCube": {
                                   "levels": [
                                    {
                                     "width": 30720,
                                     "colCount": 60,
                                     "tags": "ondemand",
                                     "rowCount": 5,
                                     "height": 2560,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/0/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 18432,
                                     "colCount": 36,
                                     "tags": "ondemand",
                                     "rowCount": 3,
                                     "height": 1536,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/1/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 12288,
                                     "colCount": 24,
                                     "tags": "ondemand",
                                     "rowCount": 2,
                                     "height": 1024,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/2/{row}_{column}.jpg"
                                    },
                                    {
                                     "width": 6144,
                                     "colCount": 12,
                                     "tags": [
                                      "ondemand",
                                      "preload"
                                     ],
                                     "rowCount": 1,
                                     "height": 512,
                                     "class": "TiledImageResourceLevel",
                                     "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/3/{row}_{column}.jpg"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_t.jpg"
                                 }
                                ]
                               },
                               "backwardYaw": -3.44,
                               "yaw": 89,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "hfovMax": 130,
                             "overlays": [
                              {
                               "id": "overlay_E15B9392_C5CD_B914_41D6_CAB9EC8C6109",
                               "maps": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 37,
                                    "height": 16,
                                    "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_0_0_0_map.gif",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "hfov": 19.87,
                                 "yaw": 89,
                                 "pitch": -13.83,
                                 "class": "HotspotPanoramaOverlayMap"
                                }
                               ],
                               "rollOverDisplay": false,
                               "class": "HotspotPanoramaOverlay",
                               "items": [
                                {
                                 "class": "HotspotPanoramaOverlayImage",
                                 "hfov": 19.87,
                                 "image": {
                                  "frameCount": 24,
                                  "frameDuration": 41,
                                  "levels": [
                                   {
                                    "width": 1220,
                                    "height": 780,
                                    "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_0_0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "AnimatedImageResource",
                                  "colCount": 4,
                                  "rowCount": 6
                                 },
                                 "distance": 100,
                                 "pitch": -13.83,
                                 "yaw": 89
                                }
                               ],
                               "data": {
                                "label": "Circle Arrow 01b"
                               },
                               "areas": [
                                {
                                 "mapColor": "#FF0000",
                                 "toolTip": "Main Lobby",
                                 "class": "HotspotPanoramaOverlayArea",
                                 "displayTooltipInTouchScreens": true,
                                 "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_B949373C_C534_D90C_41E0_45878FC44FB8); this.mainPlayList.set('selectedIndex', 5)"
                                }
                               ],
                               "useHandCursor": true,
                               "enabledInCardboard": true
                              },
                              {
                               "id": "overlay_E15C91A5_C5CC_593C_41D4_49A13336AF4D",
                               "maps": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 37,
                                    "height": 16,
                                    "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_1_0_0_map.gif",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "hfov": 20.33,
                                 "yaw": -161.64,
                                 "pitch": -16.67,
                                 "class": "HotspotPanoramaOverlayMap"
                                }
                               ],
                               "rollOverDisplay": false,
                               "class": "HotspotPanoramaOverlay",
                               "items": [
                                {
                                 "class": "HotspotPanoramaOverlayImage",
                                 "hfov": 20.33,
                                 "image": {
                                  "frameCount": 24,
                                  "frameDuration": 41,
                                  "levels": [
                                   {
                                    "width": 1220,
                                    "height": 780,
                                    "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_1_0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "AnimatedImageResource",
                                  "colCount": 4,
                                  "rowCount": 6
                                 },
                                 "distance": 50,
                                 "pitch": -16.67,
                                 "yaw": -161.64
                                }
                               ],
                               "data": {
                                "label": "Circle Arrow 01b Left-Up"
                               },
                               "areas": [
                                {
                                 "mapColor": "#FF0000",
                                 "toolTip": "Jump to Outdoor Lounge",
                                 "class": "HotspotPanoramaOverlayArea",
                                 "displayTooltipInTouchScreens": true,
                                 "click": "this.startPanoramaWithCamera(this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819, this.camera_B9512720_C534_D934_4194_6CD640C827F3); this.mainPlayList.set('selectedIndex', 8)"
                                }
                               ],
                               "useHandCursor": true,
                               "enabledInCardboard": true
                              },
                              {
                               "id": "overlay_E158F60A_C5CF_BAF4_41C4_E8E7A2A81B35",
                               "maps": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 37,
                                    "height": 16,
                                    "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_2_0_0_map.gif",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "hfov": 20.61,
                                 "yaw": -25.79,
                                 "pitch": -32.26,
                                 "class": "HotspotPanoramaOverlayMap"
                                }
                               ],
                               "rollOverDisplay": false,
                               "class": "HotspotPanoramaOverlay",
                               "items": [
                                {
                                 "class": "HotspotPanoramaOverlayImage",
                                 "hfov": 20.61,
                                 "image": {
                                  "frameCount": 24,
                                  "frameDuration": 41,
                                  "levels": [
                                   {
                                    "width": 1220,
                                    "height": 780,
                                    "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_2_0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "AnimatedImageResource",
                                  "colCount": 4,
                                  "rowCount": 6
                                 },
                                 "distance": 100,
                                 "pitch": -32.26,
                                 "yaw": -25.79
                                }
                               ],
                               "data": {
                                "label": "Circle Arrow 01b"
                               },
                               "areas": [
                                {
                                 "mapColor": "#FF0000",
                                 "toolTip": "Jump to Courtyard",
                                 "class": "HotspotPanoramaOverlayArea",
                                 "displayTooltipInTouchScreens": true,
                                 "click": "this.startPanoramaWithCamera(this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16, this.camera_B9589707_C534_DAFC_41E0_39EF47A277F5); this.mainPlayList.set('selectedIndex', 7)"
                                }
                               ],
                               "useHandCursor": true,
                               "enabledInCardboard": true
                              },
                              {
                               "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_tcap0",
                               "angle": 0,
                               "class": "TripodCapPanoramaOverlay",
                               "rotate": true,
                               "inertia": false,
                               "hfov": 45,
                               "distance": 50,
                               "image": {
                                "levels": [
                                 {
                                  "width": 850,
                                  "height": 850,
                                  "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "pitch": 0,
                             "mapLocations": [
                              {
                               "x": 792.28,
                               "angle": 90.46,
                               "y": 501.16,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                              }
                             ],
                             "class": "Panorama",
                             "hfov": 360,
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_t.jpg",
                             "partial": false,
                             "frames": [
                              {
                               "class": "CubicPanoramaFrame",
                               "stereoCube": {
                                "levels": [
                                 {
                                  "width": 30720,
                                  "colCount": 60,
                                  "tags": "ondemand",
                                  "rowCount": 5,
                                  "height": 2560,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/0/{row}_{column}.jpg"
                                 },
                                 {
                                  "width": 18432,
                                  "colCount": 36,
                                  "tags": "ondemand",
                                  "rowCount": 3,
                                  "height": 1536,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/1/{row}_{column}.jpg"
                                 },
                                 {
                                  "width": 12288,
                                  "colCount": 24,
                                  "tags": "ondemand",
                                  "rowCount": 2,
                                  "height": 1024,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/2/{row}_{column}.jpg"
                                 },
                                 {
                                  "width": 6144,
                                  "colCount": 12,
                                  "tags": [
                                   "ondemand",
                                   "preload"
                                  ],
                                  "rowCount": 1,
                                  "height": 512,
                                  "class": "TiledImageResourceLevel",
                                  "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/3/{row}_{column}.jpg"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_t.jpg"
                              }
                             ]
                            },
                            "backwardYaw": -161.64,
                            "yaw": -80.28,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "hfovMax": 130,
                          "overlays": [
                           {
                            "id": "overlay_E610FD14_C7F7_E91C_41B2_18D312A5996B",
                            "maps": [
                             {
                              "image": {
                               "levels": [
                                {
                                 "width": 37,
                                 "height": 16,
                                 "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_0_0_0_map.gif",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "hfov": 13.21,
                              "yaw": 27.89,
                              "pitch": -9.23,
                              "class": "HotspotPanoramaOverlayMap"
                             }
                            ],
                            "rollOverDisplay": false,
                            "class": "HotspotPanoramaOverlay",
                            "items": [
                             {
                              "class": "HotspotPanoramaOverlayImage",
                              "hfov": 13.21,
                              "image": {
                               "frameCount": 24,
                               "frameDuration": 41,
                               "levels": [
                                {
                                 "width": 1220,
                                 "height": 780,
                                 "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_0_0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "AnimatedImageResource",
                               "colCount": 4,
                               "rowCount": 6
                              },
                              "distance": 50,
                              "pitch": -9.23,
                              "yaw": 27.89
                             }
                            ],
                            "data": {
                             "label": "Circle Arrow 01b Right-Up"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "toolTip": "Jump to Main Entrance",
                              "class": "HotspotPanoramaOverlayArea",
                              "displayTooltipInTouchScreens": true,
                              "click": "this.startPanoramaWithCamera(this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD, this.camera_B8492445_C534_DF7C_4187_8E7F45785E9B); this.mainPlayList.set('selectedIndex', 0)"
                             }
                            ],
                            "useHandCursor": true,
                            "enabledInCardboard": true
                           },
                           {
                            "id": "overlay_E9D227A9_C7F4_5934_4191_7DF57E605884",
                            "maps": [
                             {
                              "image": {
                               "levels": [
                                {
                                 "width": 26,
                                 "height": 16,
                                 "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_1_0_0_map.gif",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "hfov": 12.35,
                              "yaw": -80.28,
                              "pitch": -4.43,
                              "class": "HotspotPanoramaOverlayMap"
                             }
                            ],
                            "rollOverDisplay": false,
                            "class": "HotspotPanoramaOverlay",
                            "items": [
                             {
                              "class": "HotspotPanoramaOverlayImage",
                              "hfov": 12.35,
                              "image": {
                               "frameCount": 24,
                               "frameDuration": 41,
                               "levels": [
                                {
                                 "width": 1220,
                                 "height": 1110,
                                 "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_1_0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "AnimatedImageResource",
                               "colCount": 4,
                               "rowCount": 6
                              },
                              "distance": 50,
                              "pitch": -4.43,
                              "yaw": -80.28
                             }
                            ],
                            "data": {
                             "label": "Circle Arrow 01a Right-Up"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "toolTip": "Jump to Coffee Kiosk",
                              "class": "HotspotPanoramaOverlayArea",
                              "displayTooltipInTouchScreens": true,
                              "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_B844A458_C534_DF14_41CB_D2495BE2633C); this.mainPlayList.set('selectedIndex', 35)"
                             }
                            ],
                            "useHandCursor": true,
                            "enabledInCardboard": true
                           },
                           {
                            "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_tcap0",
                            "angle": 0,
                            "class": "TripodCapPanoramaOverlay",
                            "rotate": true,
                            "inertia": false,
                            "hfov": 45,
                            "distance": 50,
                            "image": {
                             "levels": [
                              {
                               "width": 850,
                               "height": 850,
                               "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "x": 308.15,
                            "angle": 103.23,
                            "y": 542.36,
                            "class": "PanoramaMapLocation",
                            "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                           }
                          ],
                          "class": "Panorama",
                          "hfov": 360,
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_t.jpg",
                          "partial": false,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "stereoCube": {
                             "levels": [
                              {
                               "width": 30720,
                               "colCount": 60,
                               "tags": "ondemand",
                               "rowCount": 5,
                               "height": 2560,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/0/{row}_{column}.jpg"
                              },
                              {
                               "width": 18432,
                               "colCount": 36,
                               "tags": "ondemand",
                               "rowCount": 3,
                               "height": 1536,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/1/{row}_{column}.jpg"
                              },
                              {
                               "width": 12288,
                               "colCount": 24,
                               "tags": "ondemand",
                               "rowCount": 2,
                               "height": 1024,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/2/{row}_{column}.jpg"
                              },
                              {
                               "width": 6144,
                               "colCount": 12,
                               "tags": [
                                "ondemand",
                                "preload"
                               ],
                               "rowCount": 1,
                               "height": 512,
                               "class": "TiledImageResourceLevel",
                               "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/3/{row}_{column}.jpg"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_t.jpg"
                           }
                          ]
                         },
                         "backwardYaw": 27.89,
                         "yaw": 104.53,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
                         "backwardYaw": -60.26,
                         "yaw": 165.35,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "hfovMax": 130,
                       "overlays": [
                        {
                         "id": "overlay_A78C603F_BB33_B70C_41D1_992C2A832A0D",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 26,
                              "height": 16,
                              "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_1_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 18.79,
                           "yaw": 104.53,
                           "pitch": -6.79,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 18.79,
                           "image": {
                            "frameCount": 24,
                            "frameDuration": 41,
                            "levels": [
                             {
                              "width": 1220,
                              "height": 1110,
                              "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_1_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "AnimatedImageResource",
                            "colCount": 4,
                            "rowCount": 6
                           },
                           "distance": 50,
                           "pitch": -6.79,
                           "yaw": 104.53
                          }
                         ],
                         "data": {
                          "label": "Circle Arrow 01a Left-UP"
                         },
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "toolTip": "Jump to Outdoor Lounge",
                           "class": "HotspotPanoramaOverlayArea",
                           "displayTooltipInTouchScreens": true,
                           "click": "this.startPanoramaWithCamera(this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819, this.camera_BFCD09B8_C534_A914_41E5_2445E726FFB7); this.mainPlayList.set('selectedIndex', 8)"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        },
                        {
                         "id": "overlay_8EECC05D_DB53_D70C_41E7_B9BA69E1FC5B",
                         "maps": [
                          {
                           "image": {
                            "levels": [
                             {
                              "width": 16,
                              "height": 16,
                              "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_4_0_0_map.gif",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "hfov": 9.74,
                           "yaw": 165.35,
                           "pitch": 4.18,
                           "class": "HotspotPanoramaOverlayMap"
                          }
                         ],
                         "rollOverDisplay": false,
                         "class": "HotspotPanoramaOverlay",
                         "items": [
                          {
                           "class": "HotspotPanoramaOverlayImage",
                           "hfov": 9.74,
                           "image": {
                            "levels": [
                             {
                              "width": 208,
                              "height": 201,
                              "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_4_0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "distance": 50,
                           "pitch": 4.18,
                           "yaw": 165.35
                          }
                         ],
                         "data": {
                          "label": "Image"
                         },
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "toolTip": "Enter Main Entrance",
                           "class": "HotspotPanoramaOverlayArea",
                           "displayTooltipInTouchScreens": true,
                           "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_BFC289CA_C534_A974_41E4_CBC3CC0F3FED); this.mainPlayList.set('selectedIndex', 1)"
                          }
                         ],
                         "useHandCursor": true,
                         "enabledInCardboard": true
                        },
                        {
                         "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0",
                         "angle": 0,
                         "class": "TripodCapPanoramaOverlay",
                         "rotate": true,
                         "inertia": false,
                         "hfov": 45,
                         "distance": 50,
                         "image": {
                          "levels": [
                           {
                            "width": 850,
                            "height": 850,
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 758.21,
                         "angle": -148.99,
                         "y": 742.25,
                         "class": "PanoramaMapLocation",
                         "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                        }
                       ],
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_t.jpg",
                       "partial": false,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "stereoCube": {
                          "levels": [
                           {
                            "width": 30720,
                            "colCount": 60,
                            "tags": "ondemand",
                            "rowCount": 5,
                            "height": 2560,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/0/{row}_{column}.jpg"
                           },
                           {
                            "width": 18432,
                            "colCount": 36,
                            "tags": "ondemand",
                            "rowCount": 3,
                            "height": 1536,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/1/{row}_{column}.jpg"
                           },
                           {
                            "width": 12288,
                            "colCount": 24,
                            "tags": "ondemand",
                            "rowCount": 2,
                            "height": 1024,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/2/{row}_{column}.jpg"
                           },
                           {
                            "width": 6144,
                            "colCount": 12,
                            "tags": [
                             "ondemand",
                             "preload"
                            ],
                            "rowCount": 1,
                            "height": 512,
                            "class": "TiledImageResourceLevel",
                            "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/3/{row}_{column}.jpg"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_t.jpg"
                        }
                       ]
                      },
                      "backwardYaw": 165.35,
                      "yaw": -60.26,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
                      "backwardYaw": -39.97,
                      "yaw": 129.91,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
                      "backwardYaw": 155.81,
                      "yaw": 177.18,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "hfovMax": 130,
                    "overlays": [
                     {
                      "id": "overlay_A72C4631_BB53_BB14_41DB_74016C593F0A",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 37,
                           "height": 16,
                           "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_2_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 18.91,
                        "yaw": 129.91,
                        "pitch": 5.17,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 18.91,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1220,
                           "height": 780,
                           "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_2_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 100,
                        "pitch": 5.17,
                        "yaw": 129.91
                       }
                      ],
                      "data": {
                       "label": "Circle Arrow 01b"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "Main Staircase Landing",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A, this.camera_B9C135E2_C534_D934_41E9_FA3C44A40F62); this.mainPlayList.set('selectedIndex', 2)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "overlay_F1159DB4_DB77_A91C_41D1_9ED637865B45",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 30,
                           "height": 16,
                           "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_3_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 14.93,
                        "yaw": 177.18,
                        "pitch": -8.4,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 14.93,
                        "image": {
                         "frameCount": 24,
                         "frameDuration": 41,
                         "levels": [
                          {
                           "width": 1200,
                           "height": 930,
                           "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_3_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "AnimatedImageResource",
                         "colCount": 4,
                         "rowCount": 6
                        },
                        "distance": 100,
                        "pitch": -8.4,
                        "yaw": 177.18
                       }
                      ],
                      "data": {
                       "label": "Circle Point 02b"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "Main Lobby",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_B93925F9_C534_D914_41E7_BD934EFD017B); this.mainPlayList.set('selectedIndex', 5)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "overlay_8E9E27BA_DB55_B914_41E0_8510B76576EB",
                      "maps": [
                       {
                        "image": {
                         "levels": [
                          {
                           "width": 16,
                           "height": 16,
                           "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_5_0_0_map.gif",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "hfov": 11.48,
                        "yaw": -60.26,
                        "pitch": 0.48,
                        "class": "HotspotPanoramaOverlayMap"
                       }
                      ],
                      "rollOverDisplay": false,
                      "class": "HotspotPanoramaOverlay",
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "hfov": 11.48,
                        "image": {
                         "levels": [
                          {
                           "width": 244,
                           "height": 244,
                           "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_5_0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "distance": 50,
                        "pitch": 0.48,
                        "yaw": -60.26
                       }
                      ],
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "toolTip": "Exit Main Entrance",
                        "class": "HotspotPanoramaOverlayArea",
                        "displayTooltipInTouchScreens": true,
                        "click": "this.startPanoramaWithCamera(this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD, this.camera_B9C8C5CF_C534_D90C_4181_29771114CA8E); this.mainPlayList.set('selectedIndex', 0)"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true
                     },
                     {
                      "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_tcap0",
                      "angle": 0,
                      "class": "TripodCapPanoramaOverlay",
                      "rotate": true,
                      "inertia": false,
                      "hfov": 45,
                      "distance": 50,
                      "image": {
                       "levels": [
                        {
                         "width": 850,
                         "height": 850,
                         "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 781.49,
                      "angle": 206.26,
                      "y": 671.37,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                     }
                    ],
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_t.jpg",
                    "partial": false,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "stereoCube": {
                       "levels": [
                        {
                         "width": 30720,
                         "colCount": 60,
                         "tags": "ondemand",
                         "rowCount": 5,
                         "height": 2560,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/0/{row}_{column}.jpg"
                        },
                        {
                         "width": 18432,
                         "colCount": 36,
                         "tags": "ondemand",
                         "rowCount": 3,
                         "height": 1536,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/1/{row}_{column}.jpg"
                        },
                        {
                         "width": 12288,
                         "colCount": 24,
                         "tags": "ondemand",
                         "rowCount": 2,
                         "height": 1024,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/2/{row}_{column}.jpg"
                        },
                        {
                         "width": 6144,
                         "colCount": 12,
                         "tags": [
                          "ondemand",
                          "preload"
                         ],
                         "rowCount": 1,
                         "height": 512,
                         "class": "TiledImageResourceLevel",
                         "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/3/{row}_{column}.jpg"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_t.jpg"
                     }
                    ]
                   },
                   "backwardYaw": 129.91,
                   "yaw": -39.97,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMax": 130,
                 "overlays": [
                  {
                   "id": "overlay_DE0C8EF2_C5D3_AB14_41E0_7A476A034643",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 37,
                        "height": 16,
                        "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_2_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 20.69,
                     "yaw": -140.23,
                     "pitch": 14.67,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 20.69,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1220,
                        "height": 780,
                        "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_2_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 50,
                     "pitch": 14.67,
                     "yaw": -140.23
                    }
                   ],
                   "data": {
                    "label": "Circle Arrow 01b Left-Up"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Foyer",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_B9E2258A_C534_D9F4_41AA_F09B000375F4); this.mainPlayList.set('selectedIndex', 3)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "overlay_F1A1F414_DB4F_BF1C_41DD_6699285A7ECD",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 30,
                        "height": 16,
                        "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_3_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 13.78,
                     "yaw": -39.97,
                     "pitch": -23.31,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 13.78,
                     "image": {
                      "frameCount": 24,
                      "frameDuration": 41,
                      "levels": [
                       {
                        "width": 1200,
                        "height": 930,
                        "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_3_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "AnimatedImageResource",
                      "colCount": 4,
                      "rowCount": 6
                     },
                     "distance": 100,
                     "pitch": -23.31,
                     "yaw": -39.97
                    }
                   ],
                   "data": {
                    "label": "Circle Point 02b"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "Entrance",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_B9DA559E_C534_D90C_41BC_5ADB4418F5AD); this.mainPlayList.set('selectedIndex', 1)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_tcap0",
                   "angle": 0,
                   "class": "TripodCapPanoramaOverlay",
                   "rotate": true,
                   "inertia": false,
                   "hfov": 45,
                   "distance": 50,
                   "image": {
                    "levels": [
                     {
                      "width": 850,
                      "height": 850,
                      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 743.84,
                   "angle": 201.67,
                   "y": 648.78,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_t.jpg",
                 "partial": false,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "stereoCube": {
                    "levels": [
                     {
                      "width": 30720,
                      "colCount": 60,
                      "tags": "ondemand",
                      "rowCount": 5,
                      "height": 2560,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/0/{row}_{column}.jpg"
                     },
                     {
                      "width": 18432,
                      "colCount": 36,
                      "tags": "ondemand",
                      "rowCount": 3,
                      "height": 1536,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/1/{row}_{column}.jpg"
                     },
                     {
                      "width": 12288,
                      "colCount": 24,
                      "tags": "ondemand",
                      "rowCount": 2,
                      "height": 1024,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/2/{row}_{column}.jpg"
                     },
                     {
                      "width": 6144,
                      "colCount": 12,
                      "tags": [
                       "ondemand",
                       "preload"
                      ],
                      "rowCount": 1,
                      "height": 512,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/3/{row}_{column}.jpg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_t.jpg"
                  }
                 ]
                },
                "backwardYaw": -140.23,
                "yaw": 166.8,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88",
                 "label": "3d-13_15_06",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
                   "backwardYaw": -22,
                   "yaw": -26.59,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMax": 130,
                 "overlays": [
                  {
                   "id": "overlay_8E296643_DB5C_DB74_41E1_7878A960835E",
                   "maps": [
                    {
                     "image": {
                      "levels": [
                       {
                        "width": 16,
                        "height": 16,
                        "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0_HS_1_0_0_map.gif",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "hfov": 11.46,
                     "yaw": -26.59,
                     "pitch": 3.54,
                     "class": "HotspotPanoramaOverlayMap"
                    }
                   ],
                   "rollOverDisplay": false,
                   "class": "HotspotPanoramaOverlay",
                   "items": [
                    {
                     "class": "HotspotPanoramaOverlayImage",
                     "hfov": 11.46,
                     "image": {
                      "levels": [
                       {
                        "width": 244,
                        "height": 244,
                        "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0_HS_1_0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "distance": 50,
                     "pitch": 3.54,
                     "yaw": -26.59
                    }
                   ],
                   "data": {
                    "label": "Image"
                   },
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "toolTip": "2nd Floor Foyer",
                     "class": "HotspotPanoramaOverlayArea",
                     "displayTooltipInTouchScreens": true,
                     "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_BEA727BE_C534_D90C_41E9_41F59B36AE45); this.mainPlayList.set('selectedIndex', 3)"
                    }
                   ],
                   "useHandCursor": true,
                   "enabledInCardboard": true
                  },
                  {
                   "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_tcap0",
                   "angle": 0,
                   "class": "TripodCapPanoramaOverlay",
                   "rotate": true,
                   "inertia": false,
                   "hfov": 45,
                   "distance": 50,
                   "image": {
                    "levels": [
                     {
                      "width": 850,
                      "height": 850,
                      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 759.52,
                   "angle": -155.26,
                   "y": 1325.85,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_t.jpg",
                 "partial": false,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "stereoCube": {
                    "levels": [
                     {
                      "width": 30720,
                      "colCount": 60,
                      "tags": "ondemand",
                      "rowCount": 5,
                      "height": 2560,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/0/{row}_{column}.jpg"
                     },
                     {
                      "width": 18432,
                      "colCount": 36,
                      "tags": "ondemand",
                      "rowCount": 3,
                      "height": 1536,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/1/{row}_{column}.jpg"
                     },
                     {
                      "width": 12288,
                      "colCount": 24,
                      "tags": "ondemand",
                      "rowCount": 2,
                      "height": 1024,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/2/{row}_{column}.jpg"
                     },
                     {
                      "width": 6144,
                      "colCount": 12,
                      "tags": [
                       "ondemand",
                       "preload"
                      ],
                      "rowCount": 1,
                      "height": 512,
                      "class": "TiledImageResourceLevel",
                      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/3/{row}_{column}.jpg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_t.jpg"
                  }
                 ]
                },
                "backwardYaw": -26.59,
                "yaw": -22,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080",
                "backwardYaw": -47.04,
                "yaw": -91.63,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "hfovMax": 130,
              "overlays": [
               {
                "id": "overlay_E882BDFA_C7CC_A914_41DC_C0410EAD7A4A",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 37,
                     "height": 16,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_4_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 19.27,
                  "yaw": 21.79,
                  "pitch": -6.33,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 19.27,
                  "image": {
                   "frameCount": 24,
                   "frameDuration": 41,
                   "levels": [
                    {
                     "width": 1220,
                     "height": 780,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_4_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "AnimatedImageResource",
                   "colCount": 4,
                   "rowCount": 6
                  },
                  "distance": 50,
                  "pitch": -6.33,
                  "yaw": 21.79
                 }
                ],
                "data": {
                 "label": "Circle Arrow 01b Left-Up"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "CTM Hall Entrance",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171, this.camera_B9A8A4C7_C534_DF7C_41D3_54B8050081F5); this.mainPlayList.set('selectedIndex', 21)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "overlay_F1A8E335_DB55_B91C_41D4_7CD2755F4ECE",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 30,
                     "height": 16,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_5_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 9.61,
                  "yaw": 166.8,
                  "pitch": -35.87,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 9.61,
                  "image": {
                   "frameCount": 24,
                   "frameDuration": 41,
                   "levels": [
                    {
                     "width": 1200,
                     "height": 930,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_5_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "AnimatedImageResource",
                   "colCount": 4,
                   "rowCount": 6
                  },
                  "distance": 100,
                  "pitch": -35.87,
                  "yaw": 166.8
                 }
                ],
                "data": {
                 "label": "Circle Point 02b"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "Main Staircase Landing",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A, this.camera_B9A0F4D9_C534_DF14_41E0_0671B1B8FA7E); this.mainPlayList.set('selectedIndex', 2)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "overlay_F01DF6C1_DB54_7B74_41DF_57239795EA8F",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 16,
                     "height": 16,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_6_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 11.45,
                  "yaw": -22,
                  "pitch": 3.92,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 11.45,
                  "image": {
                   "levels": [
                    {
                     "width": 244,
                     "height": 244,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_6_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "distance": 50,
                  "pitch": 3.92,
                  "yaw": -22
                 }
                ],
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "Gym Entrance",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88, this.camera_B998C4ED_C534_DF0C_41D9_A653F4D85A92); this.mainPlayList.set('selectedIndex', 4)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "overlay_F05F8202_DB55_FAF4_41E0_20B535048178",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 16,
                     "height": 16,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_7_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 11.47,
                  "yaw": 38.45,
                  "pitch": 1.63,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 11.47,
                  "image": {
                   "levels": [
                    {
                     "width": 244,
                     "height": 244,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_7_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "distance": 50,
                  "pitch": 1.63,
                  "yaw": 38.45
                 }
                ],
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "Public Works North Wing",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C, this.camera_B9B204B0_C534_DF14_41E1_B873077A9427); this.mainPlayList.set('selectedIndex', 11)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "overlay_8F37E14C_DB5C_D90C_41E2_B08694E2A623",
                "maps": [
                 {
                  "image": {
                   "levels": [
                    {
                     "width": 16,
                     "height": 16,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_8_0_0_map.gif",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "hfov": 11.48,
                  "yaw": -91.63,
                  "pitch": 0.48,
                  "class": "HotspotPanoramaOverlayMap"
                 }
                ],
                "rollOverDisplay": false,
                "class": "HotspotPanoramaOverlay",
                "items": [
                 {
                  "class": "HotspotPanoramaOverlayImage",
                  "hfov": 11.48,
                  "image": {
                   "levels": [
                    {
                     "width": 244,
                     "height": 244,
                     "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_8_0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "distance": 50,
                  "pitch": 0.48,
                  "yaw": -91.63
                 }
                ],
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "toolTip": "Public Works South Wing Entrance",
                  "class": "HotspotPanoramaOverlayArea",
                  "displayTooltipInTouchScreens": true,
                  "click": "this.startPanoramaWithCamera(this.panorama_B76768D0_BB4D_F714_41E6_F60680726080, this.camera_B9914500_C534_DEF4_41D6_82A886BE1776); this.mainPlayList.set('selectedIndex', 28)"
                 }
                ],
                "useHandCursor": true,
                "enabledInCardboard": true
               },
               {
                "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_tcap0",
                "angle": 0,
                "class": "TripodCapPanoramaOverlay",
                "rotate": true,
                "inertia": false,
                "hfov": 45,
                "distance": 50,
                "image": {
                 "levels": [
                  {
                   "width": 850,
                   "height": 850,
                   "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "pitch": 0,
              "mapLocations": [
               {
                "x": 761.25,
                "angle": 27.83,
                "y": 1385.61,
                "class": "PanoramaMapLocation",
                "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
               }
              ],
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_t.jpg",
              "partial": false,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "stereoCube": {
                 "levels": [
                  {
                   "width": 30720,
                   "colCount": 60,
                   "tags": "ondemand",
                   "rowCount": 5,
                   "height": 2560,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/0/{row}_{column}.jpg"
                  },
                  {
                   "width": 18432,
                   "colCount": 36,
                   "tags": "ondemand",
                   "rowCount": 3,
                   "height": 1536,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/1/{row}_{column}.jpg"
                  },
                  {
                   "width": 12288,
                   "colCount": 24,
                   "tags": "ondemand",
                   "rowCount": 2,
                   "height": 1024,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/2/{row}_{column}.jpg"
                  },
                  {
                   "width": 6144,
                   "colCount": 12,
                   "tags": [
                    "ondemand",
                    "preload"
                   ],
                   "rowCount": 1,
                   "height": 512,
                   "class": "TiledImageResourceLevel",
                   "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/3/{row}_{column}.jpg"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_t.jpg"
               }
              ]
             },
             "backwardYaw": -91.63,
             "yaw": -47.04,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
             "backwardYaw": -98.21,
             "yaw": 150.59,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "hfovMax": 130,
           "overlays": [
            {
             "id": "overlay_FE908CF2_DD3C_AF14_41C5_F36416163C88",
             "maps": [
              {
               "image": {
                "levels": [
                 {
                  "width": 37,
                  "height": 16,
                  "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_0_0_0_map.gif",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "hfov": 23.01,
               "yaw": -47.04,
               "pitch": -25.17,
               "class": "HotspotPanoramaOverlayMap"
              }
             ],
             "rollOverDisplay": false,
             "class": "HotspotPanoramaOverlay",
             "items": [
              {
               "class": "HotspotPanoramaOverlayImage",
               "hfov": 23.01,
               "image": {
                "frameCount": 24,
                "frameDuration": 41,
                "levels": [
                 {
                  "width": 1220,
                  "height": 780,
                  "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_0_0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "AnimatedImageResource",
                "colCount": 4,
                "rowCount": 6
               },
               "distance": 100,
               "pitch": -25.17,
               "yaw": -47.04
              }
             ],
             "data": {
              "label": "Circle Arrow 01b"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "toolTip": "Foyer",
               "class": "HotspotPanoramaOverlayArea",
               "displayTooltipInTouchScreens": true,
               "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_BE6AB8D6_C534_D71C_41DC_41ECE0E49B9D); this.mainPlayList.set('selectedIndex', 3)"
              }
             ],
             "useHandCursor": true,
             "enabledInCardboard": true
            },
            {
             "id": "overlay_FF8B7DD4_DD3C_E91C_41DD_FDF28BC23C2C",
             "maps": [
              {
               "image": {
                "levels": [
                 {
                  "width": 37,
                  "height": 16,
                  "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_1_0_0_map.gif",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "hfov": 21.89,
               "yaw": 150.59,
               "pitch": -22.82,
               "class": "HotspotPanoramaOverlayMap"
              }
             ],
             "rollOverDisplay": false,
             "class": "HotspotPanoramaOverlay",
             "items": [
              {
               "class": "HotspotPanoramaOverlayImage",
               "hfov": 21.89,
               "image": {
                "frameCount": 24,
                "frameDuration": 41,
                "levels": [
                 {
                  "width": 1220,
                  "height": 780,
                  "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_1_0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "AnimatedImageResource",
                "colCount": 4,
                "rowCount": 6
               },
               "distance": 100,
               "pitch": -22.82,
               "yaw": 150.59
              }
             ],
             "data": {
              "label": "Circle Arrow 01b"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "toolTip": "2nd Floor Public Works South Wing",
               "class": "HotspotPanoramaOverlayArea",
               "displayTooltipInTouchScreens": true,
               "click": "this.startPanoramaWithCamera(this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF, this.camera_BE59B8EC_C534_D70C_41D0_E08693219E8F); this.mainPlayList.set('selectedIndex', 29)"
              }
             ],
             "useHandCursor": true,
             "enabledInCardboard": true
            },
            {
             "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080_tcap0",
             "angle": 0,
             "class": "TripodCapPanoramaOverlay",
             "rotate": true,
             "inertia": false,
             "hfov": 45,
             "distance": 50,
             "image": {
              "levels": [
               {
                "width": 850,
                "height": 850,
                "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "pitch": 0,
           "mapLocations": [
            {
             "x": 692.29,
             "angle": 118.19,
             "y": 1382.57,
             "class": "PanoramaMapLocation",
             "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
            }
           ],
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_t.jpg",
           "partial": false,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "stereoCube": {
              "levels": [
               {
                "width": 30720,
                "colCount": 60,
                "tags": "ondemand",
                "rowCount": 5,
                "height": 2560,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/0/{row}_{column}.jpg"
               },
               {
                "width": 18432,
                "colCount": 36,
                "tags": "ondemand",
                "rowCount": 3,
                "height": 1536,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/1/{row}_{column}.jpg"
               },
               {
                "width": 12288,
                "colCount": 24,
                "tags": "ondemand",
                "rowCount": 2,
                "height": 1024,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/2/{row}_{column}.jpg"
               },
               {
                "width": 6144,
                "colCount": 12,
                "tags": [
                 "ondemand",
                 "preload"
                ],
                "rowCount": 1,
                "height": 512,
                "class": "TiledImageResourceLevel",
                "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/3/{row}_{column}.jpg"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_t.jpg"
            }
           ]
          },
          "backwardYaw": 150.59,
          "yaw": -98.21,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "hfovMax": 130,
        "overlays": [
         {
          "id": "overlay_FF8997DC_DD3C_D90C_41E2_8D239539FB89",
          "maps": [
           {
            "image": {
             "levels": [
              {
               "width": 37,
               "height": 16,
               "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_0_0_0_map.gif",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "hfov": 22.25,
            "yaw": -98.21,
            "pitch": -26.24,
            "class": "HotspotPanoramaOverlayMap"
           }
          ],
          "rollOverDisplay": false,
          "class": "HotspotPanoramaOverlay",
          "items": [
           {
            "class": "HotspotPanoramaOverlayImage",
            "hfov": 22.25,
            "image": {
             "frameCount": 24,
             "frameDuration": 41,
             "levels": [
              {
               "width": 1220,
               "height": 780,
               "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_0_0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "AnimatedImageResource",
             "colCount": 4,
             "rowCount": 6
            },
            "distance": 100,
            "pitch": -26.24,
            "yaw": -98.21
           }
          ],
          "data": {
           "label": "Circle Arrow 01b"
          },
          "areas": [
           {
            "mapColor": "#FF0000",
            "toolTip": "2nd Floor Public Works South Wing",
            "class": "HotspotPanoramaOverlayArea",
            "displayTooltipInTouchScreens": true,
            "click": "this.startPanoramaWithCamera(this.panorama_B76768D0_BB4D_F714_41E6_F60680726080, this.camera_B91CA644_C534_DB7C_41B9_CB753F2FB9F9); this.mainPlayList.set('selectedIndex', 28)"
           }
          ],
          "useHandCursor": true,
          "enabledInCardboard": true
         },
         {
          "id": "overlay_FF0CD69D_DD34_DB0C_41E7_135D4B7B9070",
          "maps": [
           {
            "image": {
             "levels": [
              {
               "width": 37,
               "height": 16,
               "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_1_0_0_map.gif",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "hfov": 24.16,
            "yaw": 42.02,
            "pitch": -9,
            "class": "HotspotPanoramaOverlayMap"
           }
          ],
          "rollOverDisplay": false,
          "class": "HotspotPanoramaOverlay",
          "items": [
           {
            "class": "HotspotPanoramaOverlayImage",
            "hfov": 24.16,
            "image": {
             "frameCount": 24,
             "frameDuration": 41,
             "levels": [
              {
               "width": 1220,
               "height": 780,
               "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_1_0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "AnimatedImageResource",
             "colCount": 4,
             "rowCount": 6
            },
            "distance": 100,
            "pitch": -9,
            "yaw": 42.02
           }
          ],
          "data": {
           "label": "Circle Arrow 01b"
          },
          "areas": [
           {
            "mapColor": "#FF0000",
            "toolTip": "2nd Floor Public Works South Wing",
            "class": "HotspotPanoramaOverlayArea",
            "displayTooltipInTouchScreens": true,
            "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_B9267631_C534_DB14_41D4_481DAEDC4EE5); this.mainPlayList.set('selectedIndex', 30)"
           }
          ],
          "useHandCursor": true,
          "enabledInCardboard": true
         },
         {
          "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_tcap0",
          "angle": 0,
          "class": "TripodCapPanoramaOverlay",
          "rotate": true,
          "inertia": false,
          "hfov": 45,
          "distance": 50,
          "image": {
           "levels": [
            {
             "width": 850,
             "height": 850,
             "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "pitch": 0,
        "mapLocations": [
         {
          "x": 626.05,
          "angle": -155.78,
          "y": 1383.35,
          "class": "PanoramaMapLocation",
          "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
         }
        ],
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_t.jpg",
        "partial": false,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "stereoCube": {
           "levels": [
            {
             "width": 30720,
             "colCount": 60,
             "tags": "ondemand",
             "rowCount": 5,
             "height": 2560,
             "class": "TiledImageResourceLevel",
             "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/0/{row}_{column}.jpg"
            },
            {
             "width": 18432,
             "colCount": 36,
             "tags": "ondemand",
             "rowCount": 3,
             "height": 1536,
             "class": "TiledImageResourceLevel",
             "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/1/{row}_{column}.jpg"
            },
            {
             "width": 12288,
             "colCount": 24,
             "tags": "ondemand",
             "rowCount": 2,
             "height": 1024,
             "class": "TiledImageResourceLevel",
             "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/2/{row}_{column}.jpg"
            },
            {
             "width": 6144,
             "colCount": 12,
             "tags": [
              "ondemand",
              "preload"
             ],
             "rowCount": 1,
             "height": 512,
             "class": "TiledImageResourceLevel",
             "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/3/{row}_{column}.jpg"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
       "backwardYaw": 36.77,
       "yaw": -135.55,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
       "backwardYaw": -65.58,
       "yaw": -65.76,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "hfovMax": 130,
     "overlays": [
      {
       "id": "overlay_F7374049_DCD7_D774_41C8_6DC50A6B6F08",
       "maps": [
        {
         "image": {
          "levels": [
           {
            "width": 37,
            "height": 16,
            "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_0_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "hfov": 19.54,
         "yaw": -135.55,
         "pitch": -15.71,
         "class": "HotspotPanoramaOverlayMap"
        }
       ],
       "rollOverDisplay": false,
       "class": "HotspotPanoramaOverlay",
       "items": [
        {
         "class": "HotspotPanoramaOverlayImage",
         "hfov": 19.54,
         "image": {
          "frameCount": 24,
          "frameDuration": 41,
          "levels": [
           {
            "width": 1220,
            "height": 780,
            "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_0_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "AnimatedImageResource",
          "colCount": 4,
          "rowCount": 6
         },
         "distance": 100,
         "pitch": -15.71,
         "yaw": -135.55
        }
       ],
       "data": {
        "label": "Circle Arrow 01b"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "toolTip": "2nd Floor Public Works North Wing",
         "class": "HotspotPanoramaOverlayArea",
         "displayTooltipInTouchScreens": true,
         "click": "this.startPanoramaWithCamera(this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532, this.camera_B9895513_C534_D914_41E0_E55237C1B675); this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "useHandCursor": true,
       "enabledInCardboard": true
      },
      {
       "id": "overlay_F70B2EF3_DCD5_AB14_41D7_9E19EC513E31",
       "maps": [
        {
         "image": {
          "levels": [
           {
            "width": 37,
            "height": 16,
            "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_1_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "hfov": 19.85,
         "yaw": -65.76,
         "pitch": -7.23,
         "class": "HotspotPanoramaOverlayMap"
        }
       ],
       "rollOverDisplay": false,
       "class": "HotspotPanoramaOverlay",
       "items": [
        {
         "class": "HotspotPanoramaOverlayImage",
         "hfov": 19.85,
         "image": {
          "frameCount": 24,
          "frameDuration": 41,
          "levels": [
           {
            "width": 1220,
            "height": 780,
            "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_1_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "AnimatedImageResource",
          "colCount": 4,
          "rowCount": 6
         },
         "distance": 100,
         "pitch": -7.23,
         "yaw": -65.76
        }
       ],
       "data": {
        "label": "Circle Arrow 01b"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "toolTip": "Breakroom Kitchenette",
         "class": "HotspotPanoramaOverlayArea",
         "displayTooltipInTouchScreens": true,
         "click": "this.startPanoramaWithCamera(this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA, this.camera_B9871526_C534_D93C_41C3_A704C14DF706); this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "useHandCursor": true,
       "enabledInCardboard": true
      },
      {
       "id": "overlay_8965EAFF_DB34_6B0C_41E0_71785A11683F",
       "maps": [
        {
         "image": {
          "levels": [
           {
            "width": 30,
            "height": 16,
            "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_3_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "hfov": 14.85,
         "yaw": 19.32,
         "pitch": -5.29,
         "class": "HotspotPanoramaOverlayMap"
        }
       ],
       "rollOverDisplay": false,
       "class": "HotspotPanoramaOverlay",
       "items": [
        {
         "class": "HotspotPanoramaOverlayImage",
         "hfov": 14.85,
         "image": {
          "frameCount": 24,
          "frameDuration": 41,
          "levels": [
           {
            "width": 1200,
            "height": 930,
            "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_3_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "AnimatedImageResource",
          "colCount": 4,
          "rowCount": 6
         },
         "distance": 100,
         "pitch": -5.29,
         "yaw": 19.32
        }
       ],
       "data": {
        "label": "Circle Point 02b"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "toolTip": "2nd Floor Public Works North Wing",
         "class": "HotspotPanoramaOverlayArea",
         "displayTooltipInTouchScreens": true,
         "click": "this.mainPlayList.set('selectedIndex', 29)"
        }
       ],
       "useHandCursor": true,
       "enabledInCardboard": true
      },
      {
       "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_tcap0",
       "angle": 0,
       "class": "TripodCapPanoramaOverlay",
       "rotate": true,
       "inertia": false,
       "hfov": 45,
       "distance": 50,
       "image": {
        "levels": [
         {
          "width": 850,
          "height": 850,
          "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "pitch": 0,
     "mapLocations": [
      {
       "x": 1083.45,
       "angle": -59.11,
       "y": 1224.75,
       "class": "PanoramaMapLocation",
       "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
      }
     ],
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "thumbnailUrl": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_t.jpg",
     "partial": false,
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "stereoCube": {
        "levels": [
         {
          "width": 30720,
          "colCount": 60,
          "tags": "ondemand",
          "rowCount": 5,
          "height": 2560,
          "class": "TiledImageResourceLevel",
          "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/0/{row}_{column}.jpg"
         },
         {
          "width": 18432,
          "colCount": 36,
          "tags": "ondemand",
          "rowCount": 3,
          "height": 1536,
          "class": "TiledImageResourceLevel",
          "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/1/{row}_{column}.jpg"
         },
         {
          "width": 12288,
          "colCount": 24,
          "tags": "ondemand",
          "rowCount": 2,
          "height": 1024,
          "class": "TiledImageResourceLevel",
          "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/2/{row}_{column}.jpg"
         },
         {
          "width": 6144,
          "colCount": 12,
          "tags": [
           "ondemand",
           "preload"
          ],
          "rowCount": 1,
          "height": 512,
          "class": "TiledImageResourceLevel",
          "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/3/{row}_{column}.jpg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_t.jpg"
      }
     ]
    },
    "backwardYaw": -135.55,
    "yaw": 36.77,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
    "backwardYaw": 120.16,
    "yaw": -69.52,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "hfovMax": 130,
  "overlays": [
   {
    "id": "overlay_F6445E04_DCCC_EAFC_41BA_78BB478CEB52",
    "maps": [
     {
      "image": {
       "levels": [
        {
         "width": 37,
         "height": 16,
         "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "hfov": 21.29,
      "yaw": -69.52,
      "pitch": -6.77,
      "class": "HotspotPanoramaOverlayMap"
     }
    ],
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay",
    "items": [
     {
      "class": "HotspotPanoramaOverlayImage",
      "hfov": 21.29,
      "image": {
       "frameCount": 24,
       "frameDuration": 41,
       "levels": [
        {
         "width": 1220,
         "height": 780,
         "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "AnimatedImageResource",
       "colCount": 4,
       "rowCount": 6
      },
      "distance": 100,
      "pitch": -6.77,
      "yaw": -69.52
     }
    ],
    "data": {
     "label": "Circle Arrow 01b"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "toolTip": "2nd Floor Public Works North Wing",
      "class": "HotspotPanoramaOverlayArea",
      "displayTooltipInTouchScreens": true,
      "click": "this.startPanoramaWithCamera(this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856, this.camera_BEACB7A0_C534_D934_41E0_FE416BFBD331); this.mainPlayList.set('selectedIndex', 13)"
     }
    ],
    "useHandCursor": true,
    "enabledInCardboard": true
   },
   {
    "id": "overlay_8B2F4EBE_DB4C_AB0C_41D8_07ADF5B89A0D",
    "maps": [
     {
      "image": {
       "levels": [
        {
         "width": 30,
         "height": 16,
         "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "hfov": 14.46,
      "yaw": 36.77,
      "pitch": -4.42,
      "class": "HotspotPanoramaOverlayMap"
     }
    ],
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay",
    "items": [
     {
      "class": "HotspotPanoramaOverlayImage",
      "hfov": 14.46,
      "image": {
       "frameCount": 24,
       "frameDuration": 41,
       "levels": [
        {
         "width": 1200,
         "height": 930,
         "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "AnimatedImageResource",
       "colCount": 4,
       "rowCount": 6
      },
      "distance": 100,
      "pitch": -4.42,
      "yaw": 36.77
     }
    ],
    "data": {
     "label": "Circle Point 02b"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "toolTip": "2nd Floor Public Works North Wing",
      "class": "HotspotPanoramaOverlayArea",
      "displayTooltipInTouchScreens": true,
      "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_BEB4C788_C534_D9F4_41EB_226F3A52A5C8); this.mainPlayList.set('selectedIndex', 17)"
     }
    ],
    "useHandCursor": true,
    "enabledInCardboard": true
   },
   {
    "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_tcap0",
    "angle": 0,
    "class": "TripodCapPanoramaOverlay",
    "rotate": true,
    "inertia": false,
    "hfov": 45,
    "distance": 50,
    "image": {
     "levels": [
      {
       "width": 850,
       "height": 850,
       "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "pitch": 0,
  "mapLocations": [
   {
    "x": 1096.39,
    "angle": -64.02,
    "y": 1329.67,
    "class": "PanoramaMapLocation",
    "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
   }
  ],
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "stereoCube": {
     "levels": [
      {
       "width": 30720,
       "colCount": 60,
       "tags": "ondemand",
       "rowCount": 5,
       "height": 2560,
       "class": "TiledImageResourceLevel",
       "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/0/{row}_{column}.jpg"
      },
      {
       "width": 18432,
       "colCount": 36,
       "tags": "ondemand",
       "rowCount": 3,
       "height": 1536,
       "class": "TiledImageResourceLevel",
       "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/1/{row}_{column}.jpg"
      },
      {
       "width": 12288,
       "colCount": 24,
       "tags": "ondemand",
       "rowCount": 2,
       "height": 1024,
       "class": "TiledImageResourceLevel",
       "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/2/{row}_{column}.jpg"
      },
      {
       "width": 6144,
       "colCount": 12,
       "tags": [
        "ondemand",
        "preload"
       ],
       "rowCount": 1,
       "height": 512,
       "class": "TiledImageResourceLevel",
       "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/3/{row}_{column}.jpg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_t.jpg"
   }
  ]
 },
 {
  "id": "camera_B97A66AE_C534_DB0C_41E5_C7545FBCD40C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -91,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
 {
  "id": "camera_B9C8C5CF_C534_D90C_4181_29771114CA8E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -14.65,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
 "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
 {
  "id": "camera_BEACB7A0_C534_D934_41E0_FE416BFBD331",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -59.84,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9EDB563_C534_D934_41E7_CA35755E731C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -86.01,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B914A657_C534_DB1C_41E2_DF0849BFBAB6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -158.21,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BF112A0A_C534_AAF5_41C5_33140A77FF53",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 114.24,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 144.96,
   "pitch": -12.99,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 133.83,
   "pitch": -1.08,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BEE4A824_C534_D73C_41E1_3EF287EBC44E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -117.42,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE7428C2_C534_D774_41E6_3D0BB1100A2F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 101.54,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
 {
  "id": "camera_B9E5B577_C534_D91C_41E0_BF9A1CC9013B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -70.21,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 150.76,
   "pitch": 16.51,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
 {
  "id": "camera_BF2089F5_C534_A91C_41DC_909C5C6010AE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 164.26,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFC289CA_C534_A974_41E4_CBC3CC0F3FED",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 119.74,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 62.09,
   "pitch": -4.34,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE6AB8D6_C534_D71C_41DC_41ECE0E49B9D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 88.37,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": {
   "minHeight": 1,
   "left": "1.25%",
   "minWidth": 1,
   "borderRadius": 0,
   "paddingLeft": 0,
   "transparencyActive": false,
   "paddingTop": 0,
   "width": 42,
   "id": "IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2",
   "mode": "push",
   "height": 43,
   "iconURL": "skin/IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2.png",
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "paddingBottom": 0,
   "maxWidth": 42,
   "maxHeight": 43,
   "verticalAlign": "middle",
   "class": "IconButton",
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton13821"
   },
   "bottom": "7.57%",
   "borderSize": 0,
   "propagateClick": false,
   "cursor": "hand",
   "shadow": false
  },
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": {
   "propagateClick": false,
   "minHeight": 50,
   "left": 0,
   "toolTipFontColor": "#606060",
   "toolTipBorderColor": "#767676",
   "progressBottom": 0,
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBackgroundColorDirection": "vertical",
   "minWidth": 100,
   "toolTipShadowSpread": 0,
   "progressHeight": 10,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarBottom": 5,
   "playbackBarProgressBorderSize": 0,
   "paddingLeft": 15,
   "progressBorderColor": "#000000",
   "toolTipTextShadowColor": "#000000",
   "paddingTop": 15,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipFontSize": "1.5vmin",
   "paddingBottom": 15,
   "playbackBarProgressOpacity": 1,
   "toolTipFontWeight": "bold",
   "progressLeft": 0,
   "playbackBarBorderSize": 0,
   "playbackBarHeight": 10,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "transitionMode": "blending",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "shadow": false,
   "playbackBarRight": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "progressRight": 0,
   "top": 0,
   "progressOpacity": 1,
   "toolTipPaddingBottom": 4,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "progressBarBorderSize": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "toolTipOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarOpacity": 1,
   "progressBarOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipShadowColor": "#333333",
   "toolTipFontStyle": "normal",
   "playbackBarHeadBorderRadius": 0,
   "transitionDuration": 500,
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipDisplayTime": 600,
   "playbackBarLeft": 0,
   "progressBorderSize": 0,
   "playbackBarHeadHeight": 15,
   "id": "MainViewer",
   "playbackBarHeadBorderSize": 0,
   "width": "70%",
   "height": "100%",
   "progressBorderRadius": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadBorderColor": "#000000",
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "class": "ViewerArea",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipBorderSize": 1,
   "displayTooltipInTouchScreens": true,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "data": {
    "name": "Main Viewer"
   },
   "borderSize": 0,
   "toolTipPaddingTop": 4,
   "firstTransitionDuration": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ]
  },
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "camera_BEBE2771_C534_D914_41DE_33A7C4DB9D42",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -166.87,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
 {
  "id": "camera_BE10A899_C534_D714_41D2_DC5FA528D8D9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -22.1,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814",
 {
  "id": "camera_B9914500_C534_DEF4_41D6_82A886BE1776",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 132.96,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B8492445_C534_DF7C_4187_8E7F45785E9B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -75.47,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 149.37,
   "pitch": 4.29,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9871526_C534_D93C_41C3_A704C14DF706",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 114.42,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9267631_C534_DB14_41D4_481DAEDC4EE5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 35.11,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFB3A928_C534_A934_41E0_624301F2A7A2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -91.47,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE239887_C534_D7FC_41E0_D98C6E633E06",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 90.59,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
 {
  "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 109.78,
   "pitch": -2.16,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B86183D8_C534_D914_41D2_35163F8160DE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -32.17,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFF8F97B_C534_A914_41AE_0901DBE38F36",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -75.57,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -149.16,
   "pitch": -6.33,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
 {
  "id": "camera_B844A458_C534_DF14_41CB_D2495BE2633C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 18.36,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
 {
  "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -29.45,
   "pitch": 2.09,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9B56499_C534_DF14_41C1_3582A23AF2D1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -119.47,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFE96990_C534_A914_41E8_8BFD290673EF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 59.19,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
 {
  "id": "playList_B87D235D_C534_D90C_41E4_ABF10F0BB1C6",
  "items": [
   {
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": {
     "id": "MapViewerMapPlayer",
     "viewerArea": {
      "propagateClick": false,
      "minHeight": 1,
      "left": "0%",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "toolTipPaddingRight": 6,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBackgroundColorDirection": "vertical",
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "progressHeight": 10,
      "toolTipTextShadowOpacity": 0,
      "toolTipTextShadowBlurRadius": 3,
      "borderRadius": 0,
      "playbackBarBottom": 0,
      "playbackBarProgressBorderSize": 0,
      "paddingLeft": 0,
      "progressBorderColor": "#000000",
      "toolTipTextShadowColor": "#000000",
      "paddingTop": 0,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontSize": "1.5vmin",
      "paddingBottom": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipFontWeight": "bold",
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "transitionMode": "blending",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "shadow": false,
      "playbackBarRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipBackgroundColor": "#F6F6F6",
      "progressRight": 0,
      "top": 0,
      "progressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "progressBarBorderSize": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadow": true,
      "toolTipOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarOpacity": 1,
      "progressBarOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipFontStyle": "normal",
      "playbackBarHeadBorderRadius": 0,
      "transitionDuration": 500,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipDisplayTime": 600,
      "playbackBarLeft": 0,
      "progressBorderSize": 0,
      "playbackBarHeadHeight": 15,
      "id": "MapViewer",
      "playbackBarHeadBorderSize": 0,
      "width": "100%",
      "height": "80%",
      "progressBorderRadius": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadBorderColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "displayTooltipInTouchScreens": true,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "data": {
       "name": "MapViewer"
      },
      "borderSize": 0,
      "toolTipPaddingTop": 4,
      "firstTransitionDuration": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ]
     },
     "movementMode": "constrained",
     "class": "MapPlayer"
    },
    "media": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "camera_BEA727BE_C534_D90C_41E9_41F59B36AE45",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 158,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE8347FF_C534_D90C_41E1_0B681E45CA95",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 34.27,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080",
 {
  "id": "camera_BECB184D_C534_D70C_41D3_F6BE0AA1793D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 70.86,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
 "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
 {
  "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 73.21,
   "pitch": -2.06,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFBD4914_C534_A91C_41C8_CC72726CF9A0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 110.48,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9BEE485_C534_DFFC_41E4_770A38C7445B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -29.2,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B931260C_C534_DB0C_41E8_1C9506C68011",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 159.64,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
 {
  "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 154.78,
   "pitch": -10.4,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9050683_C534_DBF4_41D2_0132154B5DEE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 147.67,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9A0F4D9_C534_DF14_41E0_0671B1B8FA7E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 39.77,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 154.91,
   "pitch": -1.98,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -137.86,
   "pitch": 4.69,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B97266C2_C534_DB74_41DE_101046696807",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -2.82,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
 {
  "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -14.26,
   "pitch": 5.1,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 150.44,
   "pitch": -9.52,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
 {
  "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -29.43,
   "pitch": 1.76,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9DA559E_C534_D90C_41BC_5ADB4418F5AD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -50.09,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
 {
  "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 151.4,
   "pitch": -7.36,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 155.79,
   "pitch": -11.56,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
 {
  "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 74.96,
   "pitch": -2.68,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_B87D535D_C534_D90C_41E4_6668254A42C4",
  "items": [
   {
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "camera_B9D0A5B7_C534_D91C_41E3_AADCDEB0DDE1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -71.31,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B968F6D6_C534_DB1C_41C2_367E7C3E7FB3",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 154.21,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B86503C6_C534_D97C_41E0_447AEF675856",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -145.61,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 60.97,
   "pitch": -6.01,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 53.82,
   "pitch": 1.48,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B92FC61F_C534_DB0C_41E8_112CE5818608",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -147.75,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
 {
  "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 153.57,
   "pitch": 0.33,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE9EF7D5_C534_D91C_41A8_04B3367353C6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 152.29,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.MapViewerMapPlayer",
 {
  "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 164.35,
   "pitch": 2.33,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BED56837_C534_D71C_41C6_57C22AC58B9B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -137.98,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9895513_C534_D914_41E0_E55237C1B675",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -143.23,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
 {
  "id": "camera_B9466756_C534_D91C_41C7_5636EE6241F8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -44.97,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE4E3900_C534_D6F4_41BA_D0001C7D2BE2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -9.02,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B840C46E_C534_DF0C_41D7_9372D3B7F1B6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -158.54,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 154.71,
   "pitch": 3.64,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFA0293C_C534_A90C_41DE_D47FD672E7E7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 119.07,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -124.97,
   "pitch": -5.9,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B97D169B_C534_DB14_41DE_B6F8E06B8292",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 168.49,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE8C07EC_C534_D90C_41C5_1E59E45794D9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -142.03,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265",
 "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07",
 {
  "id": "camera_B91CA644_C534_DB7C_41B9_CB753F2FB9F9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -29.41,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9F5B550_C534_D914_41D8_34BDC4F7A85A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -21.74,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9E2258A_C534_D9F4_41AA_F09B000375F4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -13.2,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7",
 {
  "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 68.02,
   "pitch": 0.29,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B960F6EF_C534_DB0C_41E0_C4EEF58CB94B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -17.02,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9A8A4C7_C534_DF7C_41D3_54B8050081F5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -31.75,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9512720_C534_D934_4194_6CD640C827F3",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 99.72,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B8538431_C534_DF14_41C1_55712189E8AE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 138.36,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88",
 {
  "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 155.97,
   "pitch": -6.93,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFDC59A4_C534_A93C_41D4_92A2F615CAC8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -124.96,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9C135E2_C534_D934_41E9_FA3C44A40F62",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 140.03,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -31.62,
   "pitch": 1.74,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 54.59,
   "pitch": -0.3,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 56.55,
   "pitch": 2.66,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BF64CA44_C534_AB7C_41B3_53F0959593BA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 64.75,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BFCD09B8_C534_A914_41E5_2445E726FFB7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -152.11,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
 {
  "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 154.9,
   "pitch": -0.57,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
 {
  "id": "camera_B8583404_C534_DEFC_41BF_AF46BB322908",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 128.21,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE59B8EC_C534_D70C_41D0_E08693219E8F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 81.79,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
 {
  "id": "camera_BE0788AF_C534_D70C_4184_918F1D04DB64",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 147.76,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
 {
  "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -145.45,
   "pitch": -7,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B949373C_C534_D90C_41E0_45878FC44FB8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 176.56,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 84.41,
   "pitch": -9.36,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B9FF1539_C534_D914_41C2_4E5E40AF5840",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 16.42,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
 {
  "id": "camera_B998C4ED_C534_DF0C_41D9_A653F4D85A92",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 153.41,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF",
 {
  "id": "camera_B93925F9_C534_D914_41E7_BD934EFD017B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -24.19,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2",
 "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
 "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
 {
  "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -26.21,
   "pitch": -8.31,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BF748A31_C534_AB14_41DD_8943E9240BED",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -27.15,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_B87D935E_C534_D90C_41E9_7EC3E47FC63C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87D935E_C534_D90C_41E9_7EC3E47FC63C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_camera",
    "media": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD"
   },
   {
    "id": "PanoramaPlayListItem_B87C035F_C534_D90C_41E3_CA3792098338",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87C035F_C534_D90C_41E3_CA3792098338, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_camera",
    "media": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570"
   },
   {
    "id": "PanoramaPlayListItem_B87CC35F_C534_D90C_41CB_49D4DAA13C38",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87CC35F_C534_D90C_41CB_49D4DAA13C38, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_camera",
    "media": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A"
   },
   {
    "id": "PanoramaPlayListItem_B87C9360_C534_D934_41E5_01CD9F290B69",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87C9360_C534_D934_41E5_01CD9F290B69, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_camera",
    "media": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5"
   },
   {
    "id": "PanoramaPlayListItem_B87F2361_C534_D934_41B6_0E48B0CE1373",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87F2361_C534_D934_41B6_0E48B0CE1373, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_camera",
    "media": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88"
   },
   {
    "id": "PanoramaPlayListItem_B87FF361_C534_D934_41E8_D99DFE31FC25",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87FF361_C534_D934_41E8_D99DFE31FC25, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_camera",
    "media": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91"
   },
   {
    "id": "PanoramaPlayListItem_B87F8362_C534_D934_41C7_F163FB28110A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87F8362_C534_D934_41C7_F163FB28110A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": {
     "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_camera",
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "initialPosition": {
      "yaw": -29.99,
      "pitch": -6.7,
      "class": "PanoramaCameraPosition"
     },
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera"
    },
    "media": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07"
   },
   {
    "id": "PanoramaPlayListItem_B87E5363_C534_D934_41B6_880C6A10D481",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87E5363_C534_D934_41B6_880C6A10D481, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_camera",
    "media": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16"
   },
   {
    "id": "PanoramaPlayListItem_B87EE364_C534_D93C_41E3_B2D6E461485C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87EE364_C534_D93C_41E3_B2D6E461485C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_camera",
    "media": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819"
   },
   {
    "id": "PanoramaPlayListItem_B87EB364_C534_D93C_41D2_5233C3D43403",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87EB364_C534_D93C_41D2_5233C3D43403, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_camera",
    "media": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2"
   },
   {
    "id": "PanoramaPlayListItem_B8794365_C534_D93C_41E6_546DBAD61707",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8794365_C534_D93C_41E6_546DBAD61707, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_camera",
    "media": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3"
   },
   {
    "id": "PanoramaPlayListItem_B8791366_C534_D93C_41B8_CA79A1FF1A75",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8791366_C534_D93C_41B8_CA79A1FF1A75, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_camera",
    "media": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C"
   },
   {
    "id": "PanoramaPlayListItem_B879A366_C534_D93C_41AA_602ED9D231A0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B879A366_C534_D93C_41AA_602ED9D231A0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_camera",
    "media": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67"
   },
   {
    "id": "PanoramaPlayListItem_B8787367_C534_D93C_41D5_590439729710",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8787367_C534_D93C_41D5_590439729710, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_camera",
    "media": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856"
   },
   {
    "id": "PanoramaPlayListItem_B8783368_C534_D934_41DA_71916F7347E4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8783368_C534_D934_41DA_71916F7347E4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_camera",
    "media": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532"
   },
   {
    "id": "PanoramaPlayListItem_B878C368_C534_D934_41E8_5543DAEDDD50",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B878C368_C534_D934_41E8_5543DAEDDD50, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_camera",
    "media": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA"
   },
   {
    "id": "PanoramaPlayListItem_B8788369_C534_D934_41E0_2702AEAAC779",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8788369_C534_D934_41E0_2702AEAAC779, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_camera",
    "media": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A"
   },
   {
    "id": "PanoramaPlayListItem_B87B5369_C534_D934_41EB_4D9CDCFF9871",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87B5369_C534_D934_41EB_4D9CDCFF9871, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_camera",
    "media": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB"
   },
   {
    "id": "PanoramaPlayListItem_B87BE36A_C534_D934_41EA_153FB26629C7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87BE36A_C534_D934_41EA_153FB26629C7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_camera",
    "media": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB"
   },
   {
    "id": "PanoramaPlayListItem_B87B836B_C534_D934_41D5_76CA7CF7F2C0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87B836B_C534_D934_41D5_76CA7CF7F2C0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_camera",
    "media": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464"
   },
   {
    "id": "PanoramaPlayListItem_B87A536C_C534_D90C_41E5_A91D74C3583A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87A536C_C534_D90C_41E5_A91D74C3583A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_camera",
    "media": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C"
   },
   {
    "id": "PanoramaPlayListItem_B87AE36C_C534_D90C_41E5_52EC6308E8CD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87AE36C_C534_D90C_41E5_52EC6308E8CD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_camera",
    "media": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171"
   },
   {
    "id": "PanoramaPlayListItem_B87B336D_C534_D90C_41E2_D43BE1EDA9BC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87B336D_C534_D90C_41E2_D43BE1EDA9BC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_camera",
    "media": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383"
   },
   {
    "id": "PanoramaPlayListItem_B87BF36E_C534_D90C_41E3_2FB65CE7E57D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87BF36E_C534_D90C_41E3_2FB65CE7E57D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_camera",
    "media": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F"
   },
   {
    "id": "PanoramaPlayListItem_B87B936E_C534_D90D_41D2_93D1D0C7DEFB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87B936E_C534_D90D_41D2_93D1D0C7DEFB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "camera": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_camera",
    "media": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237"
   },
   {
    "id": "PanoramaPlayListItem_B87A236F_C534_D90C_41D2_95DD3F7FC54F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87A236F_C534_D90C_41D2_95DD3F7FC54F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "camera": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_camera",
    "media": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB"
   },
   {
    "id": "PanoramaPlayListItem_B87AF370_C534_D914_41E1_994E63B52594",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87AF370_C534_D914_41E1_994E63B52594, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "camera": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_camera",
    "media": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F"
   },
   {
    "id": "PanoramaPlayListItem_B87A8371_C534_D914_41BE_63F4F82BC35A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B87A8371_C534_D914_41BE_63F4F82BC35A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "camera": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_camera",
    "media": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E"
   },
   {
    "id": "PanoramaPlayListItem_B8755372_C534_D914_41CD_A543410E2EB7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8755372_C534_D914_41CD_A543410E2EB7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "camera": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080_camera",
    "media": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080"
   },
   {
    "id": "PanoramaPlayListItem_B875E372_C534_D914_41E2_F9C57BB7D35C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B875E372_C534_D914_41E2_F9C57BB7D35C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "camera": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_camera",
    "media": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF"
   },
   {
    "id": "PanoramaPlayListItem_B875B373_C534_D914_41E1_36177930DB23",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B875B373_C534_D914_41E1_36177930DB23, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "camera": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_camera",
    "media": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1"
   },
   {
    "id": "PanoramaPlayListItem_B8744374_C534_D91C_41D4_A742A2D816A6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8744374_C534_D91C_41D4_A742A2D816A6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "camera": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_camera",
    "media": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D"
   },
   {
    "id": "PanoramaPlayListItem_B8741374_C534_D91C_41EA_81A6B7668B6C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8741374_C534_D91C_41EA_81A6B7668B6C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "camera": {
     "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814_camera",
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false,
      "movements": [
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "initialPosition": {
      "yaw": 64.49,
      "pitch": -1.06,
      "class": "PanoramaCameraPosition"
     },
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera"
    },
    "media": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814"
   },
   {
    "id": "PanoramaPlayListItem_B874A375_C534_D91C_41DE_79855310B654",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B874A375_C534_D91C_41DE_79855310B654, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "camera": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_camera",
    "media": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265"
   },
   {
    "id": "PanoramaPlayListItem_B8777376_C534_D91C_41CE_0D1C0C800D32",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8777376_C534_D91C_41CE_0D1C0C800D32, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35)",
    "camera": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_camera",
    "media": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7"
   },
   {
    "id": "PanoramaPlayListItem_B8770377_C534_D91C_41C9_00C35596C55B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8770377_C534_D91C_41C9_00C35596C55B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 0)",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_camera",
    "media": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "camera_B9B204B0_C534_DF14_41E1_B873077A9427",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 154.3,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BF85E966_C534_A93C_41CB_A7B5A8A08833",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 148.82,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE2F0873_C534_D714_41D4_2902CE57C4F4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -91.05,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BEF1B811_C534_D714_41B2_EF749B536B67",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -83.35,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B857B41A_C534_DF14_41DF_AC798189D809",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -141.55,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BE3EC860_C534_D734_41E8_5EEAFC30A7D1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -171.63,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
 {
  "id": "camera_B85CD3ED_C534_D90C_4191_9D790A31C6A4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 76.01,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BF06BA1D_C534_AB0C_41D3_9D36C46CB228",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 95.96,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
 "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814_camera",
 {
  "id": "camera_BF3089E1_C534_A934_41E8_D40272B66123",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 159.99,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_camera",
 {
  "id": "camera_BEB4C788_C534_D9F4_41EB_226F3A52A5C8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 44.45,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "minHeight": 1,
  "left": "0%",
  "tabsRollOverFontColor": "#000000",
  "selectedTabFontStyle": "normal",
  "minWidth": 1,
  "borderRadius": 2,
  "tabsTextDecoration": "none",
  "paddingLeft": 0,
  "shadowVerticalLength": 0,
  "paddingTop": 0,
  "tabsRollOverBackgroundOpacity": 0.78,
  "shadowSpread": 1,
  "pagePaddingLeft": 0,
  "pagePaddingBottom": 0,
  "tabsFontWeight": "bold",
  "tabsBackgroundOpacity": 0.65,
  "tabsFontColor": "#333333",
  "selectedTabBackgroundColorRatios": [
   0
  ],
  "selectedTabFontSize": "14px",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "pagePaddingRight": 0,
  "tabsRollOverBackgroundColor": [
   "#FFFFFF"
  ],
  "tabsRollOverBackgroundColorRatios": [
   1
  ],
  "selectedTabFontWeight": "bold",
  "shadow": true,
  "tabsRollOverFontWeight": "bold",
  "selectedTabFontColor": "#000000",
  "bottom": "0%",
  "selectedTabBackgroundOpacity": 1,
  "tabsBackgroundColorRatios": [
   1
  ],
  "scrollBarOpacity": 0.5,
  "tabsFontStyle": "italic",
  "shadowColor": "#000000",
  "tabsAlign": "normal",
  "tabsPosition": "top",
  "tabsSize": 35,
  "overflow": "visible",
  "scrollBarWidth": 10,
  "selectedTabBackgroundColor": [
   "#FFFFFF"
  ],
  "scrollBarMargin": 2,
  "tabsFontSize": "14px",
  "id": "TabPanel_BC5A99EF_ACB8_4AAB_41CD_5A2CED1E3183",
  "shadowHorizontalLength": 3,
  "height": "100%",
  "width": "100%",
  "pagePaddingTop": 0,
  "paddingRight": 0,
  "tabsBackgroundColor": [
   "#999999"
  ],
  "shadowOpacity": 0.5,
  "contentOpaque": false,
  "class": "TabPanel",
  "tabsFontFamily": "Arial",
  "shadowBlurRadius": 6,
  "data": {
   "name": "TabPanel942"
  },
  "borderSize": 0,
  "propagateClick": false,
  "pages": [
   {
    "scrollBarColor": "#000000",
    "minHeight": 20,
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [
     0
    ],
    "minWidth": 20,
    "paddingLeft": 0,
    "borderColor": "#000000",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "gap": 10,
    "width": "100%",
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "borderRadius": 0,
    "height": "100%",
    "children": [
     "this.MainViewer",
     {
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "backgroundColorDirection": "vertical",
      "right": "0%",
      "minWidth": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 15,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarWidth": 10,
      "gap": 10,
      "width": "30%",
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "id": "Container_BCD7E33B_AAA0_E49C_41B3_F1D3FB8D53F8",
      "borderRadius": 0,
      "height": "100%",
      "children": [
       "this.MapViewer",
       {
        "minHeight": 1,
        "right": "10%",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingLeft": 0,
        "paddingTop": 0,
        "width": "73.58%",
        "scaleMode": "fit_inside",
        "id": "Image_BC2E7D24_AAA0_1CB4_41A8_E768EFBF3347",
        "height": "17.622%",
        "url": "skin/Image_BC2E7D24_AAA0_1CB4_41A8_E768EFBF3347.jpeg",
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "maxWidth": 298,
        "maxHeight": 169,
        "verticalAlign": "middle",
        "class": "Image",
        "horizontalAlign": "center",
        "data": {
         "name": "Image16532"
        },
        "bottom": "2%",
        "borderSize": 0,
        "propagateClick": false,
        "shadow": false
       },
       "this.IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2"
      ],
      "layout": "absolute",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingRight": 15,
      "contentOpaque": false,
      "paddingBottom": 0,
      "verticalAlign": "top",
      "class": "Container",
      "horizontalAlign": "left",
      "data": {
       "name": "Container16172"
      },
      "shadow": false,
      "borderSize": 0,
      "top": "0%",
      "propagateClick": false
     },
     {
      "minHeight": 1,
      "left": "0%",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "width": 115,
      "scaleMode": "fit_inside",
      "id": "Image_BCE3DF2D_AA60_3CB4_41E4_D6BF81545F14",
      "height": 115,
      "url": "skin/Image_BCE3DF2D_AA60_3CB4_41E4_D6BF81545F14.png",
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "paddingBottom": 0,
      "maxWidth": 235,
      "maxHeight": 235,
      "verticalAlign": "middle",
      "class": "Image",
      "horizontalAlign": "center",
      "data": {
       "name": "Image15591"
      },
      "shadow": false,
      "borderSize": 0,
      "top": "0%",
      "propagateClick": false
     }
    ],
    "layout": "absolute",
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "paddingRight": 0,
    "contentOpaque": false,
    "paddingBottom": 0,
    "verticalAlign": "top",
    "label": "Bergstrom Tech Center (August 2019)",
    "class": "TabPanelPage",
    "horizontalAlign": "left",
    "data": {
     "name": "TabPanelPage943"
    },
    "shadow": false,
    "borderSize": 1,
    "propagateClick": false
   },
   {
    "scrollBarColor": "#000000",
    "minHeight": 20,
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [
     0
    ],
    "minWidth": 20,
    "paddingLeft": 0,
    "borderColor": "#000000",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "gap": 10,
    "width": "100%",
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "borderRadius": 2,
    "height": "100%",
    "children": [
     {
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "shadowColor": "#000000",
      "minWidth": 1,
      "backgroundColorRatios": [
       0.73,
       1
      ],
      "paddingLeft": 20,
      "borderColor": "#000000",
      "paddingTop": 20,
      "scrollBarOpacity": 0.5,
      "scrollBarWidth": 10,
      "shadowSpread": 1,
      "width": "100%",
      "backgroundColor": [
       "#FFFFFF",
       "#CCCCCC"
      ],
      "id": "HTMLText_ABA45580_BAC3_C6E0_41E5_82221B46EF3C",
      "borderRadius": 0,
      "height": "100%",
      "scrollBarMargin": 2,
      "shadowVerticalLength": 2,
      "backgroundOpacity": 0.91,
      "scrollBarVisible": "rollOver",
      "paddingRight": 20,
      "shadowHorizontalLength": 2,
      "shadowOpacity": 0.19,
      "paddingBottom": 10,
      "class": "HTMLText",
      "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>CTM\u2019s New Office Space at the</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Bergstrom Technology Center</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:20px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Take a Virtual Reality tour of the Bergstrom Technology Center. Use your computer, smartphone, tablet, or Virtual reality devices to explore a real cave. The tours are also viewable through Google Cardboard, Oculus Go, and most VR headsets by selecting the \"VR headset mode\" button which will display on compatible devices.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">In January 2020, CTM\u2019s Collaboration Services, Web Services, Design and Delivery, the Enterprise PMO and the Public Safety PMO will have a new home at the </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://goo.gl/maps/UGe4oMGmYDKafajR9\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"font-size:15px;\"><U>Bergstrom Technology Center (6800 Burleson Road)</U></SPAN></A></SPAN><SPAN STYLE=\"color:#333333;font-size:15px;\">. The new space will be specifically designed to bring customers and teams together to collaborate on solution delivery.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Building ammenties include:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 Shared conference rooms on main floor</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 Coffee bar with barista</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 Ping pong tables, miniature putt-putt, Frisbee golf, a gym and walking trails</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 City of Austin employee childcare facility on-site</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 While there is not a cafeteria, there are plans to have various food trucks available for meals </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Other City of Austin departments moving to the same building include Public Works, Fleet and Austin Public Health.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">If you have questions about the space or to provide any preliminary requirements, please contact Terry Carroll (Project Manager) - Terry.Carroll@austintexas.gov or Whitney Sklar (Acting CTM Administrator) - Whitney.Sklar@ausps.org. For any questions regarding this </SPAN><SPAN STYLE=\"font-size:15px;\">360 </SPAN><SPAN STYLE=\"color:#333333;font-size:15px;\">VR Viewer, please contact Marbenn Cayetano - marbenn.cayetano@austintexas.gov.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">*This product is for informational purposes only and does not guarantee the accuracy, relevance, timeliness, or completeness of information contained.</SPAN></SPAN></DIV></div>",
      "data": {
       "name": "HTMLText53815"
      },
      "shadowBlurRadius": 7,
      "shadow": true,
      "borderSize": 3,
      "top": "0%",
      "propagateClick": false
     }
    ],
    "layout": "absolute",
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "paddingRight": 0,
    "contentOpaque": false,
    "paddingBottom": 0,
    "verticalAlign": "top",
    "label": "About",
    "class": "TabPanelPage",
    "horizontalAlign": "left",
    "data": {
     "name": "TabPanelPage1538"
    },
    "shadow": false,
    "borderSize": 1,
    "propagateClick": false
   }
  ],
  "scrollBarColor": "#000000"
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_B87D235D_C534_D90C_41E4_ABF10F0BB1C6.set('selectedIndex', 0)",
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "paddingLeft": 0,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "gap": 10,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && ((window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0))) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "id": "rootPlayer",
 "borderRadius": 0,
 "height": "100%",
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "class": "Player",
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Player496"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
