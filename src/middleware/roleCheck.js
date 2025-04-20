
  const roleCheck = (role) => {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied' });
      }
    };
  };
  
  export default roleCheck;