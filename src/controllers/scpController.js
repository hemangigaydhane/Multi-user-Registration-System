

  export const getDashboard = async (req, res) => {
    try {
      res.json({ message: 'SCP Dashboard' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };