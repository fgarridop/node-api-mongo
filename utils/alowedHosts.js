// origenes autorizados
exports.AuthHosts = (req, res, next) => {
  const hosts = [];
  if (hosts.indexOf(req.headers.host) >= 0) return next();
  return res.sendStatus(403);
};
