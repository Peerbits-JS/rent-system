import { Document, Model, Schema, model, DocumentToObjectOptions } from 'mongoose';

export interface IItem {
  name: string;
  rentPrice: number;
  manufactureDate: number;
  price: number;
}

export interface IItemDocument extends IItem, Document {
  toJSON(options?: DocumentToObjectOptions): IItem;
}

export type IItemModel = Model<IItemDocument>;

const schema = new Schema({
  name: { type: String, required: true },
  rentPrice: { type: Number, required: true },
  manufactureDate: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Item: IItemModel = model<IItemDocument, IItemModel>('Item', schema);

export default Item;
