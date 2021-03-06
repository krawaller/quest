var _ = require("lodash"),
	constants = require("./../constants");

var Weapons = {
	starter: {
		Sword: require("./weapons/sword.json"),
		Bow: require("./weapons/bow.json"),
		Staff: require("./weapons/staff.json")
	},
	all : {

	}
}

Weapons.all = Object.assign(Weapons.all, Weapons.starter); // Copy all starter weapons into "all"

Weapons.all = _.reduce(Weapons.all, function(ret, data, id) { // Add the fact that they're equippable and of type weapon
	ret[id].equippable = true;
	ret[id].type = constants.WEAPON;
	return ret;
}, Weapons.all);

module.exports = Weapons;