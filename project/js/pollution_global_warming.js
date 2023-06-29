const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    var flag = false;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.top > -10 && !flag) {
            flag = true;
            const id = section.id;
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        }
        else {
            const id = section.id;
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
    });

    document.getElementById('bg1').style.opacity = ( 1 - document.body.scrollTop/(document.body.scrollHeight-document.body.clientHeight) );
    document.getElementById('bg2').style.opacity = ( document.body.scrollTop/(document.body.scrollHeight-document.body.clientHeight) );
});
