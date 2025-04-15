import { useState } from 'react';

const Content = () => {
    const [items, setName] = useState([
        {
            id: 1,
            checked: false,
            item: "Chicken"
        },
        {
            id: 2,
            checked: false,
            item: "Beef"
        },
        {
            id: 3,
            checked: false,
            item: "Pork"
        },
        {
            id: 4,
            checked: false,
            item: "Fish"
        },
        {
            id: 5,
            checked: false,
            item: "Vegetarian"
        },
        {
            id: 6,
            checked: false,
            item: "Vegan"
        }
    ]);

return (
    <main>
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <input
                        type = 'checkbox'
                        checked = {item.checked}
                    />
                    <label>{item.item}</label>
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    </main>
) 
}

export default Content