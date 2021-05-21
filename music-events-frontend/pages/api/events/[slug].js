const { events } = require("./data.json");

export default (req, res) => {
  const { method } = req;
  const { slug } = req.query;

  const eventItem = events.filter((item) => item.slug === slug);

  if (method === "GET") {
    res.status(200).json(eventItem);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${method} not allowed.` });
  }
};
