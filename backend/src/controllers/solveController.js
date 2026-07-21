export const solveCube = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Solve API working",
    data: {
      solution: [],
    },
  });
};