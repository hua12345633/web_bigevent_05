var base = "http://ajax.frontend.itheima.net";
$.ajaxPrefilter(function (option) {
    // console.log(option.url);
    option.url = base + option.url;
})