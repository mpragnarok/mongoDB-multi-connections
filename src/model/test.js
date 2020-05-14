const { Schema } = require("mongoose");

const testSchema = new Schema({ name: String, email: String });

module.exports = testSchema;
