import React from 'react'
import { useEffect, useState} from 'react'
import {getUserID} from "../../Functions/authFunction"
import axios from "axios"

const WelcomePage = () =>{
    const [name,setname] = useState("")
    const [amount,setamount] = useState("")
    const [category,setcategory] = useState("")
    const [description,setdescription] = useState("")
    const [categories, setcategories] = useState([])

    useEffect(
        ()=>{
            axios.get("http://localhost:8080/category/all")
                .then(
                    (res)=> setcategories(res.data)
                ).catch(
                    (err)=>console.log(err)
                )
        },[]
    )

    const clicked= (e) =>{
        e.preventDefault()
        axios.post(
            'http://localhost:8080/expense',{
                name:name,
                description:description,
                category : category,
                amount : parseInt(amount),
                user : getUserID()
            }
        ).then(
            (data) => console.log(data)
        ).catch(
            (err)=> console.log(err)
        )
    }

    return(
        <>
        <div className='add_expense'>
            <h1>Add an expense</h1>
            <form onSubmit={clicked}>
                <div className=''>
                    <label>Name</label>
                    <input type="text" required={true} onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className=''>
                    <label>Amount</label>
                    <input type="number" required={true} onChange={(e)=>setamount(e.target.value)}/>
                </div>
                <div className=''>
                    <label>Category</label>
                    <select
                        value={category}
                        onChange={(e)=>setcategory(e.target.value)}
                    >
                        <option></option>
                        {
                            categories.map(
                                (category, index) =>{
                                    return (
                                        <option key={index} value={category._id}> {category.name}</option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
                <div className=''>
                    <label>Description</label>
                    <textarea
                        onChange={(e)=>setdescription(e.target.value)}
                    ></textarea>
                </div>

                <input type="submit" value="submit"/>
            </form>
        </div>

        </>
    )
}

export default WelcomePage