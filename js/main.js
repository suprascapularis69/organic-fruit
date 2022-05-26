var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
    hoverOnly: true,
    relativeInput: true
});

const counters = document.querySelectorAll('.stats__value');
const speed = 10;
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});