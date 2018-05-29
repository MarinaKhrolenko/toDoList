(function () {
    var btn=document.getElementById('addBtn');
    var radioBtns=document.getElementsByName('type');
    var input=document.getElementById('item');
    var info='';
    btn.onclick=function (ev) {
       if(input.value){
        for(var i=0;i<radioBtns.length;i++){
            if(radioBtns[i].checked===true){
            info='"'+input.value+'" is '+radioBtns[i].value;

            break;
            }else{
                info='Please choose type of TO DO list!';
            }
        }
        alert(info);

        if(info!=='Please choose type of TO DO list!'){
            for(var i=0;i<radioBtns.length;i++){
                if(radioBtns[i].checked===true) {
                   var list='ul'+(i+1);
                   var item=document.createElement('li');
                   item.id='li'+(document.getElementById(list).getElementsByTagName('li').length+1);
                   document.getElementById(list).appendChild(item);
                    var checkB = document.createElement('input');
                    checkB.type='checkbox';
                    var newItem=document.createElement('label');
                    newItem.innerHTML=input.value;
                    var btnEdit=document.createElement('button');
                    btnEdit.type='button';
                    btnEdit.className='edit';
                    btnEdit.innerText='E';
                    var btnDel=document.createElement('button');
                    btnDel.type='button';
                    btnDel.className='delete';
                    btnDel.innerText='D';
                    var enter=document.createElement('br')
                    var selector='#'+list+' > '+'#'+item.id;

                    document.querySelector(selector).appendChild(checkB);
                    document.querySelector(selector).appendChild(newItem);
                    document.querySelector(selector).appendChild(btnEdit);
                    document.querySelector(selector).appendChild(btnDel);
                    document.querySelector(selector).appendChild(enter);
                    input.value='';
                }
                }
        }

       } else{
           alert('Please enter thing TO DO');
       }


       //DONE

        for(var i=1;i<=3;i++) {
            var  list = 'ul' + i;
            var selector='#' + list + ' > ' + 'li' + ' > input[type="checkbox"]';

            for(var j=0;j< document.querySelectorAll(selector).length;j++)
                document.querySelectorAll(selector)[j].onchange = function (ev2) {

                    if(ev2.target.checked===true){
                        ev2.target.nextElementSibling.setAttribute('class', 'done');
                    }
                    else{
                        ev2.target.nextElementSibling.removeAttribute('class');
                    }
                }

        }


         //EDIT+DELETE

        if(document.getElementsByTagName('li').length!==0) {
            for (var i = 1; i <= 3; i++) {

                var list = 'ul' + i;


                var deleteBtns = document.getElementById(list).getElementsByClassName('delete');

                for (var j = 0; j < deleteBtns.length; j++) {
                    deleteBtns[j].onclick = function (ev3) {

                        this.parentElement.remove();

                        //БАГ!!! коли в одному рядку видаляє не вірно
                    }
                }

                var editBtns = document.getElementById(list).getElementsByClassName('edit');

                for (var j = 0; j < editBtns.length; j++) {
                    editBtns[j].onclick = function () {

                        var oldText = this.parentElement.getElementsByTagName('label')[0].innerHTML;
                        var newText = prompt('How do you whant to change this?', oldText);
                        if (newText) {
                            this.parentElement.getElementsByTagName('label')[0].innerHTML = newText;
                        }
                        else {
                            this.parentElement.getElementsByTagName('label')[0].innerHTML = oldText;
                        }

                    }
                }


            }
        }

    };

    //REFRESH
    var btnRefresh=[]
    for (var k = 0; k < 3; k++) {
        btnRefresh[k]=document.getElementById('ref' + (k+1));
    }
        for (var l = 0; l < btnRefresh.length; l++) {
            btnRefresh[l].onclick = function () {
                var selector=document.querySelector('#list'+this.id[3]);
                var doneItems = selector.getElementsByClassName('done');

                var massElem = [];

                 if(doneItems.length !== 0) {

                    for (var i = 0; i < doneItems.length; i++) {

                        massElem[i] = doneItems.item(i).parentElement;

                    }

                    for (var j = 0; j < massElem.length; j++) {
                        massElem[j].remove();
                    }

                }


        }
    };

})();