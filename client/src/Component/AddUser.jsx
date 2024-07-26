import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AddUser() {
    const [value, setValue] = useState({
        no: '',
        amount: '',
        name: '',
        date: '',
        address: '',
        descOfPayment: '',
        bankAcc: '',
        invoiceNo: '',
        preparedBy: '',
        accounting: '',
        approvedBy: '',
    })

    // Function to generate the 'no' value
    const generateNo = () => {
        const date = new Date()
        const year = date.getFullYear().toString().slice(-2)
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day = ('0' + date.getDate()).slice(-2)
        const randomIncrement = Math.floor(1000 + Math.random() * 9000)
        return `${year}${month}${day}${randomIncrement}`
    }

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]
        setValue(prevValue => ({
            ...prevValue,
            date: today,
            no: generateNo()
        }))
    }, [])

    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const adduser = await axios.post('http://localhost:8000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-6">
                                <h4 className="text-xl font-semibold mb-2">Add Voucher</h4>
                                <button type="button" className="text-gray-400 hover:text-gray-600" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="space-y-4">
                                <input type="hidden" value={value.no} name='no' />
                                <input type="hidden" value={value.date} name='date' />
                                <div className="form-group">
                                    <label className="block text-gray-700">Amount</label>
                                    <input type="number" value={value.amount} name='amount' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Payment to</label>
                                    <input type="text" value={value.name} name='name' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Address</label>
                                    <input type="text" value={value.address} name='address' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Description of Payment</label>
                                    <input type="text" value={value.descOfPayment} name='descOfPayment' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Bank Account</label>
                                    <input type="text" value={value.bankAcc} name='bankAcc' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Invoice No</label>
                                    <input type="number" value={value.invoiceNo} name='invoiceNo' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Prepared By</label>
                                    <input type="text" value={value.preparedBy} name='preparedBy' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Accounting</label>
                                    <input type="text" value={value.accounting} name='accounting' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="form-group">
                                    <label className="block text-gray-700">Approved By</label>
                                    <input type="text" value={value.approvedBy} name='approvedBy' onChange={handleOnchange} className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-4">
                                <button type="button" className="btn btn-default py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
