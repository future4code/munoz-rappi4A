import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeForm = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () => {
        setForm(initialState)
    }

    return{form, setForm, onChangeForm, clearInputs}

}