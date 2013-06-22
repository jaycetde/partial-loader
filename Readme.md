
# partial-loader

  Load partials into a DOM element

## Installation

    $ component install JayceTDE/partial-loader

## API

### Partial(el, options)

Constructs a new partial loader

#### Options:

- noCache - Reload the partial on every request

### Partial#get(url, callback)

Load the partial or fetch from the cache

### Partial#page(url)

Middleware for visionmedia/page.js

## License

  MIT
