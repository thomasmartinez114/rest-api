module.exports = function(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send('Access denied.');

  next();
};

// 401 Unauthorized
// 403 Forbidden
