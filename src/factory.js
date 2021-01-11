const memory = {
  add() {
    Storage.sas;
  },
  get() {},
  delete() {},
};

const api = {
  add() {
    axios.get();
  },
  get() {},
  delete() {},
};

const graphql = {
  add() {
    graphql`
            fsdasdia
        `;
  },
  get() {},
  delete() {},
};

const factory = {
  memory,
  api,
  graphql,
};

const ENV = process.env;

export default (type = ENV) => factory[type];
