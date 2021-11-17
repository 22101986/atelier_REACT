

function User(props) {
    return(
        <article>
            <h3>Nom: {props.lastname}</h3>
            <h3>Prénom: {props.firstname}</h3>
            <ul>
                <li>Age: {props.age}</li>
                <li>job: {props.job}</li>
                <li>hobby: {props.hobby}</li>
                <li>Description: {props.description}</li>
            </ul>
        </article>
    );
}
export default User;