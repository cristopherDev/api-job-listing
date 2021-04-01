require('dotenv').config();

const MGDBURI = process.env.MONGODB_URI;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = {
    MGDBURI,
    config
};
