# CONTRIBUTING

## License

`parse-tool-versions` is licensed under [The MIT License](LICENSE.md), for all code.

## Reporting a bug

The easiest way to contribute to the project is to report bugs via
[GitHub issues: bug report](https://github.com/paulo-ferraz-oliveira/parse-tool-versions/issues/new?template=bug_report.md).

Some contributors and maintainers may be unpaid developers working on this project, in their own
time, with limited resources. We ask for respect and understanding, and we will provide the same back.

If your contribution is an actual bug fix, we ask you to include/update tests that, not only show
the issue is solved, but help prevent future regressions related to it.

## Requesting or implementing a feature

Before requesting or implementing a new feature, do the following:

- search, in existing [issues](https://github.com/paulo-ferraz-oliveira/parse-tool-versions/issues)
(open or closed), whether the feature might already be in the works, or has already been rejected,
- make sure you're using the latest software release (or even the latest code, if you're going for
_bleeding edge_).

If this is done, open up a
[GitHub issues: feature request](https://github.com/paulo-ferraz-oliveira/parse-tool-versions/issues/new?template=feature_request.md).

We may discuss details with you regarding the implementation, and its inclusion within the project.

We try to have as many of project's features tested as possible. Everything that a user can do,
and is repeatable in any way, should be tested, to guarantee backward compatibility.

## Setting up your environment

The only tool that should be required to submit changes to the project is Node.js.
After you have that installed, and you've cloned the repository locally you should `npm install`
from the root folder of the project. This will install all software (inside `node_modules`)
required for updating the code, testing it, and making sure building a pre- pull request package
is possible.

When your changes are finished execute `npm run dist` and this should do all local checks and
present a message like "Ready for submission!" at the end, for your convenience.

## Submitting your changes

### Code Style

We have formatting set in place for the JavaScript sources, via `npm run prettier`.

As the code will be put under CI, whenever a pull request is submitted, you'll be asked to solve all
issues before we consider the submission for merging to the main branch.

Also, as a general rule, the following applies:

- write small functions, whenever possible,
- use descriptive names for functions and variables
- comment tricky or non-obvious decisions made to explain their rationale

### Committing your changes

Merging to the main branch will usually be preceded by a squash.

While it's Ok (and expected) your commit messages relate to why a given change was made, be aware
that the final commit (the merge one) will be the issue title, so it's important it is as specific
as possible. This will also help eventual automated changelog generation.

**Note**: `npm run dist` will change the contents of the `dist/**` folder/files. You need not
change these by hand (they're just the mechanism we're using to have all of the action in a single
file). In any case, our CI should be comparing the results of executing `npm run dist` and
potential leftover artifacts, to make sure everything's pushed properly.

### Reviewing

It is possible, during the process of reviewing your changes, that a reviewer asks for changes via
a conversation. Do not resolve the conversation even if you think your changes address the
request: the reviewer will do this. We believe this eases the review process.

As a bonus, if you do not squash your changes, force-push, and/or add a comment with a specific
commit link to a requested change that is also very helpful for reviewers and will speed up the
process.

### Credits

`parse-tool-versions` has been improved by
[many contributors](https://github.com/paulo-ferraz-oliveira/parse-tool-versions/graphs/contributors)!
