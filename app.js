const tl = gsap.timeline({
    default: {
        duaration: .75, ease: 'Power1.easeOut'
    }
})

tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: "Elastic.easeOut.config(1 ,0.4)", duaration: 1.5 })
tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0' }, '<50%')
tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')


//cookie jump
tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y: -20, yoyo: true, rotation: '-20deg', repeat: -1 })
tl.fromTo('#crumbs', { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, '<')

const button = document.querySelector('button');

button.addEventListener('click', () => {
    gsap.to('.cookie-container', { opacity: 0, y: 100, duaration: .75, ease: 'power1.easeout' })
})