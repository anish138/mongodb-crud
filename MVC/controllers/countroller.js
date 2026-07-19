const User = require("../models/user")


//GET ALL USERS

const getusers = async (req, res) => {

    try {
        const users = await User.find()
        res.status(200).json({
            message: "data get",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            
            message: error.message
        })
    }
}


// CREATE USERS

const postusers = async (req, res) => {

    try {
        const users = await User.create(req.body);
        res.status(201).json({
            message: "user created successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            
            message: error.message
        });
    }
};


// UPDATE USERS

const putusers = async (req, res) => {

    try {
        const id = Number(req.params.id)
        const user = await User.updateOne({ id:id }, { $set: req.body });
        res.status(200).json({
            message: "User updated successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
           
            message: error.message
        });
    }
};



//PATCH USER

const patchusers = async (req, res) => {

    try {
        const user = await User.updateOne( { id: req.params.id }, { $set: {name:req.body.name} } );
        res.status(200).json({
            message: "User patched successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELET USER

const deleteusers = async (req, res) => {

    try {
        const user = await User.deleteOne({ id: req.params.id});
        res.status(200).json({
            message: "User deleted successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};




module.exports = { getusers, postusers,putusers,patchusers,deleteusers };
