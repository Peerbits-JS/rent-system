import mockingoose from 'mockingoose';

import Item from '../../src/models/Item';

describe('test mongoose Item model', () => {
  test('should return the doc with findById', () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      name: 'name',
      author: 'author',
    };

    mockingoose(Item).toReturn(_doc, 'findOne');

    return Item.findById({ _id: '507f191e810c19729de860ea' }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
});
