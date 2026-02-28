function verifyAdmin(req, res, next) {
    const { adminPassword } = req.body;
  
    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(403).render("partials/403");
    }
  
    next();
  }
  
  module.exports = verifyAdmin;