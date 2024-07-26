import usermodel from "../models/User.js";

// Create User
const create = async (req, res) => {
  try {
    const { no, vn, name, amount, date, address, descOfPayment, bankAcc, invoiceNo, preparedBy, accounting, approvedBy } = req.body;
    
    // Validate input
    if (!no || !name || !amount) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const Newuser = new usermodel({
      no, vn, name, amount, date, address, descOfPayment, bankAcc, invoiceNo, preparedBy, accounting, approvedBy
    });
    
    await Newuser.save();
    res.status(200).json({ success: true, message: "User Created Successfully.", Newuser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Read Users
const get = async (req, res) => {
  try {
    const users = await usermodel.find();
    
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: "No users found" });
    }

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update User
const Updated = async (req, res) => {
  try {
    const userId = req.params.id;
    
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const updateuser = await usermodel.findByIdAndUpdate(userId, req.body, { new: true });
    
    if (!updateuser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete User
const Delete = async (req, res) => {
  try {
    const userId = req.params.id;
    
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const deletuser = await usermodel.findByIdAndDelete(userId);
    
    if (!deletuser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { create, get, Updated, Delete };
