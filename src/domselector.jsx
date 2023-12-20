document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const tableaux = document.querySelectorAll('.all');
        const tbody = document.querySelectorAll('tbody.tbody');
        const allInput = [];
        tbody.forEach(item => allInput.push(...item.querySelectorAll('input.input-checkbox')));

        tableaux.forEach(item => item.onchange = function(){
            const inputs = [...this.closest('table').querySelector('tbody').querySelectorAll('input.input-checkbox')];
            if(this.checked){
                inputs.map(mesInput => mesInput.checked = true);
            }else{
                inputs.map(mesInput => mesInput.checked = false);
            }
        });

        allInput.map(item =>{
            item.onchange = function(){
                let myTbodyInput = [...this.closest('tbody').querySelectorAll('input.input-checkbox')];
                let option = myTbodyInput.every(listItem => listItem.checked);
                if(option){
                    this.closest('table').querySelector('thead').querySelector('.all').checked = true;
                }else{
                    this.closest('table').querySelector('thead').querySelector('.all').checked = false;
                }
            }
        });
    }, 1000);
})
