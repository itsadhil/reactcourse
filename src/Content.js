import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
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

    const handleCheck = (id) => {
        const listitems = items.map((item) => item.id === id ? { ...item,
        checked: !item.checked } : item);
        setItems(listitems);
        }
    

return (
    <main>
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <input
                        type = 'checkbox'
                        onChange={() => handleCheck(item.id)}
                        checked = {item.checked}
                    />
                    <label>{item.item}</label>
                    <FaTrashAlt role='button' tabIndex="0"/>
                </li>
            ))}
        </ul>
    </main>
) 
}

export default Content