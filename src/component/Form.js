import React, { useState } from 'react'
import { ADD_DATA } from '../actions/addData'
import { useDispatch } from 'react-redux'
import ShowData from './ShowData'

export default function Form() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()

    const dispatch = useDispatch();

    const addData = () => {
        dispatch(ADD_DATA(name, email, age))
    }

    
    return (
        <>
            <div className='col-sm-6'>
                <form>
                    <div className='col-sm-12'>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={((e) => setName(e.target.value))} placeholder="Name"/>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={((e) => setEmail(e.target.value))} placeholder="Email"/>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" className="form-control" onChange={((e) => setAge(e.target.value))} placeholder="Age"/>
                        </div>
                    </div>
                    
                    <button type="button" className='mt-4 btn btn-danger' onClick={addData}>ADD DATA</button>
                </form>
            </div>
        </>
    )
}
