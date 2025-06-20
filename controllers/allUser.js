const usermodel=require('../model/user');
const client = require('../redis/cache');

const allUsers = async (req, res) => {
    const cachedUsers = await client.get('allUsers'); 
    if (cachedUsers) {
        console.log('Cache hit!', cachedUsers);
        return res.json(JSON.parse(cachedUsers));
    }
    const users = await usermodel.find();
    await client.set('allUsers', JSON.stringify(users));
    await client.expire('allUsers', 3600);
    
    res.json(users);
};

module.exports = { allUsers };


