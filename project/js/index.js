var mTitle = document.getElementById('title');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');
var originTop = mTitle.style.top;
window.addEventListener('scroll', () => {
    // alert(document.body.scrollTop);
    if (document.body.scrollTop>20) mTitle.style.top = 50;
    else mTitle.style.top = originTop;

    if (document.body.scrollTop>100 && document.body.scrollTop<800) content1.style.opacity = 1;
    else content1.style.opacity = 0;

    if (document.body.scrollTop>900 && document.body.scrollTop<1600) content2.style.opacity = 1;
    else content2.style.opacity = 0;

    if (document.body.scrollTop>1800) content3.style.opacity = 1;
    else content3.style.opacity = 0;
});
