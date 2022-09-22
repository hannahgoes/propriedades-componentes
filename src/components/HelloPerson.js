function HelloPerson(props){
    return(
        <div>
            <p> Salve! {props.person.name} {props.person.surname}</p>
        </div>
    )
}

export default HelloPerson 