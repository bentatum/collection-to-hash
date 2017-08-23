# collection-to-hash

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/collection-to-hash.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/collection-to-hash
[travis-image]: https://img.shields.io/travis/bentatum/collection-to-hash.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/collection-to-hash
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

convert a collection to a hash

## Install

```
yarn add collection-to-hash
```

## API
```js
collectionToHash(array, [getKey], [getValue])
```

### Arguments
collection (Array): the collection to convert
getKey (function): returns the value for the hash key
getValue (function): returns the value for the hash value

## Usage

```js
import collectionToHash from 'collection-to-hash'

const collection = [{ key: 123, ... }, { key: 'abc', ... }]
const hash = collectionToHash(collection, x => x.key, x => omit(x, ['key']))

/*
  {
    123: { ... },
    abc: { ... }
  }
*/
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
