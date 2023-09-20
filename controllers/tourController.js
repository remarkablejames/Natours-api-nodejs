import Tour from "../models/tourModel.js";
export async function getAllTours(req, res) {
    const tours = await Tour.find();
    res.status(200).json({ status: "success",
        results: tours});
}