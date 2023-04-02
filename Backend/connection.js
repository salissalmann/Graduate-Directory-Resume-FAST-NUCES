const { MongoClient } = require('mongodb');

async function connection() 
{
  const uri = 'mongodb+srv://salissalman:Salis2002@resume.tnk3pk7.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try 
  {
        await client.connect();
        console.log('Connected to Database');
        return client.db(); 
  } catch (err) 
  {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
  }
}

module.exports = connection;
