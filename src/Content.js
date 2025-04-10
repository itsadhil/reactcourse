const Content = () => {
    const handleNameChange = () => {
        const names = ['bob', 'kevin', 'Dave'];
        const int = Math.floor(Math.random()*3);
        return names[int];
}

    const handleClick = () => {
        alert(`Hello ${handleNameChange()}`);
}

return (
    <main>
        <p>
        Hello {handleNameChange()}
        </p>
        <button onClick={handleClick}>Click meh</button>
    </main>
) 
}

export default Content