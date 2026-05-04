const Filter = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const filterField = {
            'Название клуба': event.target['clubName']?.value.toLowerCase() || '',
            'Страна': event.target['country']?.value.toLowerCase() || '',
            'Год основания': event.target['year']?.value || '',
            'Число воспитанников академии ФК в основе': [
                event.target['academyFrom']?.value || '',
                event.target['academyTo']?.value || ''
            ],
            'Сезонов в ЛЧ': [
                event.target['championsFrom']?.value || '',
                event.target['championsTo']?.value || ''
            ],
            'Титулы Чемпионата': [
                event.target['titlesFrom']?.value || '',
                event.target['titlesTo']?.value || ''
            ],
            'Вместимость домашнего стадиона, тыс.чел': [
                event.target['stadiumFrom']?.value || '',
                event.target['stadiumTo']?.value || ''
            ]
        };

        let arr = [...props.fullData];
        
        for (const key in filterField) {
            const value = filterField[key];

            if (Array.isArray(value)) {
                let [min, max] = value;
                
                if (min === '') {
                    min = -Infinity;
                } else {
                    min = Number(min);
                }

                if (max === '') {
                    max = Infinity;
                } else {
                    max = Number(max);
                }

                arr = arr.filter(item => {
                    const itemValue = Number(item[key]);
                    if (isNaN(itemValue)) return false;
                    return itemValue >= min && itemValue <= max;
                });
            } else if (key === 'Год основания') {
                if (value !== '') {
                    const year = Number(value);
                    if (!isNaN(year)) {
                        arr = arr.filter(item => Number(item[key]) === year);
                    }
                }
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
            <p>
                <label>Название клуба: </label>
                <input name='clubName' type="text" />
            </p>
            <p>
                <label>Страна: </label>
                <input name='country' type="text" />
            </p>
            <p>
                <label>Год основания: </label>
                <input name='year' type="number" />
            </p>
            <p>
                <label>Число воспитанников академии в основе от: </label>
                <input name='academyFrom' type="number" step="any" />
            </p>
            <p>
                <label>Число воспитанников академии в основе до: </label>
                <input name='academyTo' type="number" step="any" />
            </p>
            <p>
                <label>Сезонов в ЛЧ от: </label>
                <input name='championsFrom' type="number" step="any" />
            </p>
            <p>
                <label>Сезонов в ЛЧ до: </label>
                <input name='championsTo' type="number" step="any" />
            </p>
            <p>
                <label>Титулы чемпионата от: </label>
                <input name='titlesFrom' type="number" step="any" />
            </p>
            <p>
                <label>Титулы чемпионата до: </label>
                <input name='titlesTo' type="number" step="any" />
            </p>
            <p>
                <label>Вместимость стадиона (тыс.чел) от: </label>
                <input name='stadiumFrom' type="number" step="any" />
            </p>
            <p>
                <label>Вместимость стадиона (тыс.чел) до: </label>
                <input name='stadiumTo' type="number" step="any" />
            </p>
            <p>
                <button type="submit">Найти</button>
                <button type="reset">Очистить фильтры</button>
            </p>
        </form>
    );
};

export default Filter;