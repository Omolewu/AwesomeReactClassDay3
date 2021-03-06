import { useState, useEffect } from 'react';
const Form = () => {
    const [data, setData] = useState(0);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        // errors: {
        //     lastNameErr: " ",
        //     firstNameErr: "",
        //     userNameErr: "",
        // },
    })

    const [errors, setErrors] = useState({
        lastNameErr: " ",
        firstNameErr: "",
        userNameErr: "",
    });

    const ChangeData = (e) => {
        let value = e.target.value;
        let name = e.target.name
        setUser({
            ...user,
            [name]: value,
        })

    }
    function submitData(event) {
        event.preventDefault();
        if (!user.lastName) {
            setErrors(errors => {
                return {
                    ...errors,
                    lastNameErr: " Your Last name is required",
                }
            })
        }
        if (!user.firstName) {
            // console.log("First Name is required")
            setErrors(errors => {
                return {
                    ...errors,
                    firstNameErr: " Your First name is required",
                }
            })
        }

        if (!user.userName) {
            setErrors(errors => {
                return {
                    ...errors,
                    userNameErr: "User name is required",
                }
            })
        }
    }
    // useEffect(() => {
    //     setData('React is not difficult once you understand Js')
    // }, [])
    return (
        <>
            <div>
                {/* <p>First Name : {user.firstName}</p>
                <p>Last Name : {user.lastName}</p> */}
            </div>
            <form onSubmit={submitData} className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input name="firstName" onChange={ChangeData} type="text" className="form-control" id="validationCustom01" />
                    {errors.firstNameErr}
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input name="lastName" type="text"
                        onChange={ChangeData}
                        className="form-control" id="validationCustom02" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomusername" className="form-label">username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input name="userName"
                            onChange={ChangeData}
                            type="text" className="form-control" id="validationCustomusername" aria-describedby="inputGroupPrepend" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>

            {/* <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input name="firstName" onChange={(e) => setuser({
                        ...user,
                        firstName: e.target.value,
                    })} type="text" className="form-control" id="validationCustom01" defaultValue="Mark" />

                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text"
                        onChange={(e) => setuser({
                            ...user,
                            lastName: e.target.value,
                        })}
                        className="form-control" id="validationCustom02" defaultValue="Otto" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomusername" className="form-label">username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input
                            onChange={}
                            type="text" className="form-control" id="validationCustomusername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form> */}


        </>
    )

}
export default Form;