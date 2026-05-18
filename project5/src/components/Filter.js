// src/components/Filter.js (короткая версия)
const Filter = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const filterField = {
            'Модель': event.target.model?.value.toLowerCase() || '',
            'Тип': event.target.type?.value.toLowerCase() || '',
            'Страна': event.target.country?.value.toLowerCase() || '',
            'Привод': event.target.drive?.value.toLowerCase() || '',
            'Мощность': [
                event.target.powerFrom?.value || '',
                event.target.powerTo?.value || ''
            ],
            'Расход': [
                event.target.consumptionFrom?.value || '',
                event.target.consumptionTo?.value || ''
            ],
            'Цена': [
                event.target.priceFrom?.value || '',
                event.target.priceTo?.value || ''
            ],
            'Рейтинг': [
                event.target.ratingFrom?.value || '',
                event.target.ratingTo?.value || ''
            ]
        };

        let arr = [...props.fullData];
        
        for (const key in filterField) {
            const value = filterField[key];

            if (Array.isArray(value)) {
                let [min, max] = value;
                
                if (min === '') min = -Infinity;
                else min = Number(min);

                if (max === '') max = Infinity;
                else max = Number(max);

                arr = arr.filter(item => {
                    const itemValue = Number(item[key]);
                    if (isNaN(itemValue)) return false;
                    return itemValue >= min && itemValue <= max;
                });
            } else if (value && value !== '') {
                arr = arr.filter(item => 
                    String(item[key]).toLowerCase().includes(value)
                );
            }
        }

        props.filtering(arr);
    };

    const handleReset = (event) => {
        event.target.reset();
        props.onFiltersCleared();
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <label>Модель:</label><br />
            <input name='model' type="text" /><br /><br />

            <label>Тип кузова:</label><br />
            <input name='type' type="text" /><br /><br />

            <label>Страна:</label><br />
            <input name='country' type="text" /><br /><br />

            <label>Привод:</label><br />
            <input name='drive' type="text" /><br /><br />

            Мощность (л.с.):<br />
            <label>от <input name='powerFrom' type="number" /></label>
            <label>до <input name='powerTo' type="number" /></label><br /><br />

            Расход (л/100км):<br />
            <label>от <input name='consumptionFrom' type="number" step="any" /></label>
            <label>до <input name='consumptionTo' type="number" step="any" /></label><br /><br />

            Цена (руб):<br />
            <label>от <input name='priceFrom' type="number" /></label>
            <label>до <input name='priceTo' type="number" /></label><br /><br />

            Рейтинг:<br />
            <label>от <input name='ratingFrom' type="number" step="any" /></label>
            <label>до <input name='ratingTo' type="number" step="any" /></label><br /><br />

            <button type="submit">Найти</button>
            <button type="reset">Очистить фильтры</button>
        </form>
    );
};

export default Filter;