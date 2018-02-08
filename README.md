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

## Tip Jar
BTC 33dgdBhV1Yf5ERKLLKS7ztEAEEx3zTvSkw
ETH 0xa6938ead6d6820377fed78b657e4eb6c5c44d1b3

## Install

```
yarn add collection-to-hash
```

## API
```js
collectionToHash(array, string|function|optional|default:'key', string|function|optional)
```

## Usage

```js
import collectionToHash from 'collection-to-hash'

const collection = [{ key: 123, ... }, { key: 'abc', ... }]
const hash = collectionToHash(collection)
// const hash = collectionToHash(collection, 'key')
// const hash = collectionToHash(collection, x => x.key)
// const hash = collectionToHash(collection, 'key', x => x)

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
