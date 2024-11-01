import { Schema, model, models } from "mongoose";
// Define the user schema
const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email already exists"],
        },
        username: {
            type: String,
            required: [true, "Username is required"],
        },
        image: {
            type: String,
        },
        bookmarks: [
            {
                type: Schema.Types.ObjectId,
                ref: "Property",
            },
        ],
    },
    {
        timestamps: true,
    }
);

// Create a User model from the schema
const User = models.User || model("User", UserSchema);

export default User;
