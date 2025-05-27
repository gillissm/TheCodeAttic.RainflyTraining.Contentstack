# Importing and Exporting Content

## Install the Contentstack CLI

- [https://www.contentstack.com/docs/developers/cli/export-content-using-the-cli]
- [https://www.contentstack.com/docs/developers/content-migration]

### Install CLI

 Taken from [https://www.contentstack.com/docs/developers/cli/install-the-cli]

1. Install node.js version 20 to 22.x. It will not run/install on anything above 22.x.
2. Intall the CLI package via npm

```powershell
npm install -g @contentstack/cli
```

3. Confirm installation by running ```csdx```.

### Basic Usage

The Contentstack CLI's commands are nested into a set of namespaces (or topics) representing specific actions you may want to take.

- **auth** = Perform authentication-related activities
- **cm** = Perform content management activities
- **config** = Perform configuration related activities
- **launch** = Launch related operations
- **plugins** = List installed plugins

To determine the commands under each topic you can use the syntax of: ```csdx TOPIC --help```

To run a command you follow the pattern: ```csdx TOPIC:COMMAND```, include the flag '--help' to find specific parameters and instructions for a given command.

#### Connecting to Contentstack

The first step in taking advantage of the CLI is to authenticate to Contentstack and connect to a Stack.

Authenticating can occur via three forms: username and password combination via prompts, username and password as flags on the command, and finally through OAuth protocol.

You can confirm that login was successful via ```csdx auth:whoami```

#### Tokens

As with development to interact with content you need leverage API tokens. Once tokens are added to the CLI, they will be stored in local storage and will not require re-adding, unless they expire or are manually cleared out. The CLI does not provide a way to generate the API tokens, so you must generate and copy them from the stack via the browser. (See [https://www.contentstack.com/docs/developers/create-tokens/generate-a-management-token])

##### Management Token

The management token is used to provide read-write access to content through the Content Management API (CMA) and is used by most of the CLI commands. When adding a token to the CLI's local storage, you need both the API Token as well as the Stack API token. Because Management API Tokens are only available at time of creation, it is helpful to load them into the CLI for safe storage and later reference even if you do not have plans for using the CLI.

The flags used for adding a management token are:

- "-a or --alias" = this is a friendly name used to reference and identify the token
- "-k or --stack-api-key" = Stack API Token
- "-m or --management" = identifies this as a Management API Token
- "-t or --token" = the Management API Token so be saved into local storage

```powershell
csdx auth:tokens:add -a RainflyAdv  -k STACK_API_TOKEN --management --token MANAGEMENT_API_TOKEN
```

After successfully adding a token, you can review via ```csdx auth:tokens```

##### Delivery Token

In addition to the management token, the delivery token can be added to the CLI local storage. Per the documentation

>
> For CLI commands, you may use a Delivery Token instead of a Management Token. However, Delivery Tokens cannot be used for importing or exporting content.
>

Adding the delivery token is very similar with the addition of an 'environment' flag, identifying which environment the token is associated to.

- "-a or --alias" = this is a friendly name used to reference and identify the token
- "-k or --stack-api-key" = Stack API Token
- "-d or --delivery" = identifies this as a Delivery API Token
- "-t or --token" = the Delivery API Token so be saved into local storage
- "-e or --environment" = name of the environment the token is to be used for

```powershell
csdx auth:tokens:add -a RainflyAdv-Dev  -k STACK_API_TOKEN --delivery -e dev --token DELIVERY_API_TOKEN
```

## Import Content

[https://www.contentstack.com/docs/developers/cli/import-content-using-the-cli]

To import all global fields, content-types, assets (images), and entries perform the following:

1. Ensure the target (new) stack has been [added to the token list](#tokens)
2. Open a command prompt and navigate to the this directory
3. Run the following ```csdx cm:stacks:import --alias TARGET_STACK_ALIAS --config .\content-config.json --branch NAME_OF_TARGET_BRANCH```

## Export Content

If you have made changes to the base project, either through enhanced content, new content types, or other changes these can be exported using the following command:

```csdx cm:stacks:export --alias CURRECT_STACK_ALIAS --config .\content-config.json --branch NAME_OF_BRANCH --module PICK_ONE```

Module options are

- assets
- content-types
- entries
- environments
- extensions
- marketplace-apps
- global-fields
- labels
- locales
- webhooks
- workflows
- custom-roles
- taxonomies
