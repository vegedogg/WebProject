class Example {
    constructor(options) {
        this.root = options.root;

        this.init();

        setTimeout(this.showImages.bind(this), 0);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.root,
            direction: 'horizontal',
            smooth: true,
            lerp: 0.05,
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
        });

        this.images = this.root.querySelectorAll('.image');

        [].forEach.call(this.images, (image) => {
            image.addEventListener('click', () => {
                this.hideImages();
            });
        });
    }

    showImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.add('-active');
        });
    }

    hideImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-active');
        });

        setTimeout(this.showImages.bind(this), 100);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const example = new Example({
        root: document.querySelector('.scroll-animations-example')
    });
});

var tmpImg = -1;
var mInfo = document.getElementById("info");
var mName = document.getElementById("name");
var mIntro = document.getElementById("intro");
var mNameArr = ["考氏鳍竺鲷","梅花参","夏威夷僧海豹","洋红海燕","中华鲟","中华凤头燕鸥","马德拉圆尾鹱","摩羯鹿角珊瑚","肯氏海龟"];
var mIntroArr = [
    "考氏鳍竺鲷（diāo），天竺鲷科鳍竺鲷属。喜小群活动，通常为1-6条一起活动；新孵化的鱼生活在海葵中，成年鱼活动在珊瑚和海胆附近。主要分布于印度尼西亚海域。<br\>&emsp;&emsp;考氏鳍竺鲷又称巴厘岛天使，泗水玫瑰，珍珠飞燕，为鲈形目，天竺鲷科，鳍竺鲷属一种热带地区近岸生活于珊瑚礁区的海水鱼类。考氏鳍竺鲷分布于西太平洋印度尼西亚海域，外形独特，色彩美观，可作为观赏鱼。",
    "也称凤梨参。是一种大型海参，体长通常60-70公分，最大可达120公分，体宽约15公分，高约8公分，重达15公斤，因此被称为“海参之王”。背部肉刺很大，呈指状，且3至11根连成梅花瓣状，故称“梅花参”。又因外观有点像凤梨，称为“凤梨参”。<br\>&emsp;&emsp;海参为“海产八珍”（海参、鱼骨、鱼翅、鲍鱼、鱼肚、干贝、鱼唇、鱼子）之首，作为“海参之王”，梅花参的经济价值很高。",
    "夏威夷僧海豹是唯一一种全年都在热带海域中生活的海豹。正如名字一样，该物种仅生活在夏威夷附近的海岛和环礁上。成年海豹头部很圆，且被细密的短毛，看起来很像和尚头，因此得名。<br\>&emsp;&emsp;除过繁殖季节，夏威夷僧海豹通常独来独往，偶尔会小群生活。它们夜间活动，用大量时间在海上觅食，饱餐一顿后返回岸上睡觉。",
    "它只存在于新西兰的查塔姆岛，是世界上最稀有的鸟类之一，在20世纪70年代被重新发现之前，被认为已经灭绝了100多年。<br\>&emsp;&emsp;这种中型海燕的头部、颈部和上胸为棕灰色，下身为白色。翅膀的底部是棕色的。它有一个黑色的喙和粉红色的腿。成鸟体重为400-580克。该鸟在密林下的1-3米长的洞穴中筑巢。它们形成长期的一夫一妻制的配对关系，每次养一个蛋，双方都要孵化蛋并喂养雏鸟。繁殖季节在9月至5月之间，在此期间，鸟类在公海上空觅食。<br\>&emsp;&emsp;2005年繁殖季，13对已知繁殖对成功育出11只雏鸟。目前的成熟个体估计在 80 至 100 只之间。",
    "常见个体体长0.4-1.3米，体重50-300千克；最大个体体长5米，体重可达600千克。是中国长江中最大的鱼，故有“长江鱼王”之称。<br\>&emsp;&emsp;夏秋两季，生活在长江口外浅海域的中华鲟回游到长江，历经3000多公里的溯流博击，才回到金沙江一带产卵繁殖。产后待幼鱼长大到15厘米左右，又携带它们旅居外海。它们就这样世世代代在江河上游出生，在大海里生长。<br\>&emsp;&emsp;中华鲟生命周期较长，最长寿命可达40龄。是中国一级重点保护野生动物，也是活化石，有“水中大熊猫”之称。主要分布于中国长江干流金沙江以下至入海河口。",
    "中华凤头燕鸥在海岸、海岛岩石、悬崖、沙滩和海洋上活动。主要栖息于海岸岛屿，喜欢于海水深度浅且离岸近的区域活动，不喜水草太高。<br\>&emsp;&emsp;中华凤头燕鸥是鸥科鸟类中最稀少的一种，它们是世界上最濒危的鸟种之一。自1863年被命名以来，到2000年，人类对它们一共只有6次确切的观察记录。因其稀少神秘，它们被学者专家称为“神话之鸟”。",
    "马德拉圆尾鹱(hù)体型似鸥，上嘴结构特别，由管状鼻子构成，嘴端呈钩状，鼻孔在嘴的上方成两个管口。<br\>&emsp;&emsp;常于大海低空逐浪飞行。以小鱼、乌贼和甲壳动物等无脊椎动物为食。<br\>&emsp;&emsp;分布于欧亚大陆及非洲北部（包括整个欧洲、北回归线以北的非洲地区、阿拉伯半岛以及喜马拉雅山－横断山脉－岷山－秦岭－淮河以北的亚洲地区）。",
    "摩羯鹿角珊瑚是浅棕色或棕褐色与白色的轴向珊瑚石。<br\>&emsp;&emsp;外触手芽形成块状、叶状或分枝状群体。珊瑚体为大型个体、珊瑚骼灌木状，分枝距离大，群体长达200-500毫米，直径5-20毫米，有围鞘。珊瑚座各在数米之隔。形状是树状的，圆柱形组成，分枝中细枝很少。珊瑚石管状，有独特的轴向珊瑚石。",
    "体长60-90厘米，重量27-40公斤。其cites附录等级为Ⅰ，规定严禁商业贸易，所有标本的进出口，必须取得进、出口许可证 。<br\>&emsp;&emsp;肯氏龟成年个体的胸甲一般是黄绿色或白色的、而背壳则是灰绿色。幼年肯氏龟整体是黑灰色的。喙状嘴、体侧的肢呈鳍状。<br\>&emsp;&emsp;成年肯氏海龟生活在海岸附近的浅水近岸水域。喜欢温暖。食物包括一些软体动物、甲壳亚门动物、水母、藻类或者海胆。繁殖季节是四月到八月，每次会下90颗左右的卵。"
]
function showText(idx) {
    if (idx == tmpImg) {
        mInfo.style.opacity = 0;
        tmpImg = -1;
    }
    else {
        tmpImg = idx;
        mInfo.style.opacity = 0;
        setTimeout("mInfo.style.opacity = 1;",200);
    }
    mName.innerHTML = mNameArr[idx];
    mIntro.innerHTML = mIntroArr[idx];
}


