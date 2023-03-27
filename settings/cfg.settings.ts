class mongo {
  static api_key = process.env.NEXT_PUBLIC_MONGODB_DATA_API_KEY!;
  static data_src = process.env.NEXT_PUBLIC_MONGODB_DATA_SOURCE!;
}

const api_settings = {
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

class api_local {
  static action = '/action';
  static find = this.action + '/find';
  static insertOne = this.action + '/insertOne';
  static updateOne = this.action + '/updateOne';
  static deleteOne = this.action + '/deleteOne';
}

class api {
  static settings = api_settings;

  static root = process.env.NEXT_PUBLIC_MONGODB_DATA_API_URL! + '/action';
  static find = this.root + '/find';
  static insertOne = this.root + '/insertOne';
  static updateOne = this.root + '/updateOne';
  static deleteOne = this.root + '/deleteOne';

  static local = api_local;
}

export const cfg = {
  api,
};
