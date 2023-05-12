# Portal Speedrun Guide
###### Portal (2007)

## Contributing

In order to contribute, you at least need a [GitHub](https://github.com) account. This is a requirement
so that you can create a fork of the repository, add your changes, and submit a pull request.

From there, you have a few different options for contributing.

### Development

The easiest way to contribute if you are not familiar with `git` or don't want to install anything is to use
the [remote development](#Remote-Development-with-StackBlitz).

There are a few important files and directories to know about when contributing;
- `docs` - This is where all the guide content is stored, aside from assets.
- `static` - This is where images, videos, and other assets are stored.
- `config.yml` - This is the configuration file that stores the guide's metadata, layout information, et cetera.
- `.backend` - This folder houses all Docusaurus configuration and build files. **Do not modify anything in here unless you know what you are doing.**

#### Remote Development with StackBlitz
At the time of writing, this is behaving a bit strangely. If you are having issues, please try the [local development](#Local-Development) method.

You can use [StackBlitz](https://stackblitz.com/) web-based editor and link your GitHub account to it. From here, you will
have access to a web version of [Visual Studio Code](https://code.visualstudio.com/), where you can edit the files and
see a preview update in real time. 

1. In the top right, click `Fork` to create a fork of the repository. This will create a copy of the repository in your account.
Alternatively, you can [click here to create a fork](https://github.com/speedrun-guide/portal/fork).

2. Visit `https://pr.new/github/<your username>/<name of fork>` to open the StackBlitz web editor with your fork.
For example, if your username is `speedrun-guide` and your fork is named `portal`, you would visit `https://pr.new/github/speedrun-guide/portal`.

3. From here, you can edit the files and see a preview update in real time. When you're done, you can push the changes
to your fork, then [submit a pull request](https://github.com/speedrun-guide/portal/pulls). You can also create a pull request
directly from within the editor by navigating to `Source Control` on the left side.

#### Local Development

Local development can have a few benefits, but also a few more steps. Those benefits
include faster preview and build times, as well as the ability to use your own editor, like [WebStorm](https://www.jetbrains.com/webstorm/) or [Vim](https://www.vim.org/).

1. Clone the project using `git clone https://github.com/speedrun-guide/portal`. If you don't have `git` installed,
learn how to [here](https://docs.github.com/en/get-started/quickstart/set-up-git).


2. Install [Node.js](https://nodejs.org/en/download).


3. Install dependencies by running `npm install` in the project directory in a terminal.


4. Run `npm run start` in the project directory to start the development server.


5. `localhost` should automatically open in your browser and provide you a live updating preview.


Once you've followed all of these steps, you can edit the guide and see your changes in real time.


### Pull Request

Once you've made your changes, you can [submit a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to the main repository. This will allow the verified maintainers
to review your changes and merge them into the main repository.

Please write meaningful PR messages describing all the changes you've made. If you are adding a new section, please
include a description of the section and what it covers.

**PRs that modify anything in `.backend` are incredibly likely to be rejected, unless you have a very, very good reason.**