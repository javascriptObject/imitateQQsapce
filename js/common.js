//js如何获取元素对象
/*
 document.getElementById('');//通过ID名获取  1一个
 document.getElementsByTagName('');//通过元素名获取  多个
 document.getElementsByClassName('');//通过class名获取  多个 集合
 */
var Btn = document.getElementById('btn');//发表按钮
var Fbtn = document.getElementById('f-btn');//图片按钮
var oul = document.getElementsByTagName('ul');//表情UL
var oli = document.getElementsByTagName('li');//表情UL
var Txt = document.getElementsByClassName('text');//输入文本框
var Main = document.getElementsByClassName('main');//添加对象内容
//点击发表按钮
Btn.onclick = function(){
    //添加东西
    //添加内容
    var Ctxt = Txt[0].innerHTML;
    if(Ctxt == ''){//添加满足就执行这个大括号里面的
        Txt[0].focus();//获取焦点
    }else{//否则就执行这个大括号里面的
        Main[0].innerHTML += '<div class="con"><div class="top"><img src="images/xiaoyu.png" align="absmiddle"/>小鱼-宇宙第一帅小僵尸</div><div class="content">'+Ctxt+'</div></div>';
    }
    Txt[0].innerHTML = '';
};
//点击表情按钮
Fbtn.onclick =function(e){
    e = e||event;//解决兼容问题
    oul[0].style.display = 'block';
    e.cancelBubble = true;//阻止冒泡
};
document.onclick = function(){
    oul[0].style.display = 'none';
};
//添加表情
for(var i=0; i<oli.length ; i++){//不停的去执行大括号里面的，直到添加不满足
    oli[i].onclick = function(){//给每一个li都添加点击事件
        var Src = this.children[0].src;
        Txt[0].innerHTML += '<img src="'+Src+'" />'
    };
}