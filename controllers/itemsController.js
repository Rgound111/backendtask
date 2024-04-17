import ItemsSchema from '../models/userItems.js'

export const addItemsController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.send({ message: "name is required" });
        }

        const items = await ItemsSchema.findOne({ name })

        if (items) {
            return res.status(400).send({
                success: false,
                message: "The product is already in the list"
            })
        }

        const product = await ItemsSchema({ name }).save();

        return res.status(201).send({
            success: true,
            message: "Product added successfully",
            product
        })

    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Error in Adding Items"
        })
    }
}

export const getItemsController = async (req,res)=>{
    try {
        const products = await ItemsSchema.find({})

        if(!products){
            return res.status(400).send({
                success: false ,
                message : "There are no Products in List "
            })
        }

        res.status(200).send({
            success: true,
            message: "Product fetched Successfully",
            products
        })

    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message : "Error in getting Products"
        })
    }
}