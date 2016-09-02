## alphabetizeObject

This module exports a single function - `alphabetizeObject` to alphabetize keys
of an object.

**returns**: A new object, with keys alphabetized.

**parameters**:
 - `Object object` - object to operate upon
 - `Object opts` - options
     - `Boolean recursive` - if true, alphabetize child object keys recursively
     - `Boolean caseInsensitive` - will treat keys case insensitive in sorting

**Dependencies**: No.

**Support**: This is a lightweight module which I'll likely not be adding any
features to, or accepting PRs. I'll fix bugs for a few months, and accept any
bugfix PRs.

**Dev Deps**: `semistandard` for linting, `mocha` for tests.
