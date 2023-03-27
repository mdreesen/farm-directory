class api {
  static root = `${process.env.NEXT_PUBLIC_MONGODB_DATA_API_URL}/action`;
  static find = this.root + '/find';
  static insertOne = this.root + '/insertOne';
  static updateOne = this.root + '/updateOne';
  static deleteOne = this.root + '/deleteOne';

  static api_key = process.env.NEXT_PUBLIC_MONGODB_DATA_API_KEY;
  static data_src = process.env.NEXT_PUBLIC_MONGODB_DATA_SOURCE;

  static headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': this.api_key,
  };

  static mongo_settings = {
    dataSource: this.data_src,
    database: 'farm_directory',
    collection: 'farmers',
  };
}

export const cfg = {
  api,
};
