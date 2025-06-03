<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript 核心语法学习一</title>
    <script>
        let a = 100
        // alert(a)
        console.log(a)
        const api_key = 'ssssx-=-dddd'
        console.log(api_key)
        console.log(typeof a, typeof api_key, typeof true)
        let b = '1'
        console.log(a + b)
        console.log(a + Number(b))
        let c = '100'
        console.log(typeof a, typeof c)
        console.log(a == c)
        console.log(a === c)
        // 条件判断语句
        let current_time = '12:20'
        if (current_time == '12:20') {
            console.log('加油！')
        } else {
            console.log('暂且休息……')
        }
        // for 循环
        for (let i = 1; i <= 10; i++) {
            console.log(i)
        }
        // while 循环
        let hug = 60
        while (hug > 0) {
            console.log('继续努力……')
            hug = hug - 10
        }
        // 函数
        function intro() {
            console.log('嗨，我是一段脚本！')
        }
        intro()
        function intro2(content) {
            console.log('下面是我要介绍的内容： ' + String(content))
        }
        console.log(typeof intro2('这是传入的内容'))
        function intro3(content1, content2) {
            console.log('下面是我要介绍的内容： ' + String(content1) + String(content2))
        }
        intro3('内容 1', '内容 2', 444)
        function intro4(content) {
            console.log(content)
            return content + '这是函数返回的结果'
        }
        intro4('带返回值的函数测试')
        let result = intro4('带返回值的函数测试')
        console.log(result)
    </script>
</head>

<body>

</body>

</html>
