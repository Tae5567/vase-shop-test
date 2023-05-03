//Create Mongoose schema for Vase Interface
import { Schema, model } from "mongoose";

export interface Vase{
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export const VaseSchema = new Schema<Vase>(
    {
        
        name: {type: String, default: "", require:true},
        price: {type: Number,default: 0, require:true},
        description: {type: String, default: "", require:true},
        imageUrl: {type: String, default: "",  require:true}
    }, 
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
        //override _id in mongo db with id (1, 2, 3...)
    }

    
);

//module.exports = mongoose.model('vase', Vase)
export const  VaseModel = model<Vase>('vase', VaseSchema); 

//CRUD operations to database for product list
/*Idea:
•C(add new vase to product table and reflect addition on homepage/db)
•R(read vase from db/product list/home page and show details)
•U(edit vase, can edit name/price/description/imageURL; and reflect edit on homepage/db)
•D(delete vase from product list and reflect change in db/homepage)
*/
