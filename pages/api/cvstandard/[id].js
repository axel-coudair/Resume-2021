import one from "../../../public/12345.json";
import two from "../../../public/54321.json";

export default (req, res) => {
  const userId = req.query.id;
  res.status(200).json(userId == "12345" ? one : two);
};
