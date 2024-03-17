const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);

const local = "mongodb://127.0.0.1:27017/MyDatabase";

const atlat = "mongodb+srv://haan04022004:jVIhcZYw29sqTs7s@cluster0.ucz8d2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
    try {
        await mongoose.connect(local, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log({ message: 'connect success' });
    } catch (error) {
        console.log({ message: error });
        console.log({ message: 'connect fail' });
    }
}

module.exports = { connect };