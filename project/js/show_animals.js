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
var mNameArr = ["1","2","3","4","5","6","7","8","9"];
var mIntroArr = [
    "中华鲟（学名：Acipenser sinensis；英文名：Chinese Sturgeon）：是硬骨鱼纲、鲟科的鱼类。常见个体体长0.4-1.3米，体重50-300千克；最大个体体长5米，体重可达600千克。是中国长江中最大的鱼，故有“长江鱼王”之称。体呈纺锤形，头尖吻长，口前有4条吻须，口位在腹面，有伸缩性，并能伸成筒状，体被覆五行大而硬的骨鳞，背面一行，体侧和腹侧各两行。尾鳍为歪尾型，偶鳍具宽阔基部，背鳍与臀鳍相对。腹鳍位于背鳍前方，鳍及尾鳍的基部具棘状鳞，肠内具螺旋瓣，肛门和泄殖孔位于腹鳍基部附近，输卵管的开口与卵巢远离。"
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


