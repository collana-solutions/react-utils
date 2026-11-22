# @collana-solutions/react-utils

## 1.1.2

### Patch Changes

- [#15](https://github.com/collana-solutions/react-utils/pull/15) [`42d623a`](https://github.com/collana-solutions/react-utils/commit/42d623a376ff7538f7b87a4fe8fce50d1ea821ee) Thanks [@neotrow](https://github.com/neotrow)! - The package is now published as `@collana-solutions/react-utils`. The API is unchanged. To migrate, replace the old package with the new one:
  
  ```shell
  npm uninstall @neolution-ch/react-utils
  npm install @collana-solutions/react-utils
  ```
  
  Then change the imports:
  
  ```ts
  import { useConstructor } from "@collana-solutions/react-utils";
  ```
  
  Version 1.1.1 is also published under the new name, with the same code as `@neolution-ch/react-utils` 1.1.1, so changing the name is the whole migration. `@neolution-ch/react-utils` gets deprecated and receives no further releases.

- [#14](https://github.com/collana-solutions/react-utils/pull/14) [`e76c0df`](https://github.com/collana-solutions/react-utils/commit/e76c0dfc6d04a3d52a373b30ad007fdf5877e92d) Thanks [@andreas-bundi](https://github.com/andreas-bundi)! - Add LICENSE file

## [1.1.1] - 2026-03-06

### Fixed

- types resolutions.

## [1.1.0] - 2026-03-06

### Fixed

- `useConstructor` hook using state instead of ref for React 19 compatibility.

### Added

- `useConstructor` hook that executes a provided callback only once during the component's lifecycle, similar to a constructor.

[1.1.1]: https://github.com/neolution-ch/react-utils/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/neolution-ch/react-utils/compare/1.1.0-rc.0...1.1.0
