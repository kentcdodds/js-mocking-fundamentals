<h1 align="center">
  JavaScript Mocking Fundamentals
</h1>

<p align="center" style="font-size: 1.2rem;">
  Learn how mocking in JavaScript tests works by implementing them from scratch!
</p>

<hr />

In this material, we have a set of `no-framework` tests that correspond to a set
of jest tests (in the `__tests__` directory). The idea is that (with the
exception of the first test), you look at the jest version first, then see how
that would be implemented without a testing framework.

Order of material:

1.  `monkey-patching.js` (no jest version)
2.  `mock-fn.js`
3.  `spy.js`
4.  `inline-module-mock.js`
5.  `external-mock-module.js`

The files are intended to test the `thumb-war.js` module and mock the `utils`
module.

To run the tests, run `npx jest`. To start watch mode run `npx jest --watch`

## Custom jest runner.

You can definitely run the `no-framework` files just using `node` (like this:
`node src/no-framework/monkey-patching.js`), but in an effort to make running
these easier, I created a custom jest runner that uses jest to run the files,
but allow them to be run without the jest testing framework. It's really cool.
It uses [`create-jest-runner`](https://www.npmjs.com/package/create-jest-runner)
and should probably be published eventually.
