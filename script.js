const container = document.getElementById('grid');
const button10 = document.getElementById('10')
const button20 = document.getElementById('20')
// default Grid 16x16 
function createGrid() {
for (let i=0;i<256;i++) {
    var cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell)
    cell.addEventListener('mouseover', function() {
        this.style.backgroundColor =pageMix();
    })
}
}
// call function when page loads for grid to appear //
createGrid();
// size 20x20 grid
function size20() {
    container.innerHTML ="";
    // change grid template to match size //
    container.style.setProperty('grid-template-columns', 'repeat(20,1fr)')
    container.style.setProperty('grid-template-rows', 'repeat(20,1fr)')
    for (let i=0;i<400;i++) {
        var cell = document.createElement('div')
        cell.classList.add('cell')
        container.appendChild(cell)
        cell.addEventListener('mouseover', function() {
            this.style.backgroundColor =pageMix();
        })
    }}
    // size 16x16 grid
    function size16() {
        container.innerHTML="";
        container.style.setProperty('grid-template-columns' , 'repeat(16,1fr')
        container.style.setProperty('grid-template-rows', 'repeat(16,1fr')
        for ( let i=0;i<256; i++) {
            var cell = document.createElement('div')
            cell.classList.add('cell')
            container.appendChild(cell)
            cell.addEventListener('mouseover',function(){
                this.style.backgroundColor=pageMix();
            })
        }
    }
    // size 10x10 grid
    function size10() {
        container.innerHTML="";
        container.style.setProperty('grid-template-columns' , 'repeat(10,1fr')
        container.style.setProperty('grid-template-rows', 'repeat(10,1fr')
        for ( let i=0;i<100; i++) {
            var cell = document.createElement('div')
            cell.classList.add('cell')
            container.appendChild(cell)
            cell.addEventListener('mouseover',function(){
                this.style.backgroundColor=pageMix();
            })
        }
    }
    // size 5x5 grid
    function size5() {
        container.innerHTML="";
        container.style.setProperty('grid-template-columns' , 'repeat(5,1fr')
        container.style.setProperty('grid-template-rows', 'repeat(5,1fr')
        for ( let i=0;i<25; i++) {
            var cell = document.createElement('div')
            cell.classList.add('cell')
            container.appendChild(cell)
            cell.addEventListener('mouseover',function(){
                this.style.backgroundColor=pageMix();
            })
        }
    }
    // Used colors from background for onmouseover effect
    function pageMix() {
        var color = ['rgb(84, 222, 234)','rgb(186, 249, 147)','rgb(255, 202, 124)'];
        var colors = color[Math.floor(Math.random()*color.length)]
        return colors;
    }