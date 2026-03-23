document.addEventListener("DOMContentLoaded", function() {

    createTable(cars, 'list');

    const filterForm = document.getElementById('filter-form');
    const sortForm = document.getElementById('sort-form');

    const findButton = filterForm.querySelector('input[value="Найти"]');
    const clearButton = filterForm.querySelector('input[value="Очистить фильтры"]');
    const sortButton = sortForm.querySelector('input[value="Сортировать"]');
    const resetSortButton = sortForm.querySelector('input[value="Сбросить сортировку"]');

    setSortSelects(cars[0], sortForm);

    const firstSortSelect = sortForm.querySelector('select');
    const secondSortSelect = document.getElementById('sort2');
    const thirdSortSelect = document.getElementById('sort3');

    firstSortSelect.addEventListener('change', function() {
        changeNextSelect(this, 'sort2');
    });

    secondSortSelect.addEventListener('change', function() {
        changeNextSelect(this, 'sort3');
    });

    findButton.addEventListener('click', function() {
        resetSort('list', sortForm, filterForm, cars);
    });

    clearButton.addEventListener('click', function() {
        resetSort('list', sortForm, filterForm, cars);
        clearFilter('list', cars, filterForm);
    });

    sortButton.addEventListener('click', function() {
        filterTable(cars, 'list', filterForm);
        sortTable('list', sortForm);
    });

    resetSortButton.addEventListener('click', function() {
        resetSort('list', sortForm, filterForm, cars);
    });
    
});

// формирование полей элемента списка с заданным текстом и значением
const createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

// формирование поля со списком 
const setSortSelect = (arr, sortSelect) => {
    
    // создаем OPTION Нет и добавляем ее в SELECT
    sortSelect.append(createOption('Нет', 0));
    // перебираем массив со значениями опций
    arr.forEach((item, index) => {
        // создаем OPTION из очередного ключа и добавляем в SELECT
        sortSelect.append(createOption(item, index + 1));
    });
}

// формируем поля со списком для многоуровневой сортировки
const setSortSelects = (data, dataForm) => { 

    // выделяем ключи словаря в массив
    const head = Object.keys(data);

    // находим все SELECT в форме
    const allSelect = dataForm.getElementsByTagName('select');
    
    for(const item of dataForm.elements){
        if (item.tagName === 'SELECT') {
            // формируем очередной SELECT
            setSortSelect(head, item);
            
            // все SELECT, кроме первого, сделать неизменяемым
            if (item !== allSelect[0]) {
                item.disabled = true;
            }
        }
    }
}

const resetNextSelects = (startIndex) => {
    const allSelects = document.getElementById('sort-form').getElementsByTagName('select');
    
    for (let i = startIndex + 1; i < allSelects.length; i++) {
        allSelects[i].value = 0;          
        allSelects[i].disabled = true; 
    }
};

const changeNextSelect = (curSelect, nextSelectId) => {
    let nextSelect = document.getElementById(nextSelectId);
    if (!nextSelect) return;
    
    const allSelects = document.getElementById('sort-form').getElementsByTagName('select');
    let currentIndex = 0;
    for (let i = 0; i < allSelects.length; i++) {
        if (allSelects[i] === curSelect) {
            currentIndex = i;
            break;
        }
    }

    if (curSelect.value == 0) {
        nextSelect.disabled = true;
        nextSelect.value = 0;
        resetNextSelects(currentIndex);
        return;
    }

    nextSelect.disabled = false;
    nextSelect.innerHTML = curSelect.innerHTML;

    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.value);
    }

    resetNextSelects(currentIndex + 1);
};