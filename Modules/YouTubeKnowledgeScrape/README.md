PREVIEW JSON DATABASE PARAMETERS
----

```json
{
  "Frames": {
    "desc": "Start filling these key values in cachedb)",
    "keyframeInfo": "xmin.xsec.xms",
    "ClassesCount": 4,
    "Classes": {
      "abc": {
        "ClassDefination": "[...]",
        "(if: humans)": {
          "FeatureIndex": {
            "pose": {
              "[keypoints]": "(https://camo.githubusercontent.com/b8a385301ca6b034d5f4807505e528b4512a0aa78507dec9ebafcc829b9556be/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f6d6f76656e65742f636f636f2d6b6579706f696e74732d3530302e706e67)",
              "[Names]": "(http://blog.ocad.ca/wordpress/digf6044-fw201803-01/files/2019/03/Screen-Shot-2019-03-08-at-12.16.20-PM.png)",
              "score": 75,
              "FaceMeshKeypoints": 12312,
              "SkeletonKeypoints": 123123
            },
            "FashionStyle": {
              "DetectedFashionClasses": "[top, jeans, sunglasses, etc]",
              "Class*keypointsRatio": "(for article location on body)"
            },
            "PredictedBackgroundProfiling": {
              "Gender": "test",
              "Age": "test",
              "Ethnicity": "test",
              "Language": "test",
              "PartOfWorld": "test",
              "<etc>": "populate more attributes automatically using context"
            },
            "Misc": {
              "HairLength": "test",
              "FacialHair": "test - (if:type)",
              "Tattoo": "test",
              "Piercing": "test"
            }
          },
          "if: not humans": {
            "ClassesName": "xyz",
            "<Autogenerate attributes>": "populate more attributes automatically using context"
          }
        }
      },
      "def": "test",
      "xyz": "test"
    },
    "ObjPerClass": "test"
  }
}
```
