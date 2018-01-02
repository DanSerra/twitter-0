
function count_down(obj) {

    var element = document.getElementById('count');

    element.innerHTML = 140 - obj.value.length;

    if (140 - obj.value.length < 0) {
        element.style.color = 'green';

    } else {
        element.style.color = 'blue';
    }

}
