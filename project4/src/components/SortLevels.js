import { useEffect, useState } from "react";

const SortLevels = (props) => {
    const columns = props.columns || [];
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [v3, setV3] = useState("");
    const [d1, setD1] = useState(false);
    const [d2, setD2] = useState(false);
    const [d3, setD3] = useState(false);

    useEffect(() => {
        if (!v1) {
            setV2("");
            setV3("");
        }
    }, [v1]);

    useEffect(() => {
        if (!v2) {
            setV3("");
        }
    }, [v2]);

    const parseNumber = (v) => {
        if (v == null) return NaN;
        const n = Number(String(v));
        return Number.isFinite(n) ? n : NaN;
    };

    const toLower = (v) => (v == null ? "" : String(v)).toLowerCase();

    const compareValues = (a, b, key) => {
        const numericKeys = [
            "Год основания",
            "Число воспитанников академии ФК в основе",
            "Сезонов в ЛЧ",
            "Титулы Чемпионата",
            "Вместимость домашнего стадиона, тыс.чел"
        ];
        
        if (numericKeys.includes(key)) {
            const na = parseNumber(a[key]);
            const nb = parseNumber(b[key]);
            return na - nb;
        }
        return toLower(a[key]).localeCompare(toLower(b[key]), "ru");
    };

    const applySorting = (items, sortLevels) => {
        if (!sortLevels || !sortLevels.length) return [...items];
        const arr = [...items];
        arr.sort((a, b) => {
            for (const lvl of sortLevels) {
                const c = compareValues(a, b, lvl.key);
                if (c !== 0) return lvl.desc ? -c : c;
            }
            return 0;
        });
        return arr;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const levels = [];
        
        if (v1) {
            levels.push({ key: v1, desc: d1 });
        }
        if (v2) {
            levels.push({ key: v2, desc: d2 });
        }
        if (v3) {
            levels.push({ key: v3, desc: d3 });
        }
        
        const sorted = applySorting(props.currentData || [], levels);
        props.onApply(sorted);
    };

    const handleReset = () => {
        setV1("");
        setV2("");
        setV3("");
        setD1(false);
        setD2(false);
        setD3(false);
        props.onApply(props.currentData || []);
    };

    const getOptions = (excludeColumns) => {
        return columns
            .filter(col => !excludeColumns.includes(col))
            .map(col => (
                <option key={col} value={col}>
                    {col}
                </option>
            ));
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Первый уровень: </label>
                <select
                    name="sort1"
                    value={v1}
                    onChange={(e) => setV1(e.target.value)}
                >
                    <option value="">Нет</option>
                    {getOptions([])}
                </select>
                <label> по убыванию? </label>
                <input
                    type="checkbox"
                    name="sorting1"
                    checked={d1}
                    disabled={!v1}
                    onChange={(e) => setD1(e.target.checked)}
                />
            </p>
            <p>
                <label>Второй уровень: </label>
                <select
                    name="sort2"
                    value={v2}
                    disabled={!v1}
                    onChange={(e) => setV2(e.target.value)}
                >
                    <option value="">Нет</option>
                    {getOptions(v1 ? [v1] : [])}
                </select>
                <label> по убыванию? </label>
                <input
                    type="checkbox"
                    name="sorting2"
                    checked={d2}
                    disabled={!v1 || !v2}
                    onChange={(e) => setD2(e.target.checked)}
                />
            </p>
            <p>
                <label>Третий уровень: </label>
                <select
                    name="sort3"
                    value={v3}
                    disabled={!v2}
                    onChange={(e) => setV3(e.target.value)}
                >
                    <option value="">Нет</option>
                    {getOptions(v1 && v2 ? [v1, v2] : v1 ? [v1] : [])}
                </select>
                <label> по убыванию? </label>
                <input
                    type="checkbox"
                    name="sorting3"
                    checked={d3}
                    disabled={!v2 || !v3}
                    onChange={(e) => setD3(e.target.checked)}
                />
            </p>
            <p>
                <button type="submit">Сортировать</button>
                <button type="button" onClick={handleReset}>
                    Сбросить сортировку
                </button>
            </p>
        </form>
    );
};

export default SortLevels;