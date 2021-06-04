import content from "../../public/12345.json";

export default (req, res) => {
  res.status(200).json(content);
};
