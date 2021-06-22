var conn=require("../db/mongoose");
const mongoose=require("mongoose");
const valid = require('validator');

const MainSiteUserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			validate: {
				validator: function (v) {
					return valid.isEmail(v);
				},
			},
		},
		password: {
			type: String,
			required: true,
			minLength: [8, 'Password length must be greater than 8'],
		},

		college: {
			type: String,
			trim: true,
			required: [true, 'college missing'],
		},
		phone: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return valid.isMobilePhone(v);
				},
			},
		},
		CA: {
			type: String,
			required: false,
			default: 'NA'
		},
		branch: {
			type: String,
			required: true
		},
		year: {
			type: String,
			required: true
		},
        event:{
            type:String,
            required:true
        },
		tokens:[{token:{
			type:String,
			required:false
		}}],
		score:{
			type:Number,
			required:false
		},
		correctAnswers:{
			type:Number,
			required:false
		},
		incorrectAnswers:{
			type:Number,
			required:false
		},
	},
	{
		timestamps: true,
	}
);

const circuitronMainSiteUser = mongoose.model("main-site-user", MainSiteUserSchema);
const couchPotatoMainSiteUser=conn.couchPotato.model("main-site-user",MainSiteUserSchema);
const xenatusMainSiteUser=conn.xenatus.model("main-site-user",MainSiteUserSchema);
const c2cMainSiteUser=conn.c2c.model("main-site-user",MainSiteUserSchema);

module.exports = {couchPotatoMainSiteUser,circuitronMainSiteUser,xenatusMainSiteUser,c2cMainSiteUser}