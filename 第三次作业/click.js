
window.onload = function() {
    var items = document.getElementsByTagName('a').getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    for(let i = 0; i < items.length; i++){
    //onclick为鼠标点击事件
        items[i].onclick= function () {
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';
        }
    }
};
//学姐这个任务我没做对，我想晓得我思路对没有呀