function Light() {
    const [count, setCount] = useState(0);

    function lighter() {}

    return( <article class="container bg-dark">
        <button class="btn btn-dark" onClick={lighter}>allumer</button>
        </article>
         );
}
export default Light;