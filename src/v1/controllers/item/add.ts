import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../../middleware/handle-error';
import Item from '../../../models/Item';

let add: RequestHandler = async (req, res) => {
  const { name, rentPrice, manufactureDate, price } = req.body;

  const item = new Item({ name, rentPrice, manufactureDate, price });
  await item.save();

  res.send({
    message: `Saved`,
    item: item.toJSON(),
  });
};

add = handleErrorMiddleware(add);

export default add;
