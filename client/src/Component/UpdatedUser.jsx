import React from 'react';

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {
    console.log('UpdatedUser value:', value); // Debugging

    return (
        <>
            <div id="editEmployeeModal" className="modal fade" tabIndex="-1" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="editEmployeeModalLabel">Update Voucher</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="no">No</label>
                                    <input type="number" id="no" value={value.no} name='no' onChange={handlechange} className="form-control" readOnly required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="number" id="amount" value={value.amount} name='amount' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value={value.name} name='name' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input type="date" id="date" value={value.date} name='date' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" value={value.address} name='address' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descOfPayment">Description of Payment</label>
                                    <input type="text" id="descOfPayment" value={value.descOfPayment} name='descOfPayment' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bankAcc">Bank Account</label>
                                    <input type="text" id="bankAcc" value={value.bankAcc} name='bankAcc' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="invoiceNo">Invoice No</label>
                                    <input type="number" id="invoiceNo" value={value.invoiceNo} name='invoiceNo' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="preparedBy">Prepared By</label>
                                    <input type="text" id="preparedBy" value={value.preparedBy} name='preparedBy' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="accounting">Accounting</label>
                                    <input type="text" id="accounting" value={value.accounting} name='accounting' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="approvedBy">Approved By</label>
                                    <input type="text" id="approvedBy" value={value.approvedBy} name='approvedBy' onChange={handlechange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
