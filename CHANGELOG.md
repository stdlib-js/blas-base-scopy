# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-09-15)

<section class="features">

### Features

-   [`08f39b4`](https://github.com/stdlib-js/stdlib/commit/08f39b45439d043323ec402647f6b3ea8a5a4a56) - add C `ndarray` implementation for `blas/base/scopy` [(#2913)](https://github.com/stdlib-js/stdlib/pull/2913)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`e039f2a`](https://github.com/stdlib-js/stdlib/commit/e039f2a6f7ff1b4141dba2d0f5a2fb8a03d7a9b8) - consistently use constants instead of hardcoded numbers in unrolled BLAS loops

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`d559fd7`](https://github.com/stdlib-js/stdlib/commit/d559fd70de9ec9b1d72d22543876f380e4062c69) - **refactor:** update include header guards for single precision real packages [(#7710)](https://github.com/stdlib-js/stdlib/pull/7710) _(by Shabareesh Shetty)_
-   [`e039f2a`](https://github.com/stdlib-js/stdlib/commit/e039f2a6f7ff1b4141dba2d0f5a2fb8a03d7a9b8) - **fix:** consistently use constants instead of hardcoded numbers in unrolled BLAS loops _(by Philipp Burckhardt)_
-   [`09c9ceb`](https://github.com/stdlib-js/stdlib/commit/09c9ceb58c6dd23c10f1980094851983c57d693f) - **chore:** fix formatting _(by Athan Reines)_
-   [`51bf6f9`](https://github.com/stdlib-js/stdlib/commit/51bf6f9d2bb027aacecda87e02f957badbc246b0) - **bench:** fix formatting _(by Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`08f39b4`](https://github.com/stdlib-js/stdlib/commit/08f39b45439d043323ec402647f6b3ea8a5a4a56) - **feat:** add C `ndarray` implementation for `blas/base/scopy` [(#2913)](https://github.com/stdlib-js/stdlib/pull/2913) _(by Aman Bhansali, Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines
-   Philipp Burckhardt
-   Shabareesh Shetty

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-27)

<section class="commits">

### Commits

<details>

-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`271f5d5`](https://github.com/stdlib-js/stdlib/commit/271f5d5d3e530225bd82f34efebf5df9a944fdde) - **refactor:** reduce code duplication in `blas/base` level 1 routines [(#2517)](https://github.com/stdlib-js/stdlib/pull/2517) _(by Aman Bhansali)_
-   [`38464b7`](https://github.com/stdlib-js/stdlib/commit/38464b74545be9702eda7bae820c40b56e7e7256) - **docs:** remove comments _(by Athan Reines)_
-   [`f1576ec`](https://github.com/stdlib-js/stdlib/commit/f1576ec5ade09cd8cd034dc0db8c9f5c7d70e3eb) - **docs:** remove comments _(by Athan Reines)_
-   [`3185a5c`](https://github.com/stdlib-js/stdlib/commit/3185a5c265b3959e0b963bd3806a8a75a36099de) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`0244027`](https://github.com/stdlib-js/stdlib/commit/0244027e1e2c0ceb1cd8ae1808196c24fa77b142) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`c1bd97d`](https://github.com/stdlib-js/stdlib/commit/c1bd97d8253e50d4f09190a3ad9ce4396291521a) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`004b244`](https://github.com/stdlib-js/stdlib/commit/004b24478b4af2a51f2e568fe2c1efd8cb5ef59d) - **docs:** update examples to use random/array utilities _(by Athan Reines)_
-   [`efc6522`](https://github.com/stdlib-js/stdlib/commit/efc65220a39e226839fd507b59190d6402bebe61) - **bench:** update benchmarks to use random/array utilities _(by Athan Reines)_
-   [`4ec2cd0`](https://github.com/stdlib-js/stdlib/commit/4ec2cd0d22446eac8818845f4a816d2d4a1bfde2) - **docs:** update copy _(by Athan Reines)_
-   [`5a36be3`](https://github.com/stdlib-js/stdlib/commit/5a36be3f681bf65914abdc58bbc3142533cb2328) - **style:** resolve lint errors _(by Athan Reines)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-04)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`4d943eb`](https://github.com/stdlib-js/stdlib/commit/4d943eb98ed10314432bbfa5a3af3634ea19b969) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`9d552f8`](https://github.com/stdlib-js/stdlib/commit/9d552f8ee1087df295267fd3ddc2e5a04526ed6a) - **docs:** standardize parameter description and update docs _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-11-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-08-30)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

