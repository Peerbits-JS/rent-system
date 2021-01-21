import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../../middleware/handle-error';
import Item from '../../../models/Item';

/**
 * Builds a mongoose query object to search items according to item name and author name.
 * @param name String containing the item name or part of the item's name
 */
const buildItemSeachQuery = (name: string) => {
  const query: { [key: string]: string | RegExp } = {};
  if (name) {
    query.name = new RegExp(`.*${name}.*`, 'i');
  }

  return query;
};

let get: RequestHandler = async (req, res) => {
  const { name } = req.query;

  const query = buildItemSeachQuery(name.toString());
  const items = await Item.find(query);
  res.send({ items });
};

get = handleErrorMiddleware(get);

export default get;
