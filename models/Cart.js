const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
      quantity: { type: Number, required: true, min: 1, default: 1 } // ✅ Add quantity per cart item
    }
  ],
  totalPrice: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema);
