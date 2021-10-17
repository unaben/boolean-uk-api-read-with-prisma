const { prisma } = require("../../utils/database");

function getAll(req, res) {
  console.log({ Pet: prisma.book });
  prisma.book
    .findMany()
    .then((result) => res.json({ data: result }))
    .catch((error) => {
      console.error({ error });

      res.status(500).json({ error: error.message });
    });
}

const getOnePetById = async (req, res) => {
  console.log({params: typeof req.params.id});

  const result = await prisma.pet.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json({ data: result });
};


module.exports = {
  getAll,
  getOnePetById,
 
};
