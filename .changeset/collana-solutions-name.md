---
"@collana-solutions/react-utils": patch
---

The package is now published as `@collana-solutions/react-utils`. The API is unchanged. To migrate, replace the old package with the new one:

```shell
npm uninstall @neolution-ch/react-utils
npm install @collana-solutions/react-utils
```

Then change the imports:

```ts
import { useConstructor } from "@collana-solutions/react-utils";
```

Version 1.1.1 is also published under the new name, with the same code as `@neolution-ch/react-utils` 1.1.1, so changing the name is the whole migration. `@neolution-ch/react-utils` gets deprecated and receives no further releases.
