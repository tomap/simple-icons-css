This is a CSS for [simple-icons](https://github.com/simple-icons/simple-icons) SVGs

[![Build Status](https://img.shields.io/travis/tomap/simple-icons-css)](https://travis-ci.org/tomap/simple-icons-css)
[![npm version](https://img.shields.io/npm/v/simple-icons-css.svg)](https://www.npmjs.com/package/simple-icons-css)

# Usage

The CSS file looks like:
```
/*simple-icon css*/
.si-500px{background:url(500px.svg)}
.si-aboutme{background:url(aboutme.svg)}
```
and is available at ``dist/simple-icons.css``

You can use it like this:
```
<style>
    .si{
        display: block;
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
    }
</style>
<i class="si si-500px"></i>
```
Notice that the CSS does not include anything besides the ``background:url()``, it's up to you to add the relevant css to display it nicely

## CDN

You can grab the CSS from jsDelivr: 
https://cdn.jsdelivr.net/npm/simple-icons-css
or 
https://cdn.jsdelivr.net/npm/simple-icons-css/dist/simple-icons.css

# Build

It is build with Travis CI 


# License
CC0 See [License.md]