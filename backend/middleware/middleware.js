const jwt = require("jsonwebtoken");

async function decodeAndVerifyJwtToken(jwtToken) {
  try {
    const decodedToken = jwt.verify(jwtToken, process.env.PEM_PUBLIC_KEY);

    return decodedToken;
  } catch (error) {
    throw new Error("YOur token is expired");
  }
  // return "ASD";
}

async function auth(req, res, next) {
  const jwtToken = req.headers.authorization?.split(" ")[1];

  if (!jwtToken) {
    return res.status(400).json({ message: "No JWT Token found" });
  }

  try {
    const decodedToken = await decodeAndVerifyJwtToken(jwtToken);
    req.user = {
      sub: decodedToken.sub,
      firstName: decodedToken.firstName,
      image: decodedToken.image,
      hasImage: decodedToken.hasImage,
    };
    // console.log(decodedToken);
    next();
  } catch (e) {
    return res.status(400).json({ message: e });
  }
}

module.exports = { auth };
