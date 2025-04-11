import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['bob', 'kevin', 'Dave'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]); 
}


    const handleClick2 = (count) => {
        setCount(count + 1);
        console.log(`${count}`)
}

    const handleClick3 = (e) => {
        console.log(e.target)
}

    const handleClick4 = (e) => {
        console.log(e.target.innerText)
}

return (
    <main>
        <p>
        Hello {name}!
        </p>
        <button onClick={handleNameChange}>Click meh</button>
        <button onClick ={() => handleClick2(count)}>Name Button</button>
        <button onClick ={(e) => handleClick3(e)}>Target Button</button>
        <button onClick ={(e) => handleClick4(e)}>InnerText Target Button</button>

    </main>
) 
}

export default Content