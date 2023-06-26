# parse-tool-versions

[![MacOS][macos-ci-img]][macos-ci-link] [![Ubuntu][ubuntu-ci-img]][ubuntu-ci-link] [![Windows][windows-ci-img]][windows-ci-link]

[macos-ci-img]: https://github.com/paulo-ferraz-oliveira/parse-tool-versions/actions/workflows/macos-ci.yml/badge.svg
[macos-ci-link]: https://github.com/paulo-ferraz-oliveira/parse-tool-versions/actions/workflows/macos-ci.yml
[ubuntu-ci-link]: https://github.com/paulo-ferraz-oliveira/parse-tool-versions/actions/workflows/ubuntu-ci.yml
[ubuntu-ci-img]: https://github.com/paulo-ferraz-oliveira/parse-tool-versions/actions/workflows/ubuntu-ci.yml/badge.svg
[windows-ci-link]: https://github.com/paulo-ferraz-oliveira/parse-tool-versions/actions/workflows/windows-ci.yml
[windows-ci-img]: https://github.com/paulo-ferraz-oliveira/parse-tool-versions/actions/workflows/windows-ci.yml/badge.svg

This GitHub action parses a `.tool-versions` file (as
[specified by `asdf`](https://asdf-vm.com/manage/configuration.html)), found at the root folder of
your GitHub repository, reads the versions declared therein and makes them available as step
outputs variables.

## Usage

Include, in your GitHub actions' workflows,

```yaml
      - uses: paulo-ferraz-oliveira/parse-tool-versions@v1
        id: tool-versions
```

to set the outputs to use in subsequent steps.

**Note**: it would be easier to have these accessible from the environment but due to a security
restriction Node.js -updated environment variables are not available from one step to the other.

Check our examples below.

### Example `.github/workflows/ci.yml`

```yaml
---
"on": push

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: paulo-ferraz-oliveira/parse-tool-versions@v1
        id: tool-versions
      - run: echo ${{steps.tool-versions.outputs.ruby}} # 2.5.3
      - run: echo ${{steps.tool-versions.outputs.npm}} # 8.3.1
      - run: echo ${{steps.tool-versions.outputs.python}} # 3.7.2
```

### Example `.tool-versions`

```bash
ruby 2.5.3 # This is a comment
# This is another comment
npm 8.3.1
python 3.7.2 2.7.15 system # Only 3.7.2 used
```

## Target platforms

It is our intent that the action runs on all GitHub action environments that support `asdf`: at the
moment of this writing, `ubuntu-latest`, `windows-latest`, and `macos-latest` (as well as their
versioned variants).

Open a [bug report](https://github.com/paulo-ferraz-oliveira/parse-tool-versions/issues/new?assignees=&labels=bug&template=bug_report.md)
if that's not the case.

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Readme

We get inspiration for our README's format/content from
[Make a README](https://www.makeareadme.com/).

## Changelog

See the [Releases](../../releases) page.

## Contributing

Check [CONTRIBUTING](CONTRIBUTING.md).

## License

Check [LICENSE](LICENSE.md).
