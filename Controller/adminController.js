import Admin from "../Schema/adminSchema.js";


const addAdmin = async (req, res, next) => {
    const { mobileNo, email } = req.body;
    if (!mobileNo || !email) {
        res.status(400).json({
            success: false,
            message: "All Field Are Required",
        })
    }
    else {
        await Admin.create({ mobileNo, email });
        res.status(200).json({
            success: true,
            message: "Admin Details Succesfully Added",
        })
    }
}

export default addAdmin;