// origenes autorizados
exports.AuthHosts = (req, res, next) => {
  const hosts = ["localhost:5252", "http://localhost"];
  if (hosts.indexOf(req.headers.host) >= 0) return next();
  return res.sendStatus(403);
};
