<h1>Earthdata Search Components:<br>Geo Utils</h1>

edsc-geo is a utility library for working with spherical
coordinates, polygons, and arcs in Javascript.

The edsc-geo plugin was developed as a component of
[Earthdata Search](https://github.com/nasa/earthdata-search).

## Installation

    npm install @edsc/geo-utils

## Usage

### Available methods

| Method | Description | Input | Output |
| :----: | ----------- | ----- | :----: |
| dividePolygon | Given a list of latlngs constituting a polygon, returns an object: `{interiors: [...], boundaries: [...]}` | Array of latlngs | `{interiors: [...], boundaries: [...]}`
| gcInterpolate | Given two points, returns their midpoint along the shortest great circle between them.  The two points may not be antipodal, since such a midpoint would be undefined | Two points, objects with lat/lng keys | Object with lat/lng keys
| getShape | Takes an array of lat/lng pairs and returns array of objects with lat/lng keys | Array of lat/lng pairs `['10,0','20,10']` | Array of objects with lat/lng keys `[{ lat: 0, lng: 10 }, { lat: 10, lng: 20 }]`
| makeCounterClockwise | Ensures that latlngs is counterclockwise around its smallest area | Array of latlngs | Array of latlngs
| mbr | Finds the minimum bounding rectangle of the provided spatial | Spatial object containing `boundingBox`, `circle`, `point` or `polygon` spatial | `{ swLat, swLng, neLat, neLng }`
| splitListOfPoints | Splits a string of points on every other comma | `'10,0,20,10'` | `['10,0','20,10']`

## Contributing

See CONTRIBUTING.md

## License

> Copyright © 2007-2014 United States Government as represented by the Administrator of the National Aeronautics and Space Administration. All Rights Reserved.
>
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
>    http://www.apache.org/licenses/LICENSE-2.0
>
>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
