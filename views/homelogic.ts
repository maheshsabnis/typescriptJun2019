function process() {
    let btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        let n1 = document.getElementById('n1').value;
        let n2 = document.getElementById('n2').value;
        let res = parseInt(n1) + parseInt(n2);
        document.getElementById('res').value = res;
    }, false);
}