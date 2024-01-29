# Semantic Versioning & Releases

## Releases

A software or app is initially released or updated in chunks.

These chunks are called Releases or Versions.

These releases/versions can be named 0.0.0, 1.0.0, 2.4.1, 3.5.1-alpha, 4.0.5-beta, etc.

The numbering isn't random, but follow a specific pattern called Semantic Versioning.

## Semantic Versioning

[Source](https://semver.org/)

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes

_This means that 1.0.0 implements changes that makes anything that runs 0.x.x incompatible/breaking_

- MINOR version when you add functionality in a backward compatible manner

_This means that anyone upgrading from 0.0.x to 0.1.0, to gain new features, will not have anything breaking or be incompatible_

- PATCH version when you make backward compatible bug fixes

_This means that upgrading from 0.0.0 to 0.0.1 will only fix bugs, and not break or be incompatible with previous version_

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

_These 'pre-release' labels are a series of dot separated identifiers added after the patch version, prefixed with a hyphen, for example 0.0.1-alpha, 0.0.1-beta, 0.0.1-x.y.z-0.1.2, etc_

### More about pre-release labels

Pre-release labels must only be including ASCII alphanumerics and hyphens (0-9A-Za-z-).

It means that it could be any numbers or letters, in any order that makes sense to the developer.

The only thing is that the precedence for the pre-release labels are determined by ASCII & lexicographic order.

ASCII order means that lowercase letters < uppercase letters < digits.

Lexicograpic order is an arrangement of characters, words, or numbers in alphabetical order like a < ab < b < b1.

For example: 1.0.0-a < 1.0.0-b < 1.0.0-A < 1.0.0-0 < 1.0.0-0a <1.0.0-0ab < 1.0.1

You can also append a `+` (plus) sign to the end of the pre-release labels, followed by a series of dot separated identifiers to indicate build.

These identifiers must also only include ASCII alphanumerics and hyphens (0-9A-Za-z-).

Note though that two versions that differ only in the build, have the same precedence.

For example: 1.0.0-a+001 < 1.0.0-b+001 = 1.0.0-b+002 < 1.0.0-c+20130313144700 < 1.0.0+21AF26D3----117B344092BD
