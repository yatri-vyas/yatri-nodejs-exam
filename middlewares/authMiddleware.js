const authMiddleware = (req, res, next) => {
   try {
    const bareer = req.headers.authorization;
    if(!bareer || !bareer.startsWith("Bearer ")){
        return res.status(400).json({ message: "Authorization token is missing or invalid" });
    }
    const token = bareer.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
   } catch (error) {

    if(error.name === "tokenExpiredError"){
        return res.status(400).json({ message: "Token Expired" });
    }
        console.log(error.message);
        return res.status(400).json({ message: "something is wrong" });
   }
}
