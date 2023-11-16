const user=require('../model/user')
module.exports.createUser = async (req, res) => {
    try {
      const userData = req.body;
  
      // Check if the user with the same email already exists
      const existingUser = await user.findOne({ email: userData.email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create a new user document
      const newUser = new user(userData);
  
      // Save the new user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'User creation failed' });
    }
  };
  