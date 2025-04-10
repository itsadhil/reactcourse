const Content = () => {
    const handleNameChange = () => {
        const names = ['bob', 'kevin', 'Dave'];
        const int = Math.floor(Math.random()*3);
        return names[int];
}
return (
    <main>
        <p>
        Hello {handleNameChange()}
        </p>
    </main>
) 
}

export default Content