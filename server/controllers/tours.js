import Tour from "../models/tour.js";

export const addTour = async (req, res) => {
  const tour = req.body;
  const newTour = new Tour(tour);

  try {
    await newTour.save();

    res.status(201).json(newTour);
  } catch (error) {
    res.status(409).json({ meesage: error.meesage });
  }
};

export const getTours = async (req, res) => {
  console.log("req.query", req.query);

  try {
    const tours = await Tour.find(req.query);

    res.status(200).json(tours);
  } catch (error) {
    res.status(404).json({ message: error.meesage });
  }
};

export const deleteTour = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No booking with that id");
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully!" });
  } catch (error) {
    res.status(404).json({ message: error.meesage });
  }
};
