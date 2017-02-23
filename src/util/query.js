const type = {
  string: {conversion: null},
  number: {conversion: null},
  array: {conversion: toQueryString}
};

const typeConfig = {
  type: type.string,
  genre: type.array,
  rated: type.string
};

function toQueryString(array) {
  return array.join(',');
}

function createQuery(data) {
  let query = '?';
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      let type = typeConfig[prop];
      let value;
      if (typeof type.conversion === 'function') {
        value = type.conversion(data[prop]);
      } else {
        value = data[prop];
      }
      query += `${encodeURIComponent(prop)}=${encodeURIComponent(value)}&`
    }
  }
  return query.slice(0, -1);
}

export {
  createQuery
}
