[![Build Status](https://travis-ci.org/telemark/tfk-generate-unique-filename.svg?branch=master)](https://travis-ci.org/telemark/tfk-generate-unique-filename)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-generate-unique-filename/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-generate-unique-filename?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-generate-unique-filename

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-generate-unique-filename.svg)](https://greenkeeper.io/)
Generates unique filename.

## Usage
Returns uuid. Appends ending if supplied.

```JavaScript
'use strict'

const unique = require('tfk-generate-unique-filename')

console.log(unique('.pdf')) //=> ee0c1878-5810-4682-b77b-30f2875ae460.pdf


console.log(unique()) //=> 6d26360b-e0b7-4953-96ed-4004a2f47454
```

## License
[MIT](LICENSE)