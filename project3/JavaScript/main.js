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

    const buildChartBtn = document.getElementById('buildChartBtn');
    const oyGroup = document.getElementById('oy-group');
    const oyError = document.getElementById('oy-error');

    buildChartBtn.addEventListener('click', () => {
        const xAxis = document.querySelector('input[name="x_axis"]:checked');
        const minPower = document.querySelector('input[name="min_power"]').checked;
        const avgPower = document.querySelector('input[name="avg_power"]').checked;
        const maxPower = document.querySelector('input[name="max_power"]').checked;
        const avgRating = document.querySelector('input[name="avg_rating"]').checked;
        const chartTypeElem = document.querySelector('input[name="chart_type"]:checked');
        
        if (!xAxis) {
            alert("Выберите ось X");
            return;
        }
        
        if (!minPower && !avgPower && !maxPower && !avgRating) {
            const svg = d3.select("svg");
            svg.selectAll("*").remove();
            oyGroup.classList.add("error");
            oyError.style.display = "block";
            oyError.textContent = "Ошибка: Выберите хотя бы одно значение для оси OY!";
            return;
        }
        
        oyGroup.classList.remove("error");
        oyError.style.display = "none";
        oyError.textContent = "";
        
        drawGraph(cars, {
            keyX: xAxis.value,
            showMin: minPower,
            showMax: maxPower,
            showAvg: avgPower,
            showRating: avgRating,
            chartType: chartTypeElem ? chartTypeElem.value : "bar"
        });
    });

    // Скрываем ошибку при изменении чекбоксов
    document.querySelectorAll('input[name="min_power"], input[name="avg_power"], input[name="max_power"], input[name="avg_rating"]').forEach(el => {
        el.addEventListener("change", () => {
            oyGroup.classList.remove("error");
            oyError.style.display = "none";
            oyError.textContent = "";
        });
    });

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

