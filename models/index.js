const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
    through: {model: Trip, unique: false}, 
    as: ''
});

Location.belongsToMany(Traveller, {
    through: {model: Trip, unique: false}, 
    as: ''
});

module.exports = {Traveller, Location, Trip};
