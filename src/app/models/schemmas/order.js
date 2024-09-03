import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        name: {
            type: String,
            required: true
        }
    },
    products: [
        {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            quantity: {
                type: String,
                required: true
            }
        }
    ],
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Colocando timestamps dentro das opções do esquema
});

export default mongoose.model('Order', OrderSchema);
