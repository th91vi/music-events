const { events } = require("./data.json");

export default (req, res) => {
  const { method } = req;

  if (method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${method} not allowed.` });
  }
};
