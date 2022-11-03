const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { Traveller } = require('./models/index');
const { Trip } = require('./models/index');
const { Location } = require('./models/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/travellers', async (req, res) => {
    try {
      const travellerData = await Traveller.findAll({
        include: [{ model: Location }],
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });