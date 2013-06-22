var request = require('superagent');

function Partial(el, options) {
    
    this._el = el;
    this.options = options || {};
    this._cache = {};
    
}

Partial.prototype.get = function (url, callback) {
    var self = this
      , el = self._el
      , noCache = self.options.noCache
      , cache = self._cache
    ;
    
    if (!noCache && cache[url]) {
        if (el) {
            el.innerHTML = cache[url];
        }
        return callback && callback(null, cache[url]);
    }
    
    request.get(url, function (err, res) {
        if (!err) {
            if (!noCache) {
                cache[url] = res.text;
            }
            if (el) {
                el.innerHTML = res.text;
            }
        }
        callback && callback(err, res.text);
    });
};

Partial.prototype.page = function (url) {
    var self = this;
    
    return function (ctx, next) {
        self.get(url, function (err, partial) {
            if (err) {
                return console.error(err);
            }
            ctx.partial = partial;
            next();
        });
    };
};

module.exports = Partial;