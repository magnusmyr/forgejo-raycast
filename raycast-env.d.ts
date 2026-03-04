/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Forgejo URL - Base URL of your Forgejo instance */
  "instanceUrl": string,
  /** API Token - Forgejo API access token */
  "apiToken": string,
  /** Username - Your Forgejo username */
  "username": string,
  /** SSH Clone URL Template - Template for SSH clone URLs. Use {owner} and {repo} as placeholders. */
  "cloneUrlTemplate": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `list-repos` command */
  export type ListRepos = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `list-repos` command */
  export type ListRepos = {}
}

