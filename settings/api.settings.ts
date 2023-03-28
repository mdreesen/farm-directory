import { mongo } from 'settings/mongo.settings';

const settings = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': mongo.api_key,
  },

  body: {
    dataSource: mongo.data_src,
    database: 'farm_directory',
    collection: 'farmers',
  },
};

class local {
  static action = '/action';
  static find = this.action + '/find';
  static insertOne = this.action + '/insertOne';
  static updateOne = this.action + '/updateOne';
  static deleteOne = this.action + '/deleteOne';
}

class route {
  static root = process.env.NEXT_PUBLIC_MONGODB_DATA_API_URL! + '/action';
  static find = this.root + '/find';
  static insertOne = this.root + '/insertOne';
  static updateOne = this.root + '/updateOne';
  static deleteOne = this.root + '/deleteOne';
}

export const api = {
  settings,
  local,
  ...route,
};
