import '../styles/Categories.css'
const Categories = ({catList, onChange, selected}) => {
    return (
        <div className='jh-categories'>
        <select 
        className='jh-categories-select'
        values={selected}
        onChange={(e) => onChange(Array.from(e.target.selectedOptions, option => option.value))}
        multiple>
            {catList.map((cat, index) =><option key={`${cat}-${index}`} value={cat}>{cat}</option>)}
        </select>
        </div>
    )
}

export default Categories