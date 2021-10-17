const { prisma } = require("../../utils/database");

function getAll(req, res) {
  console.log({ Book: prisma.book });
  prisma.book
    .findMany()
    .then((result) => res.json({ data: result }))
    .catch((error) => {
      console.error({ error });

      res.status(500).json({ error: error.message });
    });
}

const getOneBookById = async (req, res) => {
  console.log({params: typeof req.params.id});
  try{
  const result = await prisma.book.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  })
  res.json({ data: result });
} catch (error) {
  console.error("[ERROR] getOneBookById: ", { error })

  res.json({ error })
} 
};

const getBooksByTypeFiction = async (req, res) => {
  console.log({ paramsFiction: req.params.fiction});

  const fictionBooks = "fiction"
try{
  const result = await prisma.book.findMany({
   where: {
     type : fictionBooks
   }, 
  })
  res.json({ data: result});
} catch (error) {
  console.error("[ERROR] getBooksByTypeFiction: ", { error })

  res.json({ error })
} 
};

const getBooksByTypeNonFiction = async (req, res) => {
 
 try{
 const result = await prisma.book.findMany({
   where: {
     type:  'non-fiction'
   },
 })
 res.json({ data: result})
} catch (error) {
  console.error("[ERROR] getBooksByTypeNonFiction: ", { error })

  res.json({ error })
}
};

const getFictionBooksByTopic = async (req, res) => {
  try{
    const result = await prisma.book.findMany({
      where: {
        type: 'fiction',
        topic: req.params.topic
      },
    })
    res.json({ data: result})
  } catch (error) {
    console.error("[ERROR] getFictionBooksByTopic: ", { error })
  
    res.json({ error })
  }
};

const getNonFictionBooksByTopic = async (req, res) => {
  try{
    const result = await prisma.book.findMany({
      where: {
        type: 'non-fiction',
        topic: req.params.topic
      }
    })
    res.json({ data: result})
  } catch (error) {
    console.error("[ERROR] getNonFictionBooksByTopic: ", { error })
  
    res.json({ error })
  }
}

module.exports = {
  getAll,
  getOneBookById,
  getBooksByTypeFiction,
  getBooksByTypeNonFiction,
  getFictionBooksByTopic,
  getNonFictionBooksByTopic
};
