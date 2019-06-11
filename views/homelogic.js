function process() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        var n1 = document.getElementById('n1').value;
        var n2 = document.getElementById('n2').value;
        var res = parseInt(n1) + parseInt(n2);
        document.getElementById('res').value = res;
    }, false);
}
