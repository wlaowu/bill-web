




修改statis/config.js中DSE.serverPath
test2024/Test@2024@Bot

===2024.08.14===
1. 网站图标修改
2. 【TG记账机器人 - 官方团队：@AI678 】 修改为 【AI智能管家婆 - 官方团队：@P77774】
3.  分组管理页面最下脚也加上 【AI智能管家婆 - 官方团队：@P77774】
4.  分组管理添加信息时选项框还是和原始一样，放置右边



===2024.08.15===
访问地址：
1. bill   http://43.134.1.220/bill/#/billCharts/?group=LTEwMDIxOTA0OTI3MTY=&day=0
   LTEwMDIxOTA0OTI3MTY= 为5415202864编码之后的值
2. 分组  http://43.134.1.220/bill/#/classifyManage?user_id=NTQxNTIwMjg2NA==
   NTQxNTIwMjg2NA==   为-1002190492716编码之后的值
3. 对齐问题   


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grafana Dashboard</title>
  </head>
  <body>
    <iframe id="grafana-frame" src="" width="100%" height="800" frameborder="0"></iframe>

    <script>
      // 从 cookies 中获取指定名称的 cookie 值
      function getCookie(name) {
        var value = "; " + document.cookie
        var parts = value.split("; " + name + "=")
        if (parts.length === 2) return parts.pop().split(";").shift()
      }

      // 获取 JWT 令牌的 cookie 值
      var jwtToken = getCookie("jwt_token") // 假设 cookie 名称为 'jwt_token'

      function loadGrafanaDashboard() {
        var grafanaFrame = document.getElementById("grafana-frame")
        var grafanaUrl = "http://your_django_server/grafana/"

        if (jwtToken) {
          var headers = new Headers()
          headers.append("Authorization", "Bearer " + jwtToken)

          fetch(grafanaUrl, { headers: headers })
            .then((response) => response.text())
            .then((data) => {
              grafanaFrame.srcdoc = data // 将响应内容插入iframe
            })
            .catch((error) => console.error("Error:", error))
        } else {
          // 如果没有 jwtToken，直接加载 Grafana
          grafanaFrame.src = grafanaUrl
        }
      }

      // 加载 Grafana 仪表板
      loadGrafanaDashboard()
    </script>
  </body>
</html>


http://38.47.227.188/bill/#/billCharts/?group=LTEwMDI0OTkxMjQ0Njc=&day=0



{
    "group": "LTEwMDI0OTkxMjQ0Njc=",
    "data": {
        "入款": [
            {
                "时间": "11-07 16:07:08",
                "金额": "9900(RMB)",
                "费率": 0,
                "汇率": 11.3,
                "临时汇率": 12.5,
                "结算": "792(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:07:37",
                "金额": "401(RMB)",
                "费率": 0,
                "汇率": 11.3,
                "临时汇率": 10.6,
                "结算": "37.83(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:08:17",
                "金额": "8500(RMB)",
                "费率": 0,
                "汇率": 11.3,
                "临时汇率": 13.5,
                "结算": "629.63(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:11:03",
                "金额": "8000(RMB)",
                "费率": 0,
                "汇率": 11.3,
                "临时汇率": 9.5,
                "结算": "842.11(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:12:10",
                "金额": "105(RMB)",
                "费率": 0.7,
                "汇率": 7.15,
                "临时汇率": "",
                "结算": "4.41(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:17:43",
                "金额": "300(RMB)",
                "费率": 0.7,
                "汇率": 7.15,
                "临时汇率": 9.2,
                "结算": "9.78(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:18:40",
                "金额": "-300(RMB)",
                "费率": 0.7,
                "汇率": 7.15,
                "临时汇率": 9.2,
                "结算": "-9.78(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:26:37",
                "金额": "999(RMB)",
                "费率": 0.7,
                "汇率": 7.15,
                "临时汇率": "",
                "结算": "41.92(USDT)",
                "标记人": "",
                "操作人": "BOSS_007",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:26:54",
                "金额": "6666(RMB)",
                "费率": 0.7,
                "汇率": 7.15,
                "临时汇率": "",
                "结算": "279.69(USDT)",
                "标记人": "",
                "操作人": "BOSS_007",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 19:42:47",
                "金额": "1600(RMB)",
                "费率": 0.7,
                "汇率": 7.15,
                "临时汇率": "",
                "结算": "67.13(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "正常账单",
                "备注": ""
            },
            {
                "时间": "11-07 19:43:13",
                "金额": "-1600(RMB)",
                "费率": 0,
                "汇率": 11.9,
                "临时汇率": "",
                "结算": "-134.45(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "正常账单",
                "备注": ""
            },
            {
                "时间": "11-07 19:43:19",
                "金额": "1600(RMB)",
                "费率": 0,
                "汇率": 11.9,
                "临时汇率": "",
                "结算": "134.45(USDT)",
                "标记人": "A组猫叔（投诉或建议请联系我）",
                "操作人": "未登7",
                "状态": "正常账单",
                "备注": ""
            }
        ],
        "出款": [
            {
                "时间": "11-07 16:09:36",
                "金额": "417(USDT)",
                "费率": 0,
                "汇率": 11.3,
                "结算": "417(USDT)",
                "标记人": "未登7",
                "操作人": "A组猫叔（投诉或建议请联系我）",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 16:18:05",
                "金额": "9048(USDT)",
                "费率": 0.7,
                "汇率": 7.15,
                "结算": "9048(USDT)",
                "标记人": "未登7",
                "操作人": "A组猫叔（投诉或建议请联系我）",
                "状态": "",
                "备注": "无效撤销账单"
            },
            {
                "时间": "11-07 16:18:19",
                "金额": "9048(USDT)",
                "费率": 0.7,
                "汇率": 7.15,
                "结算": "9048(USDT)",
                "标记人": "未登7",
                "操作人": "A组猫叔（投诉或建议请联系我）",
                "状态": "已重置账单",
                "备注": ""
            },
            {
                "时间": "11-07 19:44:06",
                "金额": "7000(USDT)",
                "费率": 0,
                "汇率": 11.9,
                "结算": "7000(USDT)",
                "标记人": "",
                "操作人": "未登7",
                "状态": "正常账单",
                "备注": ""
            }
        ],
        "统计（按标记人)": [
            {
                "用户名": "A组猫叔（投诉或建议请联系我）",
                "入款": "1600(RMB)",
                "应下发": "67.13(USDT)",
                "已下发": "0(USDT)"
            },
            {
                "用户名": "未登7",
                "入款": "0(RMB)",
                "应下发": "0(USDT)",
                "已下发": "7000(USDT)"
            }
        ],
        "统计（按操作人）": [
            {
                "用户名": "未登7",
                "入款": "1600(RMB)",
                "应下发": "-67.13(USDT)",
                "已下发": "7000(USDT)"
            }
        ],
        "汇率分类": [
            {
                "汇率": "11.9",
                "金额": "0(RMB)",
                "换算金额": "0(USDT)"
            },
            {
                "汇率": "7.15",
                "金额": "1600(RMB)",
                "换算金额": "67.13(USDT)"
            }
        ],
        "入款回复人": [
            {
                "入款回复人": "A组猫叔（投诉或建议请联系我）",
                "金额": "1600(RMB)",
                "结算金额": "67.13(USDT)"
            }
        ],
        "下发回复人": [
            {
                "下发回复人": "未登7",
                "金额": "7000(RMB)",
                "结算金额": "0(USDT)"
            }
        ]
    }
}
