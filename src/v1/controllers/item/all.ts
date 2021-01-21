import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../../middleware/handle-error';
import Item from '../../../models/Item';

let all: RequestHandler = async (req, res) => {
  const items = await Item.find();
  res.send({ items });
};

all = handleErrorMiddleware(all);

export default all;
