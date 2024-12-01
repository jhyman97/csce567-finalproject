const vis = document.querySelectorAll('.v1');

const firstViz = new Map([
    ['b1-1', 'v1-1'],
    ['b1-2', 'v1-2'],
    ['b1-3', 'v1-3'],
    ['b1-4', 'v1-4'],
]);

const secondViz = new Map ([
    ['b2-1', 'v2-1'],
    ['b2-2', 'v2-2'],
    ['b2-3', 'v2-3'],
]);

const thirdViz = new Map ([
    ['b3-1', 'v3-1'],
    ['b3-2', 'v3-2'],
    ['b3-3', 'v3-3'],
]);



firstViz.forEach((v, button) => {
    document.getElementById(button).addEventListener('click', () => {
        // document.getElementById(viz).classList.add('hidden');
        console.log(`at button ${button}`)
        document.getElementById(firstViz.get(button)).classList.remove('hidden');
        firstViz.forEach(viz => {
            if(firstViz.get(button) !== viz) {
                document.getElementById(viz).classList.add('hidden')
            }
        })
    })
});

secondViz.forEach((v, button) => {
    document.getElementById(button).addEventListener('click', () => {
        // document.getElementById(viz).classList.add('hidden');
        console.log(`at button ${button}`)
        document.getElementById(secondViz.get(button)).classList.remove('hidden');
        secondViz.forEach(viz => {
            if(secondViz.get(button) !== viz) {
                document.getElementById(viz).classList.add('hidden')
            }
        })
    })
});

thirdViz.forEach((v, button) => {
    document.getElementById(button).addEventListener('click', () => {
        // document.getElementById(viz).classList.add('hidden');
        console.log(`at button ${button}`)
        document.getElementById(thirdViz.get(button)).classList.remove('hidden');
        thirdViz.forEach(viz => {
            if(thirdViz.get(button) !== viz) {
                document.getElementById(viz).classList.add('hidden')
            }
        })
    })
})

