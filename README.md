# 仿QQ空间效果 imitateQQsapce

效果如下：

![](images/img.gif)

HTML代码：
```
<!--文档声明为 html（最新html5）-->
<!doctype html>
<html>
	<head>
		<!--声明当前页面编码格式为国际编码（utf-8）还有一种中文编码（gbk/gb2312）-->
		<meta charset="UTF-8">
		<!--网页三要素-->
		<meta name="Keywords" content="关键词,关键词">
		<meta name="Description" content="描述">
		<title>网页的标题</title>
		<link rel="stylesheet" href="css/common.css"/>
	</head>
	<body>
		<div class="text-main">
			<div class="title">有什么新鲜事想告诉大家?</div>
			<div class="text" contenteditable='true'></div>
			<div class="btn-box">
				<img id="f-btn" src="images/bba_thumb.gif" width="" height="" alt="" />
				<a id="btn" href="javascript:;">发表</a>
				<ul>
					<li><img src="images/zz2_thumb.gif" title="[织]" ></li>
					<li><img src="images/horse2_thumb.gif" title="神马]"></li>
					<li><img src="images/fuyun_thumb.gif" title="[浮云]"></li>
					<li><img src="images/geili_thumb.gif" title="[给力]"></li>
					<li><img src="images/wg_thumb.gif" title="[围观]"></li>
					<li><img src="images/vw_thumb.gif" title="[威武]"></li>
					<li><img src="images/panda_thumb.gif" title="[熊猫]"></li>
					<li><img src="images/rabbit_thumb.gif" title="兔子]"></li>
					<li><img src="images/otm_thumb.gif" title="[奥特曼]"></li>
					<li><img src="images/j_thumb.gif" title="[囧]"></li>
					<li><img src="images/hufen_thumb.gif" title="[互粉]"></li>
					<li><img src="images/liwu_thumb.gif" title="[礼物]"></li>
					<li><img src="images/smilea_thumb.gif" title="呵呵]"></li>
					<li><img src="images/tootha_thumb.gif" title="嘻嘻]"></li>
					<li><img src="images/laugh.gif" title="[哈哈]"></li>
					<li><img src="images/tza_thumb.gif" title="[可爱]"></li>
					<li><img src="images/kl_thumb.gif" title="[可怜]"></li>
					<li><img src="images/kbsa_thumb.gif" title="[挖鼻屎]"></li>
					<li><img src="images/cj_thumb.gif" title="[吃惊]"></li>
					<li><img src="images/shamea_thumb.gif" title="[害羞]"></li>
					<li><img src="images/zy_thumb.gif" title="[挤眼]"></li>
					<li><img src="images/bz_thumb.gif" title="[闭嘴]"></li>
					<li><img src="images/bs2_thumb.gif" title="[鄙视]"></li>
					<li><img src="images/lovea_thumb.gif" title="[爱你]"></li>
					<li><img src="images/sada_thumb.gif" title="[泪]"></li>
					<li><img src="images/heia_thumb.gif" title="[偷笑]"></li>
					<li><img src="images/qq_thumb.gif" title="[亲亲]"></li>
					<li><img src="images/sb_thumb.gif" title="[生病]"></li>
					<li><img src="images/mb_thumb.gif" title="[太开心]"></li>
					<li><img src="images/ldln_thumb.gif" title="[懒得理你]"></li>
					<li><img src="images/yhh_thumb.gif" title="[右哼哼]"></li>
					<li><img src="images/zhh_thumb.gif" title="[左哼哼]"></li>
					<li><img src="images/x_thumb.gif" title="[嘘]"></li>
					<li><img src="images/cry.gif" title="[衰]"></li>
					<li><img src="images/wq_thumb.gif" title="[委屈]"></li>
					<li><img src="images/t_thumb.gif" title="[吐]"></li>
					<li><img src="images/k_thumb.gif" title="[打哈气]"></li>
					<li><img src="images/bba_thumb.gif" title="[抱抱]"></li>
					<li><img src="images/angrya_thumb.gif" title="[怒]"></li>
					<li><img src="images/yw_thumb.gif" title="[疑问]"></li>
					<li><img src="images/cza_thumb.gif" title="[馋嘴]"></li>
					<li><img src="images/88_thumb.gif" title="[拜拜]"></li>
					<li><img src="images/sk_thumb.gif" title="[思考]"></li>
					<li><img src="images/sweata_thumb.gif" title="[汗]"></li>
					<li><img src="images/sleepya_thumb.gif" title="[困]"></li>
					<li><img src="images/sleepa_thumb.gif" title="[睡觉]"></li>
					<li><img src="images/money_thumb.gif" title="[钱]"></li>
					<li><img src="images/sw_thumb.gif" title="[失望]"></li>
					<li><img src="images/cool_thumb.gif" title="[酷]"></li>
					<li><img src="images/hsa_thumb.gif" title="[花心]"></li>
					<li><img src="images/hatea_thumb.gif" title="[哼]"></li>
					<li><img src="images/gza_thumb.gif" title="[鼓掌]"></li>
					<li><img src="images/dizzya_thumb.gif" title="[晕]"></li>
					<li><img src="images/bs_thumb.gif" title="[悲伤]"></li>
					<li><img src="images/crazya_thumb.gif" title="[抓狂]"></li>
					<li><img src="images/h_thumb.gif" title="[黑线]"></li>
					<li><img src="images/yx_thumb.gif" title="[阴险]"></li>
					<li><img src="images/nm_thumb.gif" title="[怒骂]"></li>
					<li><img src="images/hearta_thumb.gif" title="[心]"></li>
					<li><img src="images/unheart.gif" title="[伤心]"></li>
					<li><img src="images/pig.gif" title="[猪头]"></li>
					<li><img src="images/ok_thumb.gif" title="[ok]"></li>
					<li><img src="images/ye_thumb.gif" title="[耶]"></li>
					<li><img src="images/good_thumb.gif" title="[good]"></li>
					<li><img src="images/no_thumb.gif" title="[不要]"></li>
					<li><img src="images/z2_thumb.gif" title="[赞]"></li>
					<li><img src="images/come_thumb.gif" title="[来]"></li>
					<li><img src="images/sad_thumb.gif" title="[弱]"></li>
					<li><img src="images/lazu_thumb.gif" title="[蜡烛]"></li>
					<li><img src="images/clock_thumb.gif" title="[钟]"></li>
					<li><img src="images/cake.gif" title="[蛋糕]"></li>
					<li><img src="images/m_thumb.gif" title="[话筒]"></li>
					<li><img src="images/weijin_thumb.gif" title="[围脖]"></li>
					<li><img src="images/lxhzhuanfa_thumb.gif" title="[转发]"></li>
					<li><img src="images/lxhluguo_thumb.gif" title="[路过这儿]"></li>
					<li><img src="images/bofubianlian_thumb.gif" title="[bofu变脸]"></li>
					<li><img src="images/gbzkun_thumb.gif" title="[gbz困]"></li>
					<li><img src="images/boboshengmenqi_thumb.gif" title="[生闷气]"></li>
					<li><img src="images/chn_buyaoya_thumb.gif" title="[不要啊]"></li>
					<li><img src="images/daxiongleibenxiong_thumb.gif" title="[dx泪奔]"></li>
					<li><img src="images/cat_yunqizhong_thumb.gif" title="[运气中]"></li>
					<li><img src="images/youqian_thumb.gif" title="[有钱]"></li>
					<li><img src="images/cf_thumb.gif" title="[冲锋]"></li>
					<li><img src="images/camera_thumb.gif" title="[照相机]"></li>

				</ul>
			</div>
		</div>
		<div class="main">
			<!--
				<div class="con">
					<div class="top">
						<img src="images/xiaoyu.png" align="absmiddle"/>
	                        小鱼-宇宙第一帅小僵尸
					</div>
					<div class="content">有什么新鲜事想告诉大家?</div>
				</div>
				<div class="con">
					<div class="top">
						<img src="images/xiaoyu.png" align="absmiddle"/>
		                    小鱼-宇宙第一帅小僵尸
					</div>
					<div class="content">有什么新鲜事想告诉大家?</div>
				</div>
			-->
		</div>
	</body>
</html>
<script src="js/common.js"></script>

```

CSS代码：
```
*{
    margin:0;padding:0;
}
body{
    background:url('../images/bg.jpg') no-repeat fixed;
    background-size:cover;
}
.text-main{
    width:600px;
    background:#fff;
    margin:100px auto 0;
    border-radius:5px;
    padding:10px 20px;
}
.text-main .title{
    color:#666;
    font-size:12px;
    line-height:30px;
    font-family:"微软雅黑";
}
.text-main .text{
    width:598px;
    height:80px;
    border:1px solid #ddd;
    margin:10px 0;
}
.text-main .btn-box{
    position:relative;
}
.text-main .btn-box a{
    float:right;
    padding:5px 10px;
    background:#ff9966;
    color:#fff;
    border-radius:5px;
    text-decoration:none;
}
.text-main .btn-box ul{
    width:390px;
    height:175px;
    background:#fff;
    border:1px solid #666;
    padding:5px;
    position:absolute;
    left:20px;
    top:20px;
    display:none;
}
.text-main .btn-box ul li{
    float:left;
    list-style:none;
    margin:2px;
}
.main{
    width:640px;
    margin:0 auto;
}
.main .con{
    width:600px;
    background:#fff;
    padding:0 20px;
    margin-top:10px;
}
.main .con .top{
    width:600px;
    border-bottom:1px solid #ddd;
    padding:10px 0;
}
.main .con .top img{
    width:50px;
    height:50px;
    border-radius:50%;
}
.main .con  .content{
    color:#666;
    font-size:12px;
    line-height:30px;
}
```

JS代码：
```
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
```
