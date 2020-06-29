var flag = false;

function description() {
    if (flag == false) {
        document.getElementById("desk").style.display = 'block';
        flag = true;
    } else {
        document.getElementById("desk").style.display = 'none';
        flag = false;
    }
}