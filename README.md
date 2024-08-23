




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
