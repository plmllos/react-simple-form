import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState({
        username: '',
        age: '',
        isValidated: false
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value} = event.target
            return {
            ...prevFormData,
            [name]: value
            }
        })
    } 

    function handleForm(event) {
        event.preventDefault()

        if (formData.username && formData.age > 0) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    isValidated: true
                }
            })
        }
    }

    const userData = `${formData.username} (${formData.age} years old)`

    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="username"> Username </label>
                <input 
                    type="text" 
                    id="username"
                    onChange={handleChange}
                    placeholder="Username"
                    name="username"
                    value={formData.username}                    
                />
                <label htmlFor="Age"> Age (Years) </label>
                <input 
                    type="text" 
                    id="age"
                    onChange={handleChange}
                    placeholder="Age"
                    name="age"
                    value={formData.age}                
                />
                <button> Add User </button>
            </form>
            
            {formData.isValidated && <p> {userData} </p>}

        </div>
    )
}