import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
class InteractiveMap extends React.Component {
  componentDidMount() {
    // Initialize the map
    const map = L.map('interactive-map').setView([51.1657, 10.4515], 6);
    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
    // Add project markers
    this.props.projects.forEach((project) => {
      const marker = L.marker([project.latitude, project.longitude]).addTo(map);
      marker.bindPopup(`
        <b>${project.name}</b><br>
        Technology Stack: ${project.technology}<br>
        Project Duration: ${project.duration}<br>
        ${project.extendableFields}
      `);
    });
  }
  render() {
    return <div id="interactive-map"></div>;
  }
}
// Fetch project data from JSON file
fetch('projects.json')
  .then((response) => response.json())
  .then((data) => {
    ReactDOM.render(<InteractiveMap projects={data} />, document.getElementById('interactive-map'));
  });