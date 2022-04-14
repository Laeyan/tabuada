function tabuada() {
    var num= document.querySelector("#num");
    var tab = document.querySelector("#seltab");

    if(num.value.length == 0) {
        window.alert("Por favor, digite um número");
    }else {
        tab.innerHTML = '';
        var n = Number(num.value);
        for (var c = 1; c <=10; c++) {
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}
