# Interactive Map Component User Manual

## Introduction

The Interactive Map Component is a reusable and embeddable web component that displays an interactive map of Germany. It highlights various locations, each representing a different project. The map shows metadata for each project location, including the project name, technology stack used, project duration, and other extendable fields. The component is designed using React.js and utilizes Leaflet for map functionality. The project data is stored and managed in JSON format. The component can function both as a standalone tool and be easily embedded into other websites. The entire project is hosted on GitHub, making it accessible for direct use and contributions from the GitHub repository.

## Installation

To use the Interactive Map Component, follow these steps:

1. Clone the GitHub repository: `git clone https://github.com/your-username/interactive-map-component.git`
2. Navigate to the project directory: `cd interactive-map-component`
3. Install the required dependencies: `npm install`

## Usage

### Standalone Tool

To use the Interactive Map Component as a standalone tool, follow these steps:

1. Open the `index.html` file in a web browser.
2. The interactive map of Germany will be displayed, with project markers representing different locations.
3. Click on a project marker to view the project metadata, including the project name, technology stack used, project duration, and other extendable fields.

### Embedding into Other Websites

To embed the Interactive Map Component into other websites, follow these steps:

1. Copy the `index.html`, `styles.css`, and `main.js` files into your website project directory.
2. Add the following HTML code to the desired location in your website:

```html
<div id="interactive-map"></div>
<script src="main.js"></script>
```

3. Customize the project data by editing the `projects.json` file. Each project should have the following properties: `name`, `technology`, `duration`, `latitude`, `longitude`, and `extendableFields`.
4. Customize the map appearance by editing the `styles.css` file.
5. Open your website in a web browser, and the embedded Interactive Map Component will be displayed.

## Contributing

If you would like to contribute to the Interactive Map Component project, follow these steps:

1. Fork the GitHub repository: `https://github.com/your-username/interactive-map-component.git`
2. Make your desired changes to the codebase.
3. Create a new branch for your changes: `git checkout -b my-changes`
4. Commit and push your changes to your forked repository.
5. Create a pull request to the original repository, describing your changes and why they should be merged.

## Support

For any issues or questions regarding the Interactive Map Component, please open an issue on the GitHub repository: `https://github.com/your-username/interactive-map-component/issues`

## License

The Interactive Map Component is released under the MIT License. See the `LICENSE` file for more information.