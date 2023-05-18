import { db } from "../../utils/prismaClient";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const data = req.body;

  try {
    const result = await db.user.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
    await db.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while adding a new user." });
    await db.$disconnect();
  }
};
