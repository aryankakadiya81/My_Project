
function card() {


    let obj = [
        {
            Name: "Chaman lal",
            Email: "chaman@gmail.com",
            Qualification: "10th Pass",
            Contect: "9876543201",
            Address: "Bihar"
        },
        {
            Name: "Alia Bhatt",
            Email: "aliabhatt@gmail.com",
            Qualification: "10th fail",
            Contect: "9988223344",
            Address: "Mumbai"
        },
        {
            Name: "Wang zu",
            Email: "wangzu@gmail.com",
            Qualification: "BA",
            Contect: "9988227644",
            Address: "Mumbai"
        },
        {
            Name: "Devendra Mishra",
            Email: "mishra@gmail.com",
            Qualification: "No",
            Contect: "9900227644",
            Address: "Haryana"
        },
        {
            Name: "Pappu(Rahul gandhi)",
            Email: "pappugandhi@gmail.com",
            Qualification: "LLB",
            Contect: "9987227644",
            Address: "Godhara"
        },
        {
            Name: "Unknown Person",
            Email: "???????",
            Qualification: "-",
            Contect: "-",
            Address: "-"
        },
        {
            Name: "Unknown Person",
            Email: "???????",
            Qualification: "-",
            Contect: "-",
            Address: "-"
        }
    ];

    return (

        <>
        <div classNameName="row mt-5 mx-3" id="maindiv">
            {/* <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: {obj[0].Name} </li>
                    <li className="list-group-item">Email: {obj[0].Email}</li>
                    <li className="list-group-item">Qualification: {obj[0].Qualification}</li>
                    <li className="list-group-item">Contect: {obj[0].Contect}</li>
                    <li className="list-group-item">Address: {obj[0].Address}</li>


                </ul>
            </div> */}
            
        </div>
        </>

    )
}


export default card