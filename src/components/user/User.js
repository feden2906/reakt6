export default function User({item, history}) {
    let navigate = () => {
        history.push('/users/' + item.id, item)
    };
    return (
        <div>
            {item.name} - <button onClick={navigate}>user details programmaticly</button>
        </div>
    );
}