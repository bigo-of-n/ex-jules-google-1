# 11ty Tailwind Starter

This is a starter project for building websites with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

Content is written in Markdown and processed from the `content` folder. The final static site is generated into the `public` folder.

## Prerequisites

- Node.js (version 16.x or higher recommended)
- pnpm (instead of npm)

## Getting Started

1.  **Clone the repository (if applicable) or download the files.**
    ```bash
    # git clone <repository_url>
    # cd <project_folder>
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

## Development

To start the development server with live reloading for both Eleventy content and Tailwind CSS:

```bash
pnpm dev
```

This command will:
- Clean the `public` directory.
- Start Eleventy in serve and watch mode.
- Start Tailwind CSS in watch mode.

The site will typically be available at `http://localhost:8080`.

## Building for Production

To build the static site for production:

```bash
pnpm build
```

This command will:
- Clean the `public` directory.
- Compile and minify Tailwind CSS.
- Build the Eleventy site.

The generated files will be placed in the `public` folder.

## Available Scripts

-   `pnpm clean`: Removes the `public` directory.
-   `pnpm build:css`: Compiles and minifies `css/tailwind.css` to `public/css/tailwind.css`.
-   `pnpm watch:css`: Watches `css/tailwind.css` for changes and recompiles it.
-   `pnpm build:eleventy`: Builds the Eleventy site.
-   `pnpm watch:eleventy`: Builds the Eleventy site and watches for changes, serving it locally.
-   `pnpm build`: Performs a full clean build (CSS and Eleventy).
-   `pnpm dev`: Starts development servers for both Eleventy and Tailwind CSS with live reloading.
-   `pnpm start`: Builds the site and serves it locally (without live-reloading for file changes post-build).

## Project Structure

-   `content/`: Source files for your site (Markdown, Nunjucks, etc.).
-   `_includes/`: Layouts and reusable template partials for Eleventy.
-   `css/`: Source CSS files (e.g., `tailwind.css` with Tailwind directives).
-   `public/`: The generated static output folder.
-   `.eleventy.js`: Eleventy configuration file.
-   `tailwind.config.js`: Tailwind CSS configuration file.
-   `postcss.config.js`: PostCSS configuration file (used by Tailwind).
-   `package.json`: Project metadata and npm scripts.

## Customization

-   **Eleventy:** Modify `.eleventy.js` to change input/output directories, add collections, filters, shortcodes, etc.
-   **Tailwind CSS:** Modify `tailwind.config.js` to customize your design tokens (colors, fonts, spacing) and `css/tailwind.css` for custom CSS or additional Tailwind directives.
-   **Content:** Add your Markdown or HTML files to the `content` directory.
-   **Layouts:** Create or modify Nunjucks templates in the `_includes` folder.
