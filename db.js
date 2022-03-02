const mongoose = require("mongoose");
module.exports.dbConnect = async () => {
	try {
		const connectionParams = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
    	// await mongoose.connect(process.env.MONGO_URI);
		await mongoose.connect(process.env.DB_URI)
		console.log("Connected to DB");
	} catch (error) {
		console.error("an error occurred while connecting to the database");
		console.error(error.message);
		console.error(error.message);
	}
};