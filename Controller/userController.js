import User from "../Schema/userSchema.js";


export const deleteUser = async(req, res, next) => {
    const { name } = req.body; 

    try {
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Username is required to delete user",
            });
        }

        // Find and delete the user by name
        const user = await User.findOneAndDelete({ name });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            deletedUser: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};





