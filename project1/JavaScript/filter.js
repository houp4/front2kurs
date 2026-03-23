const correspond = {
    "Модель": "model",
    "Тип": "type",
    "Страна": "country",
    "Привод": "drive",
    "Мощность": ["powerFrom", "powerTo"],
    "Расход": ["consumptionFrom", "consumptionTo"],
    "Цена": ["priceFrom", "priceTo"],
    "Рейтинг": ["ratingFrom", "ratingTo"]
}

const dataFilter = (dataForm) => {
    
    let dictFilter = {};

    // перебираем все элементы формы с фильтрами
    for (const item of dataForm.elements) {
        
        // получаем значение элемента
        let valInput = item.value;

        // если поле типа text - приводим его значение к нижнему регистру
        if (item.type === "text") {
            valInput = valInput.toLowerCase();
        } 
        else if (item.type === "number") {
            if (valInput === '') {
                if (item.id.includes('From')) {
                    valInput = -Infinity;
                }
                else if (item.id.includes('To')) {
                    valInput = Infinity;
                }
            } 
            else {
                valInput = Number(valInput);
            }
        }

        // формируем очередной элемент ассоциативного массива
        dictFilter[item.id] = valInput;
    }       
    return dictFilter;
}

const filterTable = (data, idTable, dataForm) =>{
    
    // получаем данные из полей формы
    const datafilter = dataFilter(dataForm);
    
    // выбираем данные соответствующие фильтру и формируем таблицу из них
    let tableFilter = data.filter(item => {

        let result = true;
        
        Object.entries(item).map(([key, val]) => {
            
            // текстовые поля проверяем на вхождение
            if (typeof val == 'string') {
                const filterValue = datafilter[correspond[key]];
                if (filterValue && filterValue !== '') {
                    result &&= val.toLowerCase().includes(filterValue);
                }
            }
            
            // проверяем числовые поля на принадлежность интервалу
            if (typeof val == 'number') {
                if (key === "Мощность") {
                    const from = datafilter['powerFrom'];
                    const to = datafilter['powerTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Расход") {
                    const from = datafilter['consumptionFrom'];
                    const to = datafilter['consumptionTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Цена") {
                    const from = datafilter['priceFrom'];
                    const to = datafilter['priceTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }

                if (key === "Рейтинг") {
                    const from = datafilter['ratingFrom'];
                    const to = datafilter['ratingTo'];
                    if (from !== -Infinity || to !== Infinity) {
                        result &&= (val >= from && val <= to);
                    }
                }
            }
         });

         return result;
    });     

    clearTable(idTable);
    createTable(tableFilter, idTable);  
}

const clearFilter = (idTable, originalData, filterForm) => {

    const elements = filterForm.elements;
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type === 'text' || element.type === 'number') {
            element.value = '';
        }
        
        if (element.tagName === 'SELECT') {
            element.value = '';
        }
    }
    
    clearTable(idTable);
    createTable(originalData, idTable);
}