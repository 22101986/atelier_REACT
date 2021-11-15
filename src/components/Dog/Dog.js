function Dog(props) {
    return (
        <article>
            <h3>Nom: {props.name}</h3>
            <ul>
                <li>Age: {props.age}</li>
                <li>Sexe: {props.sexe}</li>
            </ul>
        </article>
    )
}
export default Dog;