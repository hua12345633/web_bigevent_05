$(function () {
    // 1.点击去注册隐藏登录页面
    $('#reg').on('click', function () {
        $('#form-login').hide();
        $('#form-reg').show();
    })
    $('#login').on('click', function () {
        $('#form-login').show();
        $('#form-reg').hide();
    })
    // 2.表单验证
    var form = layui.form;
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repass: function (value) {
            if ($('[name=repassword]').val() !== value) {
                return "两次密码不一致，请重新输入"
            }
            $('#login').click();
        }
    })
    // 3.注册的ajax
    $('#form-reg').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method:'post',
            url:'/api/reguser',
            data:$(this).serialize(),
            success:function(res){
                console.log(res);
                if(res.status!==0){
                    return "注册失败"
                }
                console.log("注册成功！");
            }
        })
    })
    // 4.登录ajax
    $('#form-login').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            method:'post',
            url:'/api/login',
            data:$(this).serialize(),
            success:function(res){
                console.log(res);
                if(res.status!==0){
                    return "登录失败"
                }
                location.href='/index.html';
            }
        })
    })






})